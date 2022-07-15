import { btnProps, IBasicInfo, IRootState} from '../models/models'
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {TextField } from "@mui/material";
import { ProgressBar } from './ProgressBar';
import { Header } from './Header';
import "./style.css"

type TFormData={
  formData:IBasicInfo
}

type Props = TFormData & btnProps;

export const Step1: React.FC<Props>=({nextStep,previousStep,setFormData,formData}) => {

  const { register, handleSubmit, control, formState: { errors },setValue } = useForm<IBasicInfo>({
    defaultValues: {
    }
  });
  

  const onSubmit = (data:IBasicInfo) => {    
    setFormData((preVal:IRootState)=>{
      return{
        ...preVal, basicInfo: data
        
      }
    })
    nextStep()
  };

  if (formData?.name) {
    const { name,fName,mName,gender,age,email } = formData
    setValue('name', name)
    setValue('fName', fName)
    setValue('mName', mName)
    setValue('gender', gender)
    setValue("email",email)
    setValue('age', age)
  }

  return (
    <div className="container mt-5">
      <ProgressBar progressWidth={0} />
      
      <Header heading="BASIC INFO" step={1} />
      
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        {/* name */}
        <Controller
          name="name"
          defaultValue=""
          control={control}
          render={({ field }) => <TextField className='form-control' id="outlined-basic" label="Name" variant="outlined"  {...register("name", { required: true, minLength: 5 })}
          />}
        />
        {errors.name && errors.name.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.name && errors.name.type === "minLength" && <span className="text-danger">Too short!</span>}<br />


        {/* father name */}
        <Controller
          name="fName"
          defaultValue=""
          control={control}
          render={({ field }) => <TextField className='form-control' id="outlined-basic" label="Father Name" variant="outlined"  {...register("fName", { required: true, minLength: 5 })}
          />}
        />
        {errors.fName && errors.fName.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.fName && errors.fName.type === "minLength" && <span className="text-danger">Too short!</span>}<br />

        
        {/* mother name */}
        <Controller
          name="mName"
          defaultValue=""
          control={control}
          render={({ field }) => <TextField className='form-control' id="outlined-basic" label="Mother Name" variant="outlined"  {...register("mName", { required: true, minLength: 5 })}
          />}
        />
        {errors.mName && errors.mName.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.mName && errors.mName.type === "minLength" && <span className="text-danger">Too short!</span>}<br />
        
        
        {/* email name */}
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => <TextField className='form-control' id="outlined-basic" label="E-mail" variant="outlined"  {...register("email", { required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }
            )}
          />}
        />
        {errors.email && errors.email.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.email && errors.email.type === "pattern" &&<p className="text-danger">Invalid email!</p>}<br />
        
        {/* age */}
        <Controller
         
          name="age"
          control={control}
          render={({ field }) => <TextField type="number" className='form-control' id="outlined-basic" label="Age" variant="outlined"  {...register("age", { required: true, min: 18 ,max:100})}
          />}
        />
        {errors.age && errors.age.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.age && errors.age.type === "min" && <span className="text-danger">Age cant be less then 18</span>}<br />
        {errors.age && errors.age.type === "max" && <span className="text-danger">Age cant be greater then 100</span>}<br />

        {/* Gender */}
        <Controller
          name="gender"
          control={control}
          render={({ field }) => <>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="inlineRadio1" type="radio"  {...register("gender", { required: true })} value="male" />
              <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="inlineRadio2" type="radio"  {...register("gender", { required: true })} value="female" />
              <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" id="inlineRadio3" type="radio"  {...register("gender", { required: true })} value="other" />
              <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
            </div>
          </>}
        /><br />
        {errors.gender && <span className="text-danger">This feild is Required!</span>}<br /><br />

        <button type='submit' className="btn btn-primary submitBtn">Next</button>
      </form>

    </div>
  )
}
