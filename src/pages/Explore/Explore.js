import { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import Card from './Card'
import Loader from '../../components/Loader'
import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        width:'80%',
        maxWidth:'980px',
        margin:'auto'
    },
    heading:{
        marginTop:'90px',
        marginLeft:'40px'
    }
});
const Explore = () => {
    const classes=useStyles()
    const getNews = async () => {
        const API_KEY = 'VTw5YWfTlwReMJtFNj9iuG3sX858zKzA'
        const data = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`)
        const res = await data.json()
        setNews(res)
        // console.log(res);
    }
    const [news, setNews] = useState(null)

    useEffect(() => {
        getNews()
    }, [])
    return (
        <div className={classes.root}>
            <SideBar/>
            <Typography align="center" className={classes.heading} variant="h3">Latest News</Typography>
            {news ? <Card news={news.results} />:<Loader/>}
        </div>
    )
}

export default Explore
