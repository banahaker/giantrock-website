import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-block font-semibold py-2.5 px-6 transition-all duration-150 text-center tracking-wide text-sm uppercase border-2";

  const variants = {
    primary:
      "bg-secondary-500 border-secondary-600 text-white hover:bg-secondary-600 hover:border-secondary-700",
    secondary:
      "bg-primary-500 border-primary-600 text-white hover:bg-primary-600 hover:border-primary-700",
    accent:
      "bg-accent-500 border-accent-600 text-white hover:bg-accent-600 hover:border-accent-700",
    outline:
      "border-primary-900 bg-transparent text-primary-900 hover:bg-primary-900 hover:text-white",
    outlineWhite:
      "border-white bg-transparent text-white hover:bg-white hover:text-primary-900",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  // External link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Button element
  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
