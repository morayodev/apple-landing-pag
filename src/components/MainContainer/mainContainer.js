import React from 'react';
import iphone12 from "../images/iphone12";
import './MainContainer.css';
import iphone122 from '../images/iphone122';
import iwatch from "../images/iwatch";
import Secmaincontainer from './Secmaincontainer'
import Lastcontanier from "./Lastcontanier";
import Appleicons from "../Icons/Appleicons";

function MainContainer() {
  return (
    <>
      <div
        className="text-center text-sm  py-3"
        style={{ backgroundColor: "#FBFBFD" }}
      >
        <h1 className="m-auto pt-16  w-9/12  sm:w-full">
          Shop online and get Specialist help, free no‑contact delivery, and
          more.
        </h1>
        <h1 className="m-auto  w-9/12 sm:w-full">
          Some of our retail stores are temporarily closed or offering limited
          services. Before you visit, check your store’s status.
        </h1>
      </div>
      <div>
        <div className="text-center  mt-4 sm:mt-16">
          <h1
            className="text-4xl md:text-6xl font-medium"
            style={{ color: "#1D1D1F" }}
          >
            iPhone 12
          </h1>
          <p className="text-xl sm:text-3xl" style={{ color: "#1D1D1F" }}>
            Blast past fast
          </p>

          <p
            className=" text-base sm:text-xl w-7/12 md:w-full m-auto mb-2 sm:mb-0"
            style={{}}
          >
            From $129.12/mo. or $699 before trade-in.
          </p>
          <p className=" text-base sm:text-xl w-7/12 md:w-full m-auto ">
            Buy directly from Apple with special carrier offers.
          </p>

          <div className="flex justify-center mt-3  sm:text-2xl items-center text-xl">
            <p className="pr-10">Learn more</p>
            <p>Buy</p>
          </div>
          <img className="iphone12 " src={iphone12} alt="picture" />
          <div className="ground"></div>
        </div>
        <div className="ground1 text-center pt-16 ">
          <h1 className="text-4xl md:text-6xl font-medium">iPhone Pro 12</h1>
          <p className="text-xl sm:text-3xl">It's a leap year</p>
          <p className="text-base sm:text-xl w-7/12 md:w-full m-auto">
            From $41.62/mo. or $999 before trade-in.
          </p>
          <p className="text-base sm:text-xl w-7/12 md:w-full m-auto">
            Buy directly from Apple with special carrier offers.
          </p>
          <div className="flex justify-center mt-3 sm:text-2xl text-xl items-center">
            <p className="pr-10">Learn more</p>
            <p>Buy</p>
          </div>
          <img className="iphone122" src={iphone122} alt="picture" />
        </div>
        <div className="ground"></div>
        <div className="bg-black text-white text-center pt-16 ">
          <h1 className="text-4xl md:text-4xl font-medium flex justify-center items-center"><Appleicons/>WATCH</h1>
          <p className="text-red-600	">S E R I E S 6</p>
          <p className="text-xl sm:text-3xl">
            The future of health is on the wrist
          </p>
          <div className="flex justify-center mt-3 sm:text-2xl text-xl items-center">
            <p className="pr-10">Learn more</p>
            <p>Buy</p>
          </div>
          <img className="iwatch" src={iwatch} alt="iwatch" />
        </div>
        <Secmaincontainer />
        <Lastcontanier/>
      </div>
    </>
  );
}

export default MainContainer
