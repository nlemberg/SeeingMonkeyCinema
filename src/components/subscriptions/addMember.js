import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { membersAddNew } from "../../redux/actions/memberActions";

const AddMember = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [newMember, setNewMember] = useState({name: "", email: "", address: {city: ""}})
    const [isValid, setIsValid] = useState(false);

    if (!sessionStorage.getItem("employeePermissions").includes("createSubscriptions")) {
        history.push("/home/access-denied")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newMember.name || !newMember.email || !newMember.address.city) {
            alert("All Fields are required. Please fill out the form")
        } else {
            setIsValid(!isValid);
        }
    }

    useEffect(() => {
        async function addNew() {
            if (isValid) {
                await dispatch(membersAddNew(newMember))
                history.push("/home/subscriptions/allMembers")
            }
        }
        addNew()
    }, [isValid])

    return (
        <Box display="flex" justifyContent="center">
            <Card className="addOrEdit">
                <CardHeader title="Add New Member" />
                <CardContent component="form" onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column">
                        <TextField label="Name" onChange={(e) => setNewMember({ ...newMember, name: e.target.value})} />
                        <TextField label="Email" onChange={(e) => setNewMember({ ...newMember, email: e.target.value})} type="email" />
                        <TextField label="City" onChange={(e) => setNewMember({ ...newMember, address: {city: e.target.value}})} />
                    </Box>
                    <Box display="flex" justifyContent="center" padding={2}>
                        <Button component={Link} to={`/home/subscriptions/allMembers`}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default AddMember;