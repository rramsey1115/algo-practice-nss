import { Button, Divider, TextField } from "@mui/material"
import { useState } from "react"
import { dragonFlightAlgo } from "./dragonFlightAlgo";

export const DragonFlightForm = () => {
    const [result, setResult] = useState([]);
    const [dragonInput, setDragonInput] = useState(0);
    const [kingInput, setKingInput] = useState(0);
    const [dragonArray, setDragonArray] = useState([]);
    const [custom, setCustom] = useState(false);
    const [base, setBase] = useState(false);
    const [calculateClicked, setCalculateClicked] = useState(false);
    const baseData = [120, 340, 560, 230, 550]
    const baseDragon = 670

    const handleCalculate = () => {
        if (dragonArray.length >= 2 && kingInput > 0 && kingInput <= 500) {
            setResult(dragonFlightAlgo(dragonArray, kingInput));
            setCalculateClicked(true);
        }
    }

    const handleReset = () => {
        setCalculateClicked(false);
        setBase(false);
        setResult([]);
        setDragonArray([]);
        setDragonInput(0);
        setKingInput(0);
        setCustom(false);
    }

    return (<>
        <form>
            <Button
                color="success"
                variant="contained"
                size="medium"
                sx={{ margin: "12px 12px 12px 0px" }}
                onClick={() => {
                    setResult(dragonFlightAlgo(baseData, baseDragon));
                    setCustom(false);
                    setBase(true)
                    setCalculateClicked(false);
                }}
            >Calculate Base Case</Button>
            <Button
                color="success"
                variant="contained"
                size="medium"
                sx={{ margin: "12px 12px 12px 12px" }}
                onClick={() => {
                    setCustom(true);
                    setBase(false);
                    setResult([]);
                    setDragonArray([]);
                    setDragonInput(0);
                    setKingInput(0);
                    setCalculateClicked(false);
                }}
            >Calculate Custom Case</Button>
            <Button
                color="error"
                variant="contained"
                size="medium"
                sx={{ margin: "12px 12px 12px 12px" }}
                onClick={handleReset}
            >Reset</Button>
        </form>
        {base == true ? <div>
            <h4>Base Case Result:</h4>
            {result.length >= 2
                ? <><h2>King's flight distance: {baseDragon}</h2><h2>Flight paths equal king's: {result[0]}, {result[1]}</h2></>
                : <h4><span style={{ color: 'red' }}><em>{result[0]}</em></span></h4>
            }
        </div>
            : ""}
        {custom == true ?
            <form>
                <h4>Enter Custom Flight Distances:</h4>
                <TextField
                    id="dragon-input"
                    label="Dragon Flight Distances"
                    type="number"
                    value={dragonInput == 0 ? "" : dragonInput}
                    variant="outlined"
                    color="success"
                    size="small"
                    error={dragonInput < 0 || dragonInput > 500}
                    helperText={
                        dragonInput < 0 || dragonInput > 500
                            ? "Please enter a number between 0 and 500"
                            : ""
                    }
                    onChange={(e) => {
                        let val = Number(e.target.value);
                        if (val >= 0 && val <= 500) {
                            setDragonInput(val);
                        }
                    }}
                    slotProps={{
                        input: {
                            min: 0,
                            max: 500,
                            step: 10,
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
                <Button
                    color="success"
                    variant="contained"
                    size="medium"
                    onClick={(e) => {
                        e.preventDefault();
                        const copy = [...dragonArray]
                        copy.push(dragonInput);
                        setDragonArray(copy);
                        setDragonInput(0);
                    }}
                    sx={{ margin: " 16px 16px 16px 4px" }}
                >Submit</Button>
                {dragonArray.length <= 0 ? ""
                    : <><h4>Dragon Distances:</h4>
                        {dragonArray.map((num) => <h3>{num}</h3>)}
                    </>
                }
                <Divider />
                <h4>Enter King's Dragon Flight Distance:</h4>
                <TextField
                    id="king-input"
                    label="King Flight Distances"
                    type="number"
                    value={kingInput == 0 ? "" : kingInput}
                    variant="outlined"
                    color="success"
                    size="small"
                    error={kingInput < 0 || kingInput > 500}
                    helperText={
                        kingInput < 0 || kingInput > 500
                            ? "Please enter a number between 0 and 500"
                            : ""
                    }
                    onChange={(e) => {
                        let val = Number(e.target.value);
                        if (val >= 0 && val <= 500) {
                            setKingInput(val);
                        }
                    }}
                    slotProps={{
                        input: {
                            min: 0,
                            max: 500,
                            step: 10,
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
                {dragonArray.length >= 2 && kingInput > 0 && kingInput <= 500
                    ? <Button
                        color="success"
                        variant="contained"
                        size="medium"
                        sx={{ margin: " 16px 16px 16px 4px" }}
                        onClick={handleCalculate}
                    >Calculate Trip</Button>
                    : <h4>Please enter at least 2 valid dragon flight distances, as well as a valid King dragon distance.</h4>}
                <Divider />
                <div>
                    {result.length > 1 && calculateClicked
                        ? <><h2>King's flight distance: {kingInput}</h2><h2>Flight paths equal king's: {result[0]}, {result[1]}</h2></>
                        : ""
                    }
                    {result.length == 1 && calculateClicked ?
                        <h4><span style={{ color: 'red' }}><em>{result[0]}</em></span></h4>
                        : ""}
                </div>
            </form>
            : ""}
    </>)
}