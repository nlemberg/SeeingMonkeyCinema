import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { employeeLoginsDelete } from "../../redux/actions/employeeLoginActions"

const Employee = (props) => {
    const dispatch = useDispatch()
    const permissions = props.employee.permissions
    const permissionsFinal = Object.keys(permissions).filter((key) => permissions[key]).join(", ").split(/(?=[A-Z])/).join(" ").toLowerCase()
    
    const deleteEmployee = () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(employeeLoginsDelete(props.employee.id))            
        }
    }

    return (
        <Box display="flex" flexGrow={1} justifyContent="center">
            <Card sx={{ flexDirection: "column", flexGrow: 1, minHeight: "250px" }}>
                <CardHeader title={`${props.employee.firstName} ${props.employee.lastName}`} />
                <CardContent>
                    <Typography><Typography className="employee"> Username: </Typography> {props.employee.userName}</Typography>
                    <Typography><Typography className="employee"> Created at: </Typography> {props.employee.createdAt.slice(0,10)}</Typography>
                    <Typography><Typography className="employee"> Permissions: </Typography> {permissionsFinal}</Typography>
                </CardContent>   
                <CardActions sx={{ paddingBottom: 2 }} >
                    <Button onClick={deleteEmployee}>Delete</Button>
                    <Button component={Link} to={`/home/employees/editEmployee/${props.employee.id}`}>Edit</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Employee;