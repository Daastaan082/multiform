import React, { useState } from 'react';

const Step10 = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store selected option

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state with selected value
    console.log("Selected option:", event.target.value);
  };

  return (
    <div className="form-step col-md-10 col-11 active" id="step-1">
      <div className="row">
        <div className="col-md-2 step-count">
          <span>01</span>
        </div>
        <div className="col-md-10 py-2 px-4">
          <h4>What's the name of your business entity?</h4>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter Your Name"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedOption} // Bind state to value
          onChange={handleChange} // Handle change event
        >
          <option value="" disabled>
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default Step10;
