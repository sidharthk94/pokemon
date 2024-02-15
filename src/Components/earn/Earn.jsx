import React from 'react'
import NavBar from '../navBar/NavBar'
import SideBar from '../sideBar/SideBar'
import "./Earn.css"

const Earn = () => {
  return (
    <div>
        <NavBar/>
        <div className='earn'>
           <div className='sideBarr'>
           <SideBar/>
           </div>
            <div className='soon'>
                <h3 className='com'>Coming Soon...</h3>
            </div>
        </div>
    </div>
  )
}

export default Earn