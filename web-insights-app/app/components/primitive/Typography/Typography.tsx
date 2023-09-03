import type { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Typography.module.css";

const cx = classNames.bind(styles);

type TypographyProps = {
  children: ReactNode;
  as?: "label" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Typography({ as: Tag = "p", children }: TypographyProps) {
  const classes = cx("basic", Tag);

  return <Tag className={classes}>{children}</Tag>;
}
