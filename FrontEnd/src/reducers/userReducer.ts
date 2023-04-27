interface UserState {
    email: string;
    password: string;
  }
  
  const initialState: UserState = {
    email: '',
    password: '',
  };
  
  const userReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  