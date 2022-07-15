import React, { useState } from 'react'
import { IAddress, ICompanyInfo, IHobbies, IRootState } from '../models/models'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
// import { Stepp3 } from './Stepp3'

export const BossFormComp: React.FC = () => {
    const rootState:IRootState= {
        basicInfo: {
            name: "",
            fName: "",
            mName: "",
            gender: "",
            email:"",
            age: null
        },
        companyInfo: {
            companyName: "",
            profile: "",
            currentSalary: 0,
            expectedSalary: 0
        },
        addressInfo: {
            country: "",
            state: "",
            city: "",
            zipCode: 0
        },
        hobbiesInfo: {
            hobbies: [],
            jsLevel: ""
        }
    }
    

    const [step, setstep] = useState<number>(1);
    const [formData, setFormData] = useState(rootState)   
    const [step2, setStep2] = useState<ICompanyInfo>()
    const [step3,setStep3]=useState<IAddress>()
    const [step4,setStep4]=useState<IHobbies>()   
    // const [progress,setProgress]=useState<number>() 
    
    const nextStep = () => {
        setstep(step + 1);
    };

    const prevStep = () => {
        setstep(step - 1);
    };

    switch (step) {
        case 1:
            return (
                <Step1  nextStep={nextStep} formData={formData.basicInfo} setFormData={setFormData}  previousStep={prevStep}/>
            );
        case 2:
            return (
                <div className="App">
                    <Step2 getInfo={step2 as ICompanyInfo} setInfo={setStep2} nextStep={nextStep} formData={formData.companyInfo} setFormData={setFormData}  previousStep={prevStep} />
                </div>
            );
        case 3:
            return (
                <Step3 getInfo={step3 as IAddress} setInfo={setStep3} nextStep={nextStep} formData={formData.addressInfo} setFormData={setFormData} previousStep={prevStep} />
            );
        case 4:
            return (
                <Step4 getInfo={step4 as IHobbies} setInfo={setStep4} nextStep={nextStep} formData={formData.hobbiesInfo} setFormData={setFormData} previousStep={prevStep} />
            );
        case 5:
            return (
                <Step5 nextStep={nextStep} formData={formData} setFormData={setFormData} previousStep={prevStep} />
            );
        default:
            return (
                <div className="App">
                </div>
            );
    }
    
}
