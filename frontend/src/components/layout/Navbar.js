import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon icon={faPaw} className="me-2" />
                    Pet Adoption Platform
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/adopt" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Adopt
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/care" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Pet Care
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 