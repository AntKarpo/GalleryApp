import Image from "next/image";
import styles from "./FavoriteButton.module.css";
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite();
      }}
      className={[
        styles["favorite-btn"],
        isFavorite ? styles["favorited"] : "",
      ].join(" ")}
    >
      <Image
        src="/assets/heart.svg"
        width={30}
        height={30}
        alt="Heart Bookmark Image"
        className={styles["favorite-icon"]}
      />
    </button>
  );
}
