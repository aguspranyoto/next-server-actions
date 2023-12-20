import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome back</h1>
      <Link href="/student">Go to student page</Link>
    </div>
  );
}
