import React, { useEffect, useState } from 'react'
import { IAddress, IBasicInfo, ICompanyInfo, IHobbies, IRootState } from '../models/models'
import { ProgressBar } from './ProgressBar'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'

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
    const [progress,setProgress]=useState<number>(100) 
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
        //console.log("step4ProgressState ", step4Progress)
        const totalValue = step1ProgressState + step2ProgressState + step3ProgressState + step4ProgressState
        // console.log("TotalValue",totalValue)
        setProgress(totalValue)
    }
    console.log("Progress ",progress)
    
    switch (step) {
        case 1:
            return (
                <>
                <ProgressBar progressWidth={progress}/>
                    <Step1 setStep1Progress={setStep1Progress} getInfo={step1 as IBasicInfo} setInfo={setStep1} nextStep={nextStep} formData={formData.basicInfo} setFormData={setFormData}  previousStep={prevStep}/>
                </>
            );
        case 2:
            return (
                <>
                    <ProgressBar progressWidth={progress}/>
                    <Step2 setStep2Progress={setStep2Progress} getInfo={step2 as ICompanyInfo} setInfo={setStep2} nextStep={nextStep} formData={formData.companyInfo} setFormData={setFormData}  previousStep={prevStep} />
                </>
            );
        case 3:
            return (
                <>
                <ProgressBar progressWidth={progress} />
                    <Step3 setStep3Progress={setStep3Progress} getInfo={step3 as IAddress} setInfo={setStep3} nextStep={nextStep} formData={formData.addressInfo} setFormData={setFormData} previousStep={prevStep} />
                </>
            );
        case 4:
            return (
                <>
                <ProgressBar progressWidth={progress}/>
                    <Step4 setStep4Progress={setStep4Progress} getInfo={step4 as IHobbies} setInfo={setStep4} nextStep={nextStep} formData={formData.hobbiesInfo} setFormData={setFormData} previousStep={prevStep} />
                </>
                
            );
        case 5:
            return (
                <>
                <ProgressBar progressWidth={progress}/>
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



 // const basicInfoCompleted:boolean=formData.basicInfo.age!==undefined &&  formData.basicInfo.name!=="" && formData.basicInfo.fName!=="" && formData.basicInfo.mName!=="" && formData.basicInfo.gender!=="" && formData.basicInfo.email!==""
    
        // const companyInfoCompleted: boolean = formData.companyInfo.companyName !== ""  && formData.companyInfo.profile !=="" && formData.companyInfo.currentSalary !== (undefined || "")  && formData.companyInfo.expectedSalary !== (undefined ||"")
    
        // const addressInfoCompleted:boolean=formData.addressInfo.country!=="" &&  formData.addressInfo.state!=="" && formData.addressInfo.city!=="" && formData.addressInfo.zipCode!==null
        
        // const hobbiesInfoCompleted:boolean=formData.hobbiesInfo.hobbies.length!==0 &&  formData.hobbiesInfo.jsLevel!==""
        //console.log(basicInfoCompleted, companyInfoCompleted, addressInfoCompleted, hobbiesInfoCompleted)
    
        // const basicProgressBar:number=basicInfoCompleted ? 25 : 0
        // const companyInfoProgressBar:number=companyInfoCompleted ? 25 : 0
        // const addressInfoProgressBar:number=addressInfoCompleted ? 25 : 0
        // const hobbiesInfoProgressBar:number=hobbiesInfoCompleted ? 25 : 0
    
        // setProgress(basicProgressBar + companyInfoProgressBar + addressInfoProgressBar + hobbiesInfoProgressBar)