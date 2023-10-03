import React, { useState } from "react";

export default function CommentForm({ onSubmitComment }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (commentText.trim() === "") {
      return; 
    }

    const currentDate = new Date();
    const day = currentDate.getDate().toString();
    const month = (currentDate.getMonth() + 1).toString();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString();
    const minutes = currentDate.getMinutes().toString();
    const seconds = currentDate.getSeconds().toString();
    
    const formattedDate = ` | ${hours}:${minutes}:${seconds} / ${day}.${month}.${year}`;
    const comment = {
      text: commentText,
      timestamp: formattedDate,
    };


    onSubmitComment(comment);
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