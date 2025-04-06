import { Button, Slider, Stack, TextField } from "@mui/material"
import { useState } from "react";
import { tallBuildingsAlgo } from "./tallBuildingsAlgo";

export const TallBuildingsForm = () => {
    // initally have 4 buldings at 500 each as default values
    // sliders will adjust heights based on input
    // numSelected will generate the sliders based on user selecting numOfBuildings
    const [buildings, setBuildings] = useState([500, 500, 500, 500]);
    const [numOfBuildings, setNumOfBuildings] = useState(4);
    const [numSelected, setNumSelected] = useState(false);
    const [calculated, setCalculated] = useState(false);
    const [result, setResult] = useState({ maxHeight: 0, numOfMax: 0 })

    const calculate = () => {
        setResult(tallBuildingsAlgo(buildings));
        setCalculated(true);
    }

    const reset = () => {
        setCalculated(false);
        setNumSelected(false);
        setNumOfBuildings(4);
        setBuildings([500, 500, 500, 500]);
    };

    return (<>
        <form>
            <p>Select how many buildings you would like to calculate. <em>Between 2 and 6.</em></p>
            <TextField
                id="num-buildings-input"
                label="Buildings"
                type="number"
                value={numOfBuildings}
                variant="outlined"
                color="success"
                size="small"
                error={numOfBuildings < 2 || numOfBuildings > 6}
                helperText={numOfBuildings < 2 || numOfBuildings > 6 ? "Please enter a number between 2 and 6" : ""}
                onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") {
                        setNumOfBuildings(2);
                        return;
                    }
                    const parsed = Number(val);
                    if (!isNaN(parsed) && parsed >= 2 && parsed <= 6) {
                        setNumOfBuildings(parsed);
                    } else if (isNaN(parsed)) {
                        setNumOfBuildings(2);
                    }
                }}
                slotProps={{ input: { min: 2, max: 6 } }}
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
            <div>
                <Button
                    color="success"
                    variant="contained"
                    sx={{ margin: "10px" }}
                    size="medium"
                    onClick={(e) => {
                        e.preventDefault();
                        setBuildings(Array(numOfBuildings).fill(500)) // sets array to correct number of entries, all at 500
                        setNumSelected(true);
                    }}
                >Select</Button>
            </div>
            {numSelected == false
                ? (<p>Select a number of bulidings to continue.</p>)
                : (<><p>Adjust the sliders to compare building heights:</p>
                    <Stack sx={{ height: 350, margin: "10px auto" }} spacing={3} direction="row">
                        {buildings.map((val, index) => {
                            return (<Slider
                                key={index}
                                aria-label="building"
                                orientation="vertical"
                                valueLabelDisplay="auto"
                                value={val}
                                min={50}
                                max={2000}
                                step={50}
                                color="success"
                                onChange={(e) => {
                                    const copy = [...buildings];
                                    copy[index] = e.target.value;
                                    setBuildings(copy);
                                }}
                            />)
                        })}

                    </Stack>
                </>)}
            <div>
                <Button
                    disabled={!numSelected}
                    color="success"
                    variant="contained"
                    sx={{ margin: "10px" }}
                    size="medium"
                    onClick={calculate}
                >Calculate</Button>
                <Button
                    color="error"
                    variant="contained"
                    sx={{ margin: "10px" }}
                    size="medium"
                    onClick={reset}
                >Reset</Button>
            </div>
        </form>
        {!calculated ? "" :
            <div>
                <h2><u>Result:</u></h2>
                <h4>Max Height: {result.maxHeight > 0 ? result.maxHeight : ""}</h4>
                <h4>Buildings with Max Height: {result.numOfMax > 0 ? result.numOfMax : ""}</h4>
            </div>
        }
    </>)
}