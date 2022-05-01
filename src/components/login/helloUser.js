import { Typography } from "@mui/material";

const HelloUser = () => {
    const employee = sessionStorage.getItem("employee")
    return (
        <>
        <Typography className="hello" > Hello, {employee}! </Typography> 
        </>
    )
}

export default HelloUser;