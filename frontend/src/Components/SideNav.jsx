import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faComment, faUser, faInfo, faLink } from '@fortawesome/free-solid-svg-icons';

export default function SideNav() {
  const [sideBarState, setSideBarState] = useState('closed');

  const navButtonClick = () => {
    if (sideBarState === 'closed') {
      setSideBarState('open');
    } else {
      setSideBarState('closed');
    }
  }

  return (
    <>
      <nav className="sideNav">
        <ul>
          <li>
            <button className='logoButton'>
              <FontAwesomeIcon icon={faUser}/>
            </button>
          </li>
          <li><a href='#'>
            <FontAwesomeIcon icon={faLink}/> 
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon icon={faLink}/> 
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon icon={faInfo}/>
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon icon={faComment}/> 
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon icon={faCircleQuestion}/>
          </a></li>
        </ul>
      </nav>
    </>
  )
}