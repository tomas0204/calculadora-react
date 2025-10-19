import BillInput from "./BillInput"
import { useState } from "react";
import TipPercentage from "./TipPercentage";


function TipCalculator() {

    const [bill, setBill] = useState(0)
    const [percentage, setPercentage] = useState(0)
    console.log("Monto:", bill)
    console.log("Porcentaje:", percentage)
    return (
        <div>
            <BillInput bill={bill} setBill={setBill} />
            <TipPercentage percentage={percentage} setPercentage={setPercentage} />
        </div>
    )


}

export default TipCalculator