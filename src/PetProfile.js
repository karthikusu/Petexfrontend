import React from "react";
import { Link } from "react-router-dom";
import Navpet from "./Navpet";

function PetProfile(){
    return(
        <>
        <Navpet/>
        <div className="Dog-Cards" style={{ display : "flex", marginTop : "0%",  height: "85vh"}}>
        <div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/11485111/pexels-photo-11485111.jpeg" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem", marginTop: "-1%" }}>Dog</h5>
    <p class="card-text" style={{ marginLeft : "10%", marginBottom : "10%", fontWeight : "bold", marginTop: "-16%"}}>Dogs are sometimes referred to as "man's best friend" because they are kept as domestic pets, are usually loyal, and like being around humans...</p>
    <Link to = "/Profiledog"><button class="btn btn-primary" style={{marginLeft: "23%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div> 

<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Cat</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Cats are sometimes referred to as "man's best friend" because they are kept as domestic pets, are usually loyal, and like being around humans....</p>
    <Link to = "/Profilecat"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>

</div>
<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/587411/pexels-photo-587411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Sheep</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Sheep are domesticated animals which have been bred by man. There are breeds which specialise in wool or meat.

The plural of "sheep" is just "sheep"....</p>
    <Link to = "/Profilesheep"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginTop : "-4%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div>

<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginRight : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Elephant</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Sheru is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profileelephant"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white", marginTop:"10vh"}}>Profile</button></Link>  </div>
</div>

</div>

<div className="Dog-Cards" style={{ display : "flex"}}>
        <div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/461717/pexels-photo-461717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Horse</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Lucy is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilehorse"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div>
 
<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Bird</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Billu is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilebird"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>

</div>
<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/13999621/pexels-photo-13999621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Chicken</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Thinku is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilechicken"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div>

<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginRight : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Bunny</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Max is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilebunny"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div>




</div>
<div className="Dog-Cards" style={{ display : "flex", marginTop : "0%"}}>
        <div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/7723268/pexels-photo-7723268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem" ,marginTop: "-1%"}}>Camel</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Simba is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilecamel"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div> 
 
<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Cow</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Tommy is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilecow"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>

</div>
<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/144240/goat-lamb-little-grass-144240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Goat</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "10%", fontWeight : "bold",marginTop: "-16%"}}>Bruno is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilegoat"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>Profile</button></Link>
  </div>
</div>

<div class="card" style={{width: "420px", border : "1px solid", borderRadius : "2rem", marginLeft : "2%", marginRight : "2%", marginTop : "2%"}}>
  <img src="https://images.pexels.com/photos/16009/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width : "100%",borderRadius : "2rem", height : "40vh"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{ marginLeft : "30%", color : "blue", fontFamily : "Arial, Helvetica", fontSize : "2rem",marginTop: "-1%"}}>Buffalo</h5>
    <p class="card-text" style={{ marginLeft : "10%",marginBottom : "4%", fontWeight : "bold",marginTop: "-16%"}}>Sheru is  very good,loyal animal,you want to keep in your house...</p>
    <Link to = "/Profilebufflo"><button class="btn btn-primary" style={{marginLeft: "30%",fontFamily : "Arial, Helvetica", width: "8rem",height : "6vh", borderRadius : "1rem",marginBottom : "2%", backgroundColor :"blue", fontSize : "1rem", color : "white"}}>View More</button></Link>  </div>
</div>

</div>
        </>
    )
}
export  default PetProfile;