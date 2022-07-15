import React from 'react'
type props={
  previousStep:()=>void
}
export const Buttons: React.FC<props> = ({ previousStep }) => {
  return (
    <>
          <button name='previous' onClick={previousStep} type='submit' className="previous btn btn-primary  my-3">Previous</button>
          <button name="next" type='submit' className="next btn btn-primary mx-4 my-3">Next</button>
    </>
  )
}
