import Image from "next/image";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <a href="/categories"><button className="flex items-center justify-center w-auto px-6 py-2 bg-game-blue rounded-lg">CATEGORIES</button></a>
    </div>
  );
}
