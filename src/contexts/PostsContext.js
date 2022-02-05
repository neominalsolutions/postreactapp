import { createContext } from "react";
import React from 'react';
import { useReducer } from "react";
import { PostsReducer } from "../reducers/PostsReducer";
export const PostsContext = createContext();

function PostsProvider({ children }) {

    // dispatch ile postsState değiştiririz.
    // action.type ve action.payload değerlerine göre işlem yapamayı sağlar.
    // useState yerine birden fazla yerden state değiştiridiğimiz için useReducer kullandık.
    const [posts, dispatch] = useReducer(PostsReducer,[]);

    let values = {
        posts,
        dispatch
    }

    return <PostsContext.Provider value={values}>{children}</PostsContext.Provider>

}

export default PostsProvider;
