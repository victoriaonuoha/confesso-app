"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signupSchema } from "../schemas/signupSchema";
import FloatingLabelInput from "../components/FloatingLabelInput";

export default function SignUpPage() {
  // const {
  //   register,
  //   handlesubmit,
  //   formstate: { errors },
  // } = useForm({ resolver: yupResolver(signupSchema) });
  // const onSubmit = (data) => {
  //   console.log("Data sumitted", data);
  // };
  // return (
  //   <div className="w-full flex items center justify-center">
  //     <form action="">
  //       <FloatingLabelInput
  //         id="name"
  //         label="Username"
  //         type="text"
  //         register={register("name")}
  //         error={errors.name?.message} autuoComplete="name"
  //       />
  //     </form>
  //   </div>
  // );
}
