import Link from 'next/link';
import Questions from '../components/Questions';

export default function QuestionsPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Questions />
    </div>
  );
}
