// import React from "react";
// // import Navpet from "./Navpet";
// import { Link } from "react-router-dom";
// // import Sidebar from "./Sidebar";

// function Services(){
//     return(

//         <>
//         <Sidebar/>
//         <button type="button" class="btn btn-primary" style={{ marginLeft  : "20%",marginTop : "2%", width: "5%", height: "4vh", fontSize: "1.5rem"}}>Dog</button>
//         <Link to="/CatServices"><button  type="button" class="btn btn-primary"style={{ marginTop : "2%", width: "5%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Cat</button></Link>
//         <Link to="/Sheepservices"><button  type="button" class="btn btn-primary"style={{ marginTop : "2%", width: "5%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Sheep</button></Link>
//         <Link to="/Cowservices"> <button type="button" class="btn btn-primary" style={{ marginTop : "2%", width: "5%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Cow</button></Link>
//         <Link to="/Camelservices"><button type="button" class="btn btn-primary" style={{ marginTop : "2%", width: "5%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Camel</button></Link>
//         <Link to="/Elephantservices"><button type="button" class="btn btn-primary" style={{ marginTop : "2%", width: "7%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Elephant</button></Link>
//         <Link to="/Birdservices"> <button  type="button" class="btn btn-primary"style={{ marginTop : "2%", width: "5%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Birds</button></Link>
//         <Link to="/Horseservices"> <button  type="button" class="btn btn-primary"style={{ marginTop : "2%", width: "5%", height: "4vh", marginLeft: "1%", fontSize: "1.5rem"}}>Horse</button></Link>
        
        
        
        
//         <div style={{display: "flex"}}>
//         <div style={{border: "2px solid", width: "18.4%", marginLeft: "20%", marginTop : "2%"}}>
//         <div class="card" style={{width: "18rem"}}>
//   <img src="https://images.pexels.com/photos/5749799/pexels-photo-5749799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width : "130%",height : "30vh"}}/>
//   <div class="card-body" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-title" style={{textAlign: "center"}}>Day Care</h3>
//     <p class="card-text" style={{textAlign: "center"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to= "/Payment">  <a href="#" class="btn btn-primary" style={{marginLeft: "33%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "18.4%", marginLeft: "4%", marginTop : "2%"}}>
//         <div class="card" style={{width: "18rem"}}>
//   <img src="https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width : "130%",height : "30vh"}}/>
//   <div class="card-body" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-title" style={{textAlign: "center"}}>Trainng</h3>
//     <p class="card-text" style={{textAlign: "center"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to= "/Payment">   <a href="#" class="btn btn-primary" style={{marginLeft: "33%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "18.4%", marginLeft: "4%", marginTop : "2%"}}>
//         <div class="card" style={{width: "18rem"}}>
//   <img src="https://images.pexels.com/photos/5745223/pexels-photo-5745223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width : "130%",height : "30vh"}}/>
//   <div class="card-body" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-title" style={{textAlign: "center"}}>Boarding</h3>
//     <p class="card-text" style={{textAlign: "center"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to= "/Payment">   <a href="#" class="btn btn-primary" style={{marginLeft: "33%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>
// </div>




// <div style={{display: "flex"}}>
// <div style={{border: "2px solid", width: "18.4%", marginLeft: "20%", marginTop : "2%"}}>
//         <div class="card" style={{width: "18rem"}}>
//   <img src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width : "130%",height : "30vh"}}/>
//   <div class="card-body" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-title" style={{textAlign: "center"}}>Breeding</h3>
//     <p class="card-text" style={{textAlign: "center"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to= "/Payment">   <a href="#" class="btn btn-primary" style={{marginLeft: "33%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "18.4%", marginLeft: "4%", marginTop : "2%"}}>
//         <div class="card" style={{width: "18rem"}}>
//   <img src="https://images.pexels.com/photos/19145872/pexels-photo-19145872/free-photo-of-dog-groomer-trimming-dogs-nails.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width : "130%",height : "30vh"}}/>
//   <div class="card-body" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-title" style={{textAlign: "center"}}>Grooming</h3>
//     <p class="card-text" style={{textAlign: "center"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to= "/Payment">  <a href="#" class="btn btn-primary" style={{marginLeft: "33%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "18.4%", marginLeft: "4%", marginTop : "2%"}}>
//         <div class="card" style={{width: "18rem"}}>
//   <img src="https://images.pexels.com/photos/20292579/pexels-photo-20292579/free-photo-of-an-australian-shepherd-standing-on-a-field-with-purple-heather.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." style={{ width : "130%",height : "30vh"}}/>
//   <div class="card-body" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-title" style={{textAlign: "center"}}>Nutrition</h3>
//     <p class="card-text" style={{textAlign: "center"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <Link to= "/Payment"> <a href="#" class="btn btn-primary" style={{marginLeft: "33%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>
// </div>
       
        
//         </>
//     )
// }
// export default Services;

import React from "react";
import { Link } from "react-router-dom";
import CommonNav from './CommonNav';

function BirdServices() {
    return (
        <>
            <style>
                {`
                .btn-primary {
                    font-size: 15px;
                    height: 6vh;
                    width: 10%;
                    margin-top: 2%;
                    margin-left: 2.2%;
                    padding:2px;
                }
             
                .card-container {
                    
                    width: 60%;
                   
                    margin-top: 2%;
                }
                @media (max-width: 768px) {
                    .btn-primary {
                        width: 30%;
                        margin-left: 35%;
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
            {/* <Link to="/services"><button type="button" className="btn btn-primary">Dog</button></Link>
            <Link to="/catservices"><button type="button" className="btn btn-primary">Cat</button></Link>
            <Link to="/sheepservices"><button type="button" className="btn btn-primary">Sheep</button></Link>
            <Link to="/cowservices"><button type="button" className="btn btn-primary">Cow</button></Link>
            <Link to="/camelservices"><button type="button" className="btn btn-primary">Camel</button></Link>
            <Link to="/elephantservices"><button type="button" className="btn btn-primary">Elephant</button></Link>
            <Link to="/birdservices"><button type="button" className="btn btn-primary">Birds</button></Link>
            <Link to="/horseservices"><button type="button" className="btn btn-primary">Horse</button></Link> */}
            {/* <CommonNav/> */}
            <div style={{ display: "flex" }}>
                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/5749799/pexels-photo-5749799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"100%", height:"auto"}}/>
                        <div className="card-body">
                            <h3 className="card-title">Funding</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/requestfundingform"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="card-img-top" alt="..." style={{width:"100%", height:"auto"}}/>
                        <div className="card-body">
                            <h3 className="card-title">Report Lost</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/lostpet"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/5745223/pexels-photo-5745223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"100%", height:"auto"}}/>
                        <div className="card-body">
                            <h3 className="card-title">Shows</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/shows"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"100%", height:"auto"}} />
                        <div className="card-body">
                            <h3 className="card-title">Sales</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/sales"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/19145872/pexels-photo-19145872/free-photo-of-dog-groomer-trimming-dogs-nails.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"100%", height:"200px"}}/>
                        <div className="card-body">
                            <h3 className="card-title">Purchase</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/purchase"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/20292579/pexels-photo-20292579/free-photo-of-an-australian-shepherd-standing-on-a-field-with-purple-heather.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="card-img-top" alt="..." style={{width:"100%", height:"auto"}}/>
                        <div className="card-body">
                            <h3 className="card-title">Adoption</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Adoption"><a href="#" className="btn btn-primary1" style={{backgroundColor:"Red", color:"white"}}>Click Here</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BirdServices;