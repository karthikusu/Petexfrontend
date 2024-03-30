import React from "react";
// import './Elephant2.css'
// import log1 from './images/Free_Sample_By_Wix.jpg'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Elephant2() {

    
    
    return(
        <>
        <div className="body">
            <div className="first_Econtainer">
                <div className="background_Eimg">
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
                    <h2 style={{color:'#00cc9c', fontFamily:'Roboto, sans-serif', fontWeight:'bold',paddingTop:'20px'}}>Book Professional Pet Groomers at your Home !!</h2>
                </div>
                
                <h3 style={{fontWeight:'lighter', fontFamily:'Roboto, sans-serif'}}>Pet Grooming packages in india</h3>
                <div style={{display:'flex'}}>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'650px', backgroundColor:'white'}}>
                            <img  className='card_img' src="https://www.telegraph.co.uk/content/dam/world-news/2022/01/10/TELEMMGLPICT000282430780_trans_NvBQzQNjv4BqVhZjXVQCF0Wb99dSi3kVaooXCo2YcYGlMIjpuuU_PIQ.jpeg" style={{height:"400px", width:'370px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
                            <div style={{padding:'30px'}}>
                                <h3 style={{color:'#6cc6c6', fontFamily: 'Roboto, sans-serif'}}>Trainer : Subramanyam</h3>
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
                        <div className="Dcards" style={{height:'650px', backgroundColor:'white'}}>
                            <img className='card_img' src="https://media.npr.org/assets/img/2019/05/08/Westerman_Elephant_02_vert-6a73c359a7d19f0400dd9efdafbc82ebbb5cb3e8.jpg" style={{height:"400px", width:'370px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
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
                        <div className="Dcards" style={{height:'650px', backgroundColor:'white'}}>
                            <img className='card_img' src="https://dinoanimals.com/wp-content/uploads/2014/01/African-bush-elephant-35.jpg " style={{height:"400px", width:'370px',backgroundColor:'bisque', borderRadius:'50%',margin:'auto', overflow:'hidden4'}} alt=""/>
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

            {/* <div className="popup" style={{ paddingLeft:'160px', paddingRight:'137px'}}>
            <div style={{backgroundColor:'white', height:'500px'}}>
                        <div className="close" style={{marginLeft:'905px', paddingTop:'20px'}}>
                            <FontAwesomeIcon icon={faTimesSquare} />
                        </div>   
                <table style={{marginLeft:'auto', marginRight:'auto'}}>

                    <th>
                        <p style={{margin:'20px'}}>Looking for a grooming partner to pamper your fur baby? Member of Mr n Mrs Pet can help!</p>
                        <tr>
                            <input className="input" type="text" placeholder="Name" style={{width:"200%"}}/>
                            <input className="input" type="text" placeholder="Contact No" style={{width:"200%", marginTop:"1%"}}/>
                        </tr>
                        <tr>
                            <input className="input" type="text" placeholder="Email Id" style={{width:"200%", marginTop:"1%"}}/>
                            <input className="input" type="text" placeholder="Dogs" style={{width:"200%",marginTop:"1%"}}/>
                        </tr>
                        <tr>
                            <input className="input" type="text" placeholder="Breed" style={{width:"200%",marginTop:"1%"}}/>
                            <input className="input" type="text" placeholder="Pet's Gender" style={{width:"200%", marginTop:"1%"}}/>
                        </tr>
                        <tr>
                            <input className="input" type="text" placeholder="Pet's Age" style={{width:"200%", marginTop:"1%"}}/>
                            <input className="input" type="text" placeholder="City" style={{width:"200%", marginTop:"1%"}}/>
                        </tr>
                        <tr>
                            <input className="input" style={{width:"200%", marginTop:"1%"}} type="text-area" placeholder="Name"/>
                        </tr>
                    </th>
                </table>
            </div>
            </div>  */}
            

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
        {/* ------ */}
                
        </>
        
    );
}
export default Elephant2;
