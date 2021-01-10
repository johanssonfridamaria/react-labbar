import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonStyle: {
    color: 'green',
  }
});

const AddPost = () => {

  const classes = useStyles();

  return (
    <div>
      <Button  className={classes.buttonStyle} variant="outlined" color="inherit">Add</Button>
    </div>
  )
}

export default AddPost
