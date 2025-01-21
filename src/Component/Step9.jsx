import React, { useState } from 'react'

const Step9 = () => {
  const [isOpen,setIsOpen] = useState(true)

  //toggle dropdown functionality
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  
    return (
        <div className="form-step col-md-10 col-11 active" id="step-9">
          <div className="row">
            <div className="col-md-2 step-count">
              <span>09</span>
            </div>
            {/* Personal Information */}
            <div className="col-md-10 py-2 px-4">
              <h4 className='mb-4'>Personal Information</h4>
              {/*Name of the owner*/}
              <h5>9.1 Name of the Owner</h5>
              <input type="text" id="name" name="Name" placeholder="Enter Your Name" required />
              {/* Gender Section */}
              <div>
              <h5>
                9.2 Gender
              </h5>
              
              <div className='d-flex flex-col'>
              <div className="form-check mt-1">
 <div className='mx-1'> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Male
  </label></div>
</div>
<div className="form-check mt-1">
  <input className="mx-1 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Female
  </label>
</div>
<div className="form-check mt-1">
  <input className="ms-1 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Non Binary
  </label>
</div>
<div className="form-check mt-1">
  <input className="ms-1 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Cant disclose
  </label>
</div>


              </div>
              </div>
               {/*When Business Section*/} 
              <div className='mt-2'>
              <h5>9.3 When did you start your business?</h5>
              <input type="number" placeholder='enter the year'/>
               </div>
               {/*Society Criteria*/}
               <div>
              <h5>
                9.4 Society Criteria
              </h5>
              
              <div className='d-flex flex-col'>
              <div className="form-check mt-1">
 <div className='mx-1'> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    General
  </label></div>
</div>
<div className="form-check mt-1">
  <input className="mx-1 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    OBC
  </label>
</div>
<div className="form-check mt-1">
  <input className="ms-1 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    SC/ST
  </label>
</div>
<div className="form-check mt-1">
  <input className="ms-1 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Minority
  </label>
</div>


              </div>
              </div>
              {/*Education Section*/}
              <div>
                <h5 className='mt-1'>9.5 Educational Qualification </h5>
              <div className="dropdown">
      <button
        className="mt-1 mb-1 btn btn-secondary dropdown-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        Select From the list
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      )}
    </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      );
}

export default Step9