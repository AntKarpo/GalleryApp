import React from "react";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
  Comment
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} height={300} width={300} alt="image" />
      <h3>{artist}</h3>
      <p>{year}</p>
      <p>{genre}</p>
      <div>
        <h4>Color Palette:</h4>
        <div style={{ display: "flex" }}>
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
      <CommentForm Comment={Comment} />
      <Comments comments={comments} />
    </div>
  );
}
