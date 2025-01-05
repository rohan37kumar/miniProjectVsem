import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PetAdoption({ pets }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    // Filter pets based on search term and type
    const filteredPets = pets.filter(pet => {
        const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || pet.type.toLowerCase() === filterType.toLowerCase();
        return matchesSearch && matchesType;
    });

    return (
        <div className="pet-adoption">
            <h1 className="text-center mb-4">Available Pets for Adoption</h1>
            
            {/* Search and Filter Controls */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name or breed..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">All Pets</option>
                        <option value="dog">Dogs</option>
                        <option value="cat">Cats</option>
                    </select>
                </div>
            </div>

            {/* Pet Cards Grid */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredPets.map(pet => (
                    <div key={pet.id} className="col">
                        <div className="card h-100">
                            <div className="card-img-wrapper" style={{ height: '280px', overflow: 'hidden' }}>
                                <img 
                                    src={pet.imageUrl} 
                                    className="card-img-top" 
                                    alt={pet.name} 
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{pet.name}</h5>
                                <p className="card-text">
                                    <FontAwesomeIcon icon="paw" className="me-2" />
                                    {pet.breed}
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        {pet.age} years old • {pet.gender}
                                    </small>
                                </p>
                                <Link to={`/adopt/${pet.id}`} className="btn btn-primary">
                                    Meet {pet.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetAdoption; 