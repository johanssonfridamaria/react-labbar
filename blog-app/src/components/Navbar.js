import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navbar: {
    background: 'darkBlue'
  },
  logo: {
    flex: 1,
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: '1rem',
  },
  isActive: {
    color: '#ddd'
  }

})


const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.logo} >Blog</Typography>
        <Typography>
          <NavLink activeClassName={classes.isActive} exact className={classes.link} to="/">Posts</NavLink>
          <NavLink activeClassName={classes.isActive} exact className={classes.link} to="/create">Create post</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

