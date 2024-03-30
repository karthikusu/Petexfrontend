import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';
// import './DogDog.css';

const DogDog = () => {
    const [dog, setDog] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8012/training/all')
        .then(response => setDog(response.data))
        .catch(error => console.error('Error fetching user details', error));
    }, []); 

    return(
        <>
        <div className="body">
            <div className="first_Dcontainer">
                <div className="background_Dogimg"></div>
            </div>
            {/* middle section */}
            <div style={{backgroundColor:'whitesmoke'}}>
                <div style={{marginLeft:'110px'}}>
                    <div>
                        <h2 style={{color:'#00cc9c', fontFamily:'Roboto, sans-serif', fontWeight:'bold',paddingTop:'20px'}}>Book Professional Pet Groomers at your Home !!</h2>
                    </div>
                    <h3 style={{fontWeight:'lighter', fontFamily:'Roboto, sans-serif'}}>Pet Grooming packages in India</h3>
                    <div style={{display:'flex'}}>
                        {dog.map(item => (
                            <div key={item.id} style={{padding:'20px'}}>
                                <div className="Dcards" style={{height:'650px', backgroundColor:'white'}}>
                                    <img className='Dcard_img' src={item.imageUrl} style={{height:"400px", width:'370px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
                                    <div style={{padding:'30px'}}>
                                        <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : {item.trainer}</h3>
                                        <h4 style={{color:'#de5854'}}>Location : {item.location}</h4>
                                        <div>
                                            <h2>Rating:
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </h2>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <div>    
                                                <Link  to="/BookNow"><button className="custom-button">Book Now</button></Link>
                                            </div>
                                            <div style={{paddingLeft:'70px'}}>
                                                <button className="custom-button">Whatsapp</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="popup" style={{ paddingLeft:'160px', paddingRight:'137px'}}>
                    <div style={{backgroundColor:'white', height:'420px'}}>
                        <div className="close" style={{marginLeft:'1105px', paddingTop:'20px'}}>
                            <FontAwesomeIcon icon={faTimesSquare} />
                        </div>  
                        <div style={{padding:'20px'}}>
                            <div style={{height:'100px', backgroundColor:'white'}}>
                                <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                                    {dog.map(item => (
                                        <div key={item.id} className="" style={{height:'120px', width:'200px',textAlign:'center',  backgroundColor:'bisque', margin:'10px', border:'1px solid red',padding:'10px', borderRadius:'50px'}}>
                                            <h5 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}> {item.serviceCost}</h5>
                                            <h5 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}> {item.serviceType}</h5>
                                            <h5 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}> {item.location}</h5>
                                        </div>
                                    ))}
                                </div>
                                <div style={{padding:'30px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft:'160px', paddingRight:'137px'}}>
                    <h1 style={{textAlign:'center', color:'#005e66'}}>Pet Grooming Service at Home </h1>
                    <p>Stuck in your busy office routines or Don't want your pet away from you? Book a dog groomer in Hoshiarpur that will come to your home and groom your pet. We offer the best pet home grooming services like bathing, hair cutting, nail clipping, ear cleaning, and dog grooming at Home in Hoshiarpur, Punjab.</p>
                    <p>Our expert and certified pet groomers understand your pet's grooming needs and provide you with first-rate services. Book a professional pet stylist near you today with Mr N Mrs Pet! We offer dog grooming services at home in Hoshiarpur, Punjab. Mr n Mrs Pet is the best network of pet stylists and dog groomers near you who can make pet grooming a fun experience for your pet.</p>
                    <p>Make an appointment with the best dog groomer in Hoshiarpur to come to your home and groom your pet with Mr N Mrs Pet. We are the most trusted and reliable source near you for high-quality products.</p>
                </div>
                <br></br>
            </div>
            <div style={{backgroundColor:'#00a7b3', height:'120px', paddingLeft:'120px'}}>
                <div style={{ fontFamily:'Roboto, sans-serif', color:'whitesmoke', display:'flex' }}>
                    <p style={{fontSize:'40px'}}>Join our family of pet lovers</p>
                    <input style={{border:'none', height:'40px', borderRadius:'px', marginTop:'43px', marginLeft:"350px"}} type="text" placeholder="--Select-Pet-Type--"/>
                    <div style={{marginTop:'42px'}}><button style={{height:'44px',border: '2px solid white', backgroundColor:'#00a7b3', }} className="custom-button2">Subscribe Now</button></div>
                </div>
            </div>    
        </div>
        </>
    );
}

export default DogDog;
