import React from 'react';
import OverLay from './OverLay';
import Navbar from './Navbar';
import HomeComponent from './HomeComponent';
import Sidebar from './Sidebar';
import GoogleFontLoader from "react-google-font-loader";
import 'adminbsb-materialdesign/css/themes/all-themes.css';

class MainComponent extends React.Component {
    
    state = {
        bodyClass: "theme-red ls-closed",
        displayOverlay: "none",
      };
      onBarClick = () => {
        if (this.state.bodyClass == "theme-red ls-closed overlay-open") {
          this.setState({ bodyClass: "theme-red ls-closed" });
          this.setState({ displayOverlay: "none" });
        } else if (this.state.bodyClass == "theme-red ls-closed") {
          this.setState({ bodyClass: "theme-red ls-closed overlay-open" });
          this.setState({ displayOverlay: "block" });
        }
      };
    render(){
        if(window.screen.width > 1150){
            document.getElementById("root").className = "theme-blue ";
        }else{
            
            document.getElementById("root").className = this.state.bodyClass;
        }

        return <>
        <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [400, 700],
                        }
                    ]}
                    subsets={['latin', 'cyrillic-ext']}
                />
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Material+Icons'
                        }
                    ]}
                />
         <OverLay display={this.setState.displayOverlay}/>
         <Navbar onBarClick={this.onBarClick}/>
         <Sidebar/>
         <HomeComponent/>
        </>      
    }
} 

export default MainComponent;