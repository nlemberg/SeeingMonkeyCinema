import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { membersEdit } from "../../redux/actions/memberActions";


const EditMember = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [isValid, setIsValid] = useState(false);
    const { id } = useParams()
    const members = useSelector(state => state.members)
    const memberToEdit = members.find(member => member._id === id)
    const [member, setMember] = useState({_id: memberToEdit._id, name: memberToEdit.name, email: memberToEdit.email, address: {city: memberToEdit.address.city}})

    if (!sessionStorage.getItem("employeePermissions").includes("updateSubscriptions")) {
        history.push("/home/access-denied")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!member.name || !member.email || !member.address.city) {
            alert("All Fields are required. Please fill out the form")
        } else {
            setIsValid(!isValid);
        }
    }

    useEffect(() => {
        async function editMem() {
        if (isValid) {
            await dispatch(membersEdit(member))
            history.push("/home/subscriptions/allMembers")
        }}
        editMem()
    }, [isValid, dispatch])
  
    return (
        <Box display="flex" justifyContent="center">
            <Card className="addOrEdit">
                <CardHeader title="Add New Member" />
                <CardContent component="form" onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column">
                        <TextField label="Name" onChange={(e) => setMember({ ...member, name: e.target.value})} value={member.name} />
                        <TextField label="Email" onChange={(e) => setMember({ ...member, email: e.target.value})} type="email" value={member.email} />
                        <TextField label="City" onChange={(e) => setMember({ ...member, address: {city: e.target.value}})} value={member.address.city} />
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

export default EditMember;