import React from 'react'
import main from '../../assets/images/main.svg'
import './Landing.css'
import { LogoGrey } from '../../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className='landing'>
      <nav className='landingLogo'>
        <LogoGrey />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
            Chase is seeking job!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  )
}

export default Landing