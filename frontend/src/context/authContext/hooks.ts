import { useContext } from "react";
import { AuthContext } from ".";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context.state;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context.dispatch;
};
