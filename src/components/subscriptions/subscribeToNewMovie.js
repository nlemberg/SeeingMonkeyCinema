import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, FormControl, MenuItem, TextField, Typography } from "@mui/material";
import { membersEditSubscription } from "../../redux/actions/memberActions";

const SubscribeToNewMovie = (props) => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const moviesNotWatched = movies.filter(movie => props.watchedIdsArr.includes(movie._id) ? null : movie)
    const movieOption = moviesNotWatched.map(movie => <MenuItem key={movie._id+"available"} value={movie._id} >{movie.name}</MenuItem>)
    const [movieToWatch, setMovieToWatch] = useState({movieID: "", dateWatched: new Date().toISOString().slice(0, 10)})
    const [isValid, setIsValid] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!movieToWatch.movieID || !movieToWatch.dateWatched) {
            alert("Please select both movie and date.")
        } else {
            setIsValid(!isValid);
        }        
    }
    
    useEffect(() => {
        async function subscribeToMovie() {
            if (isValid) {
                await dispatch(membersEditSubscription(props.memberId, {...movieToWatch}))
                props.callback(false)
            }
        }
        subscribeToMovie()
    }, [isValid, dispatch])

    return (
        <Box component="form" onSubmit={handleSubmit} display="flex" >
            <FormControl>
            <TextField 
            select
            label="Select Movie"
            onChange={(e) => setMovieToWatch({...movieToWatch, movieID: e.target.value})}
            >
                {movieOption}
            </TextField>
            <TextField 
            type="date"
            label="Date"
            onChange={(e) => setMovieToWatch({...movieToWatch, dateWatched: e.target.value})}
            defaultValue={new Date().toISOString().slice(0, 10)}
            />
            <Button type="submit" sx={{ backgroundColor: "primary.dark" }} >Subscribe</Button>
            </FormControl>
        </Box>
    )
}

export default SubscribeToNewMovie;