import { auth0 } from "@/lib/auth0"

export default async function Home() {
  const session = await auth0.getSession()
  if (!session) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
        <a href="auth/login">Log in</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <p>You are logged in and can access this content.</p>
      <a href='auth/logout'>Log out</a>
    </div>
  );
}

  