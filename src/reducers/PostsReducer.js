
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
        // dizi değerini güncellemek için yine spread operatör
        state = [ ... action.payload];
        return state;
    }
    else if(action.type == "SelectPost") {
        // direk obje güncelleme işlemi için spread operatör kullandık
        state = action.payload;
        return state;
    }
    else if(action.type == "UpdatePostItem"){
        const existingItem = state.find(x=> x.id == action.payload.id);

        console.log('existingItem', existingItem);
        console.log('update-payload', action.payload);
        // yeni değerin title ve body alanı farklı

        // fakat dizi içerisindeki bulunan bir değeri güncellemek için ise object.assing tercih edelim.
        // tek tek dizideki değerleri aşağıdaki gibi güncellemeye çalışmayalaım.

        Object.assign(existingItem,action.payload);
        // aş
        // existingItem.title = action.payload.title;
        // existingItem.body = action.payload.body;

        state = [... state];
        // state içinde değişne değere göre tekrar güncelle.

        return state;

    }
    else if(action.type = "DeletePostItem"){


        // şuanki silinecek id sahip olmayanları fitreledik. yani elimizde silinen dışındakiler duruyor
        state = [... state.filter(x=> x.id !== action.payload.id)]

        return state;
    }

    return state;
  };


