import * as yup from "yup";

export const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain one number")
    .matches(
      /[!@#$%*?&]/,
      "Password must contain at least one special character"
    ),
});
