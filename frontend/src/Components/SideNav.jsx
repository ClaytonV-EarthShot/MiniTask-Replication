import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faComment,
  faUser,
  faInfo,
  faLink,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  const [sideBarState, setSideBarState] = useState("closed");

  const navButtonClick = () => {
    if (sideBarState === "closed") {
      setSideBarState("open");
    } else {
      setSideBarState("closed");
    }
  };

  return (
    <>
      {sideBarState === "closed" && (
        <nav className="sideNav closed">
          <button className="sideNavButton" onClick={() => navButtonClick()}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faUser} className="icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faLink} className="icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faInfo} className="icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} className="icon" />
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
              </li>
            </ul>
          </button>
        </nav>
      )}
      {sideBarState === "open" && (
        <nav className="sideNav open">
          <ul>
            <li>
              <button className="logoButton" onClick={() => navButtonClick()}>
                <FontAwesomeIcon icon={faUser} className="icon" />
                <p>User Profile</p>
              </button>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
                <p>Problem Statement</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLink} className="icon" />
                <p>Other Link</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInfo} className="icon" />
                <p>About Us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faComment} className="icon" />
                <p>Contact Us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
                <p>Support</p>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
