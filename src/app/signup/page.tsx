"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type UserType = {
  email: string;
  password: string;
  username: string;
};

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState<UserType>({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const { statusText, status, data } = await axios.post(
        "/api/users/signup",
        user
      );

      if (statusText === "Created" && status === 201) {
        toast.success("Signup Successful");
        router.push("/login");
      } else {
        toast.error(
          `Signup failed, statusText: ${statusText}, status: ${status}`
        );
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp</h1>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <button
        onClick={handleSignUp}
        disabled={
          user.email.length &&
          user.password.length &&
          user.username.length &&
          !loading
            ? false
            : true
        }
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white text-black font-medium disabled:bg-black disabled:text-white"
      >
        {loading ? "Signing up..." : "Signup here"}
      </button>

      <Link href={"/login"}>Visit login page</Link>

      <Toaster />
    </div>
  );
}
