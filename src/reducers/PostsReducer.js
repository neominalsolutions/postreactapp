
// export const PostActionTypes = {
//     NewPostItem:"NewPostItem",
//     DeletePostItem:"DeletePostItem",
//     FilterPosts:"FilterPosts"
// }

// post ile ilgili tüm süreçlerin akışını burası yönetim PostContext üzerindeki state burdaki state ile güncelledi
export const PostsReducer = (state, action) => {

    // FetchPosts apiden tüm verilerin çekilecek type
    // Post ekleme işlemlerinde kullanacağı type

    if(action.type == "NewPostItem") {
        state = [ action.payload ,... state];
        return state;
    }
    else if(action.type == "FetchPosts"){
        state = [ ... action.payload];
        return state;
    }

    return state;
  };