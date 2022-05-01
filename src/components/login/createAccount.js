import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Container, Typography, TextField, Button, Box } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { employeeLoginsCreatePass } from "../../redux/actions/employeeLoginActions";


const CreateAccount = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [validPass, setValidPass] = useState(false);

    const employeeLogins = useSelector(state => state.employeeLogins)

    const handleError = (e) => {
        setValidPass(e.target.value ? true : false)
    }

    const validateForm = async (e) => {
        e.preventDefault();
        if (validPass) {
            const validUser = employeeLogins.find(employee => employee.userName === userName);
            if (validUser) {
                const newUser = {
                    ...validUser,
                    password
                }
                dispatch(employeeLoginsCreatePass(newUser))
                history.push("/")
            } else {
                alert("Could not find UserName. Please contact your system Admin.")
            }
        } else {
            alert("Please enter your password.")
        }
    }

    return (
        <Container>
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Paper className="paperLogin" >
                <FaceIcon className="faceIcon" />
                <Typography className="welcome" > Sign Up, </Typography>
                <Typography className="stranger" > Stranger </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" component="form" onSubmit={validateForm}>
                    <TextField className="txtFldLogin" label="Username" onChange={(e) => {setUserName(e.target.value)}} />
                    <TextField className="txtFldLogin" label="Password" onChange={(e) => {setPassword(e.target.value); handleError(e)}} type="password" />
                    <Button type="submit" className="btnLogin" > Let's Go! </Button>
                    <Typography> Already have an account? {<Typography component={Link} to="/" className="txtLink" > Log in </Typography>} </Typography>
                </Box>
                </Paper>
            </Box>
            </Container>
    )
}

export default CreateAccount