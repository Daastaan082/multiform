import React from "react";

const Step4 = () => {
    return (
        <div className="form-step col-md-10 col-11 active" id="step-2">
          <div className="row">
            <div className="col-md-2 step-count">
              <span>04</span>
            </div>
            <div className="col-md-10 py-2 px-4">
              <h4>3.Please select your industry</h4>
              <div className="df-img-btns mt-3">
                <div className="row loannames rdo_select">
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="mudra"
                      name="ltype"
                      value="mudra"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label htmlFor="mudra" className="btn btn-outline-primary mr-3 text-center inp4 fw-medium">
                      Mundra
                    </label>
                    
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="PMEGP"
                      name="ltype"
                      value="PMEGP"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                    />
                    <label htmlFor="PMEGP" className="btn fw-medium btn-outline-primary mr-3 text-center inp4">
                      PMEGP
                    </label>
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="Normal MSME loan"
                      name="ltype"
                      value="Normal MSME loan"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                    />
                    <label htmlFor="Normal MSME loan" className="btn fw-medium btn-outline-primary mr-3 text-center inp4">
                      Normal MSME loan
                    </label>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Step4;
