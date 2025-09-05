import { motion } from "motion/react";
import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: string;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  icon,
  type,
  ...props
}) => {
  const base =
    "flex items-center gap-1 px-4 py-2 rounded font-medium transition-colors";
  const variants = {
    primary: "bg-#0050e6 text-white hover:bg-blue-600",
    secondary: "bg-gray text-white hover:bg-gray-500",
  };

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <div className={icon} />}
      {children}
    </motion.button>
  );
};
