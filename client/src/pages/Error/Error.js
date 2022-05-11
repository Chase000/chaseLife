import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/not-found.svg'
import './Error.css'

const Error = () => {
  return (
    <main className='error-full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>Can't find the page you are looking for</p>
        <Link to='/'>Back home</Link>
      </div>
    </main>
  )
}
export default Error