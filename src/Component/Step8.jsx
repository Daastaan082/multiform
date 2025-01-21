import React from 'react'
import CheckBox from './CheckBox'
const Step8 = () => {
    return (
        <div className="form-step col-md-10 col-11 active" id="step-3">
          <div className="row">
            <div className="col-md-2 step-count">
              <span>08</span>
            </div>
            <div className="col-md-10 py-2 px-4">
              <h5>6.What all do you need?</h5>
              {/* {[1, 2, 3, 4, 5,6,7,8,9,10].map((num) => (
                <div className="form-check" key={num}>
                  <input
                    className="form-check-input small-radio"
                    type="checkbox"
                    value={`l${num}`}
                    id={`flexCheck${num}`}
                    name="toggleField"
                  />
                  <label className="form-check-label small-label" htmlFor={`flexCheck${num}`}>
                    Land {num}
                  </label>
                  <input
                    type="number"
                    id={`l${num}`}
                    className="d-none 3f-div"
                    name="number"
                    placeholder="Enter Your Number"
                  />
                </div>
              ))} */}
              <CheckBox/>
              <CheckBox/>
              <CheckBox/>   
            </div>
          </div>
        </div>
      );
}

export default Step8