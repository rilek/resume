import { PropsWithChildren, ReactNode } from "react";

type LayoutProps = PropsWithChildren<{
  sidebar?: ReactNode;
  header?: ReactNode;
}>;

export const Layout = ({ sidebar, header, children }: LayoutProps) => {
  return (
    <div className="relative font-serif max-w-5xl mx-4 py-6 md:mx-12 md:py-8 lg:mx-auto lg:py-16 print:mx-0 print:py-0 overflow-hidden">
      <main className="grid grid-cols-1 md:grid-cols-[256px_1fr] gap-y-8 gap-x-4 lg:gap-x-12 print:gap-y-8 ">
        <div className="col-span-2 print:col-span-1">{header}</div>
        <div>{sidebar}</div>
        <div className="print:col-span-2">{children}</div>
      </main>
    </div>
  );
};
