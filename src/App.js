import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';

import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import LoginPage from './pages/LoginPage';
import PostsProvider, { PostsContext } from './contexts/PostsContext';
import { useContext, useEffect } from 'react';
import { GetPosts } from './services/PostsService';

function App() {

  const { dispatch } = useContext(PostsContext);

  // console.log('App')

  useEffect(async () => {
    const posts = await GetPosts();
    // console.log('all-posts', posts);
    // // dispatch sevk et demek.
    // postları state de tuttuk
    dispatch({ type: "FetchPosts", payload: posts });
    

  },[])

  return (

    <div className="App">

        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Layout />} >
            <Route path="posts" element={<PostsPage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>

    </div>

  );
}

export default App;
