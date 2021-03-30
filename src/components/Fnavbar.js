import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#3b5998'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: '300px',
    marginTop: '40px',
    fontSize:  '2rem'
  },
  extraStyle: {
      height: '99px',
  },
  button: {
       marginRight: '333px',
       fontSize: '1.5rem'
  }
}));



export default function Fnavbar() {
    const classes = useStyles();
     
    return (
        <div className={classes.root}>
        <AppBar className={classes.extraStyle}position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h5" className={classes.title}>
              WELCOME
            </Typography>
            <Button className={classes.button} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

      </div>

    )
}
