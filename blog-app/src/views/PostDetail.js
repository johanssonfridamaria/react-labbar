import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@material-ui/core';

const PostDetail = ({ match }) => {

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState({});

  const url = 'https://jsonplaceholder.typicode.com/posts/';

  useEffect(() => {
    const getPost = async () => {
      setLoading(true)
      const res = await axios.get(url + `${match.params.id}`)
      setPost(res.data)
      setLoading(false)
    }
    getPost()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
