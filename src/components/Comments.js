import { useState } from "react"

function Comments({comments}) {
    const listComments = comments.map((com) =>     
        <>
        <p><b>{com.user}</b></p>
        <p>{com.comment}</p>
        </>
    );
    return (
        <div>
            <h3>{comments.length} Comments</h3>
            {listComments}
        </div>
    )
}

export default Comments;