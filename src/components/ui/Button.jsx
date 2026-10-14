export default function Button({
  children,
  className = "",
  icon: Icon,
  iconSize = 16,
  type = "button",
  variant = "primary",
  ...buttonProps
}) {
  const variantClass = {
    primary: "button",
    outline: "outline-button",
    unstyled: "",
  }[variant];
  const classes = [variantClass, className].filter(Boolean).join(" ");

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
      {Icon && <Icon size={iconSize} />}
    </button>
  );
}
