import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button, AppBar, Toolbar, } from "@mui/material";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AllEmployees from "./allEmployees";
import AddEmployee from "./addEmployee";
import EditEmployee from "./editEmployee"

const Employees = (props) => {

    return (
        <>
        <AppBar sx={{ marginBottom: 2, }} position="relative" >
            <Toolbar>
                <BadgeOutlinedIcon className="appBarIcon" />
                <Button variant="text" component={Link} to={`${props.match.url}/allEmployees`} >All Employees</Button>
                <Button variant="text" component={Link} to={`${props.match.url}/addEmployee`} >Add Employee</Button>
            </Toolbar>
        </AppBar> 
            <Switch>
                <Route path={`${props.match.url}/allEmployees`} component={AllEmployees} />
                <Route path={`${props.match.url}/addEmployee`} component={AddEmployee} />
                <Route path={`${props.match.url}/editEmployee/:id`} component={EditEmployee} />
            </Switch>
        </>
    )
}

export default Employees;