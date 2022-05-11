import React from "react"
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import { LogoWhite } from "../components/logo"
import './SmallSidebar.css'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <aside className="SmallSidebar">
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <LogoWhite />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </aside>
  )
}
export default SmallSidebar