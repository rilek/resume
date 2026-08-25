import type { PropsWithChildren, ReactNode } from "react";

type LayoutProps = PropsWithChildren<{
  sidebar?: ReactNode;
  header?: ReactNode;
}>;

export const Layout = ({ sidebar, header, children }: LayoutProps) => {
  return (
    <div className="resume-layout relative w-full max-w-6xl min-h-[297mm] mx-auto px-6 py-10 overflow-hidden font-serif md:px-[56pt] md:py-[40pt]">
      <main className="resume-layout-content grid grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] max-md:grid-cols-1 gap-y-8 gap-x-6">
        <div>{header}</div>
        <div>{sidebar}</div>
        <div className="resume-layout-body col-span-2 max-md:col-span-1">{children}</div>
      </main>
    </div>
  );
};
