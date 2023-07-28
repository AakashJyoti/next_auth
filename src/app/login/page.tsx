"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    console.log("Signup called");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>

      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <button
        onClick={handleLogin}
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login here
      </button>

      <Link href={"/signup"}>Visit signup page</Link>
    </div>
  );
}