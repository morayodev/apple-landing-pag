import React, { useState } from 'react'
import {HiPlus} from 'react-icons/hi'
import { TiTimes } from "react-icons/ti";

const Footerlinks = (props) => {
    const { title, children } = props
    
       const [show, setShow] = useState(false);

       const toggleHandler = () => {
         if (show === true) {
           setShow((Opennav) => (Opennav = false));
         } else {
           setShow((Opennav) => (Opennav = true));
         } 
       };
    return (
      <ul
        style={{ color: "#747b82" }}
        className="border-b-2 py-2 md:border-b-0"
      >
        <li
          className="font-semibold flex justify-between"
          style={{ color: "#3b3f44" }}
          onClick={toggleHandler}
        >
          {title}
          {show ? <TiTimes /> : <HiPlus className="md:hidden" />}
        </li>
        <div className={show ? "block" : "hidden md:block"}>{children}</div>
        {/* {show ? children : ""} */}
      </ul>
    );
}

export default Footerlinks

