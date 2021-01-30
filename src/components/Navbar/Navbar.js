import React from 'react';
import Appleicons from "../Icons/Appleicons"
import Icons from '../Icons/Icons'

function Navbar() {
    return (
      <div>
        <ul className=" justify-evenly items-center hidden md:flex py-2 ">
          <Appleicons/>
          <li>Mac</li>
          <li>ipad</li>
          <li>iphone</li>
          <li>watch</li>
          <li>Tv</li>
          <li>Music</li>
          <li>Support</li>
          <Icons />
        </ul>
      </div>
    );
}

export default Navbar
