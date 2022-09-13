import React, { useEffect, useState } from 'react'
import CardComponent from './Card'
import useStyles from './styles'
import ResponsiveDrawer from '../../components/Sidebar'
import LatestNewsCard from './LatestNewsCard'
import { Grid } from '@material-ui/core'
import Loader from '../../components/Loader'
import './style.css'
const Home = () => {
    const classes = useStyles()
    const [explore, setExplore] = useState(null)
    const [news, setNews] = useState(null)
    const API_KEY = 'VTw5YWfTlwReMJtFNj9iuG3sX858zKzA'
    const getExplore = async () => {
        const data = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${API_KEY}`)
        const res = await data.json()
        setExplore(res)
    }
    const getNews = async () => {
        const data = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`)
        const res = await data.json()
        // console.log(res);
        setNews(res)
    }
    useEffect(() => {
        getNews()
        getExplore()
    }, [])
    return (
        <div className={classes.root}>
            <ResponsiveDrawer />
            <Grid container>
                <Grid item md={8} sm={12}>
                    <div className={classes.cards} id="responsive">
                        {explore ? explore.results.map((c,id) => { return (
                            
                        <CardComponent
                        key={id}
                         title={c.title} 
                        description={c.abstract} 
                        image={(c.multimedia)?c?.multimedia[2]?.url||'https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp':'https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp'} 
                        url={c.url} 
                        />) }) : <Loader />}
                    </div>
                </Grid>
                <Grid item md={4} id="side">
                    {news ? <LatestNewsCard news={news.results.slice(0,3)} />:<Loader/>}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
