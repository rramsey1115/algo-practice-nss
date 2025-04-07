import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { DownOnTheFarmAlgo } from "./downOnTheFarmAlog";

export const DownOnTheFarmForm = () => {
    const [animal1Legs, setAnimal1Legs] = useState(2)
    const [animal2Legs, setAnimal2Legs] = useState(4);
    const [animal1Percent, setAnimal1Percent] = useState(50);
    const [animal2Percent, setAnimal2Percent] = useState(100 - animal1Percent);
    const [totalLegs, setTotalLegs] = useState(0);
    const [totalAnimals, setTotalAnimals] = useState(0);

    const reset = () => {
        setAnimal1Percent(50);
        setAnimal2Percent(100 - animal1Percent);
        setTotalLegs(0);
        setTotalAnimals(0);
    }

    const handleCalculate = (e) => {
        e.preventDefault();
        // make sure all inputs have required values
        if (
            animal1Legs > 0 &&
            animal1Percent >= 0 &&
            animal2Legs > 1 &&
            animal2Percent >= 0 &&
            totalLegs > 0
        ) {
            // call algo function to perform calculations. should return a number, not guaranteed to be whole number
            const result = DownOnTheFarmAlgo(animal1Legs, animal1Percent, animal2Legs, animal2Percent, totalLegs);

            //  if result not a whole number, promt user to change inputs to create whole number of animals
            if (!Number.isInteger(result)) {
                window.alert("Invalid input — inputs do not result in a whole number of animals. Try adjusting your inputs.");
                setTotalAnimals(0);
                return;
            }

            // if result IS a whole number, send result to user
            setTotalAnimals(Number(result));
        } else {
            //  if missing values
            window.alert("Missing data - Complete all fields!");
            return;
        }
    }


    // every time animal 1 percent changes, update animal 2 to match the total 100%
    useEffect(() => {
        setAnimal2Percent(100 - animal1Percent);
    }, [animal1Percent]);

    return (<><form style={{ margin: "10px" }}>
        <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: "flex-start", minWidth: "300px" }}>
            {/* input animal 1 amount of legs */}
            <FormControl style={{ width: '330px' }}>
                <h4><u>Animal 1 Legs</u></h4>
                <RadioGroup
                    aria-labelledby="animal1-radios"
                    value={animal1Legs}
                    name="animal1-radios"
                    row
                    onChange={(e) => { setAnimal1Legs(Number(e.target.value)) }}
                >
                    <FormControlLabel value="1" control={<Radio color="success" />} label="1" />
                    <FormControlLabel value="2" control={<Radio color="success" />} label="2" />
                    <FormControlLabel value="3" control={<Radio color="success" />} label="3" />
                    <FormControlLabel value="4" control={<Radio color="success" />} label="4" />
                </RadioGroup>
            </FormControl>
            <Divider />
            {/* input animal 2 amount of legs */}
            <FormControl style={{ width: '330px' }}>
                <h4><u>Animal 2 Legs</u></h4>
                <RadioGroup
                    aria-labelledby="animal2-radios"
                    value={animal2Legs}
                    name="animal2-radios"
                    row
                    onChange={(e) => { setAnimal2Legs(Number(e.target.value)) }}
                >
                    <FormControlLabel value="1" control={<Radio color="success" />} label="1" />
                    <FormControlLabel value="2" control={<Radio color="success" />} label="2" />
                    <FormControlLabel value="3" control={<Radio color="success" />} label="3" />
                    <FormControlLabel value="4" control={<Radio color="success" />} label="4" />
                </RadioGroup>
            </FormControl>
        </div>
        <Divider />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", textAlign: "left" }}>
            {/* input percentage of legs */}
            <FormControl>
                <FormLabel id="percentage" sx={{ color: "whitesmoke" }}><h4><u>Percentage of Each</u></h4></FormLabel>
                <div style={{ width: 330, marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'whitesmoke', marginBottom: '0.5rem' }}>
                        <span>Animal 1: <strong>{animal1Percent}%</strong></span>
                        <span>Animal 2: <strong>{animal2Percent}%</strong></span>
                    </div>
                    <Slider
                        color="success"
                        value={animal1Percent}
                        min={0}
                        max={100}
                        onChange={(e) => setAnimal1Percent(e.target.value)}
                        valueLabelDisplay="off"
                    />
                </div>
            </FormControl>
        </div>
        <Divider />
        <div>
            {/* input total number of legs */}
            <FormControl>
                <FormLabel id="tatal-legs" sx={{ color: "whitesmoke" }}><h4><u>Total Number of Animal Legs <em>(0-500)</em></u></h4></FormLabel>
                <TextField
                    id="total-legs-input"
                    label="Total Legs"
                    type="number"
                    value={totalLegs}
                    variant="outlined"
                    color="success"
                    size="small"
                    error={totalLegs < 0 || totalLegs > 500}
                    helperText={totalLegs < 0 || totalLegs > 500 ? "Please enter a number between 0 and 500" : ""}
                    onChange={(e) => {
                        setTotalLegs(Number(e.target.value));
                    }}
                    slotProps={{ input: { min: 0, max: 500 } }}
                    sx={{
                        width: "120px",
                        mt: 2,
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
            </FormControl>
        </div>
        <Divider />
        {/* buttons to submit or reset form */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", width: "330px" }}>
            <Button variant="contained" color="success" size="medium" style={{ margin: '10px 10px 10px 0px' }} onClick={(e) => handleCalculate(e)}>Calculate</Button>
            <Button variant="contained" color="error" size="medium" style={{ margin: '10px' }} onClick={reset}>Reset</Button>
        </div>
        <div>
            {/* display result of form to user if valid */}

            <p style={{ color: "whitesmoke", marginTop: "10px" }}>
                Total Animals on the Farm: {totalAnimals > 0 && (<strong>{Math.round(totalAnimals)}</strong>)}
            </p>

        </div>
    </form></>)
}