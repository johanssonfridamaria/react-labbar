import { useState, useEffect } from 'react';
// import {v4 as uuidv4 } from 'uuid'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Box } from '@material-ui/core';
import CreatePost from './views/CreatePost';
import Posts from './views/Posts';
import axios from 'axios';

function App() {

  const [posts, setposts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts/';

  const getPosts = async () => {
    const response = await axios.get(url)
    setposts(response.data)
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <BrowserRouter>
      <Navbar />
      <Box mt={4} >
        <Container fixed>
          <Switch>
            <Route exact path="/" render={() => <Posts posts={posts} />} />
            <Route path="/create" render={() => <CreatePost />} />
          </Switch>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
