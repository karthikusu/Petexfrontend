import React from "react";
import Navpet from "./Navpet";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Purchases(){
  const [selectedDuration, setSelectedDuration] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
    setFormErrors((prevErrors) => ({ ...prevErrors, duration: '' }));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setFormErrors((prevErrors) => ({ ...prevErrors, date: '' }));
  };

  const validateForm = (selectedDuration, selectedDate) => {
    const errors = {};

    if (!selectedDuration) {
      errors.duration = 'Please select a duration';
    }

    if (!selectedDate) {
      errors.date = 'Please choose a date';
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(selectedDuration, selectedDate);

    if (Object.keys(validationErrors).length === 0) {
      toast.success('Booking successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setFormErrors(validationErrors);
    }
  };

    return(
        <>
        <Navpet/>
        <div>
            <img src="https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width : "100%", marginTop : "1%", borderRadius : "2rem"}} alt=".."/>
        </div>
        <div className="Readmore" style={{ marginTop : "5rem"}}>
        <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
                        <div>
                            <h1 class="text-uppercase mb-3" style={{ marginLeft : "10%", fontSize : "4rem"}}>Pet Nutrition</h1>
                            <p style={{ width : "40%", marginLeft : "3%", textAlign : "center"}}>Recommendations differ on what diet is best for dogs. Some people argue dogs have thrived on leftovers and scraps from their human owners for thousands of years, and commercial dog foods (which have only been available for the past century) contain poor-quality meats, additives, and other ingredients dogs should not ingest, or that commercial dog food is not nutritionally sufficient for their dogs.  <br/>
                            The practice of feeding raw diets has raised some concerns due to the risk of food borne illnesses, zoonosis and nutritional imbalances.</p>
                            
                        </div>
                        <div>
                            <img style={{ width : "250%",border : "1px solid", borderRadius : "5rem", height : '70vh', marginRight : "10%", marginLeft : "-170%"}} src="https://images.pexels.com/photos/6235240/pexels-photo-6235240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                        </div>
                    </div>
                    <br/>
                    </div>

                    <p style={{ marginLeft : "2%", marginRight : "5%"}}> <span style={{ marginLeft : "5%", fontSize : "2rem"}}>Our</span> pet care service provides various forms of care for pets, including feeding, exercise, grooming, and overall well-being. This type of service can be provided in the pet owner's home or at a facility, such as a pet hotel or boarding kennel. We also offer additional services such as training, transportation, and medical care. We are specialize in caring for a specific type of animal, such as cats or dogs, while others may be able to care for a variety of different types of pets. The level of our care and type of services offered will vary depending on the specific pet care service.

This Pet care services can be a great option for busy pet owners who are unable to provide the necessary care for their pets due to work or other commitments. They can also be a helpful resource for pet owners who are traveling and need someone to look after their pets while they are away.

There is often ask some questions about the pet care 
service and we always try to give all the answer of their questions. Before taking services it is important to know about the service process and its advantages or disadvantages. Here is some questions and answers we set as standard.</p>
        <br/>
        
        <div style={{ display : "flex"}}>
            <div>
            <img src="https://images.pexels.com/photos/6235107/pexels-photo-6235107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
           style={{ marginLeft : "2%", width : "90%" , border : "1px solid", borderRadius : "5rem"}} alt=".."/>
           </div>
           <div>
            <h1>Nutrition- Counseling</h1>
            <h1 style={{ color : "darkmagenta"}}>$5-$10</h1>
        <label style={{ fontSize : "2rem", fontWeight : "bolder" }}>Health Services : </label><br/><br/>
        <select style={{ width : "100%", height : "5vh", fontSize : "1.5rem"}}
        value={selectedDuration}
        onChange={handleDurationChange} >

        <option value="">Select an option</option>
        <option value="option1">Hair Cut(With styles)</option>
        <option value="option2">Perfuming(With BodyWash)</option>
        

      </select>
      {formErrors.duration && <p style={{ color: 'red' }}>{formErrors.duration}</p>}

      <br/><br/>
    
      <div>
  <label htmlFor="datePicker" style={{ fontSize: '2rem', fontWeight: 'bolder' }}>
    Choose a date :
  </label>
  <br />
  <br />
  <input
    style={{ width: '100%', height: '5vh', fontSize: '1.5rem' }}
    type="date"
    id="datePicker"
    value={selectedDate}
    onChange={handleDateChange}
    min={new Date().toISOString().split('T')[0]}
  />
  {formErrors.date && <p style={{ color: 'red' }}>{formErrors.date}</p>}
</div>

    <br/><br/>
    <button         onClick={handleFormSubmit}
    style={{ width : "60%", height : "5vh", marginLeft : "25%",backgroundColor : "darkmagenta", color : "white", fontSize : "1.5rem"}}>Book Here</button>

           </div>
        </div>
        </>
    )
}
export default Purchases;

