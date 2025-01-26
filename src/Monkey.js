import React from "react";
// import './Monkey.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Monkey(){
    return(
        <>
         <div className="body">
            <div className="first_Mcontainer">
                <div className="background_Monkeyimg">
                </div>
            </div>
            {/* middle section */}
            <div style={{backgroundColor:'whitesmoke'}}>
            <div style={{}}>
                
                <div>
                    <h2 style={{color:'#00cc9c', fontFamily:'Roboto, sans-serif', fontWeight:'bold',paddingTop:'20px'}}>Book Professional Pet Groomers at your Home !!</h2>
                </div>
                
                <h3 style={{fontWeight:'lighter', fontFamily:'Roboto, sans-serif'}}>Pet Grooming packages in india</h3>
                <div style={{display:'flex'}}>
                    <div style={{padding:'20px'}}>
                        <div className="Monkeycards" style={{height:'600px', backgroundColor:'white'}}>
                            <img  className='Monkeycard_img' src="https://www.the-sun.com/wp-content/uploads/sites/6/2021/07/NINTCHDBPICT000663171173.jpg" style={{height:"300px", width:'290px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
                            <div style={{padding:'30px'}}>
                                <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Siraj</h3>
                                <h4 style={{color:'#de5854'}}>Location : Hyderabad</h4>
                                <div >
                                    <h2>Rating:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    </h2>
                                </div>
                                
                                
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
                        <div className="Monkeycards" style={{height:'600px', backgroundColor:'white'}}>
                            <img className='Monkeycard_img' src="https://www.mediastorehouse.com/p/172/white-faced-capuchin-monkey-sitting-log-1836601.jpg.webp" style={{height:"300px", width:'290px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
                            <div style={{padding:'30px'}}>
                            <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Ashish</h3>
                            <h4 style={{color:'#de5854'}}>Location : Hyderabad</h4>
                                <div >
                                    <h2>Rating:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    </h2>
                                </div>
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
                        <div className="Monkeycards" style={{height:'600px', backgroundColor:'white'}}>
                            <img className='Monkeycard_img' src="https://i.pinimg.com/736x/59/cb/61/59cb613a966721ca68f0527533de93c0.jpg" style={{height:"300px", width:'290px',backgroundColor:'bisque', borderRadius:'50%',margin:'auto', overflow:'hidden4'}} alt=""/>
                            <div style={{padding:'30px'}}>
                            <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Amith</h3>
                            <h4 style={{color:'#de5854'}}>Location : Hyderabad</h4>
                                <div >
                                    <h2>Rating:
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star"></span>
                                    </h2>
                                </div>
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
            <div style={{backgroundColor:'#00a7b3', height:'120px', paddingLeft:'1%'}}>
                <div style={{ fontFamily:'Roboto, sans-serif', color:'whitesmoke', display:'flex' }}>
                    <p style={{fontSize:'40px'}}>Join our family of pet lovers</p>
                </div>
            </div>    
        </div>
        </>
    );
}
export default Monkey;
