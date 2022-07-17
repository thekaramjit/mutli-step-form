import { btnProps, IAddress, IRootState } from '../models/models'
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormLabel, TextField } from "@mui/material";
import { countryData } from '../Data/data';
import { ProgressBar } from './ProgressBar';
import "./style.css"
import { Header } from './Header';


type TFormData = {
    formData: IAddress
    getInfo: IAddress
    setInfo: React.Dispatch<React.SetStateAction<IAddress | undefined>>
}

type Props = TFormData & btnProps

export const Step3: React.FC<Props> = ({ nextStep, previousStep, formData, setFormData, getInfo, setInfo }) => {
    
    //getting data from boss component
    const countryValue = getInfo?.country || getInfo?.country ==="" ? getInfo?.country : formData?.country
    const stateValue = getInfo?.state || getInfo?.state==="" ? getInfo?.state : formData?.state
    const cityValue = getInfo?.city || getInfo?.city==="" ? getInfo?.city : formData?.city
    const zipCode=getInfo?.zipCode ? getInfo?.zipCode : formData?.zipCode

    //setting data
    const [selectedCountry, setSelectedCountry] = useState(countryValue)
    const [selectedState, setSelectedState] = useState(stateValue)
    const [selectedCity, setSelectedCity] = useState(cityValue)
    const [zipCodeState,setZipCodeState]=useState<number | string | null>(zipCode)
    

    //uesForm
    const { register, handleSubmit, control, formState: { errors }, setValue, getValues ,watch} = useForm<IAddress>({
        defaultValues: {
        }
    });

    //submit function
    const onSubmit = (data: IAddress) => {
        nextStep()
        setFormData((preVal: IRootState) => {
            return {
                ...preVal, addressInfo: data
            }
        })
        setInfo(data)
    };

    //handling previous
    const handlePrevious = () => {
        const multipleValues: IAddress = getValues();
        setInfo(multipleValues)
        previousStep()
    }

    //sorted Data
    const sortedStates = countryData.countries.find((c) => c.name === selectedCountry);
    const sortedCities = sortedStates?.states?.find((s) => s.name === selectedState);

    return (
        <div className="container mt-5">

            <Header heading="ADDRESS" step={3}/>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                {/* Country */}
                <label className="form-label">Country</label>
                <select {...register("country", { required: true })} value={selectedCountry}  onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="">None</option>
                    {countryData.countries.map((value, key) => {
                        return <option value={value.name} key={key}>{value.name}</option>
                    })}
                </select><br />
                {errors.country  && <span className="text-danger">This field is required</span>}<br />


                {/* State */}
                <label className="form-label">State</label>
                <select {...register("state", { required: true })} value={selectedState}  onChange={(e) => setSelectedState(e.target.value)}>
                    <option value="">None</option>
                    {sortedStates?.states.map((e, key) => {
                        return <option value={e.name} key={key}>{e.name}</option>
                    })}
                </select><br />
                {errors.state && <span className="text-danger">This field is required</span>}<br />


                {/* City */}
                <FormLabel>City</FormLabel><br />
                <select  {...register("city", { required: true })} value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">None</option>
                    {sortedCities?.cities.map((e: string, index: number) => {
                        return <option key={index + "c"} value={e}>{e}</option>
                    })
                    }
                </select><br />
                {errors.city && <span className="text-danger">This feild is Required!</span>}<br />

                {/* zipCode */}
                <Controller
                    name="zipCode"
                    control={control}
                    render={({ field }) => <TextField  type="number" className='form-control' id="outlined-basic" label="Zip Code" variant="outlined"   {...register("zipCode", { maxLength: 5, minLength: 5, required: true })}  value={zipCodeState}  onChange={(e)=>{setZipCodeState(e.target.value)}}
                    />}
                    
                />
                {errors.zipCode && <span className="text-danger">zipCode should be of 5 digits</span>}<br /><br />

                <button name='previous' onClick={handlePrevious} className="submitBtn previous btn btn-primary  my-3">Previous</button>
                <button name="next" type='submit' className="submitBtn next btn btn-primary mx-4 my-3">Next</button>

            </form>

        </div>
    )
}
