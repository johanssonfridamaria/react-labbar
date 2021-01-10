import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton >
          <MenuIcon />
        </IconButton>
        <Typography >Blog</Typography>
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/create">Add post</NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

