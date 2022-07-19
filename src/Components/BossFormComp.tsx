import React, { useEffect, useState } from 'react'
import { IAddress, IBasicInfo, ICompanyInfo, IHobbies, IRootState } from '../models/models'
import { HeaderTabs } from './Header/HeaderTabs'
import { ProgressBar } from './ProgressBar'
import { Step1 } from './Steps/Step1'
import { Step2 } from './Steps/Step2'
import { Step3 } from './Steps/Step3'
import { Step4 } from './Steps/Step4'
import { Step5 } from './Steps/Step5'

export const BossFormComp: React.FC = () => {
    const rootState:IRootState= {
        basicInfo: {
            name: "",
            fName: "",
            mName: "",
            gender: "",
            email:"",
            age: undefined
        },
        companyInfo: {
            companyName: "",
            profile: "",
            currentSalary: undefined || "",
            expectedSalary: undefined || ""
        },
        addressInfo: {
            country: "",
            state: "",
            city: "",
            zipCode:undefined
        },
        hobbiesInfo: {
            hobbies: [],
            jsLevel: ""
        }
    }

    //states
    const [step, setstep] = useState<number>(1);
    const [formData, setFormData] = useState(rootState)   
    const [step1, setStep1] = useState<IBasicInfo>()
    const [step2, setStep2] = useState<ICompanyInfo>()
    const [step3,setStep3]=useState<IAddress>()
    
    const [step4,setStep4]=useState<IHobbies>()   
    const [progress,setProgress]=useState<number>(0) 
    const [step1Progress, setStep1Progress]=useState<boolean>()
    const [step2Progress, setStep2Progress]=useState<boolean>()
    const [step3Progress, setStep3Progress]=useState<boolean>()
    const [step4Progress, setStep4Progress]=useState<boolean>()
    
    //next step logic
    const nextStep = () => {
        setstep(step + 1);
    };

    //previous step logic
    const prevStep = () => {
        setstep(step - 1);
    };

    useEffect(()=>{
        progressFunc()
    }, [step1Progress, step2Progress, step3Progress, step4Progress])


    //progress bar logic
    const progressFunc=()=>{
        const step1ProgressState = step1Progress ? 25 : 0
        const step2ProgressState = step2Progress ? 25 : 0
        const step3ProgressState = step3Progress ? 25 : 0        
        const step4ProgressState = step4Progress ? 25 : 0
        const totalValue = step1ProgressState + step2ProgressState + step3ProgressState + step4ProgressState
        setProgress(totalValue)
    }
    
    
        switch (step) {
            case 1:
                return (
                    <>
                        <ProgressBar progressWidth={progress} />
                        <HeaderTabs setStep={setstep} enable={progress} />
                        <Step1 setStep1Progress={setStep1Progress} getInfo={step1 as IBasicInfo} setInfo={setStep1} nextStep={nextStep} formData={formData.basicInfo} setFormData={setFormData} previousStep={prevStep} />
                    </>)
            case 2:
                return (
                    <>
                        <ProgressBar progressWidth={progress} />
                        <HeaderTabs setStep={setstep} enable={progress} />
                        <Step2 setStep2Progress={setStep2Progress} getInfo={step2 as ICompanyInfo} setInfo={setStep2} nextStep={nextStep} formData={formData.companyInfo} setFormData={setFormData} previousStep={prevStep} />
                    </>
                );
            case 3:
                return (
                    <>
                        <ProgressBar progressWidth={progress} />
                        <HeaderTabs setStep={setstep} enable={progress} />
                        <Step3 setStep3Progress={setStep3Progress} getInfo={step3 as IAddress} setInfo={setStep3} nextStep={nextStep} formData={formData.addressInfo} setFormData={setFormData} previousStep={prevStep} />
                    </>
                );
            case 4:
                return (
                    <>
                        <ProgressBar progressWidth={progress} />
                        <HeaderTabs setStep={setstep} enable={progress} />
                        <Step4 setStep4Progress={setStep4Progress} getInfo={step4 as IHobbies} setInfo={setStep4} nextStep={nextStep} formData={formData.hobbiesInfo} setFormData={setFormData} previousStep={prevStep} />
                    </>

                );
            case 5:
                return (
                    <>
                        <ProgressBar progressWidth={progress} />
                        <HeaderTabs setStep={setstep} enable={progress} />
                        <Step5 nextStep={nextStep} formData={formData} setFormData={setFormData} previousStep={prevStep} />
                    </>

                );
            default:
                return (
                    <div className="App">
                    </div>
                );
        }   
}