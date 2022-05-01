import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Button, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import WelcomeHome from "./welcomeHome";
import Movies from "./movies/movies";
import Subscriptions from "./subscriptions/subscriptions";
import Employees from "./employees/employees";
import HelloUser from "./login/helloUser";
import AccessDenied from "./accessDenied";

const Home = (props) => {
    let employeeManagement = null;
    if (sessionStorage.getItem("employee") === "Admin") {
        employeeManagement = <Button variant="text" component={Link} to={`${props.match.url}/employees/allEmployees`} >Employees</Button>
    }
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: "primary.dark" }} >
                    <Toolbar>
                        <Box sx={{ flexGrow: 4 }}>
                            <Tooltip title="Home" >
                                <IconButton component={Link} to="/home/welcome" edge="start" ><HomeIcon fontSize="large" htmlColor="white" /></IconButton>
                            </Tooltip>
                            <Button variant="text" component={Link} to={`${props.match.url}/movies/allMovies`} >Movies</Button>
                            <Button variant="text" component={Link} to={`${props.match.url}/subscriptions/allMembers`} >Subscriptions</Button>
                            {employeeManagement}
                        </Box>
                        <Box>
                            <HelloUser />
                        </Box>
                        <Box>
                            <Tooltip title="Log Out" >
                                <IconButton component={Link} to="/" edge="end" sx={{ marginLeft: 1 }} ><LogoutIcon/></IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Switch>
                <Route path={`${props.match.url}/welcome`} component={WelcomeHome} />
                <Route path={`${props.match.url}/movies`} component={Movies} />
                <Route path={`${props.match.url}/subscriptions`} component={Subscriptions} />
                <Route path={`${props.match.url}/employees`} component={Employees} />
                <Route path={`${props.match.url}/access-denied`} component={AccessDenied} />
            </Switch>
        </>
    )
}

export default Home;