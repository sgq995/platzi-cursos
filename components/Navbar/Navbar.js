import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </menu>
      </nav>
    </div>
  );
}
