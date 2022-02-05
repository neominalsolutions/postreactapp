import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';

import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import LoginPage from './pages/LoginPage';
import PostsProvider from './contexts/PostsContext';

function App() {
  return (

    <div className="App">
      <PostsProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Layout />} >
            <Route path="posts" element={<PostsPage />} />
            <Route path="home" element={<HomePage />} />
          </Route>
        </Routes>
      </PostsProvider>
    </div>

  );
}

export default App;
