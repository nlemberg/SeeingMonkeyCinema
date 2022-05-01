import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Container, Fab, Grid, TextField, Paper, Tooltip, InputAdornment, } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SearchIcon from '@mui/icons-material/Search';
import Movie from "./movie";

const AllMovies = () => {

    const movies = useSelector(state => state.movies)
    const [searchTerm, setSearchTerm] = useState("")
   
    let movie = movies.map(movie => {
    return <Grid item key={movie._id} display="flex" xs={12} sm={6} md={4} ><Movie movie={movie} /></Grid>})
    
    if (searchTerm.length > 0) {
        movie = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm))
        .map(movie => {
            return <Grid item key={movie._id} display="flex" xs={12} sm={6} md={4} ><Movie movie={movie} /></Grid>
        })
    }

    return (
        <Container >
            <Box sx={{ display: "flex" , justifyContent: "center", padding: 2 }}>
                <TextField 
                label="Search" 
                placeholder="Movie Name..." 
                sx={{ backgroundColor: "background.paper", margin: "8px", marginTop: 0 }}
                onChange={e => setSearchTerm(e.target.value)} 
                InputProps={{ endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>
                ),}} />
            </Box>
            <Grid container spacing={2}>
                {movie}
            </Grid>
            <Tooltip title="Back to Top" >
                <Fab color="primary" onClick={() => window.scroll({ top: 0, left: 0 })} > <ArrowUpwardIcon/></Fab>
            </Tooltip>
        </Container>
    )
}

export default AllMovies;