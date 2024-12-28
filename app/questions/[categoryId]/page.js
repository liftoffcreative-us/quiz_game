import Link from 'next/link';
import Questions from '../../components/Questions';

export default async function QuestionsPage({ params }) {
  const categoryId = (await params).categoryId;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Questions categoryId={categoryId} />
    </div>
  );
}
