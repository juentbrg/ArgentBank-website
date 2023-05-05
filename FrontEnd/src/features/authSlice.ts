import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    message: string;
    token: string;
    error: string;
    loading: boolean;
}

interface SignInBody {
    email: string;
    password: string;
}

export const signInUser = createAsyncThunk('auth/login', async (body: SignInBody) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    console.log(data)
    return data
})

const initialState: AuthState = {
    message: "",
    token: "",
    error: "",
    loading: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addToken: (state, action: PayloadAction<string>) => {
            state.token = localStorage.getItem("token") || action.payload;
        },
        logout: (state) => {
            state.token = "";
            state.loading = false;
            state.error = "";
            localStorage.clear();
        }
    },
    extraReducers:{
        [signInUser.pending.type]: (state, action) => {     
            state.loading = true;
        },
        [signInUser.fulfilled.type]: (state, {payload:{message, body :{token, error}}}) => {
            state.loading = false;
            if(error){
                state.error = error;
            } else {
                state.message = message;
                state.token = token;

                localStorage.setItem('message', message)
                localStorage.setItem('token', token)
            }
        },
        [signInUser.rejected.type]: (state, action) => {         
            state.loading = false;
            state.error = "An error occurred while logging in.";
        },
    }
})

export const {addToken, logout} = authSlice.actions;
export default authSlice.reducer;
