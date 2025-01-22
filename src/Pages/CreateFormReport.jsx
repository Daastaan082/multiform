
import { useState } from 'react'
import Step1 from '../Component/Step1';
import Step2 from '../Component/Step2';
import Step3 from '../Component/Step3';
import Step4 from '../Component/Step4';
import Step5 from '../Component/Step5';
import Step6 from '../Component/Step6';
import Step10 from '../Component/Step10';
import Step8 from '../Component/Step8';
import Step9 from '../Component/Step9';
import Navbar from '../Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Step7 from '../Component/Step7';
import Home from './Home';
const CreateFormReport = () => {
    const[step,setStep] = useState(1);
 const nextStep = () =>{
   setStep((prevStep)=>prevStep + 1);
 }
 const prevStep = () =>{
  setStep((prevStep)=>prevStep - 1);
 }
  const renderStep = () =>{
    switch(step){
      case 1:
        return <Step1/>
      case 2:
        
        return <>
        <Step1/>
        <Step2/>
        </>
      case 3:
        return <>
        <Step1/>
        <Step2/>
        <Step3/>
        </>
      case 4:
        return <>
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>
        </>
      case 5:
        return <>
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>
        <Step5/>
        </>
      case 6:
        return <>
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>
        <Step5/>
        <Step6/>
        </>
        case 7:
          return <>
          <Step1/>
          <Step2/>
          <Step3/>
          <Step4/>
          <Step5/>
          <Step6/>
          <Step7/>
          {/* <Step8/> */}
          </> 
          case 8:
            return <>
            <Step1/>
            <Step2/>
            <Step3/>
            <Step4/>
            <Step5/>
            <Step6/>
            <Step7/>
            <Step8/>
            {/* <Step9/> */}
            </>  
            case 9:
                return <>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
                <Step5/>
                <Step6/>
                <Step7/>
                <Step8/>
                <Step9/>
                </>  
                case 9:
                return <>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
                <Step5/>
                <Step6/>
                <Step7/>
                <Step8/>
                <Step9/>
                </>
                case 10:
                    return <>
                    <Step1/>
                    <Step2/>
                    <Step3/>
                    <Step4/>
                    <Step5/>
                    <Step6/>
                    <Step7/>
                    <Step8/>
                    <Step9/>
                    <Step10/>
                    </> 
      default:
        return <Step1/>  
    }
  }
  return (
    <>
    <Home/>
    <form id="multiStepForm" className="row justify-content-center">
      {/* Render the current step */}
      {renderStep()}
      <div className="col-md-5 d-flex align-items-center justify-content-between mx-auto my-4">
        {/* Previous Step Button */}
        {step == 1 && (
          <button type="button" className="btn btn-secondary" onClick={prevStep}>
            Previous
          </button>
        )}
        {/* Save and Continue Button */}
        {step <= 10 && (
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Save and Continue
          </button>
        )}
        
      </div>
    </form>
    </>
  )
}

export default CreateFormReport