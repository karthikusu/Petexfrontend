import React from 'react';

function FundingRequestPage() {
  return (
    <div style={styles.container}>
      <h1>Funding Request for Pets</h1>
      <div style={styles.content}>
        <p>Dear potential donors,</p>
        <p>Pets bring immeasurable joy and companionship to our lives, but they also come with their own set of financial responsibilities. From veterinary care to food and shelter, the costs associated with pet ownership can quickly add up.</p>
        <p>Unfortunately, not everyone has the means to provide for their beloved pets in times of need. This is where your support can make a significant difference.</p>
        <p>By donating to our cause, you'll be helping ensure that every pet receives the care and attention they deserve. Your contribution will go towards covering medical expenses, providing food and shelter, and facilitating adoptions for pets in need of loving homes.</p>
        <p>Together, we can make a difference in the lives of countless animals. Every dollar counts and no donation is too small. Your generosity will directly impact the well-being of pets in our community.</p>
        <p>Thank you for considering supporting our mission to provide a brighter future for pets in need.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  content: {
    marginTop: '20px',
    lineHeight: '1.6',
  },
};

export default FundingRequestPage;
