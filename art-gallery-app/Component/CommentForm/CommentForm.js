

export default function CommentForm({onSubmitComment}){
    function handleSubmit(event){
        event.preventDefault();
        const comment = event.target.elements;
        onSubmitComment(comment.value);

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="text">Add Comment:</label>
        <textarea id="text" name="text" rows={5} placeholder="Leave your comment here"></textarea>
        <button type="submit">Send Comment</button>
        </form>
        </>
    )
}