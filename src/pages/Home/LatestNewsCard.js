import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        position: 'fixed',
        top: '100px',
        marginRight:'15px'
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
    }

});

export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const history = useHistory()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" align="center"  fontWeight="fontWeightBold" className={classes.box}>
                    
                        Now Trending
                    

                </Typography>
            </CardContent>
            <CardContent>
                <List>
                    {props.news.map((news,id) => {
                        return (
                            <>
                                <ListItem key={id}>
                                    <ListItemText primary={news.title} />
                                </ListItem>
                                <Button size="small" href={news.url} target='_blank' className={classes.button}>Learn More</Button>
                                <Divider />
                            </>
                        )
                    })}
                </List>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" variant="text" className={classes.center} onClick={() => { history.push('/explore') }}>Explore More</Button>
            </CardActions>
        </Card>
    );
}

