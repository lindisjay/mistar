import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-xl font-bold">Not Found</h2>
      <p>Sayang sekali belum ada isinya.</p>
      <p className="text-9xl pt-7">😝</p>
      <Link className="text-sm underline text-orange-500 pt-7" href="/course">
        Kembali
      </Link>
    </div>
  );
}
