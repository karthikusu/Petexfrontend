import React from 'react';

import rabitImage from '../assets/rabit1.jpg';
import Dog from '../assets/dog.jpg';
import Cat from '../assets/cat.png';
import Logo from '../assets/petcare logo.jpg';
import Caredog from '../assets/caredog.jpg';
import Catcare from '../assets/catcare.jpg';
import Poultrycare from '../assets/poultrycare.jpg';
import Cowcare from '../assets/cowcare.jpg';
import Birdscare from '../assets/birdcare.jpg';
import Horsecare from '../assets/horsecare.jpg';
import Horse from '../assets/Horse1.jpg';
import Allpetsbanner from '../assets/allpetsbanner.jpg';
import { Carousel } from 'react-bootstrap';
import Poultry from '../assets/poultry.jpeg';
import Bird from '../assets/bird.jpg';
import Sheep from '../assets/sheep.jpg';
import Elephant from '../assets/elephant.jpg';
import { Link } from 'react-router-dom';
import Styles from './styles.css';
import $ from 'jquery';
import NavigationBar from './NavigationBar.jsx';
import DF from '../assets/dogfood.png';
import CF from '../assets/catfood.png';
import CT from '../assets/cattoys.jpg';
import rabitfood from '../assets/rabitfood.png';
import horsefood from '../assets/horsefood.png';
import DW from '../assets/Dogwinter.jpeg';
import DJ from '../assets/dogjacket.jpg';
import PC from '../assets/petcloths.jpg';
import DB from '../assets/Dogbeds.jpg';
import RC from '../assets/rabitcloths.jpg';
import Grooming from '../assets/grooming.jpg';
import healthcare from '../assets/healthcare.jpeg';
import Breeding from '../assets/Dogbreeds.jpg';
import Sixty from '../assets/sixty.jpg';
import Fortyfive from '../assets/fortyfive.jpg';
import fiftyrabits from '../assets/fiftrabits.jpeg';
import fiftyfood from '../assets/fiftyfood.jpeg';

import cateating from '../assets/cateating.mp4';
import grooming from '../assets/grooming.mp4';
import dogwalking from '../assets/dogwalking.mp4';
import hamster from '../assets/hamster.jpg';
import kong from '../assets/kong.jpg';
//import cattoys from '../assets/cattoys.jpg';
import bone from '../assets/bone.jpg';
import birdtoys from '../assets/birdtoys.png';
import doctor2 from '../assets/doctor3.png';
import doctor3 from '../assets/doctor3.jpg';
import doctor4 from '../assets/doctor4.jpg';
import feeding from '../assets/feeding.jpg';
import cow from '../assets/Cow.jpg';
import camel from '../assets/camel1.jpg';


import { useState } from 'react';
import Footer from './Footer.jsx';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    { name: "Dog", url: "/Profiledog" },
    { name: "Cat", url: "/Profilecat" },
    { name: "Horse", url: "https://www.horsewebsite.com" },
    { name: "Rabit", url: "rabits" },
    { name: "Cow", url: "https://www.catwebsite.com" },
    { name: "Elephants", url: "https://www.horsewebsite.com" },
    { name: "Goat & Sheep", url: "https://www.dogwebsite.com" },
    { name: "Poultry", url: "https://www.catwebsite.com" },
    { name: "Birds", url: "https://www.horsewebsite.com" },
    { name: "Food", url: "https://www.dogwebsite.com" },
    { name: "Clothing", url: "https://www.catwebsite.com" },
    { name: "Winter Deals", url: "https://www.horsewebsite.com" },
    { name: "Toys", url: "https://www.dogwebsite.com" },
    { name: "Vet Care", url: "https://www.catwebsite.com" },
    { name: "Doctor Appointment", url: "https://www.horsewebsite.com" },
  ];

  

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body>
      <NavigationBar />
    <div className="Deals" style={{ marginTop: '90px', marginLeft: '5px', marginRight: '5px' }}>
          <a href="/rabithome" style={{ textDecoration: 'none', color: 'black', marginLeft:"15px" }}>
            <img src={rabitImage} alt="rabits" />
            <p style={{ marginLeft: '40px' }}><b>Rabits</b></p>
          </a>
          <a href="/doghome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Dog} alt="rabits"/>
            <p style={{ marginLeft: '43px' }}><b>Dog</b></p>
          </a>
          <a href="/cathome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Cat} alt="rabits"/>
            <p style={{ marginLeft: '45px' }}><b>Cat</b></p>
          </a>
          <a href="/chickenhome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Poultry} alt="rabits" />
            <p style={{ marginLeft: '37px' }}><b>Poultry</b></p>
          </a>
          <a href="/birdhome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Bird} alt="rabits" />
            <p style={{ marginLeft: '40px' }}><b>Birds</b></p>
          </a>
          <a href="/horsehome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Horse} alt="rabits"/>
            <p style={{ marginLeft: '40px' }}><b>Horse</b></p>
          </a>
          <a href="/goatsheapgoat" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Sheep} alt="rabits"/>
            <p style={{ marginLeft: '10px' }}><b>Goats & Sheeps</b></p>
          </a>
          <a href="/elephanthome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Elephant} alt="rabits" />
            <p style={{ marginLeft: '30px' }}><b>Elephants</b></p>
          </a>
          <a href="/cowhome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={cow} alt="rabits" />
            <p style={{ marginLeft: '47px' }}><b>Cow</b></p>
          </a>
          <a href="/camelhome" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={camel} alt="rabits" />
            <p style={{ marginLeft: '40px' }}><b>Camel</b></p>
          </a>
        
        </div>
      {/* <div 
      style={{backgroundColor: "rgb(31, 26, 58)", width:"100%", height:"80px", color:"white", textAlign:"center", fontFamily:"serif"}}>
        <h1>Welcome To PETEX</h1>
        <h5 style={{fontFamily:"unset"}}>We care more about your pets</h5>
        </div> */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "10px" }}>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img src={Caredog} className="d-block w-100" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Catcare} className="d-block w-100" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Poultrycare} className="d-block w-100" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Cowcare} className="d-block w-100" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Birdscare} className="d-block w-100" alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Horsecare} className="d-block w-100" alt="..." />
        </Carousel.Item>
        </Carousel>
      </div>

      <div class="offers-header" style={{ textAlign: "center", margin: "20px 0" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h3>Our Best Deals</h3>
  <hr class="line" style={{ width: "200px" }} />
</div>

<div className="sellercard" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px" }}>
  {/* Deal Cards */}
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={Sixty} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={Fortyfive} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={fiftyrabits} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={fiftyfood} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
  </div>
</div>

<div class="offers-header" style={{ textAlign: "center", margin: "20px 0" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h3>Our Services</h3>
  <hr class="line" style={{ width: "200px" }} />
</div>

<div className="sellercard" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px" }}>
  {/* Service Cards */}
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={Grooming} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
    <div class='card-info'>
      <b>Grooming</b>
    </div>
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={healthcare} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
    <div class='card-info'>
      <b>Health Care</b>
    </div>
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={Breeding} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
    <div class='card-info'>
      <b>Breeding</b>
    </div>
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={feeding} alt="Cat" style={{ maxWidth: "100%", height: "250px" }} />
    <div class='card-info'>
      <b>Feeding</b> 
    </div>
  </div>
</div>


{/* Add other sections similarly */}

      <div>
      <video 
      src={dogwalking} 
      style={{
      height: "450px", 
      width: "1200px", 
      marginTop: "20px", 
      marginLeft: "10px"
      }}
      autoPlay  
      loop      
      muted     
      ></video>
    </div>

      <div class="offers-header" style={{marginTop:"30px"}}>
        <hr class="line" style={{marginLeft:"100px", width:"200px"}}/>
        <span> <h3>We offer</h3></span>
        <hr class="line" style={{marginRight:"100px", width:"200px"}}/>
      </div>

      <div class='sellercard'>
        <div class='card' style={{borderColor:"transparent"}}>
        <a href='/userlogin'> <img src={DJ} alt="Cat" />
          <div class='card-info'>
          <b style={{textDecoration:"none", color:"black"}}>Jackets</b>
        </div></a>
      </div>
      <div class='card' style={{borderColor:"transparent"}}>
      <a href='/userlogin'><img src={DW} alt="Cat" />
        <div class='card-info'>
          <b style={{textDecoration:"none", color:"black"}}>Winter collection</b>
        </div></a>
      </div>
      <div class='card' style={{borderColor:"transparent"}}>
      <a href='/userlogin'> <img src={DB} alt="Cat" />
          <div class='card-info'>
            <b style={{textDecoration:"none", color:"black"}}>Beds and beadsheets</b>
          </div></a>
      </div>
        <div class='card' style={{borderColor:"transparent"}}>
        <a href='/userlogin'> <img src={RC} alt="Cat" />
          <div class='card-info'>
            <b style={{textDecoration:"none", color:"black"}}>Cloths</b>
          </div></a>
        </div>
      </div>

      <div class="offers-header" >
        <hr class="line" style={{marginLeft:"100px", width:"200px"}} />
          <span> <h3>Our Top Products</h3></span>
        <hr class="line" style={{marginRight:"100px", width:"200px"}}/>
      </div>

      <div class='sellercard'>
        <div class='card' style={{borderRadius:"50%",borderColor:"transparent"}}>
        <a href='/userlogin'><img src={kong} alt="kongo" style={{borderRadius:"50%"}}/>
          <div class='card-info'>
            <b style={{textDecoration:"none", color:"black"}}>Kong</b>
          </div></a>
        </div>
        <div class='card' style={{borderRadius:"50%", borderColor:"transparent"}}>
        <a href='/userlogin'><img src={birdtoys} alt="birdtoys" style={{borderRadius:"50%"}}/>
          <div class='card-info'>
          <b style={{textDecoration:"none", color:"black"}}>Bird Toys</b>
          </div></a>
        </div>
        <div class='card' style={{borderRadius:"50%", borderColor:"transparent"}}>
        <a href='/userlogin'><img src={bone} alt="bone" style={{borderRadius:"50%"}} />
          <div class='card-info'>
            <b style={{textDecoration:"none", color:"black"}}>Bone Toys</b>
          </div></a>
        </div>
        <div class='card' style={{borderRadius:"50%", borderColor:"transparent"}}>
        <a href='/userlogin'><img src={hamster} alt="hamster" style={{borderRadius:"50%"}}/>
          <div class='card-info'>
          <b style={{textDecoration:"none", color:"black"}}>Hamster</b> 
          </div></a>
        </div>
      </div>

      <div class="offers-header" >
        <hr class="line"  style={{marginLeft:"100px", width:"200px"}}/>
        <span> <h3>Top Categories</h3></span>
        <hr class="line" style={{marginRight:"100px", width:"200px"}}/>
      </div>
    
    <div class="home__images1" style={{marginTop: "30px"}}>
    <a href='/userlogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={CF} 
    style={{ transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)" }}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b> DogFood</b></h3></a>
    <a href='/userlogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={DF} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Cat Food</b></h3></a>
    <a href='/userlogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={CT} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Cat Toys</b></h3></a>
    <a href='/userlogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={PC} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Cloths</b></h3></a>
    <a href='/userlogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={rabitfood} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Rabit Food</b></h3></a>
    <a href='/userlogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={horsefood} 
    style={{transform: "rotate(10deg)",height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Horse Food</b></h3></a>
    </div>

    <div class="offers-header" >
      <hr class="line" style={{marginLeft:"100px", width:"200px"}}/>
      <span> <h3>Ask Our Consultants</h3></span>
      <hr class="line" style={{width:"200px", marginRight:"100px"}}/>
      </div>
    <div class='experts-card'>
        <div class='card' style={{width:"300px", height:"400px"}}>
        <img src={doctor2} alt="Cat" 
        style={{height:"160px",width:"160px", marginLeft:"70px", borderRadius:"50%"}} />
        <div style={{backgroundColor:'rgb(23, 39, 122)'}}>
        <h4 style={{textAlign:"center", color:"white"}}>Dr Harry Porter</h4>
        <p style={{textAlign:"center", color:"white", height:"187px"}}>Dr Harry Porter, He has more than 20+ years of experiance as a veterinarian.
          He has an excellent journety with PETEX. He has a great Skills in clinical procedures
          and he is well experienced about all pet diseases. He love pets more that's the reason now he is here.........
          <a href='#' style={{color:"white"}}>konw More</a> 
        </p></div>
      </div>
      <div class='card' style={{width:"300px", height:"400px"}}>
        <img src={doctor3} alt="Cat" 
        style={{height:"160px",width:"160px", marginLeft:"70px", borderRadius:"50%"}}/>
        <div style={{backgroundColor:'rgb(23, 39, 122)'}}>
        <h4 style={{textAlign:"center", color:"white"}}>Stella ben</h4>
        <p style={{textAlign:"center", color:"white", height:"187px"}}>Stella ben, she is the head of our horse training center.
        She has experience of 15+ years in maintaing all pets trainings sections. Her dedication in taking care about pets
        is more precious.......... <a href='#' style={{color:"white"}}>konw More</a>
        </p>
       </div>
      </div>
      <div class='card' style={{width:"300px", height:"400px"}}>
        <img src={doctor4} alt="Cat"  
        style={{height:"160px",width:"160px", marginLeft:"70px", borderRadius:"50%"}}/>
         <div style={{backgroundColor:'rgb(23, 39, 122)'}}>
        <h4 style={{textAlign:"center", color:"white"}}>Liana Maren</h4>
        <p style={{textAlign:"center", color:"white", height:"187px"}}>Liana Maren, she is may be one of the best groomer
        in the world . She has a great talent in grooming all types of pets. Her experience is more than 12+ years but
        her work looks like more than 30+ years experts work..........
        <a href='#' style={{color:"white"}}>konw More</a>
        </p></div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </body>
  </html>
    
  );
  
}

export default Home;
