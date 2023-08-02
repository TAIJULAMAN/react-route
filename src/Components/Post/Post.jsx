import React from 'react';

const Post = (post) => {
    const {id,title,body} = post
    return (
        <div>
            <h1>Post number:{id}</h1>
            <h3>Title:{title}</h3>
            <p>Description:{body}</p>
            {/* <p><Link to={""}></Link></p> */}
            
        </div>
    );
};

export default Post;