import React, {useState} from 'react'

import './navBar.css'

const NavBar =()=>{

    const [state, setState] = useState(false)

    const toggle =()=>{
        setState(!state)
    } 

    return(
        <div className="navbar">
            <div className="navIcon" onClick={toggle}>
                <div className={state ? "line1Action" : "line1"}></div>
                <div className={state ? "line2Action" : "line2"}></div>
            </div>

            <div className={state ? "navContainer" : "navContainerActive"}>

            </div>
        </div>
    )
}

export default NavBar