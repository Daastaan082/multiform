import React from "react";

const Step3 = () => {
    return (
        <div className="form-step col-md-10 col-11 active" id="step-2">
          <div className="row">
            <div className="col-md-2 step-count">
              <span>03</span>
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
                    <label htmlFor="mudra" className="btn btn-outline-primary mr-3 text-center inp4 gap-2" >
                      <div className="d-flex align-items-center gap-1 " ><img src="https://www.finline.in/assets/v3/img/manufacturing.svg" alt="" />
                      Manufacturing</div>
                    </label>
                    
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="mudra"
                      name="ltype"
                      value="mudra"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                      // defaultChecked
                    />
                    <label htmlFor="mudra" className="btn btn-outline-primary mr-3 text-center inp4 gap-2" >
                      <div className="d-flex align-items-center gap-1 " ><img src="https://www.finline.in/assets/v3/img/service.svg" alt="" />
                      Services</div>
                    </label>
                    
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="mudra"
                      name="ltype"
                      value="mudra"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                      // defaultChecked
                    />
                    <label htmlFor="mudra" className="btn btn-outline-primary mr-3 text-center inp4 gap-2" >
                      <div className="d-flex align-items-center gap-1 " ><img src="https://www.finline.in/assets/v3/img/trading.svg" alt="" />
                      Trading</div>
                    </label>
                    
                  </div>
                  <div className="col-auto mb-3 mb-md-0">
                    <input
                      type="radio"
                      id="mudra"
                      name="ltype"
                      value="mudra"
                      required
                      className="btn-check mustsel"
                      autoComplete="off"
                      // defaultChecked
                    />
                    <label htmlFor="mudra" className="btn btn-outline-primary mr-3 text-center inp4 gap-2" >
                      <div className="d-flex align-items-center gap-1 " ><img src="https://www.finline.in/assets/v3/img/agriculture.svg" alt="" />
                      Agriculture</div>
                    </label>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Step3;
