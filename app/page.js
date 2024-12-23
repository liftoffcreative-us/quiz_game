import Image from "next/image";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Questions />
    </div>
  );
}
