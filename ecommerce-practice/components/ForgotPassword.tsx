// app/register/page.js
"use client";
import { useState, FormEvent } from "react";
import { forgotPassword } from "@/actions/auth";

export default function ForgotPassword() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await forgotPassword(formData);

    if (result.status === 'success') {
      alert("Password reset link sent to your email")
    } else {
      setError(result.status)
    }

    setLoading(false)
  };

  return (
    <div className="min-h-screen bg-[#1a1f2b] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md p-5"
      >
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
        Enter Email:
        </h2>

        <div className="w-full">
          <label htmlFor="email" className="text-white mb-1 block">
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full p-3 mb-4 bg-[#2a2f3b] border border-[#3a3f4b] rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          aria-busy={loading}
        >
          {loading ? "Sending..." : "Send Email"}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
}