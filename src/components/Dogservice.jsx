import React from 'react';
import camel from '../camel.jpg';
import grooming from '../Services/grooming.jpg';
import feeding from '../Services/feeding.jpg';
import breeding from '../Services/breeding.jpg';
import training from '../Services/training.jpg';
import hb from '../assets/medical-768x513.jpg';
function AllServices() {
  return (
    <div className="containerX">
      <style>
        {`
          .service-card {
            border: 1px solid #ccc;
            padding: 0px;
            margin: 10px;
            text-align: center;
            transition: transform 0.3s;
          }

          .service-card img {
            width: 100%;
            height: auto;
            border-radius: 5px;
          }

          .service-card p {
            margin-top: 10px;
          }

          .service-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
      <div className="row" style={{justifyContent:"center"}}>
        {/* First row */}
        <div className="col-md-4">
          <div className="service-card">
            <img src={hb} alt="Service 1" />
            <a href='/houseboarding' style={{textDecoration:"none", color:"black"}}>House Board</a>          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={grooming} alt="Service 2" />
            <a href='/grooming' style={{textDecoration:"none", color:"black"}}>Grooming</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={breeding} alt="Service 3" />
            <a href='/BreedPage' style={{textDecoration:"none", color:"black"}}>Breeding</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={training}alt="Service 4" />
            <a href='/training' style={{textDecoration:"none", color:"black"}}>Training</a>          
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={feeding}alt="Service 4" />
            <a href='/daycare' style={{textDecoration:"none", color:"black"}}>Feeding</a>          
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img src={training}alt="Service 4" />
            <a href='/daycare' style={{textDecoration:"none", color:"black"}}>Day Care</a>          
          </div>
        </div>
      </div>
      <div className="row">
        {/* Second row */}
        {/* <div className="col-md-3">
          <div className="service-card">
            <img src="image5.jpg" alt="Service 5" />
            <p>Service 5</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service-card">
            <img src="image6.jpg" alt="Service 6" />
            <p>Service 6</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service-card">
            <img src="image7.jpg" alt="Service 7" />
            <p>Service 7</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="service-card">
            <img src="image8.jpg" alt="Service 8" />
            <p>Service 8</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AllServices;
