import React, { useState } from 'react'
import { Button, Input, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import theme from '../theme';

const useStyles = makeStyles({
  addForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputStyle: {
    marginBottom: '2rem',
    paddingLeft: '0.3rem',
  },
  labelStyle: {
    marginBottom: '0.5rem',
  },
  buttonStyle: {
    background: '#333',
    color: '#fff',
  }
});

const AddPost = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const classes = useStyles();

  return (
    <form className={classes.addForm}>
      <div>
        <InputLabel className={classes.labelStyle} htmlFor="title" margin="normal">Title</InputLabel>
        <Input className={classes.inputStyle} id="title" value={title} onChange={e => setTitle(e.target.value)} fullWidth />
      </div>
      <div>
        <InputLabel  className={classes.labelStyle}  htmlFor="title" >Body</InputLabel>
        <Input className={classes.inputStyle} id="body" value={body} onChange={e => setBody(e.target.value)} fullWidth />
      </div>
      <div>
        <Button className={classes.buttonStyle}>Add</Button>
      </div>
    </form>
  )
}

export default AddPost
