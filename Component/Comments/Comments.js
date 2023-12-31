import styles from "./Comments.module.css";
import React from "react";
import { useRouter } from "next/router";


export default function Comments({ comments, onDelete }) {
  const router = useRouter();
  const {slug} = router.query;

  return (
    <div>
      <h2 className={styles["text-size"]}>Comments</h2>
      <ul className={styles.commentList}>
        {comments?.map((comment, index) => (
          <li key={index} className={styles.commentIndi}>
            {comment.text} <span className={styles.span}>{comment.timestamp} </span>
            <button className={styles.buttonDelete} onClick={() => onDelete(slug, index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
