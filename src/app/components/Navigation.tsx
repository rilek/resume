"use client";

import clsx from "clsx";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => setExpanded((v) => !v);

  return (
    <div
      className={clsx("absolute top-8 right-0 flex items-start transition-transform", {
        "-translate-x-0": expanded,
        "translate-x-[calc(100%_-_52px)]": !expanded,
      })}
    >
      <h1 className="hidden">Navigation Menu</h1>

      <button
        className="bg-white border rounded-l py-2 px-3 border-r-0 -mr-px flex flex-col z-10 items-center justify-center w-14 h-14"
        onClick={onToggle}
      >
        <Menu />
        <span className="uppercase text-[7px] leading-[10px] font-sans">
          Menu
        </span>
      </button>

      <div className="border rounded-br -ml-px px-4 py-2 w-56">
        <nav>
          <ul>
            <li>
              <a href="/" className="flex gap-2 text-blue-700 hover:underline print:text-inherit">Resume</a>
            </li>
            <li>
              <a href="/cover-letter" className="flex gap-2 text-blue-700 hover:underline print:text-inherit">Cover letter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
