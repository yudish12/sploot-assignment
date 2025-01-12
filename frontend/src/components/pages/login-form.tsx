"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { LoginFields } from "@/types/globals";
import { loginValidator } from "@/utils/validators";
import { login, setCookies } from "@/api-functions/auth";
import { useRouter } from "next/navigation";
import { useAuthDispatch } from "@/context/authContext/hooks";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFields>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const router = useRouter();

  const dispatch = useAuthDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { valid, message } = loginValidator(email, password);

    if (!valid) {
      toast.error(message);
      return;
    }

    setLoading(true);
    try {
      if (!email || !password) {
        toast.error("Please fill all the fields");
        return;
      }

      const resp = await login(email, password);
      console.log(resp);
      if (resp.success) {
        const cookieRes = await setCookies(resp.data);
        console.log(cookieRes);
        dispatch({
          type: "LOGIN",
          payload: {
            user: {
              name: resp.data.name,
              email: resp.data.email,
            },
            token: resp.data.token,
          },
        });
        toast.success("Login successful");
        router.push("/blogs");
      } else {
        toast.error(resp.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-1/2 px-10 bg-white">
        <h1 className="text-4xl font-bold text-primary">
          Welcome To My Assignment
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          Landing page for the logged out user
        </p>
        <p className="mt-2 text-sm text-gray-500">Please login to continue.</p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 text-sm text-gray-700"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              value={email}
              type="email"
              disabled={loading}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full border disabled:cursor-not-allowed border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <Input
              id="password"
              value={password}
              disabled={loading}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember-me"
                className="rounded border-gray-300"
              />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <Link href="#" className="text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>
          <Button disabled={loading} type="submit" className="w-full ">
            Login
          </Button>
        </form>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-1/2 bg-gray-100">
        <Image
          src="/admin-login.svg"
          alt="Biker"
          width={400}
          height={400}
          className="h-auto"
        />
      </div>
    </div>
  );
};
export default LoginForm;
