import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    height: "100%",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between"

  },

})

const PostCard = ({ post }) => {

  const classes = useStyles();
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 50) + "..." : str;
  }

  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography variant="h5" gutterBottom align="center">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {truncate(post.body)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Read more</Button>
      </CardActions>
    </Card>
  )
}

export default PostCard
