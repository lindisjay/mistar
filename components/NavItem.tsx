import Link from "next/link";

export default function NavItem({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <>
      <Link href={href} className="hover:underline hover:underline-offset-2 hover:decoration-orange-500 duration-300 ease-in-out">
        {children}
      </Link>
    </>
  );
}
