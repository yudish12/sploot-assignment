import { ApiResponse } from "@/types/globals";

export const login = async (
  email: string,
  password: string
): Promise<ApiResponse> => {
  console.log(process.env.NEXT_PUBLIC_API_URL + "auth/login");
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await resp.json();
  console.log(response);
  return response;
};

export const checkuser = async (authToken: string): Promise<ApiResponse> => {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  const response = await resp.json();
  return response;
};

export const setCookies = async (user_data: Record<string, any>) => {
  const cookieRes = await fetch("/api/set-cookies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_data,
    }),
  });
  if (!cookieRes.ok) {
    throw new Error("Something went wrong");
  }
};
