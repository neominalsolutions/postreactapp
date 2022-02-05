
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, ListGroup, Row, Button, CloseButton, Modal } from 'react-bootstrap';
import { PostsContext } from '../contexts/PostsContext';

function PostList() {

    const { posts } = useContext(PostsContext);
    // seçili olan post item değerini modalState de sakladık ve modal component içerisine title, body bu stateden okuduk
    const [modalState,setModalState] = useState(null);


    const editItem = (id) => {
        alert('seçilen' + id);
    }

    const deleteItem = (id) => {
        alert('silinecek' + id);
    }

    // modal da seçileni göstermek için yaptık
    const selectItem = (item) => {
        setModalState(item);
    }

    // close butonuna basınca modalState boşa çektik ve böylece modal gizlendi.
    // modal gizlenmesini ise show={modalState == null ? false:true} sağlar.
    const closeModal = () => {
        setModalState(null);
    }

    return <div>

        <ListGroup>
            {posts.map((item, key) => {
                return <ListGroup.Item key={key} onClick={() => selectItem(item)}>
                    <Row className="d-flex justify-content-between">
                        <Col md={10}>{item?.title}</Col>
                        <Col md={2} className="d-flex justify-content-end align-items-center">
                            <Button onClick={() => editItem(item.id)} variant="secondary">Düzenle</Button>
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
