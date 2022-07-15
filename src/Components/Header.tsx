import React from 'react'
type props={
    heading:string
    step:number
}
export const Header: React.FC<props> = ({heading,step}) => {
  return (
    <div className='header' style={{display:"flex"}}>
        <div className="heading">{heading}</div>
        <div className="stepNo">Step-{step}</div>
    </div>
  )
}
