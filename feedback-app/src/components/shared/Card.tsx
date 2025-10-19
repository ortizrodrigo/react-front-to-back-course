import type { ReactNode } from "react";

function Card({ children, reverse = false }: { children: ReactNode; reverse?: boolean }) {
  return <div className={`card ${reverse ? "reverse" : ""}`}>{children}</div>;
}

export default Card;
