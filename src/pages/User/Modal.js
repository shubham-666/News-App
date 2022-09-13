import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CreateIcon from '@material-ui/icons/Create';
import './style.css'
import { useContext } from 'react';
import { AppContext } from '../../context';
import { Box, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    left:'50%',
    top:'30%',
    transform:'translateX(-50%)',
    // transform:'translateY(-50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon:{
      cursor:'pointer'
  },
  box:{
    marginTop:'15px'
  }
}));

export default function SimpleModal() {
    const {changeName,changeBio,user}=useContext(AppContext)

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
const [bio, setBio] = useState(user.bio)
const [name, setName] = useState(user.name)
const [loading, setLoading] = useState(false)
  const handleOpen = () => {
    setOpen(true);
  };
  const updateUser=async()=>{
    setLoading(true)
    const res=await fetch("https://news-app-backendd.herokuapp.com/update",{
            headers: {
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
            method:'POST',
            body:JSON.stringify({ bio,name})
        })
        const result=await res.json()
        if (!result.success) {
            window.alert("Something went wrong. Please try again later.")
        }
        else{
            window.alert("Details successfully updated")            
            changeBio(bio)
            changeName(name)
        }
        handleClose()
        setLoading(false)
  }
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Edit Profile</h2>
      <div>
    Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id="textInput"></input>
      </div>
    <br/>
      <div>
    Bio: <textarea value={bio} onChange={(e)=>{setBio(e.target.value)}} id="textarea"></textarea>
      </div>
      <Button color='primary' disabled={loading} variant='contained' onClick={updateUser}>{loading?'Please Wait...':'Submit'}</Button>
    </div>
  );

  return (
    <div>
      <Box align="center">
      <Button color="primary" onClick={handleOpen} variant="contained">Edit Profile</Button>
      </Box>
      <Box align="center">
      
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
