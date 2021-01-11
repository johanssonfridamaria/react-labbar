import { Typography } from '@material-ui/core';
import React from 'react';
import AddPost from '../components/AddPost'

const CreatePost = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Create Post</Typography>
      <AddPost />
    </div>
  )
}

export default CreatePost

