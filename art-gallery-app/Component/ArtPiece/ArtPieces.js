import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview.js";
import styles from "./ArtPiece.module.css";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul className={styles.artList}>
      {pieces.map((piece) => (
        <li key={piece.slug} className={styles.preview}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={!!artPiecesInfo[piece.slug]?.isFavorite}
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
          />
        </li>
      ))}
    </ul>
  );
}
