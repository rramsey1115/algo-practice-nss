import { Button, Divider, FormLabel, TextField } from "@mui/material";
import { useState } from "react";
import { LeaderBoard } from "./LeaderBoard";
import { arcadeEliteAlgo } from "./arcadeEliteAlgo";

export const ArcadeEliteForm = () => {
    const [input, setInput] = useState(10);
    const [scoreList, setScoreList] = useState([]);
    const [topFiveScores, setTopFiveScores] = useState([490, 450, 450, 310, 480, 350]);
    const [scoresAdded, setScoresAdded] = useState([]);

    const handleAdd = () => {
        if (input > 10 && input <= 500) {
            setScoreList([...scoreList, input]);
        } else {
            return;
        }
    }

    const handleReset = () => {
        setInput(10);
        setScoreList([]);
    }

    const handleCalculate = () => {
        setTopFiveScores(arcadeEliteAlgo(topFiveScores, scoreList).topScores);
        setScoresAdded(arcadeEliteAlgo(topFiveScores, scoreList).scoresAdded);
        setInput(10);
        setScoreList([]);
    }

    return (<form>
        <h4><u>Top Scores</u></h4>
        <LeaderBoard topScores={topFiveScores} />
        <FormLabel id="arcade-score-label" sx={{ color: "whitesmoke" }}><h4><u>Add User Scores: <em>(10-500)</em></u></h4></FormLabel>
        <TextField
            id="arcade-score-input"
            label="Score"
            type="number"
            value={input}
            variant="outlined"
            color="success"
            size="small"
            error={Number(input) < 10 || Number(input) > 500}
            helperText={Number(input) < 10 || Number(input) > 500 ? "Please enter a number between 10 and 500" : ""}
            onChange={(e) => {
                const val = e.target.value;
                const parsed = Number(val);
                if (!isNaN(parsed)) {
                    setInput(parsed);
                } else {
                    setInput(10);
                }
            }}
            inputProps={{ min: 10, max: 500, step: 10 }}
            slotProps={{ input: { min: 10, max: 500, step: 10 } }}
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
        <Button color="success" variant="contained" onClick={handleAdd} sx={{ margin: '18px 8px' }}>Add Score</Button>
        <Button color="error" variant="contained" onClick={handleReset} sx={{ margin: '18px 8px' }}>Reset</Button>
        <Divider />
        <h4><u>Scores</u></h4>
        {scoreList.length > 0 && scoreList.map((item, index) => {
            return (<h3 key={index}>{item}</h3>)
        })}
        <Divider />
        <Button variant="contained" color="success" onClick={handleCalculate} sx={{ margin: '18px 8px' }}>Calculate High Score</Button>
        <h4><u>Your Scores Added to Leaderboard:</u></h4>
        {scoresAdded.length > 0 ? scoresAdded.map((score, index) => {
            return (<h4 key={index}><em>{score}</em></h4>)
        }) : "No Scores Added"}
    </form>)
}