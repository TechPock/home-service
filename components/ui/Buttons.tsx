import Link from "next/link";
import { ReactNode, CSSProperties } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
  style?: CSSProperties;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
  onClick,
  arrow = true,
  style,
}: PrimaryButtonProps) {
  return (
    <Link href={href} className={`btn-primary ${className}`} onClick={onClick} style={style}>
      {children}
      {arrow && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7L7 7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
}

export function SecondaryButton({
  href,
  children,
  className = "",
  onClick,
  arrow = true,
}: SecondaryButtonProps) {
  return (
    <Link href={href} className={`btn-secondary ${className}`} onClick={onClick}>
      {children}
      {arrow && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7L7 7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
