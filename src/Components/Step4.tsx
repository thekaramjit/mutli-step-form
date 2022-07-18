import { btnProps, IHobbies, IRootState} from '../models/models'
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormLabel } from "@mui/material";
import { Header } from './Header';

type TFormData = {
  formData: IHobbies
  getInfo: IHobbies
  setInfo: React.Dispatch<React.SetStateAction<IHobbies | undefined>>
}

type Props = TFormData & btnProps

export const Step4: React.FC<Props> = ({ nextStep, previousStep, setFormData, formData,getInfo,setInfo }) => {

  //getting data from boss component
  const hobbiesValue = getInfo?.hobbies || getInfo?.hobbies.length===0 ? getInfo?.hobbies : formData?.hobbies
  const jsLevelValue = getInfo?.jsLevel || getInfo?.jsLevel==="" ? getInfo?.jsLevel : formData?.jsLevel

  //setting data
  const [jSLevelState,setJSLevelState]=useState(jsLevelValue)

  //uesForm
  const { register, handleSubmit, control, formState: { errors }, setValue ,getValues} = useForm<IHobbies>({
    defaultValues: {
    }
  });

  //submit function
  const onSubmit = (data: IHobbies) => {
    nextStep()
    setFormData((preVal: IRootState) => {
      return {
        ...preVal, hobbiesInfo: data
      }
    })
    setInfo(data)
  };

   //handling previous
  const handlePrevious = () => {
    const multipleValues: IHobbies = getValues();
    setInfo(multipleValues)
    previousStep()
  }

  //setting hobbies value
  if (getInfo?.hobbies ) {
    setValue('hobbies', hobbiesValue)
   }

  return (
    <div className="container mt-5">

      <Header heading="HOBBIES" step={4} />
      
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">

        {/* hobbies */}
        <FormLabel>Hobbies</FormLabel><br />
        <Controller
          name="hobbies"
          control={control}
          render={() => <>
            <div className="form-check form-check-inline">
              <input className="form-check-input" {...register("hobbies", { required: true })} type="checkbox" id="inlineCheckbox1" value="Singing" />
              <label className="form-check-label" htmlFor="inlineCheckbox1">Singing</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" {...register("hobbies", { required: true })} type="checkbox" id="inlineCheckbox2" value="Dancing" />
              <label className="form-check-label" htmlFor="inlineCheckbox2">Dancing</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" {...register("hobbies", { required: true })} type="checkbox" id="inlineCheckbox3" value="Playing" />
              <label className="form-check-label" htmlFor="inlineCheckbox3">Playing</label>
            </div>
          </>}
        /><br />
        {errors.hobbies && <span className="text-danger">Required!</span>}<br/><br/>

        {/* js Level */}
        <FormLabel>JavaScript level</FormLabel><br />
        <select {...register("jsLevel", { required: true })} value={jSLevelState}  onChange={(e) => setJSLevelState(e.target.value)}>
          <option value="Beginner" key={1}>Beginner</option>
          <option value="Intermediate" key={2}>Intermediate</option>
          <option value="Advance" key={3}>Advance</option>
        </select>
        {errors.jsLevel && <span className="text-danger">Required!</span>}<br /><br />


        <button name='previous' onClick={handlePrevious} className="submitBtn previous btn btn-primary  my-3">Previous</button>
        <button name="next" type='submit' className="submitBtn next btn btn-primary mx-4 my-3">Next</button>

      </form>

    </div>
  )
}
