import { useState, useEffect } from 'react';
// import {v4 as uuidv4 } from 'uuid'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core';
import CreatePost from './views/CreatePost';
import Posts from './views/Posts';
import axios from 'axios';

function App() {

  const [posts, setposts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts/';

  const getPosts = async () => {
    const response = await axios.get(url)
    setposts(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <BrowserRouter>
      <Navbar />

      <Container fixed mt="2rem">
        <Switch>
          <Route exact path="/" render={() => <Posts posts={posts} />} />
          <Route path="/create" render={() => <CreatePost />} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
