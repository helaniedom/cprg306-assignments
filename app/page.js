import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <ul className="space-y-3">
          <li>
            <Link href="/week-2">Go to Week 2 Assignment</Link>
          </li>
          <li>
            <Link href="/week-3">Go to Week 3 Assignment</Link>
          </li>
          <li>
            <Link href="/week-4">Go to Week 4 Assignment</Link>
          </li>
          <li>
            <Link href="/week-5">Go to Week 5 Assignment</Link>
          </li>
          <li>
            <Link href="/week-6">Go to Week 6 Assignment</Link>
          </li>
          <li>
            <Link href="/week-7">Go to Week 7 Assignment</Link>
          </li>
          <li>
            <Link href="/week-8">Go to Week 8 Assignment</Link>
          </li>
          <li>
            <Link href="/week-9">Go to Week 9 Assignment</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
