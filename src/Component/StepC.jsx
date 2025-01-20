import React from "react";

const Step3 = () => {
  return (
    <div className="form-step col-md-10 col-11 active" id="step-3">
      <div className="row">
        <div className="col-md-2 step-count">
          <span>03</span>
        </div>
        <div className="col-md-10 py-2 px-4">
          <h4>Select the Type of your industry</h4>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="form-check" key={num}>
              <input
                className="form-check-input small-radio"
                type="checkbox"
                value={`l${num}`}
                id={`flexCheck${num}`}
                name="toggleField"
              />
              <label className="form-check-label small-label" htmlFor={`flexCheck${num}`}>
                Checkbox {num}
              </label>
              <input
                type="number"
                id={`l${num}`}
                className="d-none 3f-div"
                name="number"
                placeholder="Enter Your Number"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
