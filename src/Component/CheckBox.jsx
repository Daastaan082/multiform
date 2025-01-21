import React, { useState } from "react";

const LandForm = (name) => {
  const [isChecked, setIsChecked] = useState(false);
  const [landValue, setLandValue] = useState("");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    setLandValue(e.target.value);
  };

  return (
    <div className="form-check mt-3">
      <input
        type="checkbox"
        className="form-check-input inp6 mustsel"
        id="land"
        value="1"
        name="land_k"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="form-check-label" htmlFor="land">
        Land
      </label>
      {isChecked && (
        <div className="form-group mt-2">
          <input
            type="number"
            data-ref="land"
            className="form-control pnum invexp"
            id="landval"
            name="land_v"
            placeholder="Estimated cost?"
            autoComplete="off"
            value={landValue}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
    </div>
  );
};

export default LandForm;
