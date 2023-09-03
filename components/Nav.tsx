import React, { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <div className="fixed w-full py-3 px-6 md:px-20 md:py-5 flex items-center justify-between bg-white">
      <h3 className="text-xl font-semibold">Mistar.</h3>
      <div>
        <button className="text-lg font-semibold bg-zinc-100 px-3 py-1 rounded-md md:hidden">
          <i className="ri-menu-line"></i>
        </button>
        <ul className="hidden md:flex space-x-5">{children}</ul>
      </div>
    </div>
  );
}
