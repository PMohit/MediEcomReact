import React from 'react';
import OverLay from './OverLay';
import Navbar from './Navbar';
 
import Sidebar from './Sidebar';
import GoogleFontLoader from "react-google-font-loader";
import 'adminbsb-materialdesign/css/themes/all-themes.css';

class MainComponent extends React.Component {
    
    state = {
        bodyClass: "theme-blue ls-closed",
        displayOverlay: "none",
        width:window.screen.width,
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
      onscreensize=()=>{
          console.log(window.screen.width);
          this.setState({width:window.screen.width});
      };

      componentWillMount(){
          window.addEventListener("resize",this.onscreensize);
      }

      componentWillUnmount(){
        window.removeEventListener("resize",this.onscreensize);
    }
       componentDidMount(){
           var inputall = document.querySelectorAll("input");
           inputall.forEach((input) => {
               input.addEventListener("focus",function () {
                  this.parentNode.className  = "form-line focused" ;
               });
           });
            inputall.forEach((input) => {
               input.addEventListener("blur",function () {
                  this.parentNode.className  = "form-line " ;
               });
           });

        
    }

    render(){
        if(this.state.width > 1150){
            document.getElementById("root").className = "theme-blue ";
        }else{
            
            document.getElementById("root").className = this.state.bodyClass;
        }

        return( <>
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
         <Sidebar activepage={this.props.activepage}/>
         <>{this.props.page}</>
        </>      
        );    
}
} 

export default MainComponent;