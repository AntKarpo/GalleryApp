import React from "react";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  comments,
  onToggleFavorite,
  isFavorite,
  onSubmitComment,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} height={300} width={300} alt="image" />
      <h3>{artist}</h3>
      <p>{year}</p>
      <p>{genre}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <CommentForm onSubmitComment={onSubmitComment} />
      <Comments comments={comments} />
    </div>
  );
}
