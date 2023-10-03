import React, { useState } from "react";

export default function CommentForm({ Comment }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Comment(commentText);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Add Comment:</label>
      <textarea
        id="text"
        name="text"
        rows={5}
        placeholder="Leave your comment here"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <button type="submit">Send Comment</button>
    </form>
  );
}