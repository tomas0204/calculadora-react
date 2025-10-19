
function BillInput({ bill, setBill }) {
    return (
        <>
            <div className="mb-3 input-group mb-3" >
                <label className="form-label">Monto Total </label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    min="0"
                />
            </div>
        </>
    )
}

export default BillInput