function PeopleCounter({people, SetPeople}) {
  return (
    <>
            <div className="mb-3 input-group mb-3" >
                <label className="form-label">Cantidad de Personas</label>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    value={people}
                    onChange={(e) => SetPeople(Number(e.target.value))}
                    min="0"
                />
            </div>
    </>
  )
}

export default PeopleCounter