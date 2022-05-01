import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, List, Typography } from "@mui/material";
import { moviesDelete } from "../../redux/actions/movieActions";
import WhoWatchedThis from "./whoWatchedThis";

const Movie = (props) => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies);
    const { id } = useParams()
    let movieId
    let movie

    let deleteButton = null;
    let editButton = null;
    
    if (id) {
        movieId = id
        movie = movies.find(movie => movie._id === id)
    } else if (props.movie) {
        movie = props.movie
        movieId = props.movie._id
    }
        
    const deleteMovie = () => {
        if (window.confirm("Are you sure you want to delete this movie?")) {
            dispatch(moviesDelete(movieId))
        }
    }

    if (sessionStorage.getItem("employeePermissions").includes("deleteMovies")) {
        deleteButton = <Button onClick={deleteMovie}>Delete</Button>
    }

    if (sessionStorage.getItem("employeePermissions").includes("updateMovies")) {
        editButton = <Button component={Link} to={`/home/movies/editMovie/${movieId}`} >Edit</Button>
    }
         
    return (
        <Box display="flex" justifyContent="center" >
        <Card sx={{ alignItems: "space-between", maxWidth: "md" }} >
            <Grid container >
                <Grid item xs={5} >
                    <CardMedia component="img" image={movie.image.medium} alt={movie.name} width="100%" />
                </Grid>
                <Grid item xs={7} flexGrow="1" maxHeight={250} overflow="auto" >
                    <CardContent >
                        <CardActionArea component={Link} to={`/home/movies/${movieId}`} >
                        <Typography variant="h6">
                            {movie.name}, {movie.premiered.slice(0,4)}
                        </Typography>
                        </CardActionArea>
                        <Typography>
                            Genres: {movie.genres.join(", ")}
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1" fontWeight="500" >Subscribers:</Typography>
                        <List sx={{ overflow: "auto", maxHight: "50%", position: "relative", margin: 0, padding: 0 }} >
                            <WhoWatchedThis movieId={movieId} />
                        </List>
                    </CardContent>
                </Grid>
                <Grid item xs={12} alignSelf="flex-end" >
                    <CardActions >
                        {deleteButton}{editButton}            
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
        </Box>
    )
}

export default Movie;