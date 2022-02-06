
// export const PostActionTypes = {
//     NewPostItem:"NewPostItem",
//     DeletePostItem:"DeletePostItem",
//     FilterPosts:"FilterPosts"
// }

// post ile ilgili tüm süreçlerin akışını burası yönetim PostContext üzerindeki state burdaki state ile güncelledi
export const PostsReducer = (state, action) => {

    // FetchPosts apiden tüm verilerin çekilecek type
    // Post ekleme işlemlerinde kullanacağı type

    // dispatch() ile state değiştirileceği zaman burası tetikenir.
    // action.payload state değiştirecek olan datamız
    // state 10 eleman vardı action.payload 1 item geldi 11 oldu
    if(action.type == "NewPostItem") {
        state = [ action.payload ,... state];
        return state;
    }
    else if(action.type == "FetchPosts"){
        state = [ ... action.payload];
        return state;
    }
    else if(action.type == "SelectPost") {
        state = {... action.payload};
        return state;
    }

    return state;
  };


