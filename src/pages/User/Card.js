import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box } from '@material-ui/core';
import {  deepPurple } from '@material-ui/core/colors';
import './style.css'
import Modal from './Modal'
const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    padding:'10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  values:{
      margin:'10px 0px'
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} id="responsive-div">
      <CardContent>
          <Box align="center">
      <Avatar className={classes.avatar}>{props.name?.charAt(0)}</Avatar>
          </Box>
        <Typography variant="h6" component="h3" align="center"className={classes.values}>
          Name:{props.name}
        </Typography>
        <Typography variant="h6" component="h3" align="center"className={classes.values}>
          Bio:{props.bio}
        </Typography>
      </CardContent>
      <Modal/>
    </Card>
  );
}