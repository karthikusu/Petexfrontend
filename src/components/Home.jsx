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
          <a href="/pets" style={{ textDecoration: 'none', color: 'black', marginLeft:"15px" }}>
            <img src={rabitImage} alt="rabits" />
            <p style={{ marginLeft: '40px' }}><b>Rabits</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Dog} alt="rabits"/>
            <p style={{ marginLeft: '43px' }}><b>Dog</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Cat} alt="rabits"/>
            <p style={{ marginLeft: '45px' }}><b>Cat</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Poultry} alt="rabits" />
            <p style={{ marginLeft: '37px' }}><b>Poultry</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Bird} alt="rabits" />
            <p style={{ marginLeft: '40px' }}><b>Birds</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Horse} alt="rabits"/>
            <p style={{ marginLeft: '40px' }}><b>Horse</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Sheep} alt="rabits"/>
            <p style={{ marginLeft: '10px' }}><b>Goats & Sheeps</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Elephant} alt="rabits" />
            <p style={{ marginLeft: '30px' }}><b>Elephants</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={cow} alt="rabits" />
            <p style={{ marginLeft: '47px' }}><b>Cow</b></p>
          </a>
          <a href="/pets" style={{ textDecoration: 'none', color: 'black' }}>
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
      <a href='/userprofilelogin' style={{textDecoration:"none", color:"black"}}><b>Grooming</b></a>
    </div>
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={healthcare} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
    <div class='card-info'>
      <a href="/userprofilelogin" style={{textDecoration:"none" , color:"black"}}><b>Health Care</b></a>
    </div>
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={Breeding} alt="Cat" style={{ maxWidth: "100%", height: "auto" }} />
    <div class='card-info'>
    <a href="/userprofilelogin" style={{textDecoration:"none" , color:"black"}}><b>Breeding</b></a>
    </div>
  </div>
  <div className="card" style={{ margin: "0 10px", position: "relative" }}>
    <img src={feeding} alt="Cat" style={{ maxWidth: "100%", height: "250px" }} />
    <div class='card-info'>
    <a href="/userprofilelogin" style={{textDecoration:"none" , color:"black"}}><b>Feeding</b></a>
    </div>
  </div>
</div>


{/* Add other sections similarly */}

<div style={{ maxWidth: '100%', overflow: 'hidden' }}>
  <video
    src={dogwalking}
    style={{
      width: '100%',
      height: 'auto',
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    }}
    autoPlay
    loop
    muted
  ></video>
</div>


    <div class="offers-header" style={{ marginTop: "30px", textAlign: "center" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h3>We offer</h3>
  <hr class="line" style={{ width: "200px" }} />
</div>

<div class='sellercard' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
  <div class='card' style={{ borderColor: "transparent", width: "260px", margin: "10px" }}>
    <a href='/userprofilelogin'> <img src={DJ} alt="Cat" style={{ width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Jackets</b>
      </div>
    </a>
  </div>
  <div class='card' style={{ borderColor: "transparent", width: "240px", margin: "10px" }}>
    <a href='/userprofilelogin'><img src={DW} alt="Cat" style={{ width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Winter collection</b>
      </div>
    </a>
  </div>
  <div class='card' style={{ borderColor: "transparent", width: "250px", margin: "10px" }}>
    <a href='/userprofilelogin'> <img src={DB} alt="Cat" style={{ width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Beds and bedsheets</b>
      </div>
    </a>
  </div>
  <div class='card' style={{ borderColor: "transparent", width: "250px", margin: "10px" }}>
    <a href='/userprofilelogin'> <img src={RC} alt="Cat" style={{ width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Cloths</b>
      </div>
    </a>
  </div>
</div>

<div class="offers-header" style={{ textAlign: "center", marginTop: "30px" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h3>Our Top Products</h3>
  <hr class="line" style={{ width: "200px" }} />
</div>

<div class='sellercard' style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
  <div class='card' style={{ borderRadius: "50%", borderColor: "transparent", width: "250px", margin: "10px" }}>
    <a href='/userprofilelogin'><img src={kong} alt="kongo" style={{ borderRadius: "50%", width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Kong</b>
      </div>
    </a>
  </div>
  <div class='card' style={{ borderRadius: "50%", borderColor: "transparent", width: "250px", margin: "10px" }}>
    <a href='/userprofilelogin'><img src={birdtoys} alt="birdtoys" style={{ borderRadius: "50%", width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Bird Toys</b>
      </div>
    </a>
  </div>
  <div class='card' style={{ borderRadius: "50%", borderColor: "transparent", width: "250px", margin: "10px" }}>
    <a href='/userprofilelogin'><img src={bone} alt="bone" style={{ borderRadius: "50%", width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Bone Toys</b>
      </div>
    </a>
  </div>
  <div class='card' style={{ borderRadius: "50%", borderColor: "transparent", width: "250px", margin: "10px" }}>
    <a href='/userprofilelogin'><img src={hamster} alt="hamster" style={{ borderRadius: "50%", width: "100%", height: "auto" }} />
      <div class='card-info'>
        <b style={{ textDecoration: "none", color: "black" }}>Hamster</b>
      </div>
    </a>
  </div>
</div>


<div class="offers-header" style={{ textAlign: "center" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h3>Top Categories</h3>
  <hr class="line" style={{ width: "200px" }} />
</div>
    
    <div class="home__images1" style={{marginTop: "30px"}}>
    <a href='/userprofilelogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={CF} 
    style={{ transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)" }}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b> DogFood</b></h3></a>
    <a href='/userprofilelogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={DF} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Cat Food</b></h3></a>
    <a href='/userprofilelogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={CT} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Cat Toys</b></h3></a>
    <a href='/userprofilelogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={PC} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Cloths</b></h3></a>
    <a href='/userprofilelogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={rabitfood} 
    style={{transform: "rotate(10deg)", height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Rabit Food</b></h3></a>
    <a href='/userprofilelogin' style={{textDecoration:"none", color:"white", fontFamily:"sans-serif"}}><img src={horsefood} 
    style={{transform: "rotate(10deg)",height: "200px", width: "200px", marginTop: "20px", marginLeft: "60px", borderRadius: "25px 0 25px 0", boxShadow: "0px 20px 8px  rgba(0, 0, 0, 0.5)"}}/>
    <h3 style={{ textAlign:"center",marginTop:"20px"}}><b>Horse Food</b></h3></a>
    </div>

    <div class="offers-header" style={{ textAlign: "center" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h3>Ask Our Consultants</h3>
  <hr class="line" style={{ width: "200px" }} />
</div>

<div class='experts-card' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
  <div class='card' style={{ width: "320px", height: "400px", margin: "20px", borderRadius: "15px" }}>
    <img src={doctor2} alt="Cat" style={{ height: "160px", width: "160px", margin: "20px auto", borderRadius: "50%" }} />
    <div style={{ backgroundColor: 'rgb(23, 39, 122)', borderRadius: "0 0 15px 15px" }}>
      <h4 style={{ textAlign: "center", color: "white" }}>Dr Harry Porter</h4>
      <p style={{ textAlign: "center", color: "white", padding: "10px", height: "180px", overflow: "hidden" }}>
        Dr Harry Porter, He has more than 20+ years of experience as a veterinarian.
        He has an excellent journey with PETEX. He has great skills in clinical procedures
        and he is well experienced in all pet diseases. He loves pets more, that's the reason he is here.
        <a href='/userprofilelogin' style={{ color: "white" }}>Know More</a>
      </p>
    </div>
  </div>
  <div class='card' style={{ width: "320px", height: "400px", margin: "20px", borderRadius: "15px" }}>
    <img src={doctor3} alt="Cat" style={{ height: "160px", width: "160px", margin: "20px auto", borderRadius: "50%" }} />
    <div style={{ backgroundColor: 'rgb(23, 39, 122)', borderRadius: "0 0 15px 15px" }}>
      <h4 style={{ textAlign: "center", color: "white" }}>Stella ben</h4>
      <p style={{ textAlign: "center", color: "white", padding: "10px", height: "180px", overflow: "hidden" }}>
        Stella ben, she is the head of our horse training center.
        She has experience of 15+ years in maintaining all pet training sections. Her dedication in taking care of pets
        is more precious.
        <a href='/userprofilelogin' style={{ color: "white" }}>Know More</a>
      </p>
    </div>
  </div>
  <div class='card' style={{ width: "320px", height: "400px", margin: "20px", borderRadius: "15px" }}>
    <img src={doctor4} alt="Cat" style={{ height: "160px", width: "160px", margin: "20px auto", borderRadius: "50%" }} />
    <div style={{ backgroundColor: 'rgb(23, 39, 122)', borderRadius: "0 0 15px 15px" }}>
      <h4 style={{ textAlign: "center", color: "white" }}>Liana Maren</h4>
      <p style={{ textAlign: "center", color: "white", padding: "10px", height: "180px", overflow: "hidden" }}>
        Liana Maren, she is may be one of the best groomers in the world. She has a great talent in grooming all types of pets.
        Her experience is more than 12+ years but her work looks like more than 30+ years experts work.
        <a href='/userprofilelogin' style={{ color: "white" }}>Know More</a>
      </p>
    </div>
  </div>
</div>


    <div style={{marginTop:"3%"}}>
      <Footer/>
    </div>
    </body>
  </html>
    
  );
  
}

export default Home;
