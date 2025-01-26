import React, { useState  } from 'react';
import axios from 'axios';
import VaccinImageBG from './images/VaccineImageBG.jpg';
      

function VaccinationForm() {
    const [newErrors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhno: '',
    date: '',
    time: '',
    description: ''
  });

//   useEffect(() => {
//     const userDetails = JSON.parse(localStorage.getItem('userDetails'));
//     if (userDetails) {
//       setFormData({
//         ...formData,
//         // customerName: userDetails.fullname,
//         // customerEmail: userDetails.email,
//         // customerPhno: userDetails.phno
//       });
//     }
//   }, [formData]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    const customerNameRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?( [a-zA-Z]+)?$/;
    if (!formData.customerName.trim()) {
        newErrors.customerName = "Full Name is required";
    } else if (!customerNameRegex.test(formData.customerName)) {
        newErrors.customerName = "Name should only contain letters (a-zA-Z)";
    }

    if (!formData.customerEmail.trim()) {
        newErrors.customerEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
        newErrors.customerEmail = "Email is not valid";
    }

    const customerPhnoRegex = /^[6-9]\d{9}$/;
    if (typeof formData.customerPhno === 'string' && !formData.customerPhno.trim()) {
        newErrors.customerPhno = "Enter your valid Phone Number";
    } else if (!customerPhnoRegex.test(formData.customerPhno)) {
        newErrors.customerPhno = "Phone Number should be in 10 digits and start with 6, 7, 8, or 9";
    }

    if (!formData.date.trim()) {
        newErrors.date = "Date is required";
    }

    if (!formData.time.trim()) {
        newErrors.time = "Time is required";
    }

    if (!formData.description.trim()) {
        newErrors.description = "Description is required";
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
                `http://localhost:9020/petex/save/${userId}`, 
                formData
            );
            console.log(response.data); 
            alert('Booking successful');
            setFormData({
                ...formData,
                customerName: '',
                customerEmail: '',
                customerPhno: '',
                date: '',
                time: '',
                description: ''
            });
        } catch (error) {
            console.error('Error saving appointment:', error);
        }
    }
};
// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear();
//     return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
// };

  return (
    <>
    <style>
        {
            `
            *{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family:sans-serif;
}
.bodyxyz{
display: flex;
height: 140vh;
justify-content: center;
align-items: center;
width:100%;
background-size: cover;
background-attachment:fixed;
}
.vcf_container{
width: 100%;
max-width: 650px;
backdrop-filter: blur(2px);
padding: 28px;
margin: 0 28px;
border-radius: 10px;
box-shadow: inset -2px 2px 2px white;
position: absolute;

}
.Vcf_form_title{
margin-top: 2%;
font-size: 35px;
font-weight: 600;
text-align: center;
padding-bottom: 6px;
color: white;
text-shadow: 2px 2px 2px black;
border-bottom: solid 1px white;
padding-bottom: 20px;
}
.vcf_main_user_info{
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 10px 0;
}
.vcf_User_input_box:nth-child(2n){
justify-content: none;
}
.vcf_User_input_box{
display: flex;
flex-wrap: wrap;
width: 50%;
padding-bottom: 15px;
}
.vcf_User_input_box label{
width: 95%;
color: white;
font-size: 20px;
font-weight: 400;
margin: 5px 0;
}
.vcf_User_input_box input{
height: 40px;
width: 98%;
border-radius: 7px;
outline: none;
border: 1px solid gray;
padding: 0 5px;
}
.vcf_User_description_input_box label{
width: 95%;
color: white;
font-size: 20px;
font-weight: 400;
margin: 5px 0;
}
.descrption_input{
height: 40px;
width: 100%;
border-radius: 7px;
outline: none;
border: 1px solid gray;
padding: 0 5px;
}
.vcf_button{
display:block;
width: 100%;
margin-top: 10px;
font-size: 20px;
padding: 10px;
border: none;
border-radius: 3px;
color: rgb(209, 209, 209);
background-color: rgba(63, 114, 76, 0.7);
}
.vcf_button:hover{
background: rgba(56, 204, 93, 0.7);
color: rgb(255, 255, 255);
}
.error-message{
color: red;
}
@media(max-width: 600px){
.vcf_container{
    min-width: 280px;
}
.vcf_User_input_box{
    margin-bottom: 12px;
    width: 100%;

}
}
            `
        }
    </style>
    <body className='bodyxyz'  style={{backgroundImage:`url(${VaccinImageBG})`}}>
        <div className="vcf_container">
            <h1 className="Vcf_form_title">Vaccination Form</h1>
            <form className="hed"onSubmit={handleSubmit}>
                <div className="vcf_main_user_info">
                    <div className="vcf_User_input_box">
                        <label for="fullName">FullName</label>
                        <input
                            type ="text"
                            id ="customerName"
                            name="customerName"
                            placeholder="Enter Full Name" 
                            value={formData.customerName}
                            onChange={handleInputChange}
                        /> 
                        {newErrors.customerName&& <span className="error-message">{newErrors.customerName}</span>}
                    </div>
                    <div className="vcf_User_input_box">
                        <label for="fullName">Email</label>
                        <input
                            type ="text"
                            id ="customerEmail"
                            name="customerEmail"
                            placeholder="Enter Email" 
                            value={formData.customerEmail}
                            onChange={handleInputChange}
                        /> 
                        {newErrors.customerEmail&& <span className="error-message">{newErrors.customerEmail}</span>}
                    </div>
                    <div className="vcf_User_input_box">
                        <label for="fullName">Phone Number</label>
                        <input
                            type ="text"
                            id ="customerPhno"
                            name="customerPhno"
                            placeholder="Enter Phone Number" 
                            value={formData.customerPhno}
                            onChange={handleInputChange}
                        /> 
                        {newErrors.customerPhno&& <span className="error-message">{newErrors.customerPhno}</span>}
                    </div>
                    <div className="vcf_User_input_box">
                        <label for="fullName">Date</label>
                        <input
                            type ="date"
                            id ="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        /> 
                        {newErrors.date&& <span className="error-message">{newErrors.date}</span>}
                    </div>
                    <div className="vcf_User_input_box">
                        <label for="fullName">Time</label>
                        <input
                            type ="time"
                            id ="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                        /> 
                        {newErrors.time&& <span className="error-message">{newErrors.time}</span>}
                    </div>
                    
                </div>
                <div className="vcf_User_description_input_box">
                        <label for="fullName">Description</label>
                        <input
                        className='descrption_input'
                            type ="text"
                            id ="description"
                            name="description"
                            placeholder="Enter Description" 
                            value={formData.description}
                            onChange={handleInputChange}
                        /> 
                        {newErrors.description&& <span className="error-message">{newErrors.description}</span>}
                </div>
                <br></br>
                <div className="">
                    <button type =" submit" className="vcf_button" >submit</button>
                </div> 
            </form>

        </div>
    </body>

    </>
  );
}


export default VaccinationForm;