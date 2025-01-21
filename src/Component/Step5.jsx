import React from "react";

const Step5 = () => {
return(
<div className="form-step col-md-10 col-11 active" id="step-2">
          <div className="row">
            <div className="col-md-2 step-count">
              <span>05</span>
            </div>
            <div className="col-md-10 py-2 px-4">
              <h4>5.Please select your industry</h4>
              <div className="df-img-btns mt-3 ">
                <div className="col loannames rdo_select ">
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="termloan"
                      name="ltype"
                      value="termloan"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label htmlFor="termloan" className="btn btn-outline-primary mr-3 text-center inp4">
                    <div className="d-flex flex-column ">
                      <div className="mb-2">
                      <img src="https://www.finline.in/assets/v3/img/land.svg" height="32" alt="Land-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/machinary.svg" height="32" alt="Machinary-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/computer.svg" height="32" alt="Computer-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/vehicle.svg" height="32" alt="Vehicle-Icon"/>
                      </div>
                      Term Loan
                      </div>
                      <div>
                      <small class="df-lh d-none d-md-block">Eg. Buy Land, Machinery, Computer, Vehicle etc. for the business.</small>
                      </div>
                    </label>
                    
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="workingcapitalloan"
                      name="ltype"
                      value="workingcapitalloan"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                    />
                    <label htmlFor="workingcapitalloan" className="btn btn-outline-primary mr-3 text-center inp4">
                    <div className="d-flex flex-column ">
                      <div className="mb-2">
                      <img src="https://www.finline.in/assets/v3/img/stock.svg" height="32" alt="Stock-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/calculator.svg" height="32" alt="Calculator-Icon"/>
                      
                      </div>
                      Working Capital Loan
                      </div>
                      <div>
                      <small class="df-lh d-none d-md-block">Eg. Purchase stock, Manage daily/monthly expenses</small>
                      </div>
                    </label>
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="combined"
                      name="ltype"
                      value="combined"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label htmlFor="combined" className="btn btn-outline-primary mr-3 text-center inp4">
                    <div className="d-flex flex-column ">
                      <div className="mb-2">
                      <img src="https://www.finline.in/assets/v3/img/land.svg" height="32" alt="Land-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/machinary.svg" height="32" alt="Machinary-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/computer.svg" height="32" alt="Computer-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/vehicle.svg" height="32" alt="Vehicle-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/stock.svg" height="32" alt="Stock-Icon"/>
                      <img src="https://www.finline.in/assets/v3/img/calculator.svg" height="32" alt="Calculator-Icon"/>
                      </div>
                      Term Loan+Working Capital Loan
                      </div>
                      <div>
                      <small class="df-lh d-none d-md-block">For All of the above</small>
                      </div>
                    </label>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
};

export default Step5;
