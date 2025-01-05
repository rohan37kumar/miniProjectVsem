import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PetAdoption from './pages/PetAdoption';
import PetCare from './pages/PetCare';
import About from './pages/About';
import Contact from './pages/Contact';
import PetDetails from './pages/PetDetails';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaw, faSearch, faDog, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import pets from './data/pets';

library.add(faPaw, faSearch, faDog, faPhone, faEnvelope, faLocationDot);

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main className="flex-shrink-0">
                    <div className="container py-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/adopt" element={<PetAdoption pets={pets} />} />
                            <Route path="/adopt/:id" element={<PetDetails pets={pets} />} />
                            <Route path="/care" element={<PetCare />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App; 