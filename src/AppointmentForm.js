import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        customerPhno: '',
        customerEmail: '',
        date: '',
        time: '',
        description: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear the specific error when the user starts typing
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.customerName.trim()) {
            newErrors.customerName = 'Customer Name is required';
        }

        if (!formData.customerPhno.trim()) {
            newErrors.customerPhno = 'Phone Number is required';
        } else if (!/^\d+$/.test(formData.customerPhno)) {
            newErrors.customerPhno = 'Invalid phone number';
        }

        if (!formData.customerEmail.trim()) {
            newErrors.customerEmail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
            newErrors.customerEmail = 'Invalid email address';
        }

        if (!formData.date.trim()) {
            newErrors.date = 'Date is required';
        }

        if (!formData.time.trim()) {
            newErrors.time = 'Time is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:9004/petex/saves', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    alert('Appointment request sent successfully!');
                    // Additional actions after successful submission
                } else {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage || 'Failed to submit data.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting data.');
            }
        }
    };
    

    return (
        <div>
            <div className="container mt-5" style={{ marginLeft: "600px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
                        <div className="col-12">
                            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Appointment form</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                                        placeholder="Customer Name"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                    />
                                    {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="tel"
                                        className={`form-control ${errors.customerPhno ? 'is-invalid' : ''}`}
                                        placeholder="Phone Number"
                                        name="customerPhno"
                                        value={formData.customerPhno}
                                        onChange={handleChange}
                                    />
                                    {errors.customerPhno && <div className="invalid-feedback">{errors.customerPhno}</div>}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className={`form-control ${errors.customerEmail ? 'is-invalid' : ''}`}
                                        placeholder="Enter Email"
                                        name="customerEmail"
                                        value={formData.customerEmail}
                                        onChange={handleChange}
                                    />
                                    {errors.customerEmail && <div className="invalid-feedback">{errors.customerEmail}</div>}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="date"
                                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                        placeholder="Enter Date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="time"
                                        className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                                        placeholder="Enter Time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                    {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className="form-control"
                                        placeholder="Description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-12 mt-5">
                                    <button type="submit" className="btn btn-primary float-end">
                                        Book Appointment
                                    </button>
                                    {/* <button type="button" className="btn btn-outline-secondary float-end me-2">
                                        Cancel
                                    </button> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;

