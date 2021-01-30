import React,{useState} from 'react';
import "./Sidedrawer.css";
import "../CountryType/CountryType.css";
import { BsSearch } from "react-icons/bs";

function Sidedrawer(props) {
  const [input, setInput]=useState("")
    return (
      <div
        className={(props.open ? "Open" : "Close") + " SideDrawer"}
        onClick={props.closed}
      >
        <input
          type="text"
          placeholder="Search apple.com "
          value={input}
          onChange={(event) => {
            setInput(event.target.value)
          }}
       
          className="Countrybg CountryType p-3 rounded-lg my-5 ml-4"
        />
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
