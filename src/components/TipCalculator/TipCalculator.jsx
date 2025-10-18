import BillInput from "./BillInput"
import { useState } from "react";
import TipPercentage from "./TipPercentage";


function TipCalculator() {

    const [bill, setBill] = useState(0)
    console.log(bill)
    return (
    <div>
        <BillInput bill={bill} setBill={setBill} />
        <TipPercentage/>
    </div>
    )
       

}

export default TipCalculator