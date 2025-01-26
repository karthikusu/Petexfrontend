import React from 'react';
import KC from '../assets/KnowledgeCenter.png';

const KnowledgeCenter = () => {
  return (
    <>
    <style>
  {
    `
    .knowledge-center-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      position: relative;
    }

    .knowledge-center-heading {
      text-align: center;
      margin-bottom: 20px;
      font-size: 24px;
    }

    .knowledge-center-content {
      font-size: 16px;
      line-height: 1.6;
    }

    .knowledge-center-content p {
      margin-bottom: 15px;
    }

    .knowledge-center-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 80%;
      background-color: rgba(255, 255, 255, 0.7);
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5% 10% 10% 10%;
    }
    `
  }
</style>

    <div className="knowledge-center-container" style={{ backgroundImage: `url(${KC})`, backgroundSize: "cover", height: "100vh", position: "relative" }}>
      <div className="knowledge-center-overlay">
        <h1 className="knowledge-center-heading">Knowledge Center</h1>
        <div className="knowledge-center-content">
          <p>
            Welcome to the Petex Knowledge Center! Here, you'll find a wealth of information and resources to help you become a better pet owner. From articles and guides on pet care to videos and tutorials on training techniques, our Knowledge Center is your go-to destination for all things pet-related.
          </p>
          <p>
            Browse through our extensive library of articles written by veterinary experts, pet behaviorists, and experienced pet owners. Learn about topics such as nutrition, grooming, behavior management, and health care to ensure the well-being of your furry friends.
          </p>
          <p>
            Watch instructional videos and tutorials to master essential pet care skills, from administering medications to teaching basic obedience commands. Our step-by-step guides make it easy to understand and implement best practices in pet care.
          </p>
          <p>
            Join our community forums to connect with other pet enthusiasts, ask questions, and share your own experiences. Whether you're a novice pet owner or a seasoned pro, the Petex Knowledge Center has something for everyone.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default KnowledgeCenter;
