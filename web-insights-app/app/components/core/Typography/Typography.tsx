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

export enum Variant {
  LIGHT = "font-light",
  NORMAL = "font-normal",
  BOLD = "font-bold",
}

type TypographyProps = {
  as?: Tag;
  className?: string;
  variant?: Variant;
  children: ReactNode;
};

export function Typography({
  as: Tag = "p",
  variant = Variant.NORMAL,
  className,
  children,
}: TypographyProps) {
  const classes = cn(
    {
      "text-3xl": Tag === "h1",
      "text-2xl": Tag === "h2",
      "text-xl": Tag === "h3",
      "text-lg": Tag === "h4",
      "text-base": Tag === "h5",
      "text-small": Tag === "h6",
    },
    variant,
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
}
