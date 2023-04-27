import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string, password: string }, thunkAPI) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const data = await response.json(); 
      return thunkAPI.rejectWithValue(data);
    }

    const data = await response.json();    
    console.log(data);
    
    return data;
  }
);