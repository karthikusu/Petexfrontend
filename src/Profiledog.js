import React from "react";
import Navpet from "./Navpet";
import { Link } from "react-router-dom";



function Profiledog(){
    return(
        <>
         <Navpet/>
         <div className="Dog-Cards" style={{ display : "flex", marginTop : "2rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 25rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/8412357/pexels-photo-8412357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Simba</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/dogadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 2px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem", marginRight : "10%" }}>
  <img src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height :"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Tommy</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:Black and White</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

   <Link to="/dogadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "-8%" , borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height : "240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Bruno</p>
  <p classname="card-text">Breed:Pomeranian Puppy</p>

  <p classname="card-text">Colour:white and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

    <Link to="/dogadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 26rem", marginLeft : "-8%", borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height : "240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Sheru</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

    <Link to="/dogadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>

<div class="Dog-Cards" style={{ display : "flex", marginTop : "3rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 23rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height : "240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Munna</p>
  <p classname="card-text">Breed:Husky</p>
  <p classname="card-text">Colour:white and Gray</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/dogadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 1px solid", width : " 24rem", marginLeft : "2%", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height :"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:John</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:White and Brown</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

    <Link to="/dogadoption"><button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 24rem", marginLeft : "2%" , borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height : "240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Mike</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>
  <Link to="/dogadoption">
    <button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 24rem", marginLeft : "2%", borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px", height : "240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Mahi</p>
  <p classname="card-text">Breed:German Sheperd</p>
  <p classname="card-text">Colour:Black and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>
  <Link to="/dogadoption">
    <button class="btn btn-primary" style={{marginLeft: "20px",fontFamily : "Arial, Helvetica", width: "8rem",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>



        </>

    )
}
export default Profiledog;