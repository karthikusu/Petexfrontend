import React from "react";
// import './RabbitRabbit.css'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';



function RabbitRabbit(){
    return(
        <>
        <style>
            {`
            .first_Rcontainer{
                width: 1000px;
                height: 500px;
                overflow: hidden;
                
            }

            .background_Rimg{
                background-image: url("images/RabbitRabbit.jpg");
                height: 70vh;
                background-size: 100% 500px;
                background-repeat: no-repeat;
            }

            img{
                mix-blend-mode: multiply;
            }

            .card_img{
                transition: 1s;
            }

            .card_img:hover{
                transform: scale(1.09);
                z-index: 2;
            }

            .btn{
                transition: 1s;
            }

            .btn:hover{
                color: rgb(227, 229, 233);
                background-color: cornflowerblue;
                transform: scale(1.09);
                z-index: 2;
            }

            .custom-button {
                background-color: #46a09b;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                font-weight: bold;
                transition: 0.09s;
            }

            .custom-button:hover {
                background-color: #357d78;
                transform: scale(1.09);
                z-index: 2;
            }

            .checked{
                color: orange;
            }

            .custom-button2{
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                font-weight: bold;
            }

            .custom-button2:hover {
                background-color: #d7a8b3;
            }

            .input{
                height: 40px;
                width: 520px;
                margin: 5px;
                border: solid 1.5px #8a8a8f;
                border-radius: 5px;
                transition: 0.01s;
            }

            .input:hover{
                outline: none;
                border: 2px solid #36c0c9;
            }

            .close{
                cursor: pointer;
            }
            `}
        </style>
        <div className="body" style={{marginTop:"-40%"}}>
            <div className="first_Rcontainer">
                <div className="background_Rimg" >
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
            <div >
                
                <div>
                    <h2 style={{color:'#00cc9c', fontFamily:'Roboto, sans-serif', fontWeight:'bold',paddingTop:'20px'}}>Book Professional Pet Groomers at your Home !!</h2>
                </div>
                
                <h3 style={{fontWeight:'lighter', fontFamily:'Roboto, sans-serif'}}>Pet Grooming packages in india</h3>
                <div style={{display:'flex'}}>
                    <div style={{padding:'20px'}}>
                        <div className="Dcards" style={{height:'650px', backgroundColor:'white'}}>
                            <img  className='card_img' src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww" style={{height:"400px", width:'370px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
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
                            <img className='card_img' src="https://images.unsplash.com/photo-1533514114760-4389f572ae26?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdoaXRlJTIwcmFiYml0fGVufDB8fDB8fHww" style={{height:"400px", width:'370px',backgroundColor:'bisque',borderRadius:'50%'}} alt=""/>
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
                            <img className='card_img' src="https://i.pinimg.com/originals/f7/2e/cc/f72eccdfeae04bf1910c21f6692e5915.jpg" style={{height:"400px", width:'370px',backgroundColor:'bisque', borderRadius:'50%',margin:'auto', overflow:'hidden4'}} alt=""/>
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
             <div style={{backgroundColor:'white', height:'420px'}}>
                        <div className="close" style={{marginLeft:'1005px', paddingTop:'20px'}}>
                            <FontAwesomeIcon icon={faTimesSquare} />
                        </div>   
                <table style={{marginLeft:'-10%', marginRight:'auto'}}>

                    <th>
                        <p style={{margin:'20px'}}>Looking for a grooming partner to pamper your fur baby? Member of Mr n Mrs Pet can help!</p>
                        <tr>
                            <input className="input" type="text" placeholder="Name"/>
                            <input className="input" type="text" placeholder="Contact No"/>
                        </tr>
                        <tr>
                            <input className="input" type="text" placeholder="Email Id"/>
                            <input className="input" type="text" placeholder="Dogs"/>
                        </tr>
                        <tr>
                            <input className="input" type="text" placeholder="Breed"/>
                            <input className="input" type="text" placeholder="Pet's Gender"/>
                        </tr>
                        <tr>
                            <input className="input" type="text" placeholder="Pet's Age"/>
                            <input className="input" type="text" placeholder="City"/>
                        </tr>
                        <tr>
                            <input className="input" style={{width:"1056px", height:'40px', borderRadius:'5px'}} type="text-area" placeholder="Name"/>
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




        </>
    );
}
export default RabbitRabbit;