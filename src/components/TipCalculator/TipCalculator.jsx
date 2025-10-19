import BillInput from "./BillInput"
import { useState } from "react";
import TipPercentage from "./TipPercentage";
import PeopleCounter from "./PeopleCounter";
import ResultDisplay from "./ResultDisplay";


function TipCalculator() {

    const [bill, setBill] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [people, SetPeople] = useState(1)

    let propinaTotal = bill * (percentage / 100)
    let totalConPropina = bill + propinaTotal
    let propinaPorPersona  = propinaTotal / people
    let totalPorPersona    = totalConPropina / people

    return (
        <div>
            <PeopleCounter people={people} SetPeople={SetPeople}/>
            <BillInput bill={bill} setBill={setBill}/>
            <TipPercentage percentage={percentage} setPercentage={setPercentage} />
            <ResultDisplay 
                propinaTotal={propinaTotal}
                totalConPropina={totalConPropina}
                propinaPorPersona={propinaPorPersona}
                totalPorPersona={totalPorPersona}
            />
        </div>
    )


}

export default TipCalculator