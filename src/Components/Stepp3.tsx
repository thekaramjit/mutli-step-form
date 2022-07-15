export {}
// import { btnProps, IAddress, IRootState, TCountryData, TCountryMapData } from '../models/models'
// import React, { useEffect, useState } from "react";
// import { Controller, useForm, useWatch } from "react-hook-form";
// import { FormLabel, TextField } from "@mui/material";
// import { countryData } from '../Data/data';
// import { ProgressBar } from './ProgressBar';
// import "./style.css"

// type TFormData = {
//     formData: IAddress
//     getInfo: any
//     setInfo: React.Dispatch<React.SetStateAction<IAddress | undefined>>
// }

// type Props = TFormData & btnProps

// export const Stepp3: React.FC<Props> = ({ nextStep, previousStep, formData, setFormData, getInfo, setInfo }) => {

//     const [selectedCountry, setSelectedCountry] = useState("")
//     const [selectedState, setSelectedState] = useState("")
//     const [selectedCity, setSelectedCity] = useState("")

//     // useEffect(() => {
//     //     setSelectedCountry(formData.country)
//     //     setSelectedState(formData.state)
//     //     setSelectedCity(formData.city)
//     // }, [])

//     const { register, handleSubmit, control, formState: { errors }, setValue, getValues } = useForm<IAddress>({
//         defaultValues: {
//         }
//     });

//     const onSubmit = (data: IAddress) => {
//         nextStep()
//         setFormData((preVal: IRootState) => {
//             return {
//                 ...preVal, addressInfo: data
//             }
//         })
//     };

//     const handlePrevious = () => {
//         const multipleValues: IAddress = getValues();
//         console.log(multipleValues);
//         setInfo(multipleValues)
//         previousStep()
//     }

//     const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCountry(event.target.value)

//     }

//     const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedState(event.target.value)
//     }
//     console.log("getInfo",getInfo);
//     console.log("formData",formData);
    

//     if (getInfo?.country==="") {
//       const { state, country, zipCode, city } = getInfo
//       setValue("country",country)
//       setValue('state', state)
//       setValue('city', city)
//       setValue('zipCode', zipCode)
//     }else if (formData?.country) {
//         const { state, country, zipCode, city } = formData
//         setValue("country", country)
//         setValue('state', state)
//         setValue('city', city)
//         setValue('zipCode', zipCode)
//     }

//     return (
//         <div className="container mt-5">
//             <h1 className="text-center my-5">ADDRESS</h1>
//             <ProgressBar progressWidth={50} />

//             <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
//                 {/* Country */}
//                 <FormLabel>Country</FormLabel><br />
//                 <select  {...register("country", { required: true })} placeholder="Country" onChange={(event) => { handleCountryChange(event) }}>
//                     {countryData.countries.map((e: any, i: number) => {
//                         return <option key={i} value={e}>{e}</option>
//                     })}
//                 </select><br />
//                 {errors.country && <span className="text-danger">This feild is Required!</span>}<br /><br />

//                 {/* State */}
//                 <FormLabel>State</FormLabel><br />
//                 <select  {...register("state", { required: true })} onChange={(event) => { handleStateChange(event) }}>
//                     {countryData[`${selectedCountry}`]?.map((e: any, i: number) => {
//                         return e.states.map((e: any, i: number) => {
//                             return <option key={i+"s"} value={e}>{e}</option>
//                         })
//                     })
//                     }
//                 </select><br />
//                 {errors.state && errors.state.type === "required" && <span className="text-danger">This feild is required!</span>}<br />

//                 {/* city */}
//                 <FormLabel>City</FormLabel><br />
//                 <select  {...register("city", { required: true })}>
//                     {selectedState==="None" ? <option key={0} value="">None</option> : countryData[`${selectedCountry}`]?.map((e: any, i: number) => {
//                         return e[`${selectedState}`]?.map((e: any, i: number) => {
//                             return <option key={i+"s"} value={e}>{e}</option>
//                         })
//                     })}
//                 </select><br />
//                 {errors.city && errors.city.type === "required" && <span className="text-danger">This feild is required!</span>}<br />

//                 {/* zipCode */}
//                 <Controller
//                     name="zipCode"
//                     control={control}
//                     render={({ field }) => <TextField type="number" className='form-control' id="outlined-basic" label="Zip Code" variant="outlined"  {...register("zipCode", { maxLength: 5, minLength: 5, required: true })}
//                     />}
//                 />
//                 {errors.zipCode && <span className="text-danger">zipCode should be of 5 digits</span>}<br /><br />

//                 <button name='previous' onClick={handlePrevious} className="previous btn btn-primary  my-3">Previous</button>
//                 <button name="next" type='submit' className="next btn btn-primary mx-4 my-3">Next</button>
//             </form>

//         </div>
//     )
// }
