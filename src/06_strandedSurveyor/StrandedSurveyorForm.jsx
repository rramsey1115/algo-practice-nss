import { Button, ButtonGroup, Collapse, TextField } from "@mui/material"
import { useState } from "react"
import { strandedSurveyorAlgo } from "./strandedSurveyorAlgo";

export const StrandedSurveyorForm = () => {
    const surveyorMasses = [
        53035, 84950, 100012, 75128, 96658, 80583, 72951, 131866, 99675, 115923,
        65140, 59430, 81288, 53129, 96172, 58912, 138055, 62920, 122353, 59176,
        149310, 105061, 58808, 103111, 128538, 61366, 53480, 94427, 121742, 143966,
        63092, 92543, 67136, 81575, 131971, 71040, 57035, 114448, 101314, 123688,
        137916, 68612, 122453, 98141, 61137, 97628, 126791, 111826, 50630, 67829,
        126285, 97331, 88587, 64552, 111221, 89639, 72177, 132711, 51062, 98061,
        57919, 57166, 134565, 58677, 62505, 85253, 147337, 84791, 114516, 95597,
        139271, 83561, 68285, 100684, 86803, 85887, 74554, 113749, 81899, 107220,
        110959, 118220, 52743, 71651, 74775, 106517, 132133, 56919, 129699, 137357,
        75781, 59409, 134589, 131438, 101641, 105503, 104371, 145308, 75777, 107333,
    ]
    const [showSurveyor, setShowSurveyor] = useState(false);
    const [showCustom, setShowCustom] = useState(false);
    const [selected, setSelected] = useState(false);
    const [surveyorResult, setSurveyorResult] = useState(0);
    const [customResult, setCustomResult] = useState(0);
    const [input, setInput] = useState(100);
    const [totalWeight, setTotalWeight] = useState(0);
    const [moduleMasses, setModuleMasses] = useState(surveyorMasses);

    const calculateSurveyorFuel = () => {
        if (moduleMasses) {
            setSurveyorResult(strandedSurveyorAlgo(moduleMasses));
        }
    }

    const addToTotalWeight = () => {
        let num = Number(totalWeight);
        num += Number(input);
        setTotalWeight(num);
    }

    const handleResetCustomValues = () => {
        setModuleMasses([]);
        setCustomResult(0);
        setInput(100);
        setTotalWeight(0);
    }

    return (<>
        <form>
            <ButtonGroup variant="contained" aria-label="button group" color="success">
                <Button
                    color="success"
                    onClick={() => {
                        setModuleMasses(surveyorMasses)
                        calculateSurveyorFuel();
                        setSelected(true);
                        setShowSurveyor(true);
                        setShowCustom(false)
                    }}>Calculate Surveyor
                </Button>
                <Button
                    color="success"
                    onClick={() => {
                        setCustomResult(0);
                        setTotalWeight(0);
                        setModuleMasses([]);
                        setSelected(true);
                        setShowSurveyor(false);
                        setShowCustom(true)
                    }}>Calculate Custom
                </Button>
            </ButtonGroup>
        </form>
        <Collapse in={selected && showSurveyor} timeout={1000}>
            <div>
                <h2>Survey Data:</h2>
                <h4>Result of example module values:</h4>
                <h2>{surveyorResult} Fuel Required</h2>
            </div>
        </Collapse>
        <Collapse in={selected && showCustom} timeout={1000}>
            <div>
                <form>
                    <div>
                        <TextField
                            id="module-weight-input"
                            label="Module Weight"
                            type="number"
                            value={input}
                            variant="outlined"
                            color="success"
                            size="small"
                            error={input < 100 || input > 5000}
                            helperText={input < 100 || input > 5000 ? "Please enter a number between 100 and 5000" : ""}
                            onChange={(e) => {
                                setInput(Number(e.target.value));
                            }}
                            slotProps={{ input: { min: 100, max: 5000 } }}
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
                        <div></div>
                        <ButtonGroup variant="contained" color="success" style={{ marginTop: "10px" }}>
                            <Button
                                color="success"
                                size="medium"
                                disabled={input < 100 || input > 5000}
                                onClick={() => {
                                    if (input >= 2) {
                                        const copy = [...moduleMasses]
                                        copy.push(Number(input));
                                        setModuleMasses(copy);
                                        addToTotalWeight();
                                        setInput(100);
                                    }
                                }}>Add Module Weight
                            </Button>
                            <Button
                                color="success"
                                size="medium"
                                onClick={() => {
                                    setCustomResult(strandedSurveyorAlgo(moduleMasses))
                                }}>Calculate Fuel
                            </Button>
                        </ButtonGroup>
                    </div>
                </form>
                <h4><u>Custom Calculations Result for:</u></h4>
                <h4><strong>{moduleMasses.length || 0}</strong> total modules</h4>
                <h4><strong>{totalWeight}</strong> total module weight</h4>
                <h2>{customResult} Fuel Required</h2>
                <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    onClick={handleResetCustomValues}>Reset
                </Button>
            </div>
        </Collapse>
    </>)
}