import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@mui/material";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import allMovies from "./allMovies";
import Movie from "./movie";
import AddMovie from "./addMovie";
import EditMovie from "./editMovie";

const Movies = (props) => {
    const history = useHistory()

    let addMovieLink = null;

    if (!sessionStorage.getItem("employeePermissions").includes("viewMovies")) {
        history.push("/home/access-denied")
    }
    
    if (sessionStorage.getItem("employeePermissions").includes("createMovies")) {
        addMovieLink = <Button variant="text" component={Link} to={`${props.match.url}/addMovie`} >Add Movie</Button>
    }
    
    return (
        <>
        <AppBar sx={{ marginBottom: 2, }} >
            <Toolbar>
                <LocalMoviesIcon className="appBarIcon" />
                <Button variant="text" component={Link} to="/home/movies/allMovies" >All Movies</Button>
                {addMovieLink}
            </Toolbar>
        </AppBar>
            <Switch>
                <Route path="/home/movies/allMovies" component={allMovies} />
                <Route path="/home/movies/addMovie" component={AddMovie} />
                <Route path="/home/movies/editMovie/:id" component={EditMovie} />
                <Route path="/home/movies/:id" component={Movie} />
            </Switch>
        </>
    )
}

export default Movies;