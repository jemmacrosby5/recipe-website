import { LoginButton } from "@/components/buttons/LoginButton";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const session = await getSession();
      if (!session?.user) {
        return <div>
         <p>You must be logged in to view this page.</p>
         <LoginButton/>
          </div>;
      }
    
      return (
        <div>
          <h1>Welcome, {session.user.name}</h1>
          <p>This is a protected page.</p>
        </div>
      );
    }
  