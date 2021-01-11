import { useState, useEffect } from 'react';
// import {v4 as uuidv4 } from 'uuid'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Box } from '@material-ui/core';
import CreatePost from './views/CreatePost';
import Posts from './views/Posts';
import axios from 'axios';
import PostDetail from './views/PostDetail';

function App() {

  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts/';

  const getPosts = async () => {
    const response = await axios.get(url)
    setPosts(response.data)
  }

  useEffect(() => {
    getPosts()
    const storedPosts = JSON.parse(localStorage.getItem('posts'))
    if(storedPosts){
      setPosts(storedPosts)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  const createPost = (title, body) => {
    
    let post = {
      id: Date.now().toString(),
      title,
      body
    }
    setPosts(prevPosts => {
      return [post, ...prevPosts]
     })}

return (
  <BrowserRouter>
    <Navbar />
    <Box mt={4} >
      <Container fixed>
        <Switch>
          <Route exact path="/" render={() => <Posts posts={posts} />} />
          <Route exact path="/create" render={() => <CreatePost createPost={createPost} />} />
          <Route exact path="/post/:id" component={PostDetail} />
        </Switch>
      </Container>
    </Box>
  </BrowserRouter>
);
}

export default App;
