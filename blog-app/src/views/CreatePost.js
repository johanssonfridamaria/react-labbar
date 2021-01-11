import { Typography } from '@material-ui/core';
import React from 'react';
import AddPost from '../components/AddPost'

const CreatePost = ({createPost}) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Create Post</Typography>
      <AddPost createPost={createPost} />
    </div>
  )
}

export default CreatePost

