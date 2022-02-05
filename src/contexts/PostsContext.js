import { createContext } from "react";
import React from 'react';
import { useState } from "react";
export const PostsContext = createContext();

function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    let values = {
        posts,
        setPosts
    }

    return <PostsContext.Provider value={values}>{children}</PostsContext.Provider>

}

export default PostsProvider;
