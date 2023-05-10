import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UserNameState {
    userName: string
    message: string
    error: string
    succeeded: boolean
    loading: boolean
}

interface UserChangeBody {
    userName: string
}

const initialState: UserNameState = {
    userName: '',
    message: '',
    error: '',
    succeeded: true,
    loading: false,
}

export const changeUserName = createAsyncThunk('userName/change', async (body: UserChangeBody) => {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer' + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    if (!response.ok) {
        const data = await response.json()
        const error = data.message
        throw new Error(error);
    }
    const data = await response.json()
    return data    
})

const userNameSlice =  createSlice({
    name: 'userName',
    initialState,
    reducers:{
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = localStorage.getItem('userName') || action.payload
        },
        setSucceeded: (state, action: PayloadAction<boolean>) => {
          state.succeeded = action.payload
        },
    },
    extraReducers:{
        [changeUserName.pending.type]: (state, action) => {
            state.loading = true
        },
        [changeUserName.fulfilled.type]: (state, {payload:{message, body :{userName}}}) => {
            state.loading = false
            state.succeeded = true
            state.message = message
            state.userName = userName

            localStorage.setItem('userName', userName)
        },
        [changeUserName.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
    }
})

export const {setUserName, setSucceeded} = userNameSlice.actions;
export default userNameSlice.reducer