import React from "react"
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import { LogoWhite } from "../components/logo"
import "./BigSidebar.css"

const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <aside className="BigSidebar">
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <LogoWhite />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  )
}
export default BigSidebar