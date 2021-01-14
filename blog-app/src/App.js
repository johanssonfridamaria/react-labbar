import { useEffect, useContext, useCallback } from 'react';
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

  const getPosts = useCallback( async () => {
    const response = await axios.get(url);
    const posts = response.data;
    // setPosts(data);
    dispatch({
      type: actiontypes().posts.getPosts,
      payload: { posts: posts }
    })
  }, [dispatch]);

  useEffect(() => {
      getPosts();
    },[getPosts]);
  
    
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <BrowserRouter>
      <Navbar />
      <Box mt={4} >
        <Container fixed>
          <Switch>
            <Route exact path="/">
              {posts ? <Posts /> : <h1>No posts loaded</h1>}
            </Route>
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/post/:id" component={PostDetail} />
          </Switch>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
