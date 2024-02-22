import React from "react";
import { Link } from "react-router-dom";



function Homerabit(){
    return(
        <>
         
         <div className="Dog-Cards" style={{ display : "flex", marginTop : "2rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 25rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Simba</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/userlogin"><button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 2px solid", width : " 25rem", marginLeft : "2%", borderRadius : "2rem", marginRight : "10%" }}>
  <img src="https://images.pexels.com/photos/1327599/pexels-photo-1327599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Tommy</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:Black and White</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

   <Link to="/userlogin"><button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica",width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 25rem", marginLeft : "-8%" , borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/9348913/pexels-photo-9348913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Bruno</p>
  <p classname="card-text">Breed:Pomeranian Puppy</p>

  <p classname="card-text">Colour:white and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>

    <Link to="/userlogin"><button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 26rem", marginLeft : "-8%", borderRadius : "2rem", marginRight : "10%"}}>
  <img src="https://images.pexels.com/photos/1510544/pexels-photo-1510544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Sheru</p>
  <p classname="card-text">Breed:Chow Chow</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>

    <Link to="/userlogin"><button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>

<div class="Dog-Cards" style={{ display : "flex", marginTop : "3rem"}}>

         <div class="cards" style={{ border : " 1px solid", width : " 20rem", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/2389073/pexels-photo-2389073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Munna</p>
  <p classname="card-text">Breed:Husky</p>
  <p classname="card-text">Colour:white and Gray</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Hydarabad</p>

    <Link to="/userlogin"><button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>


<div class="cards" style={{ border : " 1px solid", width : " 300rem", marginLeft : "2%", borderRadius : "2rem" }}>
  <img src="https://images.pexels.com/photos/2061754/pexels-photo-2061754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "290px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:John</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:White and Brown</p>

  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Goa</p>

    <Link to="/userlogin"><button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica",width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 20rem", marginLeft : "2%" , borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/2883510/pexels-photo-2883510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{ width : "290px",height:"240px", borderRadius : "1rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : 'Lucida Console'}}>
  <p classname="card-text">Name:Mike</p>
  <p classname="card-text">Breed:Puppy</p>
  <p classname="card-text">Colour:white</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Kolkata</p>
  <Link to="/userlogin">
    <button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

<div class="cards" style={{ border : " 1px solid", width : " 20rem", marginLeft : "2%", borderRadius : "2rem"}}>
  <img src="https://images.pexels.com/photos/6546559/pexels-photo-6546559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classname="card-img-top" alt="..." style={{  width : "280px",height:"240px", borderRadius : "2rem"}}/>
  <div classname="card-body" style={{ marginLeft : "50px", fontFamily : "Lucida Console"}}>
  <p classname="card-text">Name:Mahi</p>
  <p classname="card-text">Breed:German Sheperd</p>
  <p classname="card-text">Colour:Black and Brown</p>
  <p classname="card-text">Age:1year</p>
  <p classname="card-text">Location:Karnataka</p>
  <Link to="/userlogin">
    <button class="btn btn-primary" style={{marginLeft: "20%",fontFamily : "Arial, Helvetica", width: "100px",height : "35px", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Viewmore</button></Link>
  </div>
</div>

</div>



        </>

    )
}
export default Homerabit;