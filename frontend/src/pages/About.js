import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaw, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const teamMembers = [
    {
      name: 'Rohan Kumar',
      role: 'Fullstack Developer',
      bio: 'Passionate Game-Developer, forced to build useless projects.'
    },
    {
      name: 'Shashank Kumar Dubey',
      role: 'Fullstack Developer',
      bio: 'Passionate Game-Developer, forced to create PPTs with bad UI sense format.'
    },
    {
      name: 'Cursor AI',
      role: 'Omniscient One',
      bio: 'Passionate technical philanthropist, and debugger.'
    }
  ];

  return (
    <div className="about">
      <div className="text-center mb-5">
        <h2 className="mb-4">Our Mission</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead">
              We believe every pet deserves a loving home. Our mission is to connect
              wonderful pets with caring families, making the adoption process simple
              and rewarding for everyone involved.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4 text-center mb-4">
          <FontAwesomeIcon icon={faHeart} size="3x" className="text-primary mb-3" />
          <h3>Love</h3>
          <p>We treat every pet with love and care while they wait for their forever home.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <FontAwesomeIcon icon={faPaw} size="3x" className="text-primary mb-3" />
          <h3>Care</h3>
          <p>All our pets receive regular veterinary care and attention.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" className="text-primary mb-3" />
          <h3>Support</h3>
          <p>We provide ongoing support to families throughout the adoption process.</p>
        </div>
      </div>

      <div className="team-section">
        <h3 className="text-center mb-4">Our Team</h3>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">{member.name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                  <p className="card-text">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 