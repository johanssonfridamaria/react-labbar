import React, { createContext, useReducer} from 'react';
import { postReducers } from '../reducers/postReducers';

export const PostsContext = createContext();

const PostsContextProvider = props => {

  const [posts, dispatch] = useReducer(postReducers, []);
  // const [posts, setPosts] = useState([]);
  
  // const createPost = (title, body) => {
    
  //   let post = {
  //     id: Date.now().toString(),
  //     title,
  //     body
  //   }
  //   setPosts(prevPosts => {
  //     return [post, ...prevPosts]
  //    })}


  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  )

}

export default PostsContextProvider;