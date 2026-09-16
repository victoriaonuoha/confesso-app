"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/signupSchema";

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signupSchema) });
  return <section className="auth-form-wrap"><p className="eyebrow">Create your space</p><h2>Welcome in.</h2><p className="form-intro">A few details and you’re ready to share on your terms.</p>{submitted && <p className="form-success">Your account details look good. You can now continue to Confesso.</p>}<form onSubmit={handleSubmit(() => setSubmitted(true))} noValidate>
    <label className="form-label" htmlFor="name">Display name</label><input className="form-input" id="name" autoComplete="name" {...register("name")} />{errors.name && <p className="form-error">{errors.name.message}</p>}
    <label className="form-label" htmlFor="email">Email address</label><input className="form-input" id="email" type="email" autoComplete="email" {...register("email")} />{errors.email && <p className="form-error">{errors.email.message}</p>}
    <label className="form-label" htmlFor="password">Password</label><input className="form-input" id="password" type="password" autoComplete="new-password" {...register("password")} />{errors.password && <p className="form-error">{errors.password.message}</p>}
    <label className="form-label" htmlFor="confirmPassword">Confirm password</label><input className="form-input" id="confirmPassword" type="password" autoComplete="new-password" {...register("confirmPassword")} />{errors.confirmPassword && <p className="form-error">{errors.confirmPassword.message}</p>}
    <button className="button button-primary form-submit" type="submit">Create account</button>
  </form><p className="form-footer">Already have an account? <Link href="/auth/Login">Log in</Link></p></section>;
}
