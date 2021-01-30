import React from 'react'
import Navbar from '../Navbar/Navbar';
import Icons1 from '../Icons/Icons1';
import Appleicons from "../Icons/Appleicons";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

function Toolbar(props) {

    return (
      <div
        className="text-white font-light cursor-pointer py-5 px-3 md:py-2 md:px-32"
        style={{ backgroundColor: "#333333" }}
      >
        {/* <Appleicons />  */}
        <Navbar />
        {/* <Icons1 /> */}
        <div className=" flex justify-between items-center md:hidden">
          <GiHamburgerMenu onClick={props.click} />
          <AiFillApple />
          <BsBag />
        </div>
      </div>
    );
}

export default Toolbar
