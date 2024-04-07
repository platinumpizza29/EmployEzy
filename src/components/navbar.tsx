import { auth, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();
  if (!userId) {
    return (
      <div className="navbar flex flex-row items-center justify-between bg-base-100">
        <a className="btn btn-ghost text-xl">Employezy</a>
        <SignInButton />
      </div>
    );
  } else {
    return (
      <div className="navbar flex flex-row items-center justify-between rounded-3xl bg-primary px-4">
        <a className="text-xl text-primary-content">EmployEzy</a>
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }
}
