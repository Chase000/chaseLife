import React from 'react'
import './JobInfo.css'

const JobInfo = ({ icon, text }) => {
  return (
    <div className='jobInfo'>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </div>
  )
}
export default JobInfo