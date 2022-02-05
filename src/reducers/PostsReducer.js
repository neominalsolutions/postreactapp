
export const PostActionTypes = {
    NewPostType:"NewPostItem",
    DeletePostType:"DeletePostItem",
    FilterPostType:"FilterPosts"
}

export const PostsReducer = (state, action) => {

    if(PostActionTypes.NewPostType == action.type) {
        state = [ action.payload ,... state];
        return state;
    }

    return state;
  };