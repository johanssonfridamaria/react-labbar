import React, { createContext, useReducer} from 'react';
import { onePostReducers } from '../reducers/onePostReducers';

export const PostContext = createContext();

const PostContextProvider = props => {

  const [post, dispatch] = useReducer(onePostReducers, {});


  return (
    <PostContext.Provider value={{ post, dispatch }}>
      {props.children}
    </PostContext.Provider>
  )

}

export default PostContextProvider;