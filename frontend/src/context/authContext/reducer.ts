import { AuthActions, AuthState } from "@/types/auth-context";

export const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

export function authReducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
