
interface AuthState {
    isAuthenticated: boolean;
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
  };
  
  const authReducer = (state: AuthState = initialState, action: any): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isAuthenticated: true };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;