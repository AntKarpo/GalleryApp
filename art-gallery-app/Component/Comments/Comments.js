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
          <li key={index}>
            {comment.text} {comment.timestamp} 
            <button className='buttonDelete' onClick={() => onDelete(slug, index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
