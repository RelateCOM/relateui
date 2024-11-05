import { FC } from "react";
import { twMerge } from "tailwind-merge";
import colorVariants from "./colorsVariants";
import sizeVariants from "./sizeVariants";
import { IButtonProps } from "../../interfaces/Button.interface";

const Button: FC<IButtonProps> = ({
  type = "button",
  label,
  onClick,
  color = "primary",
  size = "md",
  disabled = false,
  className = "",
  style = {},
  children,
}) => {
  const buttonClasses = twMerge(
    "rounded-xl font-bold shadow-md duration-200",
    sizeVariants[size as keyof typeof sizeVariants],
    !disabled && colorVariants[color as keyof typeof colorVariants],
    disabled && "bg-base-100 text-base-content opacity-50 cursor-not-allowed",
    className
  );
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label || children}
    </button>
  );
};

export default Button;
