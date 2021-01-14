import actiontypes from './actiontypes';
import axios from 'axios';


export const postReducers = (state, action) => {

  const { type, payload } = action;
  const { CREATE_POST, SET_POST , GET_ONE_POST, GET_POSTS } = actiontypes().posts;

  switch (type) {
    case GET_POSTS: {
      console.log('payload',payload)
      const {posts} = payload;
      console.log('posts', posts);
      return posts
    }
    case SET_POST: {
      const { posts } = payload;
      return posts
    }

    case CREATE_POST: {
      const { post } = payload;
      console.log('post', post)
      return [
        {
          id: Date.now().toString(),
          ...post
        }, ...state]
    }
    default:
    return state

  }
}

