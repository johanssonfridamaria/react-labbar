import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Typography } from '@material-ui/core';
import { PostContext } from '../contexts/PostContext';
import actiontypes from '../reducers/actiontypes';

const PostDetail = ({ match }) => {

  const { post, dispatch } = useContext(PostContext);
  const [loading, setLoading] = useState({});

  const url = 'https://jsonplaceholder.typicode.com/posts/';

  useEffect(() => {
    const getPost = async () => {
      // dispatch({
      //   type: actiontypes().posts.getPost,
      //   loading: true
      // })
      setLoading(true)
      const res = await axios.get(url + `${match.params.id}`)
      const post = res.data
      console.log(res.data)
      dispatch({
        type: actiontypes().posts.getOneSuccess,
        payload: { post: post },
        // loading: false
      })

      // setPost(res.data)
      setLoading(false)
    }
    getPost()
  }, [dispatch, match.params.id])

  if (!loading) {
    return (
      <Box>
        <Typography variant="h5" gutterBottom align="center">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </Box>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default PostDetail
