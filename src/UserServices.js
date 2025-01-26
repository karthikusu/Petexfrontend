import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import CommonNav from './CommonNav';

import CatServices from './CatServices';
import CowServices from "./Cowservices";
import CamelServices from "./Camelservices";
import HorseServices from "./Horseservices";
import BirdServices from "./Birdservices";
import ElephantServices from "./Elephantservices";
import SheepService from './Sheepservices';
import Dog from './UserServices';

function Services() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOptionSelected(true);
      };
    
      const handleBackToDoctors = () => {
        setIsOptionSelected(false);
        setSelectedOption(null);
      };
    
      const renderSelectedOption = () => {
        switch (selectedOption) {
            case 'Dog':
                return <Dog handleBackToDoctors={handleBackToDoctors} />;
            case 'Cat':
                return <CatServices handleBackToDoctors={handleBackToDoctors} />;
            case 'Cow':
                return <CowServices handleBackToDoctors={handleBackToDoctors} />;
            case 'Camel':
                return <CamelServices handleBackToDoctors={handleBackToDoctors} />;
            case 'Horse':
                return <HorseServices handleBackToDoctors={handleBackToDoctors} />;
            case 'Bird':
                return <BirdServices handleBackToDoctors={handleBackToDoctors} />;
            case 'Elephant':
                return <ElephantServices handleBackToDoctors={handleBackToDoctors} />;
            case 'Sheep':
                return <SheepService handleBackToDoctors={handleBackToDoctors} />;
          default:
            return null;
        }
      };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {isOptionSelected ? (
          renderSelectedOption()
        ) : (
        <>
            <style>
                {`
                .bob {
                    font-size: 15px;
                    height: 7vh;
                    width: 100px;
                    margin-top: 2%;
                    
                    padding:2px;
                }
             
                .card-container {
                    
                    width: 60%;
                   
                    margin-top: 2%;
                }
                
                    .card-container {
                        width: 60%;
                        
                    }
                }
                @media (max-width: 576px) {
                    .btn-primary {
                        width: 45%;
                        
                    }
                    .card-container {
                        width: 60%;
                       
                    }

                }
                .card{
                  width:auto;
                }
                `}
            </style>
            
            
            {/* <CommonNav/> */}
            
            <a to="#" onClick={() => handleOptionClick('Dog')}><button type="button" className="bob" style={{marginLeft:"2%"}}>Dog</button></a>
                    <a to="#" onClick={() => handleOptionClick('Cat')} style={{marginLeft:"2%"}}><button type="button" className="bob" >Cat</button></a>
                    <a to="#" onClick={() => handleOptionClick('Sheep')} style={{marginLeft:"2%"}}><button type="button" className="bob" >Sheep</button></a>
                    <a to="#" onClick={() => handleOptionClick('Cow')} style={{marginLeft:"2%"}}><button type="button" className="bob" >Cow</button></a>
                    <a to="#" onClick={() => handleOptionClick('Camel')} style={{marginLeft:"2%"}}><button type="button" className="bob">Camel</button></a>
                    <a to="#" onClick={() => handleOptionClick('Elephant')} style={{marginLeft:"2%"}}><button type="button"  className="bob">Elephant</button></a>
                    <a to="#" onClick={() => handleOptionClick('Bird')} style={{marginLeft:"2%"}}><button type="button" className="bob">Bird</button></a>
                    <a to="#" onClick={() => handleOptionClick('Horse')} style={{marginLeft:"2%"}}><button type="button" className="bob">Horse</button></a>

            <div style={{ display: "flex" }}>
                <div className="card-container">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/5749799/pexels-photo-5749799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Day Care</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/daycare"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Training</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/training"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/5745223/pexels-photo-5745223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Boarding</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/userboarding"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div className="card-container">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Breeding</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/userbreeding"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/19145872/pexels-photo-19145872/free-photo-of-dog-groomer-trimming-dogs-nails.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                            <div className="card-body">
                            <h3 className="card-title">Grooming</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/usergrooming"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/20292579/pexels-photo-20292579/free-photo-of-an-australian-shepherd-standing-on-a-field-with-purple-heather.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Nutrition</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/dogadoption"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
        )}
        </div>
    );
}

export default Services;
