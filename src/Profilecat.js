import React from "react";
import Navpet from "./Navpet";
import { Link } from "react-router-dom";

function Profilecat(){
    return(

        <>
        <Navpet/>

    
        <div className="Dog-Cards" style={{ display : "flex", marginTop : "2rem"}}>

         <div class="cards" style={{ border : " 2px solid", width : " 23rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Lucy</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/catadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 2px solid", width : " 23rem", marginLeft : "2%", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Tommy</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:Black and White</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>
      
  <Link to="/catadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 2px solid", width : " 23rem", marginLeft : "2%" , borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Bruno</p>
  <p classname="card-text">Breed:Pomeranian Puppy</p>

  <p classname="card-text">Colour:white and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

  <Link to="/catadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 2px solid", width : " 23rem", marginLeft : "2%", borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=600" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Sheru</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

  <Link to="/catadoption"> <button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>

<div class="Dog-Cards" style={{ display : "flex", marginTop : "3rem"}}>

         <div class="cards" style={{ border : " 2px solid", width : " 23rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Munna</p>
  <p classname="card-text">Breed:Husky</p>
  <p classname="card-text">Colour:white and Gray</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

  <Link to="/catadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 2px solid", width : " 23rem", marginLeft : "2%", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:John</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:White and Brown</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

  <Link to="/catadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 2px solid", width : " 23rem", marginLeft : "2%" , borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Mike</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

  <Link to="/catadoption"> <button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 2px solid", width : " 22rem", marginLeft : "2%", borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/11173788/pexels-photo-11173788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Mahi</p>
  <p classname="card-text">Breed:German Sheperd</p>
  <p classname="card-text">Colour:Black and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

  <Link to="/catadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>
        
        </>
    )
}
export default Profilecat;