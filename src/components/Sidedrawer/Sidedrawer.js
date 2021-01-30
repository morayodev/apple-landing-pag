import React,{useState} from 'react';
import "./Sidedrawer.css";
import "../CountryType/CountryType.css";
import { AiOutlineSearch } from "react-icons/ai";

function Sidedrawer(props) {
  const [input, setInput]=useState("")
    return (
      <div
        className={(props.open ? "Open" : "Close") + " SideDrawer px-2"}
       
      >
        <div className="flex items-center Countrybg p-3 rounded-lg my-5">
          <AiOutlineSearch className="text-white text-xl" />
          <input
            type="text"
            placeholder="Search apple.com "
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            className=" w-full  ml-4 outline-none bg-transparent"
          />
        </div>

        <div className="border-b "></div>
        <div className="">
          <ul className="text-white pl-10">
            <li className="border-b py-4">Mac</li>
            <li className="border-b py-4">ipad</li>
            <li className="border-b py-4">iphone</li>
            <li className="border-b py-4">watch</li>
            <li className="border-b py-4 ">Tv</li>
            <li className="border-b py-4">Music</li>
            <li className="py-3">Support</li>
          </ul>
        </div>
      </div>
    );
}
         


export default Sidedrawer
