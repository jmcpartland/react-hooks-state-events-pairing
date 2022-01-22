function Votes({upVotes, downVotes, handleUpVotes, handleDownVotes}) {


    return (
        <>
        <button onClick={handleUpVotes}>{upVotes} 👍</button>
        <button onClick={handleDownVotes}>{downVotes} 👎</button>
        </>
    )
};

export default Votes;