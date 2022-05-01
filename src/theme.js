import { createTheme } from "@mui/material/styles"
import green from "@mui/material/colors/green"
import pink from "@mui/material/colors/pink"

const theme = createTheme({
    palette: {
        primary: {
            main: green[700]
        },
        secondary: {
            main: pink[600]
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 4,
            },
            styleOverrides: {
                elevation4: {
                    "&.paperLogin": {
                        padding: 32, 
                        textAlign: "center", 
                        width: "max-content",
                    },
                }, 
            },
        },
        MuiTypography: {
            styleOverrides: {
                body1: {
                    "&.welcome": {
                        fontSize: "2.125rem",
                        lineHeight: 1.235,
                        letterSpacing: "0.00735em",
                        color: green[700],
                        marginBottom: "1.6px",
                        marginTop: "16px",
                    },
                    "&.stranger": {
                        fontSize: "1.5rem",
                        lineHeight: 1.334,
                        letterSpacing: "0em",
                        color: green[700],
                        marginBottom: "20px",
                    },
                    "&.hello": {
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        fontWeight: "700",
                        letterSpacing: "0.0075em",
                        color: "#0000008a",
                    },
                    "&.txtLink": {
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline"
                        }
                    },
                    "&.employee": {
                        fontWeight: 500,
                        display: "inline",
                    }
                },
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    "&.faceIcon": {
                        fontSize: 45, 
                        color: green[700]
                    },
                    "&.mainPgIcon": {
                        fontSize: 100, 
                        color: green[700]
                    },
                    "&.appBarIcon": {
                        fontSize: 35, // = fontSize="large" property
                        color: "white",
                        marginLeft: "-12px", 
                        padding: "8px"
                    }
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: "bottom"
            }
        },
        MuiTextField: {
            defaultProps: {
                size: "small",
                sx: {
                    margin: "8px"
                }
            },
            styleOverrides: {
                root: {
                    "&.txtFldLogin": {
                        marginTop: "8px",
                        marginBottom: "8px", 
                        marginLeft: "50px",
                        marginRight: "50px",
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "small",
                sx: {
                    margin: "4px"
                },
            },
            styleOverrides: {
                text: {
                    color: "white",
                    fontSize: "1rem",
                },
                root: {
                    "&.btnLogin": {
                        display: "flex", 
                        width: "fit-content", 
                        marginTop: "16px", 
                        marginBottom: "24px"
                    }
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                position: "relative",
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    display: "flex",
                    "&.addOrEdit": {
                        flexDirection: "column", 
                        alignItems: "center", 
                        padding: 16
                    }
                },
            }
        },
        MuiCardContent: {
            defaultProps: {
                sx: {
                    flexGrow: 1,
                }
            },
            styleOverrides: {
                root: {
                    ":last-child": {
                        paddingBottom: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    justifyContent: "center"
                }
            }
        },
        MuiDivider: {
            defaultProps: {
                sx: {
                    margin: "5px"
                }
            }
        },
        MuiList: {
            defaultProps: {
                dense: true,
            }
        },
        MuiFab: {
            defaultProps: {
                sx: {
                    position: "fixed",
                    top: "auto",
                    bottom: 20,
                    left: "auto",
                    right: 20
                }
            }
        },
    } 
})

export default theme