"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { signupSchema } from "../schemas/signupSchema";
import { apiRequest } from "../../lib/api";

const inputClass =
  "w-full rounded-lg border border-[#d7d0c9] bg-white px-3.5 py-3 text-[#24222b] outline-[#5a3c8a]";

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });
  const onSubmit = async (values) => {
    setApiError("");
    setSubmitted(false);
    setIsSubmitting(true);
    try {
      await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
      });
      setSubmitted(true);
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="m-auto w-full max-w-[460px] self-center px-7 py-12 max-[720px]:px-6">
      <p className="font-mono text-[.71rem] font-medium uppercase tracking-[.13em] text-[#5a3c8a]">
        Create your space
      </p>
      <h2 className="my-2.5 font-display text-[2.65rem] tracking-[-.04em]">
        Welcome in.
      </h2>
      <p className="mb-7 text-[#686371]">
        A few details and you’re ready to share on your terms.
      </p>
      {submitted && (
        <p className="rounded-lg bg-[#e6f6eb] p-3 text-[.9rem] text-[#206638]">
          Your account was created. You can now log in.
        </p>
      )}
      {apiError && (
        <p className="rounded-lg bg-[#fce8eb] p-3 text-[.9rem] text-[#ae3043]">
          {apiError}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label
          className="mb-1.5 mt-[18px] block text-[.87rem] font-semibold"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className={inputClass}
          id="username"
          autoComplete="username"
          {...register("username")}
        />
        {errors.username && (
          <p className="mt-1 text-[.78rem] text-[#ae3043]">
            {errors.username.message}
          </p>
        )}
        <label
          className="mb-1.5 mt-[18px] block text-[.87rem] font-semibold"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className={inputClass}
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-[.78rem] text-[#ae3043]">
            {errors.email.message}
          </p>
        )}
        <label
          className="mb-1.5 mt-[18px] block text-[.87rem] font-semibold"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className={`${inputClass} pr-12`}
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            {...register("password")}
          />
          <button
            className="absolute right-2.5 top-1/2 grid -translate-y-1/2 place-items-center p-1 text-[#686371] hover:text-[#5a3c8a]"
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff size={19} aria-hidden="true" />
            ) : (
              <Eye size={19} aria-hidden="true" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-[.78rem] text-[#ae3043]">
            {errors.password.message}
          </p>
        )}
        <button
          className="mt-[26px] w-full rounded-full bg-[#34204e] px-5 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </button>
      </form>
      <p className="mt-[22px] text-[.9rem] text-[#686371]">
        Already have an account?{" "}
        <Link
          className="font-semibold text-[#5a3c8a] underline underline-offset-3"
          href="/auth/Login"
        >
          Log in
        </Link>
      </p>
    </section>
  );
}
