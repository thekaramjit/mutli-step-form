import { btnProps, ICompanyInfo, IRootState } from '../../models/models'
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormLabel, TextField } from "@mui/material";
import { Header } from '../Header/Header';

type TFormData = {
  formData: ICompanyInfo
  getInfo: ICompanyInfo
  setInfo: React.Dispatch<React.SetStateAction<ICompanyInfo | undefined>>
  setStep2Progress: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

type Props = TFormData & btnProps;

export const Step2: React.FC<Props> = ({ nextStep, previousStep, setFormData, formData, setInfo, getInfo, setStep2Progress }) => {

   //use form 
  const { register, handleSubmit, control, formState: { errors }, getValues, setValue } = useForm<ICompanyInfo>({
    defaultValues: {
    }
  })

  //setting data
  useEffect(()=>{
    setValue('companyName', getInfo?.companyName)
    setValue('profile', getInfo?.profile)
    setValue('currentSalary', getInfo?.currentSalary)
    setValue('expectedSalary', getInfo?.expectedSalary)
  },[])

  //submit funciton
  const onSubmit = (data: ICompanyInfo) => {
    nextStep()
    setFormData((preVal: IRootState) => {
      return {
        ...preVal, companyInfo: {...data}
      }
    })
    setInfo({...data})
    checkState(data)
  };

  //previous buttoon
  const handlePrevious = () => {
    const multipleValues: ICompanyInfo = getValues();
    setInfo({...multipleValues})
    checkState(multipleValues)
    previousStep()
  }

  //checking if any feild is empty
  const checkState = (multipleValues:ICompanyInfo)=>{
    const isNullish = Object.values(multipleValues).every(value => {
      if (value!== (undefined || "")) {
        return true;
      }
      return false;
    });
    
    setStep2Progress(isNullish)
  }

  return (
    <div className="container">

      <Header heading="EMPLOYEE INFO" step={2}/>
      
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">

        {/* company name */}
        <Controller
          name="companyName"
          defaultValue=""
          control={control}
          render={({ field }) => <TextField className='form-control' id="outlined-basic" label="Company Name" variant="outlined"  {...register("companyName", { minLength: 5, required: true }) } 
          />}
        />
        {errors.companyName && errors.companyName.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.companyName && errors.companyName.type === "minLength" && <span className="text-danger">Too short!</span>}<br />

        {/* proflie */}
        <FormLabel>Profile</FormLabel><br />
        <select {...register("profile", { required: true })} 
        >
          <option value="">None</option>
          <option value="React.js">React.js</option>
          <option value="PHP">PHP</option>
          <option value="Angular.js">Angular.js</option>
          <option value="Node.js">Node.js</option>
          <option value="Next.js">Next.js</option>
          <option value="Dot Net">Dot Net</option>
          <option value="Laravel">Laravel</option>
          <option value="Web designer">Web designer</option>
        </select>
        {errors.profile && <span className="text-danger">This feid is Required!</span>}<br /><br />

        {/* current CTC */}
        <Controller
          name="currentSalary"
          control={control}
          render={({ field }) => <TextField type="number" className='form-control' id="outlined-basic" label="Current CTC" variant="outlined"  {...register("currentSalary", { required: true })} 
            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
          
          />}
        />
        {errors.currentSalary && <span className="text-danger">This feild is required!</span>}<br /><br />

        {/* expectedSalary CTC */}
        <Controller
          name="expectedSalary"
          control={control}
          render={({ field }) => <TextField  type="number" className='form-control' id="outlined-basic" label="Expected CTC" variant="outlined"  
          {...register("expectedSalary", { required: true })}
            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            
          />}
        />
        {errors.expectedSalary && <span className="text-danger">This feild is required!</span>}<br /><br />

        <button name='previous' onClick={handlePrevious} className="submitBtn previous btn btn-primary  my-3">Previous</button>
        <button name="next" type='submit' className="submitBtn next btn btn-primary mx-4 my-3">Next</button>
      </form>
    </div>
  )
}
