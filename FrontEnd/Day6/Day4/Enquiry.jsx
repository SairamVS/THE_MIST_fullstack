import { useState } from 'react';
import '/src/assets/css/Enquiry.css';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        state: '',
        city: '',
        celebration: '',
        celebrationDate: '',
        priceRange: '',
        requirements: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Simple validation for a 10-digit phone number
      const phoneNumberPattern = /^\d{10}$/;
      if (!phoneNumberPattern.test(formData.phoneNumber)) {
          alert('Please enter a valid 10-digit phone number.');
          return; // Prevent form submission if validation fails
      }

      console.log(formData);
      alert('Form Submitted. Check console for the form data.');
    };

    return (
        <form className="eventForm" onSubmit={handleSubmit}>
            <h2 className='formTitle'>Event Registration Form</h2>
            <input className="inputField" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input className="inputField" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input className="inputField" type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
            <input className="inputField" type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
            <input className="inputField" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            
            <select className="selectField" name="celebration" value={formData.celebration} onChange={handleChange} required>
                <option value="">Select Celebration Type</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="HouseWarming">HouseWarming</option>
                <option value="Farewell">Farewell</option>
                <option value="Family Gatherings">Family Gatherings</option>
                <option value="Surprise Party">Surprise Party</option>
            </select>
            
            <input className="inputField" type="date" name="celebrationDate" value={formData.celebrationDate} onChange={handleChange} required />
            
            <select className="selectField" name="priceRange" value={formData.priceRange} onChange={handleChange} required>
                <option value="">Select Price Range</option>
                <option value="Under Rs.5000">Under Rs.5000</option>
                <option value="Rs.5000 - Rs.7000">Rs.5000 - Rs.7000</option>
                <option value="Rs.7000 - Rs.10000">Rs.7000 - Rs.10000</option>
                <option value="Rs.10000 - Rs.20000">Rs.10000 - Rs.20000</option>
                <option value="Above Rs.20000">Above Rs.20000</option>
            </select>
            
            <textarea className="textareaField" name="requirements" placeholder="Your Requirements" value={formData.requirements} onChange={handleChange} required />
            <div className="termsContainer">
                <input className="checkboxField" type="checkbox" name="termsAccepted" id="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                <label htmlFor="termsAccepted">I have read and accept the terms and conditions.</label>
            </div>
            <button className="submitBtn" type="submit">Submit</button>
        </form>
    );
}

export default Enquiry;
