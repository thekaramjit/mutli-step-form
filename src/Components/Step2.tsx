import { btnProps, ICompanyInfo, IRootState } from '../models/models'
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FormLabel, TextField } from "@mui/material";
import { ProgressBar } from './ProgressBar';
import { Header } from './Header';

type TFormData = {
  formData: ICompanyInfo
  getInfo: ICompanyInfo
  setInfo: React.Dispatch<React.SetStateAction<ICompanyInfo | undefined>>
}

type Props = TFormData & btnProps;

export const Step2: React.FC<Props> = ({ nextStep, previousStep, setFormData, formData, setInfo, getInfo }) => {

  const { register, handleSubmit, control, formState: { errors }, getValues, setValue } = useForm<ICompanyInfo>({
    defaultValues: {
    }
  });


  const onSubmit = (data: ICompanyInfo) => {
    nextStep()
    setFormData((preVal: IRootState) => {
      return {
        ...preVal, companyInfo: {...data}
      }
    })
    setInfo(data)
  };

  const handlePrevious = () => {
    const multipleValues: ICompanyInfo = getValues();
    console.log(multipleValues);

    setInfo(multipleValues)
    previousStep()
  }

  if (getInfo?.companyName) {
    const { companyName, profile, currentSalary, expectedSalary } = getInfo
    setValue('companyName', companyName)
    setValue('profile', profile)
    setValue('currentSalary', currentSalary)
    setValue('expectedSalary', expectedSalary)
  }
  else if (formData?.companyName) {
    const { companyName, profile, currentSalary, expectedSalary } = formData
    setValue('companyName', companyName)
    setValue('profile', profile)
    setValue('currentSalary', currentSalary)
    setValue('expectedSalary', expectedSalary)
  }

  return (
    <div className="container mt-5">
      <ProgressBar progressWidth={25} />

      <Header heading="EMPLOYEE INFO" step={2}/>
      
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">

        {/* company name */}
        <Controller
          name="companyName"
          defaultValue=" "
          control={control}
          render={({ field }) => <TextField  className='form-control' id="outlined-basic" label="Company Name" variant="outlined"  {...register("companyName", { minLength: 5, required: true })}
          />}
        />
        {errors.companyName && errors.companyName.type === "required" && <span className="text-danger">This feild is required!</span>}<br />
        {errors.companyName && errors.companyName.type === "minLength" && <span className="text-danger">Too short!</span>}<br />

        {/* proflie */}
        <FormLabel>Profile</FormLabel><br />
        <select {...register("profile", { required: true })}>
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
          />}
        />
        {errors.currentSalary && <span className="text-danger">This feild is required!</span>}<br /><br />

        {/* expectedSalary CTC */}
        <Controller

          name="expectedSalary"
          control={control}
          render={({ field }) => <TextField  type="number" className='form-control' id="outlined-basic" label="Expected CTC" variant="outlined"  {...register("expectedSalary", { required: true })}
          />}
        />
        {errors.expectedSalary && <span className="text-danger">This feild is required!</span>}<br /><br />

        <button name='previous' onClick={handlePrevious} className="submitBtn previous btn btn-primary  my-3">Previous</button>
        <button name="next" type='submit' className="submitBtn next btn btn-primary mx-4 my-3">Next</button>
      </form>

    </div>
  )
}