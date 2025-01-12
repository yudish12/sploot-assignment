"use client";

import React, { createContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "./reducer";
import { AuthActions, AuthState } from "@/types/auth-context";

// Define the AuthContext type
interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // On initial load, check if the user cookie exists and update the state
  useEffect(() => {
    const userCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="))
      ?.split("=")[1];
    if (userCookie) {
      try {
        const user = JSON.parse(decodeURIComponent(userCookie));
        dispatch({
          type: "LOGIN",
          payload: { user, token: user.token },
        });
      } catch (error) {
        console.error("Failed to parse user cookie:", error);
      }
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
