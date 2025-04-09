
import { Button, ButtonGroup } from "@mui/material"
import { useEffect, useState } from "react"
import { numPalAlgo } from "./numPalAlgo";

export const NumPalForm = () => {
    const [numDigits, setNumDigits] = useState(2);
    const [result, setResult] = useState({ number1: 0, number2: 0, palindrome: 0 });

    const handleIncrease = () => {
        if (numDigits >= 1 && numDigits < 5) {
            setNumDigits(numDigits + 1);
        }
    }

    const handleDecrease = () => {
        if (numDigits > 2 && numDigits <= 5) {
            setNumDigits(numDigits - 1);
        }
    }

    // run my algo function on current numDigits on initial page load AND every time numDigits changes - only if within range 1-10
    useEffect(() => {
        if (numDigits >= 2 || numDigits <= 5) {
            setResult(numPalAlgo(numDigits))
        }
    }, [numDigits]);

    return (<>
        <form style={{ textAlign: "center" }}>
            <div>
                <h4>Select digits to calculate largest palindrome <em>(2-5) due to number size contraints</em></h4>
                <ButtonGroup variant="contained" color="success" orientation="vertical" sx={{ width: "25%", minWidth: "150px" }}>
                    <Button disabled={numDigits >= 5} onClick={handleIncrease}>Up</Button>
                    <Button disabled={numDigits <= 2} onClick={handleDecrease}>Down</Button>
                </ButtonGroup>
                <div>
                    <h2>Digits: {numDigits}</h2>
                    <h4>Largest palindrome:</h4>
                    <h3>{result.palindrome > 0 ? `${result.number1} x ${result.number2} = ${result.palindrome}` : ""}</h3>
                </div>
            </div>
        </form>
    </>)
}