

export default function Comments({comments}) {

    return(
        <>
        <h2>"Comments"</h2>
        <ul role="list">
          {comments.map((comment, index) => (
            <li key={index}>
              <p>
                <q>{comment}</q>
              </p>
            </li>
          ))}
        </ul>

        </>
    );
}