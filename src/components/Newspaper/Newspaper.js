import { CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-31&sortBy=publishedAt&apiKey=5ff8ac0bf3584d34979964e6aa5dba6e')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            {articles.length === 0 ?
                <CircularProgress />
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        articles.map(article => <Grid item xs={2} sm={4} md={4}>
                            <News article={article}></News>
                        </Grid>)
                    }
                </Grid>
            }
        </div>
    );
};

export default Newspaper;