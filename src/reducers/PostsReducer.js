
export const PostActionTypes = {
    NewPostItem:"NewPostItem",
    DeletePostItem:"DeletePostItem",
    FilterPosts:"FilterPosts"
}

export const PostsReducer = (state, action) => {

    if(PostActionTypes.NewPostItem == action.type) {
        state = [ action.payload ,... state];
        return state;
    }

    return state;
  };