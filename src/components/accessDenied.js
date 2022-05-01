import React from "react";
import { Box, Container, Typography } from "@mui/material";

const AccessDenied = () => {
    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" padding={4} textAlign="center" >
                <Typography variant="h4">Oops. You don't have permission to view this page</Typography>
                <Typography variant="h5">Please contact your network administrator</Typography>
            </Box>
        </Container>
    )
}

export default AccessDenied