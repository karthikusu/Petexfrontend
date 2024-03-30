// import React, { useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
// // import "./Bookfordaycare.css"
// import axios from 'axios';
// import Commonnav from './CommonNav';

// // const Bookfordaycare = ({ userId }) => {
//   // Your component code here


//    const Bookfordaycare = () => {
//    const [newErrors, setErrors] = useState({});
//    const [formData, setFormData] = useState({
//     userId:'',
//     petName: '',
//     formDate:'',
//     toDate:'',
//     address: '',
//     city: '',
//     state: '',
//   });
//   useEffect(() => {
//     const userDetails = JSON.parse(localStorage.getItem('userDetails'));
//     if (userDetails && userDetails.userId !== formData.userId) {
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             userId: userDetails.userId
//         }));
//     }
// }, [formData.userId]);


// const inputDate = new Date(formData.formDate);
// const currentDate = new Date();

// // i removed  the time component from both dates
// const inputDateWithoutTime = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
// const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};


//   const  petNameRegex = /^[a-zA-Z]+$/;
//   if (!formData.petName.trim()) {
//     newErrors.petName ="PetName is required";
//   } else if (!petNameRegex.test(formData.petName)) {
//     newErrors.petName ="Pet Name should be letters (a-z, A-Z)";
//   }
  

// if (!formData.formDate || isNaN(inputDate) || inputDateWithoutTime < currentDateWithoutTime) {
//   newErrors.formDate = "Please enter a valid From date, including today";
// }


// if (!formData.toDate || isNaN(new Date(formData.toDate))) {
//   newErrors.toDate = "Please enter a valid To date";
// } else if (new Date(formData.toDate) < new Date(formData.formDate)) {
//   newErrors.toDate = "To date cannot be before From date";
// }


    
//     const addressRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
// if (!formData.address.trim()) {
//   newErrors.address = "Address is required";
// } else if (!addressRegex.test(formData.address)) {
//   newErrors.address = "Invalid characters in the address";
// }



//   const  cityRegex = /^[a-zA-Z]+$/;
//   if (!formData.city.trim()) {
//     newErrors.city ="Enter city Name ";
//   } else if(!cityRegex.test(formData.city)){
//     newErrors.city="Enter city Name here"
//   }
   

  
//   const stateRegex = /^[a-zA-Z]+$/;
//   if (!formData.state.trim()) {
//     newErrors.state ="Enter city Name ";
//   } else if(!stateRegex.test(formData.state)){
//     newErrors.state="Enter state Name here"
//   }

 
//   setErrors(newErrors);
//   if (Object.keys(newErrors).length === 0) {
//       try {
//           const userDetails = JSON.parse(localStorage.getItem('userDetails'));
//           if (!userDetails || !userDetails.userId) {
//               throw new Error('User details not found');
//           }
      
//           const userId = userDetails.userId;
      
//           const response = await axios.post(
//             `http://localhost:9029/book/save/${userId}`, 
//             formData
//         );
//         console.log(response.data); 
//         alert('Booking successful');
//           setFormData({
//             petName: '',
//             formDate: '',
//             toDate: '',
//             address: '',
//             city: '',
//             state: '',
//           });
//       } catch (error) {
//           console.error('Error saving data:', error);
//       }
//   }
//   };
  
  
  


//     return(
//         <>
//         <Commonnav/>
// <div className="boat" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:"wheat"}}>
//   <div className="head" style={{backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px', width: '50%'}}>
//     <div className="got" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
//       <div className="form-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//         <form className="hed" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width:"150%", marginLeft:"50%"}}>
//           <h4 style={{textAlign: 'center'}}>Book for Day care</h4>
//           <table style={{width: '120%'}}>
//             <tbody>
//               <tr>
//                 <td style={{width: '50%'}}>
//                   <label className="lables" style={{display: 'block', marginBottom: '5px'}}>Pet Name</label></td>
//                 <td style={{width: '50%'}}>
//                   <input
//                     type ="text"
//                     id ="petName"
//                     name="petName"
//                     placeholder="Enter yout PetName" 
//                     value={formData.petName}
//                     onChange={handleInputChange}
//                     style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
//                   />
//                   {newErrors.petName && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petName}</span>}
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{width: '50%'}}>
//                   <label className="lables" style={{display: 'block', marginBottom: '5px'}}>From Date</label>
//                 </td>
//                 <td style={{width: '50%'}}>
//                   <input
//                     type="date"
//                     name="formDate"  
//                     value={formData.formDate}
//                     onChange={handleInputChange}
//                     style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
//                   />
//                   {newErrors.formDate&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.formDate}</span>}
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{width: '50%'}}>
//                   <label className="lables" style={{display: 'block', marginBottom: '5px'}}>To Date</label>
//                 </td>
//                 <td style={{width: '50%'}}>
//                   <input
//                     type="date"
//                     name="toDate"
//                     value={formData.toDate}
//                     onChange={handleInputChange}
//                     style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
//                   />
//                   {newErrors.toDate&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.toDate}</span>}
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{width: '50%'}}>
//                   <label className="lables" style={{display: 'block', marginBottom: '5px'}}>Address</label></td>
//                 <td style={{width: '50%'}}>
//                   <input
//                     type="text"
//                     placeholder="Enter your address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
//                   />
//                   {newErrors.address&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.address}</span>}
//                 </td>
//               </tr>
//               <tr>
//   <td>

//     <label className="lables" style={{display: 'block', marginBottom: '5px'}}>City </label></td>
//     <td style={{width: '50%'}}>
//     <input 
//     type=" text"
//      placeholder="Enter city name here" 
//      name="city"
//       value={formData.city}
//       onChange={handleInputChange}
//       style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
//     /><div>
//     {newErrors.city&& <span className='error-message'style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.city}</span>}</div>
//     </td>
//     </tr>

// <tr>
//   <td style={{width: '50%'}}>
//     <label className="lables" style={{display: 'block', marginBottom: '5px'}}> State:</label></td>
//     <td>
//     <input 
//     type=" text" 
//     placeholder="Enter your State" 
//      name="state"
//       value={formData.state}
//       onChange={handleInputChange} 
//       style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
//     />
//     {newErrors.state&& <span className='error-message'style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.state}</span>}

//     </td></tr>

// <tr>
//   <td style={{width: '50%'}}></td>
//   <td style={{width: '50%'}}>
//     <button type =" submit" >submit</button><br/>
//      <Link to="/"> click here </Link> to go home page 
//     </td>
//     </tr>

    

// </tbody>
// </table>
// </form>
// </div>
// </div>
// </div>
// </div>
// {/* 
// {
//   "bookId": 1,
//   "petName": "dog",
//   "formDate": "2024-03-04",
//   "toDate": "2024-03-10",
//   "address": "123 Main Street",
//   "city": "Cityville",
//   "state": "Stateville",
//   "user": {
//     "userId": 1
//   }
// } */}

    


// </>
//     )
// }
// export default Bookfordaycare;



import React, { useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import BG from './bookdaycare.jpg';
import CommonNav from './CommonNav';

// const Bookfordaycare = ({ userId }) => {
  // Your component code here


   const Bookfordaycare = () => {
   const [newErrors, setErrors] = useState({});
   const [formData, setFormData] = useState({
    userId:'',
    petName: '',
    petBreed: '', 
    petAge: '',   
    formDate:'',
    toDate:'',
    address: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.userId !== formData.userId) {
        setFormData(prevFormData => ({
            ...prevFormData,
            userId: userDetails.userId,
            userName: userDetails.fullname,
            phoneNunber: userDetails.phno,
            email: userDetails.email


        }));
    }
}, [formData.userId]);


const inputDate = new Date(formData.formDate);
const currentDate = new Date();

// i removed  the time component from both dates
const inputDateWithoutTime = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};


  const  petNameRegex = /^[a-zA-Z]+$/;
  if (!formData.petName.trim()) {
    newErrors.petName ="PetName is required";
  } else if (!petNameRegex.test(formData.petName)) {
    newErrors.petName ="Pet Name should be letters (a-z, A-Z)";
  }
  

  const  petBreedRegex = /^[a-zA-Z]+$/;
  if (!formData.petBreed.trim()) {
    newErrors.petBreed ="PetBreed is required";
  } else if (!petBreedRegex.test(formData.petBreed)) {
    newErrors.petBreed ="Pet Breed should be letters (a-z, A-Z)";
  }


  if (!formData.petAge) {
    newErrors.petAge = 'Pet Age is required';
  
  } else if (formData.petAge <= 0) {
    newErrors.petAge = 'Pet Age must be greater than 0';
    
  }




if (!formData.formDate || isNaN(inputDate) || inputDateWithoutTime < currentDateWithoutTime) {
  newErrors.formDate = "Please enter a valid From date, including today";
}


if (!formData.toDate || isNaN(new Date(formData.toDate))) {
  newErrors.toDate = "Please enter a valid To date";
} else if (new Date(formData.toDate) < new Date(formData.formDate)) {
  newErrors.toDate = "To date cannot be before From date";
}


    
    const addressRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
if (!formData.address.trim()) {
  newErrors.address = "Address is required";
} else if (!addressRegex.test(formData.address)) {
  newErrors.address = "Invalid characters in the address";
}



  const  cityRegex = /^[a-zA-Z]+$/;
  if (!formData.city.trim()) {
    newErrors.city ="Enter city Name ";
  } else if(!cityRegex.test(formData.city)){
    newErrors.city="Enter city Name here"
  }
   

  
  const stateRegex = /^[a-zA-Z]+$/;
  if (!formData.state.trim()) {
    newErrors.state ="Enter State Name ";
  } else if(!stateRegex.test(formData.state)){
    newErrors.state="Enter State Name here"
  }

 
  setErrors(newErrors);
  if (Object.keys(newErrors).length === 0) {
      try {
          const userDetails = JSON.parse(localStorage.getItem('userDetails'));
          if (!userDetails || !userDetails.userId) {
              throw new Error('User details not found');
          }
      
          const userId = userDetails.userId;
      
          const response = await axios.post(
            `http://localhost:1113/book/save/${userId}`, 
            formData
        );
        console.log(response.data); 
        alert('Booking successful');
          setFormData({
            petName: '',
            formDate: '',
            toDate: '',
            address: '',
            city: '',
            state: '',
          });
      } catch (error) {
          console.error('Error saving data:', error);
      }
  }
  };
  
  
  


    return(
        <>
                <style>
          {
            `
            
.got {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
 
}
.lables{
  color: black;
  font-weight: 600px;
  width: 100px;
}

.form-container {
  border: 5px solid #52f820;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px; 
  box-sizing: border-box; 
  max-width: 560px; 
  width: 100%; 
  box-shadow: 1px  3px 8px rgb(24, 23, 23);
  backdrop-filter: blur(0.5px);
}


.labels {
  display: block;
  margin-bottom: 8px;
}


 input {
  width: calc(100% - 10px);  
  padding: 8px;
  margin-bottom: 15px; 
  border-radius: 7px;
  width: 250px;
 }
input:hover{
  background-color: rgb(240, 143, 211);
}

.error-message {
  color: red;
  font-size: 14px;
  display: block;
  margin-top: 5px;
}


.boat {
  margin: auto;
  height: 950px;
  background-position: center;
  font-family: 'Arial', sans-serif;
}

h4 {
  color: black;
  font-weight: bold;
  font-size: larger;
}

.head {
  max-width: 600px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}
Link{
  color: rgb(95, 6, 168);
}

button{
  border-radius: 20px;
  background-color: rgb(32, 151, 32);
}

.backgroundContainer4 {
    
  background-size: cover;
  background-attachment: fixed;
  height:220vh;
}

.formContainer4 {
  position: absolute;
}


 

            `
          }
        </style>
        
  <div className='backgroundContainer4' style={{backgroundImage:`url(${BG})`}}>  
  <CommonNav/>
    <div className="boat" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      <div className="got" style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop:"1%"}}>
        <div className="form-container" style={{ marginLeft:"10%", backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column'}}>
          <form className="hed" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <h4 style={{textAlign: 'center'}}>Book for Day care</h4>
            <table style={{width: '100%'}}>
              <tbody>
                <tr>
                  <td>
                    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>User Name </label>
                  </td>
                  <td style={{width: '50%'}}>
                      <input type=" text" name="userName" value={formData.userName}
                      style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                      />
                  </td>
                </tr>

                <tr style={{background:"transparent"}}>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Contact No:</label></td>
                  <td style={{width: '50%',}}>
                    <input  type ="number" id ="contact" name="phoneNunber" value={formData.phoneNunber}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Email Id:</label></td>
                  <td style={{width: '50%',}}>
                    <input
                    type ="text"
                    id ="email"
                    name="email"
                    value={formData.email}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                  </td>
                </tr>
                <tr style={{background:"transparent"}}>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>Address</label></td>
                  <td style={{width: '50%'}}>
                    <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    {newErrors.address&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.address}</span>}
                  </td>
                </tr>
                <tr>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Pet Name</label></td>
                  <td style={{width: '50%',}}>
                    <input
                    type ="text"
                    id ="petName"
                    name="petName"
                    placeholder="Enter yout PetName" 
                    value={formData.petName}
                    onChange={handleInputChange}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    {newErrors.petName && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petName}</span>}
                  </td>
                </tr>
                <tr style={{background:"transparent"}}>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Pet Breed</label></td>
                  <td style={{width: '50%',}}>
                    <input
                    type ="text"
                    id ="petBreed"
                    name="petBreed"
                    placeholder="Enter yout BreedName" 
                    value={formData.petBreed}
                    onChange={handleInputChange}
                    style={{ padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    {newErrors.petBreed && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petBreed}</span>}
                  </td>
                </tr>
                <tr>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px', }}>Pet Age</label></td>
                  <td style={{width: '50%',}}>
                    <input
                    type ="number"
                    id ="petAge"
                    name="petAge"
                    placeholder="Enter your pet age" 
                    value={formData.petAge}
                    onChange={handleInputChange}
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    {newErrors.petAge && <span className="error-message" style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.petAge}</span>}
                  </td>
                </tr>
                <tr style={{background:"transparent"}}>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>From Date</label>
                  </td>
                  <td style={{width: '50%'}}>
                    <input
                    type="date"
                    name="formDate"  
                    value={formData.formDate}
                    onChange={handleInputChange}
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    {newErrors.formDate&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.formDate}</span>}
                  </td>
                </tr>
                <tr>
                  <td style={{width: '50%'}}>
                    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>To Date</label>
                  </td>
                  <td style={{width: '50%'}}>
                    <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleInputChange}
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    {newErrors.toDate&& <span className='error-message' style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.toDate}</span>}
                  </td>
                </tr>
              
                <tr style={{background:"transparent"}}>
                  <td>
                    <label className="lables" style={{display: 'block', marginBottom: '5px'}}>City </label></td>
                  <td style={{width: '50%'}}>
                    <input 
                      type=" text"
                      placeholder="Enter city name here" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                    />
                    <div>
                    {newErrors.city&& <span className='error-message'style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.city}</span>}</div>
                  </td>
                </tr>

                <tr>
                  <td style={{width: '50%'}}>
                  <label className="lables" style={{display: 'block', marginBottom: '5px'}}> State:</label></td>
                  <td>
                  <input 
                    type=" text" 
                    placeholder="Enter your State" 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange} 
                    style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc'}}
                  />
                  {newErrors.state&& <span className='error-message'style={{color: 'red', fontSize: '12px', marginBottom: '5px'}}>{newErrors.state}</span>}

                  </td>
                </tr>

                <tr style={{background:"transparent"}}>
                  <td style={{width: '50%'}}></td>
                  <td style={{width: '50%'}}>
                    <button type =" submit" >submit</button><br/>
                    {/* <Link to="/"> click here </Link> to go home page  */}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
    </div>
  </>
)
}
export default Bookfordaycare;












