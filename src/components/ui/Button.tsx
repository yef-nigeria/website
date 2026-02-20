import React from "react";
import clsx from "clsx";

type ButtonProps = {
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  bg?: string;
  hover?: string;
  text?: string;
  rounded?: string;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  as = "button",
  href,
  type = "button",
  children = "Click",
  className = "",
  loading = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyles = clsx(
    "inline-flex items-center justify-center transition duration-300 ease-in-out font-medium focus:outline-none",
    {
      "opacity-50 cursor-not-allowed": disabled || loading,
    },
    className
  );

  const content = loading ? (
    <span className="animate-pulse">Processing...</span>
  ) : (
    children
  );

  if (as === "a") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={baseStyles}
        aria-disabled={disabled || loading}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled || loading}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
