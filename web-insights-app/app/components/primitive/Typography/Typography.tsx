import type { ReactNode } from "react";
import { cn } from "app/lib/utils";

export type Tag =
  | "label"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type Variant = "bold" | "normal" | "light";

type TypographyProps = {
  as?: Tag;
  className?: string;
  variant?: Variant;
  children: ReactNode;
};

export function Typography({
  as: Tag = "p",
  variant = "normal",
  className,
  children,
}: TypographyProps) {
  const classes = cn(
    {
      "font-bold": variant === "bold",
      "font-normal": variant === "normal",
      "font-light": variant === "light",
    },
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
}
