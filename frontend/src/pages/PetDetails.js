import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AdoptionForm from '../components/forms/AdoptionForm';

function PetDetails({ pets }) {
    const { id } = useParams();
    const pet = pets.find(p => p.id === parseInt(id));

    if (!pet) {
        return (
            <div className="text-center">
                <h2>Pet not found</h2>
                <Link to="/adopt" className="btn btn-primary">
                    Back to Adoption Page
                </Link>
            </div>
        );
    }

    return (
        <div className="pet-details">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={pet.imageUrl} 
                        alt={pet.name} 
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-6">
                    <h1>{pet.name}</h1>
                    <div className="pet-info">
                        <p><strong>Breed:</strong> {pet.breed}</p>
                        <p><strong>Age:</strong> {pet.age} years</p>
                        <p><strong>Gender:</strong> {pet.gender}</p>
                        <p><strong>Size:</strong> {pet.size}</p>
                        <p><strong>Color:</strong> {pet.color}</p>
                        <p><strong>Location:</strong> {pet.location}</p>
                    </div>
                    <div className="pet-description">
                        <h3>About {pet.name}</h3>
                        <p>{pet.description}</p>
                    </div>
                    <div className="pet-temperament">
                        <h3>Temperament</h3>
                        <div className="d-flex gap-2">
                            {pet.temperament.map((trait, index) => (
                                <span key={index} className="badge bg-primary">
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="pet-medical mt-3">
                        <p>
                            <span className={`badge ${pet.vaccinated ? 'bg-success' : 'bg-warning'}`}>
                                {pet.vaccinated ? 'Vaccinated' : 'Not Vaccinated'}
                            </span>
                            {' '}
                            <span className={`badge ${pet.neutered ? 'bg-success' : 'bg-warning'}`}>
                                {pet.neutered ? 'Neutered/Spayed' : 'Not Neutered/Spayed'}
                            </span>
                        </p>
                    </div>
                    <AdoptionForm petName={pet.name} />
                </div>
            </div>
        </div>
    );
}

export default PetDetails; 