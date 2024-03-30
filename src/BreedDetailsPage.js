import React from 'react';
// import './BreedDetailsPage.css'; 

function BreedDetailsPage({ breed }) {
    return (
        <div className="breed-details-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: `url(${require('./camel.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="breed-details-card" style={{ borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', padding: '20px', width: '400px', background: 'linear-gradient(to bottom, #4CAF50, #2196F3)', transition: 'background 0.5s ease' }}>
                <h2 className="card-title" style={{ textAlign: 'center', marginBottom: '20px', color: '#333333', fontSize: '24px' }}><strong>Breed Details</strong></h2>
                <div className="card-text" style={{ fontSize: '16px', color: '#666666' }}>
                    <p><strong>ID:</strong> {breed.id}</p>
                    <p><strong>Location:</strong> {breed.location}</p>
                    <p><strong>Service Type:</strong> {breed.serviceType}</p>
                    <p><strong>Service Cost:</strong> {breed.serviceCost}</p>
                </div>
            </div>
        </div>
    );
}

export default BreedDetailsPage;
