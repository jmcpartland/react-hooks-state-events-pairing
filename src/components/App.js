import react, { useState } from "react";
import Votes from "./Votes";
import CommentList from "./CommentList";

import video from "../data/video.js";

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)

  function handleUpVotes() {
    setUpVotes(upVotes + 1)
  }

  function handleDownVotes() {
    setDownVotes(downVotes + 1)
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Votes  
        upVotes={upVotes} 
        downVotes={downVotes} 
        handleDownVotes={handleDownVotes} 
        handleUpVotes={handleUpVotes} 
      />
      <CommentList
        comments={video.comments}
      />
    </div>
  );
}

export default App;
