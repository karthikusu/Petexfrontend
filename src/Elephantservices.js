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
                    <img src="https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "195px" }} />
                            <div className="card-body">
                            <h3 className="card-title">Day Care</h3>
                            <p className="card-text">Elephant day care provides a nurturing environment for elephants in captivity, offering specialized care and support to ensure their well-being and happiness. We provide the best day care services throught the world.</p>
                            <Link to="/daycare"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Training</h3>
                            <p className="card-text">Elephant training programs focus on developing strong bonds between elephants and their trainers, promoting positive reinforcement techniques to teach behaviors beneficial for their care and well-being.</p>
                            <Link to="/training"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2013/05/17/07/12/elephant-111695_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Boarding</h3>
                            <p className="card-text">Elephant boarding facilities provide a safe and comfortable temporary home for elephants, offering specialized care, nutrition, and enrichment activities tailored to meet their needs while their owners are away.</p>
                            <Link to="/userboarding"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2017/11/06/15/30/elephants-2923917_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Breeding</h3>
                            <p className="card-text">Elephant breeding programs aim to support the conservation of endangered elephant species by carefully managing breeding pairs and ensuring successful reproduction in captivity. These programs play a vital role in maintaining genetic diversity and population sustainability.</p>
                            <Link to="/userbreeding"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2020/05/03/18/49/baby-elephant-5126326_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Grooming</h3>
                            <p className="card-text">Elephant grooming involves the careful maintenance of an elephant's physical appearance and hygiene, including bathing, brushing, and nail trimming. It also serves as a bonding experience between elephants and their caretakers, fostering trust and mutual respect.We welcomes you always.</p>
                            <Link to="/usergrooming"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2018/11/22/18/17/elephant-3832516_1280.jpg" class="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
                            <div className="card-body">
                            <h3 className="card-title">Nutrition</h3>
                            <p className="card-text">Proper nutrition is essential for the health and well-being of elephants. Our nutrition services focus on providing balanced and nutritious diets tailored to meet the specific dietary requirements of each elephant, ensuring they receive the essential vitamins, minerals, and nutrients they need to thrive.</p>
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
