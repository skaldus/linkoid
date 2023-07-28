import ShortenForm from "@/components/ShortenForm";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { headers } from "next/headers";

export default function Home() {
  const csrfToken = headers().get("x-csrf-token") || "";

  return (
    <main className="container flex h-screen flex-col items-center justify-between p-24">
      <div className="flex max-w-md justify-center flex-col">
        <div className="relative max-w-full h-64 mb-8">
          <Image src="./logo.svg" alt="Logo" fill />
        </div>
        <p className="mb-8">
          Welcome to linkoid.eu, your free, fast and secure link shortening
          service. Start transforming your long links into simple and clean
          short links with us today!
        </p>
        <ShortenForm csrfToken={csrfToken} />
        <div className="flex w-full justify-center">
          <Link href="#">
            <Github className="text-muted-foreground hover:text-black transition-all duration-1000" />
          </Link>
        </div>
      </div>
    </main>
  );
}
