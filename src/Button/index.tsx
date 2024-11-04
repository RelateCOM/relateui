import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IButtonProps } from "../interfaces/Button.interface";
import colorVariants from "./colorsVariants";
import sizeVariants from "./sizeVariants";

export const Button: FC<IButtonProps> = ({
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
    "font-bold shadow-md active:scale-95 active:shadow-lg duration-200",
    sizeVariants[size as keyof typeof sizeVariants],
    colorVariants[color as keyof typeof colorVariants],
    disabled && "opacity-50 cursor-not-allowed",
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
