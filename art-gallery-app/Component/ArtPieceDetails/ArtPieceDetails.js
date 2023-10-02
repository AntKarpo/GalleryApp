import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <Image src={image} height={300} width={300} alt="image" />;
      <h1>{title}</h1>
      <h3>{artist}</h3>
      <p>{year}</p>
      <p>{genre}</p>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}
