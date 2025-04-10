import { Button, TextField, Paper, Typography, Box, Alert } from "@mui/material";
import { useState } from "react";
import { wordsPalAlgo } from "./wordsPalAlgo";

export const WordsPalForm = () => {
    const [input, setInput] = useState("");
    const [palList, setPalList] = useState([]);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState(null); // null | "success" | "error"

    const handleSubmit = () => {
        if (wordsPalAlgo(input)) {
            setScore(score + 1);
            setPalList((prev) => [...prev, input]);
            setStatus("success");
            setInput("");
        } else {
            setScore(0);
            setPalList([]);
            setStatus("error");
            setInput("");
        }

        // Clear message after 2 seconds
        setTimeout(() => setStatus(null), 2000);
    };


    return (
        <form style={{textAlign:"center"}}>
            <Typography variant="h5" gutterBottom>
                Input your Palindrome!
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={2}>
                <TextField
                    id="wordPal-input"
                    label="Palindrome"
                    type="text"
                    value={input}
                    variant="outlined"
                    color="success"
                    size="small"
                    onChange={(e) => setInput(e.target.value)}
                    sx={{
                        input: { color: "whitesmoke" },
                        label: { color: "whitesmoke" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "whitesmoke" },
                            "&:hover fieldset": { borderColor: "#66bb6a" },
                            "&.Mui-focused fieldset": { borderColor: "#66bb6a" },
                        },
                    }}
                />
                <Button size="medium" variant="contained" color="success" onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
            <Box width={'250px'} margin={'2px auto'}>
                {status === "success" && (
                    <Alert severity="success" sx={{ mt: 2 }}>
                        That's a palindrome! ✅
                    </Alert>
                )}
                {status === "error" && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        Nope, not a palindrome. ❌
                    </Alert>
                )}
            </Box>

            <Typography variant="h5" sx={{ mb: 2}}>
                Correct Palindromes: {score}
            </Typography>
            <Box>
                {palList.map((item, index) => (
                    <Typography key={index} variant="h6" sx={{ fontStyle: "italic" }}>
                        {item}
                    </Typography>
                ))}
            </Box>
        </form>
    );
};
