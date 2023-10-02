import Image from "next/image";


export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  console.log("title", title );
  return (
    <>
      <h1>{title}</h1>
      <Image src={image} height={300} width={300} alt="image" />
      <h3>{artist}</h3>
      <p>{year}</p>
      <p>{genre}</p>
    </>
  );

}
