import Link from "next/link";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav className={styles["app-navigation"]}>
      <Link href={"/"} className={styles["navigation-link"]}>
        SpotLight
      </Link>
      <Link href={"/artpieces"} className={styles["navigation-link"]}>
        Pieces
      </Link>
      <Link href={"/favorites"} className={styles["navigation-link"]}>
        Favorites
      </Link>
    </nav>
  );
}
