import Link from "next/link";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <nav className="container flex justify-between items-center py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <Link href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition-all duration-200" />
          <span className="font-extrabold text-gray-900 lg:text-xl">
            TLDR.AI
          </span>
        </Link>
      </div>
      <div className="flex gap-4 lg:items-center lg:justify-center lg:gap-12">
        <Link href="/#pricing">Pricing</Link>
        <Link href="/dashboard">Your Summaries</Link>
      </div>
      <div className="flex lg:flex-1 lg:justify-end">
        <div className="flex items-center gap-2">
          <Link href="/upload">Upload a PDF</Link>
        </div>
        <Link href="/#sign-in">Sign in</Link>
      </div>
    </nav>
  );
}
