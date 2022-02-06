
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, ListGroup, Row, Button, CloseButton, Modal } from 'react-bootstrap';
import { PostsContext } from '../contexts/PostsContext';

function PostList() {

    const { posts,select, dispatch, filteredPosts } = useContext(PostsContext);
    // seçili olan post item değerini modalState de sakladık ve modal component içerisine title, body bu stateden okuduk
    const [modalState,setModalState] = useState(null);


    const editItem = (id) => {
        const selectedPost = posts.find(x=> x.id == id);
        // postsreducer'a seçim işlemi yapacağımı söyle
        // console.log('modalState', modalState);
        select({type:'SelectPost',payload:selectedPost});


    }

    const deleteItem = (id) => {

       const result =  window.confirm('kaydı silmek istediğinize emin misiniz');

       if(result){
        dispatch({type:'DeletePostItem', payload:{id:id}})
       } else {
           alert('silme işlemi iptal edildi');
       }

       
    }

    // modal da seçileni göstermek için yaptık
    const selectItem = (item) => {
        // console.log('selectItem')
        setModalState(item);
    }

    // close butonuna basınca modalState boşa çektik ve böylece modal gizlendi.
    // modal gizlenmesini ise show={modalState == null ? false:true} sağlar.
    const closeModal = () => {
        setModalState(null);
    }

    return <div>

        <ListGroup>
            {filteredPosts.map((item, key) => {
                return <ListGroup.Item key={key} >
                    <Row className="d-flex justify-content-between">
                        <Col md={9}>{item?.title}</Col>
                        <Col md={3} className="d-flex justify-content-end align-items-center">
                            <Button className="me-2" size={"sm"} onClick={() => selectItem(item)} variant="warning">Seç</Button>
                            <Button className="me-2" size={"sm"} onClick={() => editItem(item.id)} variant="secondary">Düzenle</Button>
                            <CloseButton onClick={() => deleteItem(item.id)}></CloseButton>
                        </Col>
                    </Row>
                </ListGroup.Item>

            })}
        </ListGroup>

        <Modal show={modalState == null ? false:true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalState?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalState?.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>;
}

export default PostList;
