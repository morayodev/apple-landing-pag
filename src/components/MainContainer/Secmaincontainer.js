import React from 'react';
import "./MainContainer.css";
import ipadair from "../images/ipadair";
import iphoneiwatch from '../images/iphoneiwatch'
import valentine from '../images/valentine';
import applecard from "../images/applecard";




function Secmaincontainer() {
    return (
      <>
        <div className=" block md:flex md:mx-10 mx:0 pt-4">
          <div
            className=" md:mr-10 text-center ipdad mb-4 sm:mb:0 "
            style={{ backgroundColor: "#FBFBFD" }}
          >
            <h1 className="text-xl md:text-4xl font-medium ">iPad Air</h1>
            <div>
              <p className=" text-base sm:text-xl w-7/12 md:w-full m-auto text-center ">
                Powerful.Colorful.Wonderful
              </p>
              <div className="flex mt-3 sm:text-xl text-base justify-center mb-16">
                <p className="pr-10 ">Learn more</p>
                <p>Buy</p>
              </div>

              <img className="valentine" src={ipadair} alt="iphone" />
            </div>
          </div>
          <div
            className="text-center fitcard"
            style={{ backgroundColor: "#FBFBFD" }}
          >
            <h1 className="text-3xl md:text-4xl font-medium ">Fitness+ </h1>
            <p className=" text-base sm:text-xl w-7/12 md:w-full m-auto ">
              A new fitness experience for everyone.
            </p>
            <p>Powered by Apple Watch.</p>
            <div className="flex mt-3 sm:text-xl text-base justify-center mb-10">
              <p className="pr-10">Learn more</p>
              <p>Try it free</p>
            </div>
            <img className="valentine" src={iphoneiwatch} alt="iPhone" />
          </div>
        </div>
        <div className=" block md:flex md:mx-10 mx:0 pt-4">
          <div
            className=" md:mr-10 text-center ipdad mb-4 sm:mb:0 "
            style={{ backgroundColor: "#FBFBFD" }}
          >
            <h1 className="text-xl md:text-4xl font-medium ">iPad Air</h1>
            <div>
              <p className=" text-base sm:text-xl w-7/12 md:w-full m-auto text-center ">
                Powerful.Colorful.Wonderful
              </p>
              <div className="flex mt-3 sm:text-xl text-base justify-center mb-16">
                <p className="pr-10 ">Learn more</p>
                <p>Buy</p>
              </div>

              <img className="valentine" src={ipadair} alt="iphone" />
            </div>
          </div>
          <div
            className="text-center fitcard"
            style={{ backgroundColor: "#FBFBFD" }}
          >
            <h1 className="text-3xl md:text-4xl font-medium ">Fitness+ </h1>
            <p className=" text-base sm:text-xl w-7/12 md:w-full m-auto ">
              A new fitness experience for everyone.
            </p>
            <p>Powered by Apple Watch.</p>
            <div className="flex mt-3 sm:text-xl text-base justify-center mb-10">
              <p className="pr-10">Learn more</p>
              <p>Try it free</p>
            </div>
            <img className="valentine" src={iphoneiwatch} alt="iPhone" />
          </div>
        </div>

        <div className=" block md:flex md:mx-10 mx:0 pt-4">
          <div
            className=" md:mr-10 text-center ipdad mb-4 sm:mb:0 "
            style={{ backgroundColor: "#FBFBFD" }}
          >
            <h1 className="text-xl md:text-4xl font-medium ">Card</h1>
            <div>
              <p className="text-base sm:text-xl w-7/12 md:w-6/12 m-auto text-center">
                Get 3% Daily Cash back on purchases from Apple when you use Aple
                Card.
              </p>
              <p className="pr-10 mb-24 ">Learn more</p>
              <img className="valentine" src={applecard} alt="iphone" />
            </div>
          </div>

          <div
            className="text-center ipdad"
            style={{ backgroundColor: "#FBFBFD" }}
          >
            <h1 className="text-base sm:text-xl w-7/12 md:3/12 m-auto font-medium ">
              Gifts for Valentine's Day
            </h1>
            <p className=" text-3xl md:text-4xl font-medium w-5/12 mx-auto">
              For lovers of Apple.
            </p>
            <p className=" mb-2 md:mb-16">Shop gifts</p>
            <img className="valentine" src={valentine} alt="iPhone" />
          </div>
        </div>
      </>
    );
}

export default Secmaincontainer
