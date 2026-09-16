"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) });
  return <section className="auth-form-wrap"><p className="eyebrow">Welcome back</p><h2>Good to see you.</h2><p className="form-intro">Log in to return to your quiet corner.</p>{submitted && <p className="form-success">Your details look good. Authentication can now be connected to your backend.</p>}<form onSubmit={handleSubmit(() => setSubmitted(true))} noValidate>
    <label className="form-label" htmlFor="email">Email address</label><input className="form-input" id="email" type="email" autoComplete="email" {...register("email")} />{errors.email && <p className="form-error">{errors.email.message}</p>}
    <label className="form-label" htmlFor="password">Password</label><input className="form-input" id="password" type="password" autoComplete="current-password" {...register("password")} />{errors.password && <p className="form-error">{errors.password.message}</p>}
    <button className="button button-primary form-submit" type="submit">Log in</button>
  </form><p className="form-footer">New to Confesso? <Link href="/auth">Create an account</Link></p></section>;
}
