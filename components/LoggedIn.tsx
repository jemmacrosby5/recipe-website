import React from "react";
import { SignUpButton } from "./buttons/SignUpButton";
import { LoginButton } from "./buttons/LoginButton";
import { LogoutButton } from "./buttons/LogoutButton";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface LoggedInProps {
  user: UserProfile | undefined;
}

const LoggedIn: React.FC<LoggedInProps> = ({ user }) => {
  return (
    <div className="nav-bar__buttons">
      {!user ? (
        <>
          <SignUpButton />
          <LoginButton />
        </>
      ) : (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default LoggedIn;