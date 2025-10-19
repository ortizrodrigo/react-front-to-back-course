import type { ReactNode } from "react";
function Button({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}: {
  children: ReactNode;
  version?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
  isDisabled?: boolean;
}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
