import React from 'react';
import EC from '../assets/ExperienceCenter.jpg';

const ExperienceCenter = () => {
  return (
    <>
<style>
  {
    `
    .experience-center-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      position: relative;
    }

    .experience-center-heading {
      text-align: center;
      margin-bottom: 20px;
      font-size: 24px;
    }

    .experience-center-content {
      font-size: 16px;
      line-height: 1.6;
    }

    .experience-center-content p {
      margin-bottom: 15px;
    }

    .experience-center-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 80%;
      background-color: rgba(255, 255, 255, 0.7); /* Adjust opacity here */
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 5% 10% 10% 10%;
    }
    `
  }
</style>


<div className="experience-center-container" style={{ backgroundImage: `url(${EC})`, backgroundSize: "cover", height: "120vh", position: "relative" }}>
      <div className="experience-center-overlay" >
        <h1 className="experience-center-heading">Experience Center</h1>
        <div className="experience-center-content">
          <p>
            Welcome to the Petex Experience Center! Here, you'll find everything you need to enhance your pet ownership experience. From expert advice on pet care to interactive demonstrations of our latest products, our Experience Center is designed to educate, inspire, and delight pet lovers of all ages.
          </p>
          <p>
            Explore our virtual pet adoption gallery, where you can browse through profiles of adorable pets available for adoption. Learn about their personalities, preferences, and unique traits to find the perfect companion for your family.
          </p>
          <p>
            Join us for live webinars and workshops hosted by renowned veterinarians, pet trainers, and animal behaviorists. Gain valuable insights into pet health, nutrition, training techniques, and more, all from the comfort of your home.
          </p>
          <p>
            Visit our on-site Experience Center locations across the country to interact with pets, meet fellow pet enthusiasts, and participate in fun activities and events. Whether you're a seasoned pet owner or considering adopting your first pet, our Experience Center is here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ExperienceCenter;

