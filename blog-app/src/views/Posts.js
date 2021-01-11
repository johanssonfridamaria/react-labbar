import { Grid } from '@material-ui/core';
import React from 'react';
import PostCard from '../components/PostCard';


const Posts = ({ posts }) => {

  return (
      <Grid container spacing={4}>
        {
          posts.map(post => (
            <Grid item xs={12} sm={6}>
              <PostCard post={post} key={post.id} />
            </Grid>
          ))
        }
      </Grid>
  )

}

export default Posts
