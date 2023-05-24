import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-slate-100 p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
