import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button, AppBar, Toolbar, } from "@mui/material";
import PersonPinIcon from '@mui/icons-material/PersonPin';

import AllMembers from "./allMembers";
import AddMember from "./addMember";
import EditMember from "./editMember";
import Member from "./member";

const Subscriptions = (props) => {
    const history = useHistory()

    let addMemberLink = null

    if (!sessionStorage.getItem("employeePermissions").includes("viewSubscriptions")) {
        history.push("/home/access-denied")
    }
    
    if (sessionStorage.getItem("employeePermissions").includes("createSubscriptions")) {
        addMemberLink = <Button variant="text" component={Link} to={`${props.match.url}/addMember`} >Add Member</Button>
    }
    
    return (
        <>
        <AppBar sx={{ marginBottom: 2, }} position="relative" >
            <Toolbar>
                <PersonPinIcon className="appBarIcon" />
                <Button variant="text" component={Link} to="/home/subscriptions/allMembers" >All Members</Button>
                {addMemberLink}
            </Toolbar>
        </AppBar>
            <Switch>
                <Route path={`${props.match.url}/allMembers`} component={AllMembers} />
                <Route path={`${props.match.url}/addMember`} component={AddMember} />
                <Route path={`${props.match.url}/editMember/:id`} component={EditMember} />
                <Route path={`${props.match.url}/members/:id`} component={Member} />
            </Switch>
        </>
    )
}

export default Subscriptions;