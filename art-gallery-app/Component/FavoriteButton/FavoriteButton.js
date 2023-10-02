export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button type="button" onClick={onToggleFavorite} isFavorite={isFavorite}>
      Favorite
    </button>
  );
}
