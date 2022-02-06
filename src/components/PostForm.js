import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { PostsContext } from '../contexts/PostsContext';

function PostForm() {

    // ekleme işlemi öncesindeki state ise posts

    const { dispatch, selectedPost, select } = useContext(PostsContext);


    useEffect(() => {

        console.log('selectedPostChange', selectedPost)


        // eğer selectedPost null ise boş string yap '' değilse selectedPost?.title titleRef ile input name title value set et
        titleRef.current.value = selectedPost?.title || '';
        bodyRef.current.value = selectedPost?.body || '';


        // selectedPost bağladığımızdan her selectedPost değişiminde buradaki kodlar çalışır.
    }, [selectedPost])



    const formRef = useRef(null);
    const titleRef = useRef();
    const bodyRef = useRef();


    const onFormSubmit = (event) => {
        event.preventDefault();
        // sayfala yenilenmesin diye js ile formdan veri gönderiken kullanırız

        // form içerisindeki inputlarında değerlerini JS Api olan FormData ile alırız.
        // formRef.current html elemente erişmemizi sağlar
        var formData = new FormData(formRef.current);


        console.log('selectedPost', selectedPost);

        // yeni bir ekleme isteğinde bulunmasını söyledik.
        if (selectedPost == null) {

            var param = {
                title: formData.get('title'),
                body: formData.get('body'),
                userId: 1,
                id: uuidv4()
            }

            dispatch({ type: "NewPostItem", payload: param });
        } else {

            var param = {
                title: formData.get('title'),
                body: formData.get('body'),
                userId: selectedPost.userId,
                id: selectedPost.id
            }

            dispatch({ type: "UpdatePostItem", payload: param });
            // seçimi kaldır.
            select({type:'SelectPost',payload:null});
        }




    }

    return <div>
        <Form ref={formRef} onSubmit={onFormSubmit}>

{/* inputlara global state olarak value dan değer bağlayınca react bu input değerlerini kitler. */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Makale Başlığı</Form.Label>
                <Form.Control ref={titleRef} name="title" type="text" placeholder="Başlık" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Makale içeriği</Form.Label>
                <Form.Control ref={bodyRef} name="body"  as="textarea" type="text" placeholder="Makale içerik" />
            </Form.Group>

{/* selectedPost varsa */}

            {selectedPost && <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                    Makale Güncelle
                </Button>
            </div>}

            {/* selectedPost null ise  */}
            {!selectedPost && <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                    Makale Ekle
                </Button>
            </div>}

        </Form>
    </div>;
}

export default PostForm;
