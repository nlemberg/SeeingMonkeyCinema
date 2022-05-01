import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import SubscribeToNewMovie from "./subscribeToNewMovie";

const MoviesWatched = (props) => {
    const [subscribeSectionOn, setSubscribeSectionOn] = useState(false)
    const movies = useSelector(state => state.movies)
    const subscriptions = useSelector(state => state.subscriptions)
    let subscription = null;

    let moviesMemberWatched = <Typography variant="body2">None so far</Typography>;
    if (subscriptions.length > 0) {        
        subscription = subscriptions.find(sub => sub.memberID === props.memberId);
        if (subscription) {
            moviesMemberWatched = subscription.moviesWatched.map(el => {
                const movie = movies.find(movie => movie._id === el.movieID)
                const movieDate = el.dateWatched.slice(0, 10).split('-').reverse().join('/');
                return (<ListItem key={el.movieID+"watched"} component={Link} to={`/home/movies/${el.movieID}`} disablePadding >
                    <ListItemText primary={`${movie.name}, ${movieDate}`} />
                </ListItem>)
            })        
        }
    }

    let watchedIdsArr = [];
    if (subscription) {
        watchedIdsArr = subscription.moviesWatched.map(el => el.movieID)
    }

    const closeSubSection = (val) => {
        setSubscribeSectionOn(val)
    }

    let buttonText = "Subscribe to new movie"
    let subscribeSection = null;
    if (subscribeSectionOn) {
        subscribeSection = <SubscribeToNewMovie watchedIdsArr={watchedIdsArr} memberId={props.memberId} callback={closeSubSection}/>
        buttonText = "Cancel"
    }
    
    return (
        <Box sx={{ display: "flex", flexDirection: "column", }} >
        <Box alignSelf="center" textAlign="center" >
            <Button variant="outlined" sx={{ marginY: "12px" }} onClick={(e) => setSubscribeSectionOn(!subscribeSectionOn)}>{buttonText}</Button>
                {subscribeSection}
        </Box>
        <Box >
            <Typography variant="subtitle1" fontWeight="500" >Movies Watched:</Typography>
            <List >
                {moviesMemberWatched}
            </List>
        </Box>
        </Box >
    )
}

export default MoviesWatched;