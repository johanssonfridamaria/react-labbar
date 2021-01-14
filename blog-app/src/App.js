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
import actiontypes from './reducers/actiontypes';


function App() {

  const { posts, dispatch } = useContext(PostsContext);
  // const { posts, setPosts } = useContext(PostsContext);

  const url = 'https://jsonplaceholder.typicode.com/posts/';

  const getPosts = async () => {
    const response = await axios.get(url);
    console.log('response', response)
    const posts = response.data;
    console.log('posts', posts)
    // setPosts(data);
    dispatch({
      type: actiontypes().posts.getPosts,
      payload: { posts: posts }
    })
  };

  useEffect(() => {
    getPosts();
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      // posts = storedPosts;
      dispatch({
        type: actiontypes().posts.setPosts,
        payload: { storedPosts }
      })
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
