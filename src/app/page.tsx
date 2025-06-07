import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';


const HomePage = async () => {
    const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sleep Tracker</h1>
    </div>
  )
}

export default HomePage