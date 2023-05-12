import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface signState {
    message: string
    error: string
    succeeded: boolean
    loading: boolean
}

interface signUpBody {
    firstName: string
    lastName: string
    userName: string
    email: string,
    password: string
}

const initialState: signState = {
    message: '',
    error: '',
    succeeded: false,
    loading: false,
}

export const signUp = createAsyncThunk('sign/signUp', async (body: signUpBody) => {
    const response = await fetch('http://localhost:3001/api/v1/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body),
    })
    if (!response.ok) {
        const data = await response.json()     
        const error = data.message
        throw new Error(error)
    }
    const data = await response.json()
    return data
})

const signSlice = createSlice({
    name: 'sign',
    initialState,
    reducers:{
        setSucceeded: (state, action: PayloadAction<boolean>) => {
            state.succeeded = action.payload
        } 
    },
    extraReducers:{
    [signUp.pending.type]: (state) => {
        state.loading = true
    },
    [signUp.fulfilled.type]: (state, {payload:{message}}) => {
        state.loading = false
        state.succeeded = true
        state.message = message
    },
    [signUp.rejected.type]: (state, action) => {
        state.loading = false
        state.error = action.error.message
    }
    }
})

export const {setSucceeded} = signSlice.actions
export default signSlice.reducer