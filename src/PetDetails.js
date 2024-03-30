import React from 'react';

function PetDetails({ pet }) {
    return (
        <div className="pet-details-container">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">SNO</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">PETTYPE</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">PETNAME</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">SPECIES</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">AGE</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">GENDER</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">WEIGHT</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">HEIGHT</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">COLOR</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">DISEASE</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">VACCINATED</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">FULLNAME</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">EMAIL</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">PASSWORD</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">PHONENUMBER</th>
                        <th style={{ color: "black", backgroundColor: "yellowgreen" }} scope="col">CITY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pet.sno}</td>
                        <td>{pet.petType}</td>
                        <td>{pet.petName}</td>
                        <td>{pet.species}</td>
                        <td>{pet.age}</td>
                        <td>{pet.gender}</td>
                        <td>{pet.weight}</td>
                        <td>{pet.height}</td>
                        <td>{pet.color}</td>
                        <td>{pet.disease}</td>
                        <td>{pet.vaccinated ? 'Yes' : 'No'}</td>
                        <td>{pet.fullName}</td>
                        <td>{pet.email}</td>
                        <td>{pet.password}</td>
                        <td>{pet.phoneNumber}</td>
                        <td>{pet.city}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PetDetails;
