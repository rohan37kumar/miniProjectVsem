import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faSearch } from '@fortawesome/free-solid-svg-icons';

const PetCare = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const careArticles = {
        dogs: [
            {
                id: 1,
                title: 'Essential Dog Vaccinations',
                content: 'Learn about core vaccines that every dog needs...',
                category: 'Health'
            },
            {
                id: 2,
                title: 'Basic Dog Training Tips',
                content: 'Start with these fundamental training techniques...',
                category: 'Training'
            }
        ],
        cats: [
            {
                id: 3,
                title: 'Cat Nutrition Guide',
                content: "Understanding your cat's dietary needs...",
        category: 'Nutrition'
            },
            {
                id: 4,
                title: 'Litter Box Training',
                content: 'Tips for successful litter box training...',
                category: 'Training'
            }
        ]
    };

    const filteredArticles = [...careArticles.dogs, ...careArticles.cats].filter(
        article => article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pet-care">
            <h2 className="text-center mb-4">Pet Care Resources</h2>

            <div className="search-bar mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>
                                <FontAwesomeIcon icon={faDog} className="me-2" />
                                Dog Care
                            </h3>
                        </div>
                        <div className="card-body">
                            {careArticles.dogs.map(article => (
                                <div key={article.id} className="mb-3">
                                    <h4>{article.title}</h4>
                                    <p>{article.content}</p>
                                    <span className="badge bg-primary">{article.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>
                                <FontAwesomeIcon icon={faCat} className="me-2" />
                                Cat Care
                            </h3>
                        </div>
                        <div className="card-body">
                            {careArticles.cats.map(article => (
                                <div key={article.id} className="mb-3">
                                    <h4>{article.title}</h4>
                                    <p>{article.content}</p>
                                    <span className="badge bg-primary">{article.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCare; 