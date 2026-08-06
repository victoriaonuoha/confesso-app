import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FloatingLabelInput({
  label,
  type = "text",
  id,
  register,
  error,
  autoComplete,
  showPasswordToggle = false, // ✅ new prop
}) {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type dynamically
  const inputType =
    showPasswordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="relative mb-4">
      <input
        {...register}
        type={inputType}
        id={id}
        placeholder=" "
        autoComplete={autoComplete}
        className={`block px-2.5 pb-2.5 pt-5 w-full text-sm text-[#354E96]
        bg-white rounded-lg border appearance-none focus:outline-none focus:ring-0 peer
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-600"
        }`}
      />
      <label
        htmlFor={id}
        className="absolute text-[#6984d3] duration-300 transform
        -translate-y-4 scale-75 top-2 z-10 bg-white px-1
        origin-left left-2.5 peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75
        peer-focus:-translate-y-4"
      >
        {label}
      </label>

      {/* Eye toggle button */}
      {showPasswordToggle && type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
