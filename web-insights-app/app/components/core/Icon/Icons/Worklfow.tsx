import * as React from "react";
import type { SVGProps } from "react";
const SvgWorklfow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 24,
      height: 24,
      overflow: "visible",
      fill: "#030303",
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M256 160c-53.1 0-96 42.9-96 96s42.92 96 96 96 96-42.92 96-96-42.9-96-96-96m0 128c-17.7 0-32-14.3-32-32s14.33-32 32-32 32 14.33 32 32-14.3 32-32 32m0-288C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0m0 384c-70.75 0-128-57.25-128-128s57.25-128 128-128 128 57.25 128 128-57.2 128-128 128" />
  </svg>
);
export default SvgWorklfow;
