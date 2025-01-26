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
                    <img src="https://cdn.pixabay.com/photo/2024/02/05/10/48/bird-8554205_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Service</span> : Day Care</h3>
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Price</span> : Rs : 1000/-</h3>
                            <p class="card-text" style={{textAlign: "center", fontWeight : "bold"}}>Take the service...</p>
                            <Link to="/Serve"><a href="#" class="btn btn-primary" style={{marginLeft: "33%"}}>Click Here</a> </Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "195px" }} />
                            <div className="card-body">
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Service</span> : Trainng</h3>
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Price</span> : Rs : 2000/-</h3>
                            <p class="card-text" style={{textAlign: "center",fontWeight : "bold"}}>Take the service...</p>
                            <Link to="/Serve"><a href="#" class="btn btn-primary" style={{marginLeft: "33%"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2024/01/07/16/00/grey-heron-8493489_1280.png" class="card-img-top" alt="..." style={{ width: "100%", height: "195px" }} />
                            <div className="card-body">
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Service</span> : Boarding</h3>
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Price</span> : Rs : 1000/-</h3>

                            <p class="card-text" style={{textAlign: "center",fontWeight : "bold"}}>Take the service...</p>
                            <Link to="/Serve"><a href="#" class="btn btn-primary" style={{marginLeft: "33%"}}>Click Here</a> </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2024/02/25/21/14/ruby-throated-hummingbird-8596660_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Service</span> : Breeding</h3>
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Price </span>  : Rs : 800/-</h3>

                            <p class="card-text" style={{textAlign: "center",fontWeight : "bold"}}>Take the service...</p>
                            <Link to="/Serve"> <a href="#" class="btn btn-primary" style={{marginLeft: "33%"}}>Click Here</a></Link> 
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Service</span> : Grooming</h3>
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Price</span> : Rs : 1000/-</h3>
                            <p class="card-text" style={{textAlign: "center",fontWeight : "bold"}}> Take the service...</p>
                            <Link to="/Serve">  <a href="#" class="btn btn-primary" style={{marginLeft: "33%"}}>Click Here</a> </Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2023/11/22/18/29/white-cheeked-turaco-8406175_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Service</span> : Nutrition</h3>
                            <h3 class="card-title" style={{textAlign: "center"}}><span style={{ color : "blue"}}>Price</span> : Rs : 1000/-</h3>
                            <p class="card-text" style={{textAlign: "center",fontWeight : "bold"}}>Take the service...</p>
                            <Link to="/Serve"> <a href="#" class="btn btn-primary" style={{marginLeft: "33%"}}>Click Here</a> </Link>
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
