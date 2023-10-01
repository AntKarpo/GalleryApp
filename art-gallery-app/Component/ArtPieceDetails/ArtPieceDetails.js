import Image from "next/image"

export default function ArtPieceDetail({image, title, artist, year, genre}){
    
    return(
        <>
        <h1>Gallery</h1>
        <h2>Title: {title}</h2>
        <Image src={image}
        height={400}
        width={400}
        alt="Details"/>
        <h4>Artist: {artist}</h4>
        <p>Year: {year}  genre: {genre}</p>
        </>
    )
}
