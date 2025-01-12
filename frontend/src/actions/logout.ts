"use server";

import { cookies } from "next/headers";

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("authToken");
    cookieStore.delete("user");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
};
