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
    // silme,ekleme, arama işlmeleri yapacaz ve dizi olarak çalışacağız
    // constext reducer üzerinde değişiklikleri dinleyecektir.
    const [selectedPost, select] = useReducer(PostsReducer, null);
    //seçilen item üzerinde çalışacağız
    // inital değer null

    const [filteredPosts, filter] = useReducer(PostsReducer, []);

    let values = {
        posts,
        dispatch,
        selectedPost,
        select,
        filteredPosts,
        filter
    }

    return <PostsContext.Provider value={values}>{children}</PostsContext.Provider>

}

export default PostsProvider;
