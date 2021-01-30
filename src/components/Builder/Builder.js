import React, {useState} from 'react';
import Toolbar from "../Toolbar/Toolbar";
import MainContainer from '../MainContainer/mainContainer';
import CountryType from "../CountryType/CountryType";
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import Icons1 from "../Icons/Icons1"

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
        <Toolbar click={setRemover} />
        {/* <Icons1 click={setRemover} /> */}
        <Sidedrawer
          open={showSidedrawer}
          closed={setSidedrawerhandler}
        />
        <MainContainer />
      </div>
    );
}

export default Builder
