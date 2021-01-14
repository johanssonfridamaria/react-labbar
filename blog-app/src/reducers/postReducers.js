import actiontypes from './actiontypes';


export const postReducers = (state, action) => {

  const { type, payload } = action;
  const { createPost, setPosts, getPosts } = actiontypes().posts;

  switch (type) {
    case getPosts: {
      const {posts} = payload;
      return posts
    }
    case setPosts: {
      const { posts } = payload;
      return posts
    }
    case createPost: {
      console.log(payload)
      console.log(state)
      const post = payload;
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

