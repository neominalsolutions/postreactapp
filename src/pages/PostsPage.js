
import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Form, ListGroup, Row, Button, CloseButton, InputGroup, FormControl } from 'react-bootstrap';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostSearch from '../components/PostSearch';
import { PostsContext } from '../contexts/PostsContext';
import { GetPosts } from '../services/PostsService';

function PostsPage() {


  return <div>
    <Container>
      <Row>

        <Col md={12} className="my-5">
          <PostForm />
        </Col>
        <Col md={12}>
          <PostSearch />
        </Col>
        <Col md={12}>
          <PostList />
        </Col>

      </Row>

    </Container>
  </div>;
}

export default PostsPage;
