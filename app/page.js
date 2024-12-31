import Link from 'next/link';
import { PlayersProvider } from './context/playersContext';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-screen h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-grad-lt-blue to-game-bg">
      <Image src="/logoMain.png" alt="Main Logo" width={1090} height={560} className='w-[90%] md:w-[50%]'/>
      <Link href="/add-player" className='flex items-center justify-center'>
        <Image src='/startBtn.svg' width={600} height={200} alt="Start Button" className='w-[80%]'/>
      </Link>
    </div>
  );
}
