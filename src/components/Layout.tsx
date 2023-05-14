import { PropsWithChildren, ReactNode } from "react";

type LayoutProps = PropsWithChildren<{
  sidebar?: ReactNode;
  header?: ReactNode;
}>;

export const Layout = ({ sidebar, header, children }: LayoutProps) => {
  return (
    <div className="mx-4 py-6 md:mx-12 md:py-8 lg:mx-20 lg:py-16 print:mx-0 print:py-0">
      <main className="flex flex-col gap-8">
        {header}
        <div className="grid gap-4 lg:gap-12 max-w-5xl grid-cols-1 md:grid-cols-[256px_1fr] print:grid-cols-1 print:gap-2">
          <div>{sidebar}</div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};
