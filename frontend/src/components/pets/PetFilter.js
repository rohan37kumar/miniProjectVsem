const PetFilter = ({ filters, setFilters }) => {
    return (
        <div className="row mb-4">
            <div className="col-md-6">
                <select
                    className="form-select"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                >
                    <option value="">All Pet Types</option>
                    <option value="dog">Dogs</option>
                    <option value="cat">Cats</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="col-md-6">
                <select
                    className="form-select"
                    value={filters.ageRange}
                    onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
                >
                    <option value="">All Ages</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="4-7">4-7 years</option>
                    <option value="8-100">8+ years</option>
                </select>
            </div>
        </div>
    );
};

export default PetFilter; 