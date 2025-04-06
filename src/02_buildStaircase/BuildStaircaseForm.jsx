import { Button, TextField } from "@mui/material"
import { useState } from "react";
import { buildStaircaseAlgo } from "./BuildStaircaseAlgo";

export const BuildStaircaseForm = ({ setStaircase }) => {
    const [number, setNumber] = useState(6);

    const handleBuildBtn = () => {
        setStaircase(buildStaircaseAlgo(number))
    }

    return (<>
        <form>
            <h3>Decide how many stairs you would like to build <em>(0-20)</em>:</h3>
            <TextField
                id="staircase-input"
                label="Stairs"
                type="number"
                value={number}
                variant="outlined"
                color="success"
                size="small"
                error={number < 0 || number > 20}
                helperText={number < 0 || number > 20 ? "Please enter a number between 0 and 20" : ""}
                onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") {
                        setNumber(0);
                        return;
                    }
                    const parsed = Number(val);
                    if (!isNaN(parsed) && parsed >= 0 && parsed <= 20) {
                        setNumber(parsed);
                    } else if (isNaN(parsed)) {
                        setNumber(0);
                    }
                }}
                slotProps={{ input: { min: 0, max: 20 } }}
                sx={{
                    width: "120px",
                    m: 2,
                    input: {
                        color: 'whitesmoke', // input text color
                    },
                    label: {
                        color: 'whitesmoke', // label text color
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'whitesmoke',
                        },
                        '&:hover fieldset': {
                            borderColor: '#66bb6a',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#66bb6a',
                        },
                    }
                }}
            />
        </form>
        <div>
            <Button
                id="staircase-build-btn"
                className="form-button"
                color="success"
                size="medium"
                variant="contained"
                sx={{ margin: "16px" }}
                disabled={number < 0 || number > 20}
                onClick={(e) => {
                    e.preventDefault();
                    handleBuildBtn(e.currentTarget.value)
                }}
            >Build</Button>
        </div>
    </>)
}