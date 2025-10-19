function TipPercentage({ percentage, setPercentage }) {
    return (
        <div className="btn-toolbar mb-3" role="toolbar">
            <div className="btn-group me-2" role="group">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setPercentage(5)}
                > 5%
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setPercentage(10)}
                > 10%
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setPercentage(15)}
                > 15%
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setPercentage(20)}
                > 20%
                </button>
            </div>

            <div className="input-group">
                <div className="input-group-text">@</div>
                <input
                    type="number"
                    className="form-control"
                    value={percentage}
                    onChange={(e) => setPercentage(Number(e.target.value))}
                    min="0"
                />
            </div>
        </div>
    );
}

export default TipPercentage;
