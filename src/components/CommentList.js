import { useState } from "react"
import Comments from "./Comments"

function CommentList({comments}) {
    const [commentToggle, setCommentToggle] = useState(false)
    
    function handleComments() {
        setCommentToggle(!commentToggle) 
    }
    
    return (
        <div>
            <button onClick={handleComments}>{commentToggle ? "Hide Comments" : "Show Comments"}</button>
            { commentToggle ? <Comments comments={comments} /> : null }
        </div>
    )
    
};

export default CommentList;