import React from 'react'

const Step9 = () => {
    return (
        <div className="form-step col-md-10 col-11 active" id="step-1">
          <div className="row">
            <div className="col-md-2 step-count">
              <span>09</span>
            </div>
            <div className="col-md-10 py-2 px-4">
              <h4>What's the name of your business entry</h4>
              <input type="text" id="name" name="Name" placeholder="Enter Your Name" required />
            </div>
          </div>
        </div>
      );
}

export default Step9