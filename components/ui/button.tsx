import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const mergedClass = className ? `${baseClass} ${className}` : baseClass;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={mergedClass}>
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={mergedClass}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClass}>
      {children}
    </Link>
  );
}
