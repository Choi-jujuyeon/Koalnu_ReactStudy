import React from "react";
import { usePhoneBookStore } from "../stores/usePhoneBookStore";
import {
    Box,
    Typography,
    Paper,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Search from "./Search";

// 인스타그램 스타일 테마
const theme = createTheme({
    palette: {
        primary: {
            main: "#C13584", // 인스타 핑크
        },
        secondary: {
            main: "#5851DB", // 인스타 보라
        },
    },
    typography: {
        fontFamily: "'Helvetica Neue', 'Roboto', sans-serif",
    },
});

const ContactList = () => {
    const { phoneBook } = usePhoneBookStore();
    // console.log("📞 phoneBook:", phoneBook);

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                minHeight="100vh"
                bgcolor="#fafafa"
                paddingTop={8}
                paddingX={2}
            >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#262626"
                    marginBottom={4}
                >
                    My Contacts 📱
                </Typography>
                <Search />
                {Array.isArray(phoneBook) && phoneBook.length > 0 ? (
                    phoneBook.map((item) => (
                        <Paper
                            key={item.id}
                            elevation={3}
                            sx={{
                                width: 320,
                                padding: 2,
                                borderRadius: 4,
                                marginBottom: 2,
                                background: "#fff",
                                boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                            }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.phoneNumber}
                            </Typography>
                        </Paper>
                    ))
                ) : (
                    <Typography color="text.secondary">
                        No contacts yet. Add some! ✨
                    </Typography>
                )}
            </Box>
        </ThemeProvider>
    );
};

export default ContactList;
