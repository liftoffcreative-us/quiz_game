import Image from "next/image";
import Questions from "./components/Questions";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <Link href="/categories"><button className="flex items-center justify-center w-auto px-6 py-2 bg-game-blue rounded-lg">CATEGORIES</button></Link>
    </div>
  );
}
