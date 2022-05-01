import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import Member from "./member";

const AllMembers = () => {
    const members = useSelector(state => state.members);
    const member = members.map((member) => {
        return <Grid item key={member._id} display="flex" xs={12} sm={6} md={4} ><Member member={member} /></Grid>})
    
    return (
        <Container >
            <Grid container spacing={2}>
                {member}
            </Grid>
        </Container>
    )
}

export default AllMembers;