import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PostsContext } from '../contexts/PostsContext'


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
    '&:hover': {
      background: '#555'
    }
  }
});

const AddPost = () => {

  const { createPost } = useContext(PostsContext);

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const classes = useStyles();

  const onSub = (e) => {
    e.preventDefault();
    createPost(title, body);
    setBody('');
    setTitle('');
    history.push('/');
  }

  return (
    <form className={classes.addForm} onSubmit={onSub} >
      <div>
        <InputLabel className={classes.labelStyle} htmlFor="title">Title</InputLabel>
        <Input className={classes.inputStyle} id="title" value={title} onChange={e => setTitle(e.target.value)} fullWidth />
      </div>
      <div>
        <InputLabel className={classes.labelStyle} htmlFor="title" >Body</InputLabel>
        <Input className={classes.inputStyle} id="body" value={body} onChange={e => setBody(e.target.value)} fullWidth />
      </div>
      <div>
        <Button variant="contained" type="submit" className={classes.buttonStyle}>Add</Button>
      </div>
    </form>
  )
}

export default AddPost
