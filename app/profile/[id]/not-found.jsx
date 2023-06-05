import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h1 className="text-5xl font-bold blue_gradient">404 - Page Not Found</h1>
      <p className="text-xl mt-4 mb-8 desc">
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="text-lg py-2 px-4 text-black border rounded hover:bg-gray-200 hover:opacity-90 transition-colors ease-in-out duration-200"
      >
        Go back to the homepage
      </Link>
    </div>
  );
}
