import UserNav from "@/components/UserNav";
import { auth0 } from "@/lib/auth0"

export default async function Home() {
  const session = await auth0.getSession()
  if (!session) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
        <a href='auth/login'>
        <div className="p-2 bg-green-200 rounded-sm">
        Log in
        </div>
        </a>
      </div>
    );
  }

  return (
    <div>
      <UserNav nickname={session.user.nickname}/>
      <a href='auth/logout'>Log out</a>
    </div>
  );
}

  