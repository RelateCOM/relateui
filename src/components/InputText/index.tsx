import { FC } from "react";
import { IInputTextProps } from "../../interfaces/InputText.interface";
import { twMerge } from "tailwind-merge";
import sizeVariants from "./sizeVariants";
import colorVariants from "./colorVariants";

const InputText: FC<IInputTextProps> = ({
  value,
  color = "primary",
  size = "md",
  onChange,
  className = "",
  style = {},
  disabled = false,
  placeholder = "",
}) => {
  const inputClasses = twMerge(
    "bg-base-100 rounded-xl shadow-md duration-200",
    sizeVariants[size as keyof typeof sizeVariants],
    colorVariants[color as keyof typeof colorVariants],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  return (
      <input
        className={inputClasses}
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        style={style}
      />
  );
};

export default InputText;
