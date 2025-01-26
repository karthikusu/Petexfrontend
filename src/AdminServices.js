import React from "react";
import { Link } from "react-router-dom";

function PetexServices() {
  return (
    <>
      <style>
        {`
          
          .heading {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #007bff;
            color: white;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          
          .heading h1 {
            font-size: 2em;
            margin-bottom: 0;
          }
          
          .main {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }
          
          .temples {
            text-align: center;
            flex: 1;
            min-width: 500px; 
          }
          
          figure {
            margin: 0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          figure:hover {
            transform: translateY(-5px);
          }
          
          figure img {
            width: 100%;
            height: auto;
            border-bottom: 2px solid #007bff;
            flex-grow: 1;
          }
          
          figcaption {
            font-size: 1.2em;
            margin: 15px 0;
          }
          
          a {
            text-decoration: none;
            color: #007bff;
            font-weight: bold;
          }
          
          a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="heading">
        <div className="text">
          <h1>PETEX Services</h1>
        </div>
      </div>
      <section>
        <article>
          <div className="main">
            <div className="temples">
              <figure>
                <img src="https://images.pexels.com/photos/5733432/pexels-photo-5733432.jpeg" alt="" />
                <figcaption>House Boarding</figcaption>
                <Link to="/vendordashboard">Step-In</Link>
              </figure>
            </div>
            <div className="temples">
              <figure>
                <img src="https://images.pexels.com/photos/17742005/pexels-photo-17742005/free-photo-of-bichon-frise-and-french-bulldog-in-a-t-shirt-and-necklace.jpeg?auto=compress&cs=tinysrg1" alt="" />
                <figcaption>Breeding</figcaption>
                <Link to="/vendordashboard">Step-In</Link>
              </figure>
            </div>
            <div className="temples">
              <figure>
                <img src="https://images.pexels.com/photos/7469214/pexels-photo-7469214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Darshanam" />
                <figcaption>Grooming</figcaption>
                <Link to="/vendordashboard">Step-In</Link>
              </figure>
            </div>
            <div className="temples">
              <figure>
                <img src="https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Accommodation" />
                <figcaption>Training</figcaption>
                <a href="/vendordashboard">Step-In</a>
              </figure>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default PetexServices;
