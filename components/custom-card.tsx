import Link from "next/link";

export default function CustomCard({ href, title, description, children }) {
  return (
    <Link href={href} passHref>
      <div className="p-4 max-w-sm rounded-lg border shadow-md transition duration-400 ease-in-out hover:shadow-lg cursor-pointer dark:border-gray-700 dark:hover:border-gray-400">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <p className="mb-3">{description}</p>
          {children}
        </div>
      </div>
    </Link>
  );
}
