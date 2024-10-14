import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-7xl">Hello world</h1>
        <p>This is a simple app to test out some fun React stuff.</p>
        <strong>Features</strong>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
           Filtering users
          </li>
          <li className="mb-2">
            Updating users by adding a project. Reload the users but prevent fetching the entire users again. 
          </li>
        </ol>
        <strong>Libraries</strong>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
           React query
          </li>
          <li className="mb-2">
            ui.shadcn.com
          </li>
          <li className="mb-2">Tailwind</li>
        </ol>
        <Button> <Link href="/users" legacyBehavior passHref>
             Check out the users page
          </Link></Button>
      </main>
    </div>
  );
}
