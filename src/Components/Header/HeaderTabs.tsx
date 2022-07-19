import { Button } from '@mui/material'
import React from 'react'
import "../style.css"

type props={
    setStep: React.Dispatch<React.SetStateAction<number>>,
    enable: number
}

export const HeaderTabs: React.FC<props> = ({ setStep, enable }) => {
  return (
    <div className='container'>
          <Button className='stepBtn' onClick={() => { setStep(1) }}>Step 1 &gt;&gt;</Button>
          <Button className='stepBtn' disabled={enable <= 25} onClick={() => { setStep(2) }}>Step 2 &gt;&gt;</Button>
          <Button className='stepBtn' disabled={enable <= 50} onClick={() => { setStep(3) }}>Step 3&gt;&gt;</Button>
          <Button className='stepBtn' disabled={enable <= 75} onClick={() => { setStep(4) }}>Step 4&gt;&gt;</Button>
          <Button className='stepBtn' disabled={enable !== 100} onClick={() => { setStep(5) }}>Step 5&gt;&gt;</Button>
    </div>
  )
}
