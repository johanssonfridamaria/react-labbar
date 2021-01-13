import { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Container, Box } from '@material-ui/core';
import CreatePost from './views/CreatePost';
import Posts from './views/Posts';
import PostDetail from './views/PostDetail';
import { PostsContext } from './contexts/PostsContext';
import axios from 'axios';


function App() {

  const { posts, setPosts } = useContext(PostsContext);
  const url = 'https://jsonplaceholder.typicode.com/posts/';


  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(url);
      setPosts(response.data);
    };
    getPosts();
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPosts(storedPosts)
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <BrowserRouter>
      <Navbar />
      <Box mt={4} >
        <Container fixed>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/post/:id" component={PostDetail} />
          </Switch>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
