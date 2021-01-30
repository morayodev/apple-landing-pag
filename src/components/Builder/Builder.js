import React, {useState} from 'react';
import Toolbar from "../Toolbar/Toolbar";
import MainContainer from '../MainContainer/mainContainer';
import CountryType from "../CountryType/CountryType";
import Sidedrawer from '../Sidedrawer/Sidedrawer';
// import Navbar from "../Navbar/Navbar";


function Builder(props) {
    const [showSidedrawer, setSidedrawer] = useState(false);
   
    const setSidedrawerhandler = () => {
        setSidedrawer(false)
    }
      const setRemover = () => {
        setSidedrawer (true);
      }
    
    return (
      <div>
        {/* <CountryType /> */}
        {/* <Navbar /> */}
        <Toolbar
          navState={showSidedrawer}
          click={setRemover}
          closed={setSidedrawerhandler}
         />
        <Sidedrawer open={showSidedrawer} />
        <MainContainer />
      </div>
    );
}

export default Builder
