import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { db, collection, addDoc } from './FireBase';
import CustomTextField from './Text';
import DateField from './Date';
import NumberField from './Int';
import Checkboxes from './Checkbox'; // Updated import
import GradientFillButton from '../components/GradientFillButton';

const TripPlanningForm = () => {
  const [formData, setFormData] = useState({
    countryOfInterest: '',
    startDate: '',
    endDate: '',
    numberOfPeople: 1,
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    interests: [] // Added interests state
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const formRef = useRef(null); // Ref for the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (selectedOptions) => {
    setFormData({ ...formData, interests: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.countryOfInterest ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.dietaryRestrictions ||
      !formData.accessibilityNeeds ||
      formData.numberOfPeople <= 0 ||
      formData.interests.length === 0 // Check if interests are selected
    ) {
      setError('Please fill out all fields.');
      // Scroll to the top of the form
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    try {
      // Log data to the console for debugging
      console.log('Submitting form data: ', formData);

      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'formData'), formData);
      console.log('Document written with ID: ', docRef.id);

      // Change state to show a success message
      setSubmitted(true);

      // Redirect to a thank you page or a different page
      navigate('/trip-plan');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error submitting form: ' + e.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4" ref={formRef}>
      {submitted ? (
        <p className="text-green-500">Thank you! Your form has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <CustomTextField
            label="Country of Interest"
            name="countryOfInterest"
            value={formData.countryOfInterest}
            onChange={handleChange}
          />
          <DateField
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <DateField
            label="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
          <NumberField
            label="Number of People"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
          />
          <Checkboxes
            selectedOptions={formData.interests}
            onChange={handleCheckboxChange}
          />
          <CustomTextField
            label="Dietary Restrictions"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            multiline
          />
          <CustomTextField
            label="Accessibility Needs"
            name="accessibilityNeeds"
            value={formData.accessibilityNeeds}
            onChange={handleChange}
            multiline
          />
          <div className='mt-1'>
            <GradientFillButton type='submit'/>
          </div>
        </form>
      )}
    </div>
  );
};

export default TripPlanningForm;
