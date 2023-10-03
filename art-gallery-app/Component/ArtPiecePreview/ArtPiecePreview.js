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
      <Link href={`/artpieces/${slug}`}>
        <Image
          src={image}
          height={300}
          width={300}
          alt={title}
          className={styles["art-image"]}
        />
      </Link>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>Artist: {artist}</p>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
}
