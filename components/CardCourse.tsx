import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function CardCourse({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/tajwid"
      className="px-3 py-5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-300 hover:border-orange-500 duration-300 ease-in-out rounded-md border border-zinc-500 w-48 flex-col justify-center items-center flex gap-5"
    >
      <Image alt="gambar" src="/gambar.png" width={90} height={90} />
      <div className="text-sm">{children}</div>
    </Link>
  );
}
