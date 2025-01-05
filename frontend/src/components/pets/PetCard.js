import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faClock } from '@fortawesome/free-solid-svg-icons';

const PetCard = ({ pet }) => {
    return (
        <div className="card h-100">
            <img
                src={pet.imageUrl}
                className="card-img-top"
                alt={pet.name}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <div className="mb-2">
                    <FontAwesomeIcon icon={faPaw} className="me-2" />
                    <span>{pet.breed}</span>
                </div>
                <div className="mb-2">
                    <FontAwesomeIcon icon={faClock} className="me-2" />
                    <span>{pet.age} years old</span>
                </div>
                <p className="card-text">{pet.description.substring(0, 100)}...</p>
                <Link to={`/adopt/${pet._id}`} className="btn btn-primary">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default PetCard; 