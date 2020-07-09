import React from 'react'
import HomeGas from '../assets/home.png'
import LoreGas from '../assets/lore.png'
import GalleryGas from '../assets/gallery.png'
import AboutGas from '../assets/about.png'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

import { NavLink } from 'react-router-dom'

const Header = () => {
  const styleAc = { color: 'red' }

  return (
    <div id="mySidenav" className="sidenav">
      <NavLink id="about" activeStyle={styleAc} to="/home" exact>
        Home <img src={HomeGas} alt="" className="gashomeu" />
      </NavLink>
      <NavLink id="blog" activeStyle={styleAc} to="/lore" exact>
        Lore <img src={LoreGas} alt="" className="gashomeu" />
      </NavLink>
      <NavLink id="projects" activeStyle={styleAc} to="/gallery" exact>
        Gallery <img src={GalleryGas} alt="" className="gashomeu" />
      </NavLink>
      <NavLink id="contact" activeStyle={styleAc} to="/about" exact>
        About <img src={AboutGas} alt="" className="gashomeu" />
      </NavLink>
    </div>
    // <div className={menuS ? 'menu active' : 'menu '}>
    //   <span className="toggle" onClick={() => setMenuS(!menuS)}>
    //     <i></i>
    //     <i></i>
    //     <i></i>
    //   </span>
    //   <div className="menuContent">
    //     <ul>
    //       <li>

    //       </li>
    //       <li>
    //         <NavLink activeStyle={styleAc} style={linkS} to="/lore" exact>
    //           Lore
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink activeStyle={styleAc} style={linkS} to="/gallery" exact>
    //           Gallery
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  )
}

export default Header
