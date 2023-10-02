import Link from "next/link.js";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview.js";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`artpieces/${piece.slug}`}>
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
