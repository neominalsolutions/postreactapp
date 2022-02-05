import React from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { PostsContext } from '../contexts/PostsContext';
import { PostActionTypes, PostsReducer } from '../reducers/PostsReducer';

function PostForm() {

    // ekleme işlemi öncesindeki state ise posts
    const {posts,setPosts} = useContext(PostsContext);
    // postItems ise ekleme işlemi sonrası ki state'imiz.
    const [postItems, dispatch] = useReducer(PostsReducer, posts);

    useEffect(() => {

        console.log('state-değişti', postItems.length);
        // useReducer local state çalışır userReducer güncel haline context'e aşağıdaki gibi set ettik.
        setPosts(postItems);

    },[postItems])

   const formRef =  useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        // sayfala yenilenmesin diye js ile formdan veri gönderiken kullanırız

        // form içerisindeki inputlarında değerlerini JS Api olan FormData ile alırız.
        // formRef.current html elemente erişmemizi sağlar
      var formData =   new FormData(formRef.current);

      var param = {
          title: formData.get('title'),
          body:formData.get('body'),
          userId:1,
          id: uuidv4()
      }

      dispatch({ type: PostActionTypes.NewPostItem, payload:param });

      console.log('form-values',param);

    }

  return <div>
          <Form ref={formRef} onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Makale Başlığı</Form.Label>
              <Form.Control name="title" type="text" placeholder="Başlık" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Makale içeriği</Form.Label>
              <Form.Control name="body" as="textarea" type="text" placeholder="Makale içerik" />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Makale Ekle
              </Button>
            </div>
          </Form>
  </div>;
}

export default PostForm;
