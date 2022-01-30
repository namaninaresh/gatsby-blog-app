
import * as React from "react"
import { Link  } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath





  
  let header = (
    <div className="container">
    
    <Link to="/home" className="logo" >Naresh Namani</Link>
    <div className="menu-toggle">   </div>
    <nav>
      <ul >
        <li><Link to="/d" className="active"  > Blog</Link></li>
        <li><Link to="/s" className="dropdownLi"> Topics <FontAwesomeIcon icon={faAngleDown}/></Link>
        
        <ul className="dropdown">
        <li><Link to="/w"  >Javascript</Link></li>
        <li><Link to="/sd"   >Data Structures</Link></li>
        <li><Link to="/sdd" >Python </Link></li>
      </ul>

        </li>
        
       
      </ul>
    </nav>
    <div className="clearfix"></div>
    </div>
        )



  return (

    
    
      <div className="global-wrapper" data-is-root-path={isRootPath}> 
      <header className="global-header" >{header}</header>
       





      
        {/* <main>{children}</main>  */}
         

         <footer>Thank you</footer>
      
      </div>
  )
}

export default Layout
