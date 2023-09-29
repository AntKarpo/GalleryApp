import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href={"/"}>SpotLight</Link>
      <Link href={"/artpieces"}>Pieces</Link>
    </nav>
  );
}
