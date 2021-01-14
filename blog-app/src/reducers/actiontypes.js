const actiontypes = () => {
  return {
    posts: {
      getPosts: 'GET_POSTS',
      setPosts: 'SET_POSTS',
      createPost: 'CREATE_POST',
      getOnePost: 'GET_ONE_POST',
      getOneSuccess: 'GET_ONE_SUCCESS',
    }
  }

}

export default actiontypes;
