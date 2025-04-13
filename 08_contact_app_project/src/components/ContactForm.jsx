import React from "react";
import {
    Box,
    TextField,
    Button,
    Paper,
    Typography,
    createTheme,
    ThemeProvider,
} from "@mui/material";

// 인스타그램 스타일의 테마 색상
const theme = createTheme({
    palette: {
        primary: {
            main: "#C13584", // 인스타 핑크 느낌
        },
        secondary: {
            main: "#5851DB", // 인스타 보라 느낌
        },
    },
    typography: {
        fontFamily: "'Helvetica Neue', 'Roboto', sans-serif",
    },
});

const ContactForm = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                bgcolor="#fafafa"
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 5,
                        borderRadius: 4,
                        width: 360,
                        boxShadow: "0 12px 24px rgba(0,0,0,0.05)",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            color: "#262626",
                            marginBottom: 3,
                        }}
                    >
                        Contact Me 👋
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderRadius: 2,
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                },
                            }}
                        />
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            sx={{
                                borderRadius: 2,
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2,
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                borderRadius: 999,
                                textTransform: "none",
                                fontWeight: "bold",
                                background:
                                    "linear-gradient(45deg, #F56040, #C13584, #833AB4)",
                                boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default ContactForm;
