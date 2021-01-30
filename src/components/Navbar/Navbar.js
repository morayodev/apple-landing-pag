import React from 'react';
import Appleicons from "../Icons/Appleicons"
// import { BsSearch } from "react-icons/bs";
// import { BsBag } from "react-icons/bs";
import Icons from '../Icons/Icons'

function Navbar() {
    return (
      <div>
        <ul className=" flex justify-evenly items-center hidden md:flex py-2 ">
          {/* <div className="py-2 px-32 "> */}
          <Appleicons />
          <li>Mac</li>
          <li>ipad</li>
          <li>iphone</li>
          <li>watch</li>
          <li>Tv</li>
          <li>Music</li>
          <li>Support</li>
          <Icons />
          {/* </div> */}
        </ul>
      </div>
    );
}

export default Navbar
