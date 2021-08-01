import React from "react";
import Header from "./Header";
import LeftAside from "./Filters";
import Card from "./infoCard";
import Footer from "./Footer";

class App extends React.Component{
 
  render(){
    return(
      <>
      
      <Header/>
      <div className="content-box">
      <LeftAside/>
      <Card/>
      </div>
      <Footer/>
      </>
    )
  }
}


export default App;
