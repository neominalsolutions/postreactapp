
export const PostActionTypes = {
    NewPostItem,
    DeletePostItem,
    FilterPosts
}

export const PostsReducer = (state, action) => {

    if(PostActionTypes.NewPostItem == action.type) {
        state = [ action.payload ,... state];
        return state;
    }

    return state;
  };