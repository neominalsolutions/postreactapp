
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Form, ListGroup, Row, Button, CloseButton, InputGroup, FormControl } from 'react-bootstrap';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { PostsContext } from '../contexts/PostsContext';
import { GetPosts } from '../services/PostsService';

function PostsPage() {

  const { setPosts } = useContext(PostsContext);

  useEffect(async () => {

    const posts = await GetPosts();
    console.log('all-posts', posts);
    setPosts(posts);

  }, []);


  return <div>
    <Container>
      <Row>

        <Col md={12} className="my-5">
          <PostForm />
        </Col>

        <Col md={12}>
          <InputGroup className="mb-3">

            <FormControl
              type="search"
              placeholder="Makale Arama"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1"><i className="bi bi-search"></i></InputGroup.Text>
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
