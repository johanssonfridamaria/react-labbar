import React, { createContext, useState} from 'react';
// import { postReducers } from '../reducers/postReducers';

export const PostsContext = createContext();

const PostsContextProvider = props => {

  const [posts, setPosts] = useState([]);
 
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
    <PostsContext.Provider value={{ posts, setPosts, createPost }}>
      {props.children}
    </PostsContext.Provider>
  )

}

export default PostsContextProvider;