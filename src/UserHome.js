import React from "react";
import { Link } from "react-router-dom";
import Dogbg from "./Dogbg.mp4";
import Navpet from "./Navpet";


function UserHome(){
    return(
        <>
        <Navpet/>
        <div className="home" id="home" style={{ marginTop : "-65px"}}>
                <video autoPlay loop muted style={{height:"800px", width:"1200px"}}>
                    <source src={Dogbg} type="video/mp4" />
                </video>

        </div>

        <div >
        <div >
            <div class="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth : "480px"}} >
                
                <h1 class="display-5 text-uppercase mb-0" style={{marginLeft : "80%", marginRight : "-150%"}}>Our Excellent Pet Care Services</h1>
            </div>
            <br/>
            
                
                    <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "20%"}}>Pet Boarding</h1>
                            <p style={{ width : "70%", marginLeft : "3%"}}>Dog Boarding is temporary lodging for your dog while you are away. Just like in a daycare for kids, a dog boarding facility makes provisions for pet owners to drop their dogs within a specified period, under the care and supervision of trained professionals. <br/>
                            These professionals act as pet parents throughout the process of boarding your dog, to ensure that they are well cared for till you are back to pick them up. This will include providing meals or medication(if needed) based on your specifications, fun, exercise, and activities, making sure that your puppy feels at home.</p>
                            <Link to="/Readmoreb"><a class="text-primary text-uppercase" href="" style={{ marginLeft : "3%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>
                        </div>
                        <div>
                            <img style={{ width : "180%", height : '60vh', marginRight : "10%", marginLeft : "-110%", border : "1px solid", borderRadius : "5rem"}} src="https://images.pexels.com/photos/14084426/pexels-photo-14084426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                    </div>
                    <br/>

                    <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <img style={{ width : "180%", height : '60vh', border : "1px solid", borderRadius : "5rem",marginRight : "10%", marginLeft : "10%"}} src="https://images.pexels.com/photos/8858630/pexels-photo-8858630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "40%"}}>Pet Feeding</h1>
                            <p style={{ width : "70%", marginRight : "5%", marginLeft : "25%"}}>A healthy and balanced diet is essential for a healthy and happy pet. Not only will it provide your pet with enough energy for his day to day activities, but it is also vital for proper brain function. An adequate diet is also particularly important for animals in the early stages of their development.<br/>
                            One of the most important things to remember when it comes to feeding your pet is to feed them by ‘life-stage’. Different animals, and in particular cats and dogs, require different nutrition at different stages of their life.</p>
                           <Link to= "/Readmoreg"> <a class="text-primary text-uppercase" href="" style={{ marginLeft : "25%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>
                        </div>
                    </div>
                     <br/>
                     
                    <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "20%"}}>Pet Grooming</h1>
                            <p style={{ width : "70%", marginLeft : "3%"}}>Dog Boarding is temporary lodging for your dog while you are away. Just like in a daycare for kids, a dog boarding facility makes provisions for pet owners to drop their dogs within a specified period, under the care and supervision of trained professionals. <br/>
                            These professionals act as pet parents throughout the process of boarding your dog, to ensure that they are well cared for till you are back to pick them up. This will include providing meals or medication(if needed) based on your specifications, fun, exercise, and activities, making sure that your puppy feels at home.</p>
                            <Link to="/Readmorem"><a class="text-primary text-uppercase" href="" style={{ marginLeft : "3%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>    
                        </div>
                        <div>
                            <img style={{ width : "300%", height : '60vh',border : "1px solid", borderRadius : "5rem", marginRight : "40%", marginLeft : "-250%"}} src="https://images.pexels.com/photos/6131535/pexels-photo-6131535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                    </div>
                    <br/>

                    <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <img style={{ width : "280%", height : '60vh',border : "1px solid", borderRadius : "5rem", marginRight : "10%", marginLeft : "20%"}} src="https://images.pexels.com/photos/11219365/pexels-photo-11219365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "40%"}}>Pet Trainng</h1>
                            <p style={{ width : "70%", marginRight : "5%", marginLeft : "26%"}}>A healthy and balanced diet is essential for a healthy and happy pet. Not only will it provide your pet with enough energy for his day to day activities, but it is also vital for proper brain function. An adequate diet is also particularly important for animals in the early stages of their development.<br/>
                            One of the most important things to remember when it comes to feeding your pet is to feed them by ‘life-stage’. Different animals, and in particular cats and dogs, require different nutrition at different stages of their life.</p>
                           <Link to="/Readmoret"> <a class="text-primary text-uppercase" href="" style={{ marginLeft : "26%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>
                        </div>
                    </div>
                     <br/>
                    
                     <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "20%"}}>Pet Nutrition</h1>
                            <p style={{ width : "70%", marginLeft : "3%"}}>Dog Boarding is temporary lodging for your dog while you are away. Just like in a daycare for kids, a dog boarding facility makes provisions for pet owners to drop their dogs within a specified period, under the care and supervision of trained professionals. <br/>
                            These professionals act as pet parents throughout the process of boarding your dog, to ensure that they are well cared for till you are back to pick them up. This will include providing meals or medication(if needed) based on your specifications, fun, exercise, and activities, making sure that your puppy feels at home.</p>
                           <Link to="/Readmores"> <a class="text-primary text-uppercase" href="" style={{ marginLeft : "3%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>
                        </div>
                        <div>
                            <img style={{ width : "200%", height : '50vh',border : "1px solid", borderRadius : "5rem", marginRight : "10%", marginLeft : "-130%"}} src="https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                    </div>
                    <br/>
                    <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <img style={{ width : "280%", height : '60vh',border : "1px solid", borderRadius : "5rem", marginRight : "10%", marginLeft : "20%"}} src="https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "40%"}}>Pet Dayare</h1>
                            <p style={{ width : "70%", marginRight : "5%", marginLeft : "25%"}}>A healthy and balanced diet is essential for a healthy and happy pet. Not only will it provide your pet with enough energy for his day to day activities, but it is also vital for proper brain function. An adequate diet is also particularly important for animals in the early stages of their development.<br/>
                            One of the most important things to remember when it comes to feeding your pet is to feed them by ‘life-stage’. Different animals, and in particular cats and dogs, require different nutrition at different stages of their life.</p>
                           <Link to="/Readmoreh"> <a class="text-primary text-uppercase" href="" style={{ marginLeft : "25%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>
                        </div>
                    </div>
                     <br/>
                     <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "20%"}}>Pet Breeding</h1>
                            <p style={{ width : "70%", marginLeft : "3%"}}>Dog Boarding is temporary lodging for your dog while you are away. Just like in a daycare for kids, a dog boarding facility makes provisions for pet owners to drop their dogs within a specified period, under the care and supervision of trained professionals. <br/>
                            These professionals act as pet parents throughout the process of boarding your dog, to ensure that they are well cared for till you are back to pick them up. This will include providing meals or medication(if needed) based on your specifications, fun, exercise, and activities, making sure that your puppy feels at home.</p>
                           <Link to="/Readmorer"> <a class="text-primary text-uppercase" href="" style={{ marginLeft : "3%"}}>Read More<i class="bi bi-chevron-right"></i></a></Link>
                        </div>
                        <div>
                            <img style={{ width : "200%", height : '50vh',border : "1px solid", borderRadius : "5rem", marginRight : "10%", marginLeft : "-130%"}} src="https://images.pexels.com/photos/5953800/pexels-photo-5953800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                    </div>
                    <br/>
               
            </div>
            
        </div>
        
    
    

        


        </>

    )
}
export default UserHome;