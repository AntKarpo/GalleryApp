import styles from "./Comments.module.css";
import React from "react";

export default function Comments({ comments }) {
  return (
    <div>
      <h2 className={styles["text-size"]}>Comments</h2>
      <ul className={styles.commentList}>
        {comments?.map((comment, index) => (
          <li key={index}>
            {comment.text} {comment.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}
