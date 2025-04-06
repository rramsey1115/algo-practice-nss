import { useState } from "react";
import { sumOfMultiplesAlgo } from "./sumMultiplesAlgo";
import { Button, TextField } from "@mui/material";

export const SumMultiplesForm = () => {
    const [num1, setNum1] = useState(3);
    const [num2, setNum2] = useState(5);
    const [range, setRange] = useState(10);
    const [result, setResult] = useState(23);

    const calculateSum = () => {
        setResult(0);
        setResult(sumOfMultiplesAlgo(num1, num2, range));
    }

    const handleReset = () => {
        setNum1(0);
        setNum2(0);
        setRange(0);
        setResult(0);
    }

    return (<><form className="form">
        <TextField
            type="number"
            label="First number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            variant="outlined"
            color="success"
            size="small"
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
        <TextField
            id="num2-input"
            type="number"
            value={num2}
            label="Second number"
            onChange={(e) => setNum2(Number(e.target.value))}
            variant="outlined"
            color="success"
            size="small"
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
        <TextField
            id="range-input"
            type="number"
            label="Range"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            variant="outlined"
            color="success"
            size="small"
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
        <div className="form-buttons">
            <Button className="form-button" color="success" variant="contained" size="small" onClick={(e) => {
                e.preventDefault();
                calculateSum();
            }}>Calculate</Button>
            <Button className="form-button" color="error" variant="contained" size="small" onClick={handleReset}>Reset</Button>
        </div>
        <h2 id="result-header">Result: {result}</h2>
    </>)
}