
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Form, ListGroup, Row, Button, CloseButton, InputGroup, FormControl } from 'react-bootstrap';
import PostList from '../components/PostList';
import { PostsContext } from '../contexts/PostsContext';
import { GetPosts } from '../services/PostsService';

function PostsPage() {

  const { setPosts } = useContext(PostsContext);

  useEffect(async () => {

    const posts =  await GetPosts();
    console.log('all-posts', posts);
    setPosts(posts);

  }, []);


  return <div>
    <Container>
      <Row>

        <Col md={12} className="my-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Makale Başlığı</Form.Label>
              <Form.Control type="text" placeholder="Başlık" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Makale içeriği</Form.Label>
              <Form.Control as="textarea" type="text" placeholder="Makale içerik" />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Makale Ekle
              </Button>
            </div>
          </Form>
        </Col>

        <Col md={12}>
          <InputGroup className="mb-3">
           
            <FormControl
              type="search"
              placeholder="Makale Arama"
              aria-describedby="basic-addon1"
            />
             <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
          </InputGroup>
        </Col>
        <Col md={12}>
          <PostList />
        </Col>

      </Row>


    </Container>
  </div>;
}

export default PostsPage;
