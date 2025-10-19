
function ResultDisplay({ propinaTotal, totalConPropina, propinaPorPersona, totalPorPersona }) {
  return (
    <div>
      <p>Propina total: ${propinaTotal.toFixed(2)}</p>
      <p>Total con propina: ${totalConPropina.toFixed(2)}</p>
      <p>Propina por persona: ${propinaPorPersona.toFixed(2)}</p>
      <p>Total por persona: ${totalPorPersona.toFixed(2)}</p>
    </div>
  )
}

export default ResultDisplay
