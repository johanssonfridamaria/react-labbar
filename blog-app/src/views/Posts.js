import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import PostCard from '../components/PostCard';
import { PostsContext } from '../contexts/PostsContext';


const Posts = () => {
  const { posts } = useContext(PostsContext);

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
