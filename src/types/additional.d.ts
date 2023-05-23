import { type SVGProps } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      set: SVGProps<SVGElement>;
    }
  }
}
