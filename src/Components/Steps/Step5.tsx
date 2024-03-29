import React,{useEffect} from 'react'
import { btnProps, ICompanyInfo, IRootState } from '../../models/models'
import { Header } from '../Header/Header';
import "../style.css"

type TFormData = {
  formData: IRootState
  step2Info:ICompanyInfo
}

type Props = TFormData & btnProps;

export const Step5: React.FC<Props> = ({ previousStep, formData,step2Info }) => {

  useEffect(() => {
    // checkState(formData)
  }, [formData])

  //checking if any feild is empty
  // const checkState = (multipleValues:any) => {
  //   const isNullish = Object.values(multipleValues).every((element) => {
  //     Object.values(multipleValues.element).every(value => {
  //       if (value !== undefined || value !== undefined || value?.length !== 0) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   });
  //   console.log(isNullish)
  // }
  

  return (
    <div>
      <div className="container">
        <Header heading="DETAILS" step={5} />
        
        <div className="row">
          <div className="col-md-3">
            <h3 className='my-3 ' style={{textDecoration:"underline"}}>Personal Info</h3>
            <p><b>Name :</b>  {formData.basicInfo.name}</p>
            <p><b>Father name :</b> {formData.basicInfo.fName}</p>
            <p><b>Mother name :</b> {formData.basicInfo.mName}</p>
            <p><b>E-mail :</b> {formData.basicInfo.email}</p>
          </div>
          <div className="col-md-3">
            <h3 className='my-3 ' style={{textDecoration:"underline"}}>Company Info</h3>
            <p><b>Company Name :</b>  {formData.companyInfo.companyName}</p>
            <p><b>Profile : </b> {formData.companyInfo.profile}</p>
            <p><b>Current Salary : </b> {formData.companyInfo.currentSalary}</p>
            <p><b>Expected Salary : </b> {formData.companyInfo.expectedSalary}</p>
          </div>
          <div className="col-md-3">
            <h3 className='my-3 ' style={{textDecoration:"underline"}}>Address Info</h3>
            <p><b>Country : </b>{formData.addressInfo.country}</p>
            <p><b>State : </b>{formData.addressInfo.state}</p>
            <p><b>City : </b>{formData.addressInfo.city}</p>
            <p><b>Zip Code: </b>{formData.addressInfo.zipCode}</p>
          </div>
          <div className="col-md-3">
            <h3 className='my-3 ' style={{textDecoration:"underline"}}>Hobbies</h3>
            <p><b>Hobbies : </b>{formData.hobbiesInfo.hobbies.toString()}</p>
            <p><b>JavaScript Level : </b>{formData.hobbiesInfo.jsLevel}</p>
          </div>
        </div>
        <button className="submitBtn btn btn-primary my-4" onClick={previousStep}>Previous</button>
      </div>
    </div>

  )
}