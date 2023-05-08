import { createSelector, createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface userState {
    message: string;
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    id: string;
    error: string;
    isLoggedIn: boolean;
}

const initialState: userState = {
    message: "",
    email: "",
    firstName: localStorage.getItem("firstName") || '',
    lastName: localStorage.getItem("lastName") || '',
    userName: localStorage.getItem("userName") || '',
    id: "",
    error: "",
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
}

export const getUser = createAsyncThunk('user/get', async () => {
    const token = localStorage.getItem("token")
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: {
            'Authorization': 'Bearer' + token,
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addProfile: (state, action: PayloadAction<string>) => {
            state.email = localStorage.getItem("email") || action.payload
            state.firstName = localStorage.getItem("firstName") || action.payload
            state.lastName = localStorage.getItem("lastName") || action.payload
            state.userName = localStorage.getItem("userName") || action.payload
            state.id = localStorage.getItem("id") || action.payload
        },
        clearProfile: (state) => {
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.userName = ""
            state.id = ""
            state.isLoggedIn = false
            localStorage.clear()
        }
    },
    extraReducers:{
        [getUser.pending.type]: (state, action) => { 
            state.isLoggedIn = false;
        },
        [getUser.fulfilled.type]: (state, {payload:{message, body :{email, firstName, lastName, userName, id, error}}}) => {
            if(error){
                state.error = error;
            } else {
                state.isLoggedIn = true;
                state.message = message;
                state.email = email;
                state.firstName = firstName;
                state.lastName = lastName;
                state.userName = userName;
                state.id = id;
                
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('message', message)
                localStorage.setItem('email', email)
                localStorage.setItem('firstName', firstName)
                localStorage.setItem('lastName', lastName)
                localStorage.setItem('userName', userName)
                localStorage.setItem('id', id)
            }
        },
        [getUser.rejected.type]: (state, action) => {         
            state.isLoggedIn = false;
            state.error = "An error occurred while fetching user.";
        },
    }
})

export const {addProfile, clearProfile} = userSlice.actions;
export const selectIsLoggedIn = createSelector(
    (state: RootState) => state.user.isLoggedIn,
    (isLoggedIn) => isLoggedIn
);

export default userSlice.reducer;