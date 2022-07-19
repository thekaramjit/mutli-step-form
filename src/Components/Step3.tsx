import { btnProps, IAddress, IRootState } from '../models/models'
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormLabel, TextField } from "@mui/material";
import { countryData } from '../Data/data';
import { ProgressBar } from './ProgressBar';
import "./style.css"
import { Header } from './Header';
import { setConstantValue } from 'typescript';


type TFormData = {
    formData: IAddress
    getInfo: IAddress
    setInfo: React.Dispatch<React.SetStateAction<IAddress | undefined>>
    setStep3Progress: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

type Props = TFormData & btnProps

export const Step3: React.FC<Props> = ({ nextStep, previousStep, formData, setFormData, getInfo, setInfo, setStep3Progress }) => {

    // const countryValue = !getInfo?.country ? getInfo?.country : formData?.country
    // const stateValue = !getInfo?.state ? getInfo?.state : formData?.state
    // const cityValue = !getInfo?.city ? getInfo?.city : formData?.city
    // const zipCodeValue = getInfo?.zipCode ? getInfo?.zipCode : formData?.zipCode
    
    const { register, handleSubmit, control, formState: { errors }, getValues,setValue} = useForm<IAddress>({
        defaultValues: {
        }
    });
    
    //useEffect(() => {
    //     setValue('country', getInfo?.country)
    //     setValue('state', getInfo?.state)
    //     setValue('city', getInfo?.city)
    //     setValue('zipCode', getInfo?.zipCode)
    // }, [])

    const [selectedCountry, setSelectedCountry] = useState<string>(getInfo?.country)
    const [selectedState, setSelectedState] = useState<string>(getInfo?.state)
    const [selectedCity, setSelectedCity] = useState<string>(getInfo?.city)
    const [zipCodeState, setZipCodeState] = useState<number | undefined | string>(getInfo?.zipCode)
    
    // const values = { selectedCountry, selectedState, selectedCity }

    const onSubmit = (data: IAddress) => {
        nextStep()
        setFormData((preVal: IRootState) => {
            return {
                ...preVal, addressInfo: data
            }
        })
        setInfo(data)
        checkState(data)
    };

    const handlePrevious = () => {
        const multipleValues: IAddress = getValues();
        console.log(multipleValues)
        setInfo(multipleValues)
        previousStep()
        checkState({...multipleValues})
    }

    const availableState = countryData.countries.find((c) => c.name === selectedCountry);
    const availableCities = availableState?.states?.find((s) => s.name === selectedState);

    //checking if any feild is empty
    const checkState = (multipleValues:IAddress) => {
        const isNullish = Object.values(multipleValues).every(value => {
            if (value !== "" || undefined) {
                return true;
            }
            return false;
        });
        setStep3Progress(isNullish)
    }

    return (
        <div className="container mt-5">

            <Header heading="ADDRESS" step={3} />
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                {/* Country */}
                <label className="form-label">Country</label>
                <select {...register("country", { required: true })} 
                value={selectedCountry} onChange={(e) => {setSelectedCountry(e.target.value); setSelectedState("")}}
                >
                    <option value="">None</option>
                    {countryData.countries.map((value, key) => {
                        return <option value={value.name} key={key}>{value.name}</option>
                    })}
                </select><br />
                {errors.country?.type === "required" && <span className="text-danger">This field is required</span>}<br />


                {/* State */}
                <label className="form-label">State</label>
                <select {...register("state", { required: true })} 
                value={selectedState} onChange={(e) => {setSelectedState(e.target.value); setSelectedCity("")}}
                >
                    <option value="">None</option>
                    {availableState?.states.map((e, key) => {
                        return <option value={e.name} key={key}>{e.name}</option>
                    })}
                </select><br />
                {errors.state?.type === "required" && <span className="text-danger">This field is required</span>}<br />


                {/* City */}
                <FormLabel>City</FormLabel><br />
                <select  {...register("city", { required: true })} value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">None</option>
                    {availableCities?.cities.map((e: string, index: number) => {
                        return <option key={index + "c"} value={e}>{e}</option>
                    })
                    }
                </select><br />
                {errors.city && <span className="text-danger">This feild is Required!</span>}<br />

                {/* zipCode */}
                <Controller
                    name="zipCode"
                    control={control}
                    render={({ field }) => <TextField  type="number" className='form-control' id="outlined-basic" label="Zip Code" variant="outlined"   
                    {...register("zipCode", { maxLength: 5, minLength: 5, required: true })}  
                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                    value={zipCodeState || ""}  onChange={(e)=>{setZipCodeState(e.target.value)}}
                    />}
                    
                />
                {errors.zipCode && <span className="text-danger">zipCode should be of 5 digits</span>}<br /><br />
                
                <button name='previous' onClick={handlePrevious} className="submitBtn previous btn btn-primary  my-3">Previous</button>
                <button name="next" type='submit' className="submitBtn next btn btn-primary mx-4 my-3">Next</button>

            </form>

        </div>
    )
}




// import { btnProps, IAddress, IRootState } from '../models/models'
// import React, { useEffect, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { FormLabel, TextField } from "@mui/material";
// import { countryData } from '../Data/data';
// import "./style.css"
// import { Header } from './Header';


// type TFormData = {
//     formData: IAddress
//     getInfo: IAddress
//     setInfo: React.Dispatch<React.SetStateAction<IAddress | undefined>>
// }

// type Props = TFormData & btnProps

// export const Step3: React.FC<Props> = ({ nextStep, previousStep, formData, setFormData, getInfo, setInfo }) => {
    
//     //getting data from boss component
//     const countryValue = getInfo?.country  ? getInfo?.country : formData?.country
//     const stateValue = getInfo?.state  ? getInfo?.state : formData?.state
//     const cityValue = getInfo?.city  ? getInfo?.city : formData?.city
//     const zipCode=getInfo?.zipCode
//     //console.log(countryValue, stateValue, cityValue)

//     //setting data
//     const [selectedCountry, setSelectedCountry] = useState<string>(countryValue)
//     const [selectedState, setSelectedState] = useState<string >(stateValue)
//     const [selectedCity, setSelectedCity] = useState<string>(cityValue)
//     const [zipCodeState, setZipCodeState] = useState<number | string | undefined>(zipCode)

//    useEffect(()=>{
//        setValue("country", countryValue)
//        setValue("state", stateValue)
//        setValue("city", cityValue)
//    }, [])

//     //uesForm
//     const { register, handleSubmit, control, formState: { errors }, getValues,setValue} = useForm<IAddress>({
//         defaultValues: {
//         }
//     });

//     //submit function
//     const onSubmit = (data: IAddress) => {
//         nextStep()
//         setFormData((preVal: IRootState) => {
//             return {
//                 ...preVal, addressInfo: data
//             }
//         })
//         setInfo(data)
//     };

//     //handling previous
//     const handlePrevious = () => {
//         const multipleValues: IAddress = getValues();
//         setInfo(multipleValues)
//         previousStep()
//     }

//     //sorted Data
//     const sortedStates = countryData.countries.find((c) => c.name === selectedCountry);
//     const sortedCities = sortedStates?.states?.find((s) => s.name === selectedState);
//     return (
//         <div className="container mt-5">

//             <Header heading="ADDRESS" step={3}/>
//             <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

//                 {/* Country */}
//                 <label className="form-label">Country</label>
//                 <select {...register("country", { required: true })} 
//                      onChange={(e) => { setSelectedCountry(e.target.value); setSelectedState(""); }}>
//                     <option value="">None</option>
//                     {countryData.countries.map((value, key) => {
//                         return <option value={value.name} key={key}>{value.name}</option>
//                     })}
//                 </select><br />
//                 {errors.country  && <span className="text-danger">This field is required</span>}<br />


//                 {/* State */}
//                 <label className="form-label">State</label>
//                 <select {...register("state", { required: true })} 
//                     onChange={(e) => { setSelectedState(e.target.value); setSelectedCity("") }}>
//                     <option value="">None</option>
//                     {sortedStates?.states.map((e, key) => {
//                         return <option value={e.name} key={key}>{e.name}</option>
//                     })}
//                 </select><br/>
//                 {errors.state && <span className="text-danger">This field is required</span>}<br/>

//                 {/* City */}
//                 <FormLabel>City</FormLabel><br />
//                 <select  {...register("city", { required: true })} 
//                 value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
//                     <option value="">None</option>
//                     {sortedCities?.cities.map((e: string, index: number) => {
//                         return <option key={index + "c"} value={e}>{e}</option>
//                     })
//                     }
//                 </select><br />
//                 {errors.city && errors.city.type === "required" && <span className="text-danger">This feild is Required!</span>}<br />

//                 {/* zipCode */}
//                 <Controller
//                     name="zipCode"
//                     control={control}
//                     render={({ field }) => <TextField  type="number" className='form-control' id="outlined-basic" label="Zip Code" variant="outlined"   {...register("zipCode", { maxLength: 5, minLength: 5, required: true })}  value={zipCodeState || ""}  onChange={(e)=>{setZipCodeState(e.target.value)}}
//                     />}
                    
//                 />
//                 {errors.zipCode && <span className="text-danger">zipCode should be of 5 digits</span>}<br /><br />

//                 <button name='previous' onClick={handlePrevious} className="submitBtn previous btn btn-primary  my-3">Previous</button>
//                 <button name="next" type='submit' className="submitBtn next btn btn-primary mx-4 my-3">Next</button>

//             </form>

//         </div>
//     )
// }
