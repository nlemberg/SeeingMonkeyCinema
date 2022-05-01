import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { ListItem, ListItemText } from "@mui/material";

const WhoWatchedThis = (props) => {
    const subscriptions = useSelector(state => state.subscriptions);
    const members = useSelector(state => state.members);

    const whoWatchedThis = subscriptions.filter(subscription => !(!(subscription.moviesWatched.find((movie) => movie.movieID === props.movieId))))
        .map((subscription) => {
            const member = members.find((member) => member._id === subscription.memberID);
            const moviesWatched = subscription.moviesWatched.find((movie) => movie.movieID === props.movieId)
            const dateString = moviesWatched.dateWatched;
            const date = new Date(dateString).toLocaleDateString("en-GB");
            if (member) {
                return <ListItem key={member._id+"watchedthis"} component={Link} to={`/home/subscriptions/members/${member._id}`} disablePadding >
                    <ListItemText primary={`${member.name}, ${date}`} />
                    </ListItem> 
            } else {
                return null
            }
        })
        
    return (
        <>{whoWatchedThis}</>
    )
}

export default WhoWatchedThis;