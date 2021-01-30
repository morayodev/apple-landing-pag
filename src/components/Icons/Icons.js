import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";


function Icons() {
    return (
      <div  >
        <ul className="flex justify-evenly items-center">
          <li className="pr-20">
            <BsSearch />
          </li>
          <li>
            <BsBag />
          </li>
        </ul>
      </div>
    );
}

export default Icons
