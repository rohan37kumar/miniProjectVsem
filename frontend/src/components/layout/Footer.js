import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light mt-auto py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            <FontAwesomeIcon icon="phone" className="me-2" />
                            (+91) 96 69 17 33 14
                        </p>
                        <p>
                            <FontAwesomeIcon icon="envelope" className="me-2" />
                            hatake.kakashi.946950@gmail.com
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Location</h5>
                        <p>
                            <FontAwesomeIcon icon="location-dot" className="me-2" />
                            HOD Cabin-CS, 2nd Floor, Aryabhatta Block, ABES Engineering College, Ghaziabad, UP
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="social-links">
                            {/* Add social media links here */}
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center">
                        <p className="mb-0">&copy; 2024 Pet Adoption Platform. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 