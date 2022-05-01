import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Paper, Container, Typography, TextField, Button, Box } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';

const Login = () => {
    const history = useHistory()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [validPass, setValidPass] = useState(false);
    const employeeLogins = useSelector((state) => state.employeeLogins)
    const employees = useSelector((state) => state.employees)
    const permissions = useSelector(state => state.permissions)

    if (sessionStorage) {
            sessionStorage.clear()
        }

    const validateForm = (e) => {
        e.preventDefault();
        if (validPass) {
            const validUser = employeeLogins.find(employee => employee.userName === userName && employee.password === password);
            if (validUser) {
                const thisEmployee = employees.find(employee => employee.id === validUser._id);
                const userPermissions = permissions.find(permission => permission.id === validUser._id).permissions
                const permissionsFinal = Object.keys(userPermissions).filter((key) => userPermissions[key])            
                sessionStorage.setItem("employee", thisEmployee.firstName)
                sessionStorage.setItem("employeePermissions", permissionsFinal)
                history.push("/home/welcome")
            } else {
                alert("Something went wrong. You must be an authorized epmloyee to log in.")
            }
        } else {
            alert("Please enter your password")
        }
    }
    
    const handleError = (e) => {
        setValidPass(e.target.value ? true : false)
    }

    return (
        <Container>
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Paper className="paperLogin" >
                <FaceIcon className="faceIcon" />
                <Typography className="welcome" > Welcome, </Typography>
                <Typography className="stranger" > Stranger </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" component="form" onSubmit={validateForm}>
                    <TextField label="Username" className="txtFldLogin" onChange={(e) => {setUserName(e.target.value)}} />
                    <TextField label="Password" className="txtFldLogin" onChange={(e) => {setPassword(e.target.value); handleError(e)}} type="password" />
                    <Button type="submit" className="btnLogin" >Log in</Button>
                    <Typography> New here? {<Typography className="txtLink" component={Link} to="/createAccount" >Create account</Typography>} </Typography>
                </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default Login;