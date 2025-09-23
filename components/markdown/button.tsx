import type { ComponentProps } from "react";
import Link from "next/link";
import { Button as ButtonComponent } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type ButtonProps = ComponentProps<"button"> & {
  href?: string;
  external?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  bgColor?: string;
};

export default function Button({
  href,
  children,
  external = false,
  className,
  color = "primary",
  bgColor = "bg-red-500",
  ...props
}: ButtonProps) {
  if (!href) return (
    <ButtonComponent
        {...props}
        className={cn(className, color === "primary" && bgColor === "primary" && "bg-primary text-white hover:bg-primary/80")}
    > 
      {children}
    </ButtonComponent>
  );
  return (
    <Link href={href} target={external ? "_blank" : "_self"} rel={external ? "noopener noreferrer" : undefined} 
    className={cn(className)}>
      <ButtonComponent
        className={cn(className, color === "primary" && bgColor === "primary" && "bg-primary text-white hover:bg-primary/80")}
        {...props}
      > 
        {children}
      </ButtonComponent>
    </Link>
  );
}