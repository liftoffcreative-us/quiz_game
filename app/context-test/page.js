import TestingComponent from '../components/testingComponent';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data } = await supabase.from('messages').select();

  return <TestingComponent messagesProp={data} />;
}
