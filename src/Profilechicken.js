import React from "react";
import Navpet from "./Navpet";
import { Link } from "react-router-dom";



function Profilechicken(){
    return(
        <>
         <Navpet/>
         <div className="Dog-Cards" style={{ display : "flex", marginTop : "2rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 25rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/55834/chicks-spring-chicken-plumage-55834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Simba</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/chickenadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 2px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem", marginRight : "10%" }}>
  <img src="https://images.pexels.com/photos/3941727/pexels-photo-3941727.jpeg" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Tommy</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:Black and White</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

   <Link to="/chickenadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "-8%" , borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/5143/cute-animals-easter-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Bruno</p>
  <p classname="card-text">Breed:Pomeranian Puppy</p>

  <p classname="card-text">Colour:white and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

    <Link to="/chickenadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 26rem", marginLeft : "-8%", borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Sheru</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

    <Link to="/chickenadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>

<div class="Dog-Cards" style={{ display : "flex", marginTop : "3rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 23rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Munna</p>
  <p classname="card-text">Breed:Husky</p>
  <p classname="card-text">Colour:white and Gray</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/chickenadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:John</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:White and Brown</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

    <Link to="/chickenadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "2%" , borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/10667927/pexels-photo-10667927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Mike</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

    <button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/8061830/pexels-photo-8061830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Mahi</p>
  <p classname="card-text">Breed:German Sheperd</p>
  <p classname="card-text">Colour:Black and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>
  <Link to="/chickenadoption">
    <button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>



        </>

    )
}
export default Profilechicken;