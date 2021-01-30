import React from 'react'
import Navbar from '../Navbar/Navbar';
import Appleicons from "../Icons/Appleicons";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import "../MainContainer/MainContainer.css";
import { TiTimes } from "react-icons/ti";



function Toolbar(props) {

    return (
      <div
        className="text-white font-light cursor-pointer py-5 px-3 lg:py-2 lg:px-32 fixed  w-full z-10"
        style={{ backgroundColor: "#333333" }}
      >
        {/* <Appleicons />  */}
        <Navbar />
        <div className=" flex justify-between items-center md:hidden">
          {props.navState ? (
            <TiTimes onClick={props.closed} className="text-2xl" />
          ) : (
            <GiHamburgerMenu onClick={props.click} />
          )}
          {/* <GiHamburgerMenu onClick={props.click} /> */}
          {/* <div className={navState ? "hidden" : "block md:block"}>
            {<BsBag />}
          </div> */}

          <AiFillApple className="text-2xl" />
          <BsBag className="text-2xl" />
        </div>
      </div>
    );
}

export default Toolbar
