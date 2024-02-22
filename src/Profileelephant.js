import React from "react";
import Navpet from "./Navpet";
import { Link } from "react-router-dom";

function Profileelephant(){
    return(
        <>
         <Navpet/>
         <div className="Dog-Cards" style={{ display : "flex", marginTop : "2rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 25rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Simba</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 2px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem", marginRight : "10%" }}>
  <img src="https://images.pexels.com/photos/4003655/pexels-photo-4003655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Tommy</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:Black and White</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

   <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "-8%" , borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/1054654/pexels-photo-1054654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Bruno</p>
  <p classname="card-text">Breed:Pomeranian Puppy</p>

  <p classname="card-text">Colour:white and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

    <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px",borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 26rem", marginLeft : "-8%", borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/5212223/pexels-photo-5212223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Sheru</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

    <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>

<div class="Dog-Cards" style={{ display : "flex", marginTop : "3rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 23rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/7320161/pexels-photo-7320161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Munna</p>
  <p classname="card-text">Breed:Husky</p>
  <p classname="card-text">Colour:white and Gray</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/803845/pexels-photo-803845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "290px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:John</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:White and Brown</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

    <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "2%" , borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "290px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Mike</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

  <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/7956232/pexels-photo-7956232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px",borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Mahi</p>
  <p classname="card-text">Breed:German Sheperd</p>
  <p classname="card-text">Colour:Black and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

  <Link to="/elephantadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>



        </>

    )
}
export default Profileelephant;