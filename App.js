import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Create a Header Component from scratch using Functional Components with JSX


    /**
     * Header
     *  -Logo
     *  -Nav Item
     *  -Cart
     * Body
     *  -Search Result
     *  -Restaurant List
     *    -RestaurantCard
     *    -Image
     *    -Name
     *    -Rating
     *    -Cusines
     * Footer
     *  -Links
     *   -Copyright 
     */

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)