import Link from "next/link";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
        
        {/* Logo/Icon */}
        <Link href="/" className="text-zinc-400 hover:text-white transition">
          <Code2 className="h-5 w-5" />
        </Link>

        {/* Copyright */}
        <p className="text-center text-sm text-zinc-500">
          © 2025 Codesnippet. All rights reserved.
        </p>

      </div>
    </footer>
  );
}