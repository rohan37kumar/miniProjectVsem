import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home">
      <div className="jumbotron text-center py-5">
        <h1 className="display-4">Find Your Perfect Companion</h1>
        <p className="lead">
          Give a loving home to a pet in need. Every adoption saves a life.
        </p>
        <FontAwesomeIcon icon={faHeart} className="text-danger mb-4" size="3x" />
        <div className="mt-4">
          <Link to="/adopt" className="btn btn-primary btn-lg">
            Find Your Pet
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <h3>Why Adopt?</h3>
          <p>
            When you adopt, you save a loving animal and open up shelter space for
            another animal who might desperately need it.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Our Mission</h3>
          <p>
            We're dedicated to connecting loving homes with pets in need, making
            the adoption process simple and rewarding.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Get Started</h3>
          <p>
            Browse our available pets, learn about the adoption process, and take
            the first step towards changing a life forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 