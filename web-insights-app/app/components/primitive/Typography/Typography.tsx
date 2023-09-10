import type { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Typography.module.css";

const cx = classNames.bind(styles);

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
  const classes = cx("basic", Tag, variant, className);

  return <Tag className={classes}>{children}</Tag>;
}
