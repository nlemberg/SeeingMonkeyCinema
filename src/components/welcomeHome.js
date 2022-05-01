import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const WelcomeHome = () => {
    let employeeIcon = null;
    if (sessionStorage.getItem("employee") === "Admin") {
        employeeIcon = (<Tooltip title="Employees" >
            <IconButton component={Link} to="/home/employees/allEmployees"><BadgeOutlinedIcon className="mainPgIcon" /></IconButton>
        </Tooltip>)
    }
    
    return (
        <Box display="flex" flexDirection="column" sx={{ alignItems: "center", textAlign: "center", padding: 5 }} >
            <Typography variant="h4"> Welcome </Typography>
            <Typography variant="h4" fontSize="100%" > to the </Typography>
            <Typography variant="h4" fontSize="280%" > Seeing Monkey Cinema </Typography>
            <Typography variant="h4"> Management System </Typography>
            <Typography variant="h4" fontSize="130%" marginY={4} > Where the movies are tv shows and the points don't matter </Typography>
            <Typography variant="h4" fontSize="100%" marginY={2} > Now where do you wanna go? </Typography>
            <Box display="flex">
                <Tooltip title="Movies" >
                    <IconButton component={Link} to="/home/movies/allMovies"><LocalMoviesIcon className="mainPgIcon" /></IconButton>
                </Tooltip>
                <Tooltip title="Members" >
                    <IconButton component={Link} to="/home/subscriptions/allMembers"><PersonPinIcon className="mainPgIcon" /></IconButton>
                </Tooltip>
                {employeeIcon}
            </Box>
        </Box>
    )
}

export default WelcomeHome