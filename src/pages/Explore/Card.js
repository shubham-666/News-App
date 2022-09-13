import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {  Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router';
import './style.css'
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin:'50px '
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 25,
    },
    button: {
        marginLeft: '8px'
    },
    center: {
        display: 'block',
        width: '100%',
        margin: 'auto'
    },
    box: {
        marginBottom: '-8px',
        fontSize: '25px'
    },
    list:{
        margin:'10px 0px'
    }

});

export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const history = useHistory()
    return (
        <Card className={classes.root} id="content">
            <CardContent>
                    {props.news.map((news,id) => {                   
                        return (
                            <List key={id}>
                                <ListItem>
                                    <ListItemText primary={news.title} secondary={news.description}/>
                                </ListItem>
                                <Button size="small" href={news.url} target='_blank' color="primary" className={classes.button}>Learn More</Button>
                                <Divider />
                </List>
                        )
                    })}
            </CardContent>
        </Card>
    );
}

