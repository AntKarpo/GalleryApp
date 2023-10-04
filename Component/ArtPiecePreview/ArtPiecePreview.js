import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./ArtPiecePreview.module.css";
export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div className={styles["art-piece-preview"]}>
      <Image
        src={image}
        height={300}
        width={300}
        alt={title}
        className={styles["art-image"]}
      />
      <Link href={`/artpieces/${slug}`} className={styles.content}>
        <div className={styles["content--title"]}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.artist}>- {artist}</p>
        </div>
        <div className={styles["content--options"]}>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </div>
      </Link>
    </div>
  );
}
