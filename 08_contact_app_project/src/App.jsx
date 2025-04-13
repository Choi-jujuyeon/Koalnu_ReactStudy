import React from "react";
import Grid from "@mui/material/Grid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
const App = () => {
    return (
        <div>
            <h1>연락처 앱</h1>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <ContactForm />
                </Grid>
                <Grid size={6}>
                    <ContactList />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
