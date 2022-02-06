import React, { useContext, useEffect } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { PostsContext } from '../contexts/PostsContext';


function PostSearch() {

    const {posts, filter} = useContext(PostsContext);

    // PostSearch componenti posts'ları takip etsin yani bir ekleme bir güncelleme, bir silme gibi data üzerinde bir işlem yapıldığında son güncel postsları okusun ve filterPosts datasına bunu set etsin.

    useEffect(()=> {

        // filterposts ile posts güncellensin diyoruz.
        // console.log('posts da bir değişim var yakala')
        filter({type:'FilterPosts', payload:posts});

    },[posts])


    const searchText = (event) => {
        const searchValue = event.target.value;
        // console.log('value', searchValue);
        // console.log('posts', posts);

        const filteredPosts = posts.filter(x=> x.title.toLowerCase().includes(searchValue) || x.body.toLowerCase().includes(searchValue));

        // filtrelenmiş olarak postlarımı değiştir.
        filter({type:'FilterPosts', payload:filteredPosts});

        // console.log('filteredPosts', filteredPosts);
    }

    return <div>
        <InputGroup className="mb-3">


            {/* react-boostrap de input değişimlerini yakalamak için FormControl kullanalım. InputGroup.Text tasarım olarak inputun sonuna search ikonu getirmemizi sağlar.  */}
            <FormControl
                type="search"
                placeholder="Makale Arama"
                aria-describedby="basic-addon1"
                onChange={searchText}
            />
            <InputGroup.Text id="basic-addon1"><i className="bi bi-search"></i></InputGroup.Text>
        </InputGroup>
    </div>;
}

export default PostSearch;
