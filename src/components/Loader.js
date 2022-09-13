import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:'465px',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  progress:{
      marginTop:'200px',
      marginLeft:'30px'
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress}/>
    </div>
  );
}
