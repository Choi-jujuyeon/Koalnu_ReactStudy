import React from "react";
import { TextField, Box } from "@mui/material";

const Search = ({ value, onChange }) => {
    const searchP = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            console.log("keyword: ", keyword);
        }
    };
    return (
        <Box width="100%" maxWidth={360} marginBottom={3}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="🔎Search contacts..."
                value={value}
                onChange={onChange}
                onKeyPress={searchP}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 4,
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                    },
                }}
            />
        </Box>
    );
};

export default Search;
