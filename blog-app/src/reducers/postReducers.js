// import actiontypes from './actiontypes';
// // import axios from 'axios';

// export const postReducers = (state, action) => {
//   console.log('action' + action);
//   console.log('state' + state)

//   switch (action.type) {

//     case 'unload':
//       return initialState;
//     case actiontypes().posts.getPosts:
//       return {
//         data: action.payload
//       }
//     case actiontypes().posts.createPost:
//       return [{
//         id: Date.now().toString(),
//         title,
//         body
//       }, ...state]
//     default:
//       return state




//     // actiontypes().posts.getPosts:
//     // async ({ state }) => {
//     //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
//     //   return response.data
//     // }

//     // case actiontypes().posts.getOnePost:

//     //   const url = 'https://jsonplaceholder.typicode.com/posts/';

//     //   async () => {
//     //     // setLoading(true)
//     //     const res = await axios.get(url + `${match.params.id}`)
//     //     setPost(res.data)
//     //     setLoading(false)
//     //   }




//   }
// }


