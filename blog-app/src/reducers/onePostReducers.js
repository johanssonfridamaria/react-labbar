import actiontypes from './actiontypes';


export const onePostReducers = (state, action) => {

  const { type, payload, loading } = action;
  const { getOnePost, getOneSuccess } = actiontypes().posts;

  switch (type) {
    // case getOnePost: {
    //   const _loading = loading;
    //   return {
    //     ...state,
    //     // _loading
    //   }

    // }
    case getOneSuccess: {
      const { post } = payload;
      console.log(post)
      // const _loading = loading;
      return post
        // _loading
    }



    default:
      return state

  }
}

