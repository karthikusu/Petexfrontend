import React from "react";
// import './CatCat.css'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';

function CatCat() {
    return (
        <>
            <div className="body">
                <div className="first_container">
                    <div className="background_img">
                        {/* <div className="nav">
                            <div>
                                <img src={log1} style={{paddingLeft:'100px', paddingTop:'50px'}} alt=""/>
                            </div >
                            <div style={{display:'flex', paddingTop:'30px', paddingLeft:'350px' }}>
                                <div style={{padding:'10px'}}>
                                    <input style={{border:'none', height:'50px', borderRadius:'20px',mixBlendMode:'soft-light'}} type="text" placeholder="--Select-Pet-Type--"/>
                                </div>
                                <div style={{padding:'10px'}}>
                                    <input style={{border:'none', height:'50px', borderRadius:'20px',mixBlendMode:'soft-light'}} type="text" placeholder="--Select-Pet-Type--"/>
                                </div>
                                <div style={{padding:'10px'}}>
                                    <input style={{border:'none', height:'50px', borderRadius:'20px',mixBlendMode:'soft-light'}} type="text" placeholder="--Select-Pet-Type--"/>
                                </div>
                                <div style={{padding:'10px'}}>
                                    <button className="btn" style={{backgroundColor:'cornflowerblue', height:'50px', border:'none', borderRadius:'20px', width:'150px',cursor:'pointer',transition:'0.1s' }}>Search</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* middle section */}
                <div style={{backgroundColor:'whitesmoke'}}>
                    <div style={{}}>
                        <div>
                            <h3 style={{color:'#00cc9c', fontFamily:'Roboto, sans-serif', fontWeight:'bold',paddingTop:'20px'}}>Book Professional Pet Groomers at your Home !!</h3>
                        </div>
                        <h4 style={{fontWeight:'lighter', fontFamily:'Roboto, sans-serif'}}>Pet Grooming packages in india</h4>
                        <div style={{display:'flex'}}>
                            <div style={{padding:'20px'}}>
                                <div className="Dcards" style={{height:'600px', backgroundColor:'white'}}>
                                    <img  className='card_img' src="https://images.ctfassets.net/sfnkq8lmu5d7/7ophtkAzK9KwunGP4q3NGK/930c6df2d81f6939db310539932e752a/2023-06-22_Dream_of_High-Fiving_Your_Cat?w=676&h=900&fl=progressive&q=70&fm=jpg" style={{height:"300px", width:'290px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
                                    <div style={{padding:'30px'}}>
                                        <h4 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Subramanyam</h4>
                                        <h5 style={{color:'#de5854'}}>Location : Hyderabad</h5>
                                        <div >
                                            <h4>Rating:
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </h4>
                                        </div>
                                        <br></br>
                                        <div style={{display:'flex'}}>
                                            <div>    
                                                <Link  to="/BookNow"><button className="custom-button">Book Now</button></Link>
                                            </div>
                                            {/* <div style={{paddingLeft:'70px'}}>
                                                <button className="custom-button">Whatsapp</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding:'20px'}}>
                                <div className="Dcards" style={{height:'600px', backgroundColor:'white'}}>
                                    <img className='card_img' src="https://hips.hearstapps.com/hmg-prod/images/using-a-desktop-computer-with-a-cat-royalty-free-image-1687446900.jpg?crop=0.668xw:1.00xh;0.0714xw,0&resize=1200:*" style={{height:"300px", width:'290px',backgroundColor:'bisque',borderRadius:'50%', marginRight:'auto', marginLeft:'auto'}} alt=""/>
                                    <div style={{padding:'30px'}}>
                                        <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Ashish</h3>
                                        <h4 style={{color:'#de5854'}}>Location : Hyderabad</h4>
                                        <div >
                                            <h4>Rating:
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </h4>
                                        </div>
                                        <br></br>
                                        <div style={{display:'flex'}}>
                                            <div>    
                                                <Link  to="/BookNow"><button className="custom-button">Book Now</button></Link>
                                            </div>
                                            {/* <div style={{paddingLeft:'70px'}}>
                                                <button className="custom-button">Whatsapp</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding:'20px'}}>
                                <div className="Dcards" style={{height:'600px', backgroundColor:'white'}}>
                                    <img className='card_img' src="https://i.redd.it/5mpsrg37k3c01.jpg" style={{height:"300px", width:'290px',backgroundColor:'bisque', borderRadius:'50%', margin:'auto', overflow:'hidden'}} alt=""/>
                                    <div style={{padding:'30px'}}>
                                        <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Amith</h3>
                                        <h4 style={{color:'#de5854'}}>Location : Hyderabad</h4>
                                        <div >
                                            <h4>Rating:
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star "></span>
                                                <span className="fa fa-star"></span>
                                            </h4>
                                        </div>
                                        <br></br>
                                        <div style={{display:'flex'}}>
                                            <div>    
                                                <Link  to="/BookNow"><button className="custom-button">Book Now</button></Link>
                                            </div>
                                            {/* <div style={{paddingLeft:'70px'}}>
                                                <button className="custom-button">Whatsapp</button>
                                            </div> */}
                                        </div>
                                    </div>
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
                    <div style={{ fontFamily:'Roboto, sans-serif', color:'whitesmoke', display:'flex', flexFlow:'row' }}>
                        <p style={{fontSize:'40px'}}>Join our family of pet lovers</p>
                    </div>
                </div>    
            </div>
        </>
    );
}

export default CatCat;
