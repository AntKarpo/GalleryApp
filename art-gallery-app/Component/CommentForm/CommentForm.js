

export default function CommentForm({onSubmitComment}){
    function handleSubmit(event){
        event.preventDefault();
        const {comment} = event.target.elements;
        onSubmitComment(comment.value);
    }
    return(
        <>
        <Form onSubmit={handleSubmit}>
        <label htmlFor="text">Add Comment:</label>
        <textarea id="text" name="text" rows={5} placeholder="Leave your comment here"></textarea>
        <button type="submit">Send Comment</button>
        </Form>
        </>
    )
}

function Comment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          }
        })
        )
    }
    }