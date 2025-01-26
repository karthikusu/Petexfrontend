// import React, { useState, useEffect } from 'react';
// // import Sidebar from './Sidebar';
// // import './Show.css'
// import Commonnav from './CommonNav';

// function Shows() {
//   const calculateTimeLeft = () => {
//     const difference = +new Date('2025-03-02') - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   return (
//     <>
//     <style>
//       {`
//     .overlay {
//     padding: 20px;
//     display: flex;
    
//     width: 100%;
//     height: 10vh;
    
//   }
//   .black{
//     background-image: url(https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg);
//     height: auto;
//     background-repeat: no-repeat;
//     background-size: cover;
//   }

//   .shadow-md {
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//     margin-right: 30%;
//   }
  
//   .sm\:text-4xl {
//     font-size: 2.25rem;
//   }
  
//   .text-center {
//     text-align: center;
//   }
  
//   .uppercase {
//     text-transform: uppercase;
//   }
  
//   .p-2 {
//     padding: 0.5rem;
//   }
  
//   .sm\:p-4 {
//     padding: 1rem;
//   }
  
//   .text-md {
//     font-size: 1.25rem;
//   }
  
//   .sm\:text-5xl {
//     font-size: 1.5rem;
//   }
  
  
//   .rounded-lg {
//     border-radius: 0.5rem;
//   }
  
//   .bg-opacity-70 {
//     background-color: rgba(233, 62, 10, 0.7);
//   }
  
//   .mr-4 {
//     margin-right: 1rem;
//   }
//   .In {
//     max-width: 600px;
//     margin-top: 20px;
//     padding: 20px;
//     border-radius: 8px;
//     box-shadow: 0 0 10px rgba(247, 61, 61, 0.1);
//     border: 1px  #221717; 
//     box-sizing: border-box;

    
//   }
  
//   .custom-mb-1,
//   .custom-mb-2,
//   .custom-mb-3,
//   .custom-mb-4,
//   .custom-mb-5 {
//     margin-bottom: 1rem;
//   }
  
//   .custom-form-label {
//     font-weight: bold;
//   }
  
//   .custom-form-control {
//     width: 60%; /* Adjust width as needed */
//     padding: 0.5rem;
//     border: 1px solid #ced4da;
//     border-radius: 0.25rem;
//   }
  
//   .form-check {
//     margin-bottom: 1rem;
//   }
  
//   .form-check-input {
//     margin-right: 0.5rem;
//   }
  
//   .Simba {
//     width: 30%; 
//     background-color: #007bff;
//     color: #fff;
//     padding: 0.5rem 1rem;
//     border: none;
//     border-radius: 0.25rem;
//     cursor: pointer;
//     font-weight: bold;
//     transition: background-color 0.3s;
//   }
  
//   .Simba:hover {
//     background-color: #0056b3;
//   }
//   `}
//     </style>
//       {/* <Sidebar/> */}
//       <Commonnav/>
//       <div className='black'>
//       <div className="overlay" >
//         <div className="shadow-md" style={{ marginLeft : "10%", color :"blue"}}>
//           <p style={{ marginTop : "4%", fontWeight : "bold"}}>Ready for the 7th edition of PETEX which is scheduled to be
//           held </p>
//           </div>
//         </div>

//         <span>
//           <div className=" text-center" style={{ display : 'flex', marginLeft : "14%",marginTop : "5%"}}>
//             {Object.keys(timeLeft).map((interval, index) => (
//               <div
//                 key={index}
//                 className="p-2 sm:p-4 text-md sm:text-5xl bg-red-600 rounded-lg bg-opacity-70 mr-4"
//               >
//                 {timeLeft[interval]}{' '}
//                 <div className="uppercase">
//                   {interval}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </span>
//         <div className="In" style={{ marginLeft: "60%", marginTop: "-15%", width: "40%" }}>
//   <div className="custom-mb-1">
//     <p><label htmlFor="exampleFormControlInput1" className="custom-form-label">Pet Name :</label></p>
//     <input type="text" className="custom-form-control" id="exampleFormControlInput1" placeholder="" />
//   </div>
//   <div className="custom-mb-2">
//     <p><label htmlFor="exampleFormControlInput2" className="custom-form-label">Pet Breed :</label></p>
//     <input type="text" className="custom-form-control" id="exampleFormControlInput2" placeholder="" />
//   </div>
//   <div className="custom-mb-3">
//     <p><label htmlFor="exampleFormControlInput3" className="custom-form-label">Company Name:</label></p>
//     <input type="text" className="custom-form-control" id="exampleFormControlInput3" placeholder="" />
//   </div>
//   <div className="custom-mb-4">
//     <p><label htmlFor="exampleFormControlInput4" className="custom-form-label">Email :</label></p>
//     <input type="email" className="custom-form-control" id="exampleFormControlInput4" placeholder="" />
//   </div>
//   <div className="custom-mb-5">
//     <p><label htmlFor="exampleFormControlInput5" className="custom-form-label">Mobile :</label></p>
//     <input type="text" className="custom-form-control" id="exampleFormControlInput5" placeholder="" />
//   </div>
//   <div className="custom-mb-6">
//     <p><label htmlFor="exampleFormControlInput6" className="custom-form-label">Type of Booking :</label></p>
//     <input type="text" className="custom-form-control" id="exampleFormControlInput6" placeholder="" />
//   </div>
//   <div className="form-check">
//     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//     <label className="form-check-label" htmlFor="flexRadioDefault1">
//       B2B
//     </label>
//   </div>
//   <div className="form-check">
//     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
//     <label className="form-check-label" htmlFor="flexRadioDefault2">
//       B2C
//     </label>
//   </div>
//   <button className='Simba'>Submit</button>
// </div>
// </div>
//     </>
//   );
// }

// export default Shows;


import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import './Show.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Shows() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-03-02') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
    <style>
      {
        `
        .overlay {
          padding: 20px;
          display: flex;
          overflow: hidden!important;;
          width: 100%;
          height: 20vh;
          
        }
        .black{
          background-image: url(https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg);
          height: 150vh;
          background-repeat: no-repeat;
          background-size: cover;
        }
      
        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          margin-right: 30%;
        }
        
        .sm\:text-4xl {
          font-size: 2.25rem;
        }
        
        .text-center {
          text-align: center;
        }
        
        .uppercase {
          text-transform: uppercase;
        }
        
        .p-2 {
          padding: 0.5rem;
        }
        
        .sm\:p-4 {
          padding: 1rem;
        }
        
        .text-md {
          font-size: 1.25rem;
        }
        
        .sm\:text-5xl {
          font-size: 1.5rem;
        }
        
        
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .bg-opacity-70 {
          background-color : #884EA0;
          color: white;
        }
        
        .mr-4 {
          margin-right: 1rem;
        }
        .In {
          max-width: 600px;
          margin-top: 20px;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(247, 61, 61, 0.1);
          border: 1px  #221717; 
          box-sizing: border-box;
          overflow: hidden!important;;
          
        }
        
        .custom-mb-1,
        .custom-mb-2,
        .custom-mb-3,
        .custom-mb-4,
        .custom-mb-5 {
          margin-bottom: 1rem;
        }
        
        .custom-form-label {
          font-weight: bold;
        }
        
        .custom-form-control {
          width: 60%; /* Adjust width as needed */
          padding: 0.5rem;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
        }
        
        .form-check {
          margin-bottom: 1rem;
        }
        
        .form-check-input {
          margin-right: 0.5rem;
        }
        
        .Simba {
          width: 30%; 
          background-color: #007bff;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        
        .Simba:hover {
          background-color: #0056b3;
        }
        
        `
      }
    </style>
      {/* <Sidebar /> */}
      <div className="black">
        <div className="overlay">
          <div className="shadow-md" style={{ marginLeft: "20%", color: "blue" }}>
            <p style={{ marginTop: "4%", fontWeight: "bold" }}>Ready for the 7th edition of PETEX which is scheduled to be held </p>
          </div>
        </div>

        <span>
          <div className="text-center" style={{ display: 'flex', marginLeft: "14%", marginTop: "5%" }}>
            {Object.keys(timeLeft).map((interval, index) => (
              <div
                key={index}
                className="p-2 sm:p-4 text-md sm:text-5xl bg-red-600 rounded-lg bg-opacity-70 mr-4"
              >
                {timeLeft[interval]}{' '}
                <div className="uppercase">
                  {interval}
                </div>
              </div>
            ))}
          </div>
        </span>
      </div>
      <div className="flex justify-center text-white" style={ { width : "30%", marginLeft : "70%", marginTop : "-50%", }}>
 <Link to="/exibutor"><button style={{ width : "100%", height : "13vh", fontSize : "150%", marginTop : "20%", marginTop: "20%", marginLeft : "-20%", backgroundColor : "#CCCCFF", borderRadius : "2rem"}}><a>
    Exhibitor Registration
    <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginLeft: "3%"}}/>
  </a></button></Link>
</div>

    </>
  );
}

export default Shows;
