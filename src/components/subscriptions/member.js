import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { membersDelete } from "../../redux/actions/memberActions";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Divider, List, Typography } from "@mui/material";
import MoviesWatched from "./moviesWatched";


const Member = (props) => {
    const dispatch = useDispatch()
    const members = useSelector(state => state.members)
    const { id } = useParams()

    let memberId;
    let member;
    
    let deleteButton = null;
    let editButton = null;

    if (id) {
        memberId = id
        member = members.find(member => member._id === id)
    } else if (props.member) {
        member = props.member
        memberId = props.member._id
    }
    
    const deleteMember = () => {
        if (window.confirm("Are you sure you want to delete this member?")) {
            dispatch(membersDelete(memberId))
        }
    }

    if (sessionStorage.getItem("employeePermissions").includes("deleteSubscriptions")) {
        deleteButton = <Button onClick={deleteMember}>Delete</Button>
    }
    
    if (sessionStorage.getItem("employeePermissions").includes("updateSubscriptions")) {
        editButton = <Button component={Link} to={`/home/subscriptions/editMember/${memberId}`} >Edit</Button>
    }

    return (
        <Box display="flex" flexGrow={1} justifyContent="center">
        <Card sx={{ flexGrow: 1, maxWidth: "sm", flexDirection: "column", maxHeight: 450, height: "100%" }} >
            <Box sx={{ display: "flex", flexDirection: "column", height: "fit-content" , justifyContent: "space-between", }}>
            <CardActionArea component={Link} to={`/home/subscriptions/members/${memberId}`}>
            <CardHeader
            avatar={<Avatar alt={member.name} src={`https://source.unsplash.com/random/?face&${member.name.split(" ")[0]}`} />}
            title={<Typography variant="h6">{member.name}</Typography>}
            sx={{ alignItems: "flex-start", }}
            />
            </CardActionArea>
            <CardContent>
            <Typography variant="subtitle1"> Email: {member.email}</Typography>
            <Typography variant="subtitle1"> City: {member.address.city}</Typography>
            </CardContent>
            <CardActions >
                {deleteButton}{editButton}            
            </CardActions>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column", height: "45%", overflow: "overlay" }}>
            <CardContent sx={{ paddingTop: 0 }} >
                <MoviesWatched memberId={memberId} />
            </CardContent>
            </Box>
        </Card>
        </Box>
    )
}

export default Member;