import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Navbar from "~/components/navbar";

export default function HomePage() {
  const { userId } = auth();

  if (userId) {
    redirect("/home");
  }
  return (
    <main className="min-w-screen min-h-screen">
      <Navbar />
      <h1>Landing Page</h1>
    </main>
  );
}
