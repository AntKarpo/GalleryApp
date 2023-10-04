import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./Spotlight.module.css";

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div className={styles.spotlight}>
      <Image
        src={image}
        height={300}
        width={300}
        alt={`spotlight: ${artist}`}
        className={styles["spotlight-image"]}
      />
      <div className={styles.content}>
        <p>Artist: {artist}</p>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
}
