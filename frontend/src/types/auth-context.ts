export interface AuthState {
  user: {
    name: string;
    email: string;
  } | null;
  token: string | null;
  isLoggedIn: boolean;
}

export type AuthActions =
  | {
      type: "LOGIN";
      payload: { user: { name: string; email: string }; token: string };
    }
  | { type: "LOGOUT" };
