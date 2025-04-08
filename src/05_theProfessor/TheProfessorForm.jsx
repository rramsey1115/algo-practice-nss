import { Button, TextField } from "@mui/material";
import { useState } from "react"
import { theProfessorAlgo } from "./theProfessorAlgo.js";

export const TheProfessorForm = () => {
    const [grades, setGrades] = useState([]);
    const [currentGrade, setCurrentGrade] = useState(0);
    const [output, setOutput] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        const newGrade = Number(currentGrade);
        if (newGrade < 0 || newGrade > 100) {
            setCurrentGrade(0);
            window.alert("Please only enter grades between 0 and 100.")
            return;
        }
        const copy = [...grades];
        copy.push(newGrade);
        setCurrentGrade(0);
        setGrades(copy);
    }

    const handleClear = (e) => {
        e.preventDefault();
        setGrades([]);
        setCurrentGrade(0);
        setOutput([]);
    }

    const handleCalculate = () => {
        if (grades.length > 0) {
            setOutput(theProfessorAlgo(grades));
        } else {
            window.alert("Must enter one or more grades in order to calculate.")
        }
    }

    return (<>
        <form>
            <h4>Enter grades one at a time, which will be added below.</h4>
            <div>
                {grades?.length == 0
                    ? <h4><em>List of Grades</em></h4>
                    : grades.map((g, index) => { return <h3 key={index} style={{ margin: '1px' }}>{g}</h3> })
                }
            </div>
            <TextField
                id="grades-input"
                label="Grade"
                type="number"
                value={currentGrade == 0 ? "" : currentGrade}
                variant="outlined"
                color="success"
                size="small"
                error={currentGrade < 0 || currentGrade > 100}
                helperText={
                    currentGrade < 0 || currentGrade > 100
                        ? "Please enter a number between 0 and 100"
                        : ""
                }
                onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") {
                        setCurrentGrade(0);
                        return;
                    }

                    const val = Number(raw);

                    if (val < 0) {
                        return
                    } else if (val > 100) {
                        return
                    } else {
                        setCurrentGrade(val);
                    }
                }}
                slotProps={{
                    input: {
                        min: 0,
                        max: 100,
                        step: 1,
                    },
                }}
                sx={{
                    width: "120px",
                    m: 2,
                    input: {
                        color: "whitesmoke",
                    },
                    label: {
                        color: "whitesmoke",
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "whitesmoke",
                        },
                        "&:hover fieldset": {
                            borderColor: "#66bb6a",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#66bb6a",
                        },
                    },
                }}
            />

            <Button variant="contained" color="success" size="medium" style={{ margin: '16px 4px' }} onClick={(e) => handleAdd(e)}>Add</Button>
            <Button variant="contained" color="error" size="medium" style={{ margin: '16px 4px' }} onClick={(e) => handleClear(e)}>Clear</Button>
            <div>
                <Button variant="contained" color="success" size="medium" style={{ margin: '16px 4px' }} onClick={handleCalculate}>Calculate</Button>
            </div>
        </form>
        <div>
            <h4>Output:</h4> {output.length == 0
                ? ""
                : output.map(num => <h3 key={num}>{num}</h3>)
            }
        </div></>)
}