import React from "react";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./ArtPieceDetails.module.css";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  comments,
  onToggleFavorite,
  isFavorite,
  colors,
  onComment,
  onDelete
}) {
  return (
    <div className={styles["art-piece-detalis"]}>
      <h1>{title}</h1>
      <Image
        src={image}
        height={300}
        width={300}
        alt="image"
        className={styles.detailedImage}
      />
      <h3>Artist: {artist}</h3>
      <p>Year: {year}</p>
      <p> Genre: {genre}</p>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: color,
                marginRight: "10px",
              }}
            ></div>
          ))}
        </div>
      </div>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <CommentForm onSubmitComment={onComment} />
      <Comments comments={comments} onDelete={onDelete} />
    </div>
  );
}
