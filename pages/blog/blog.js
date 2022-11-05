import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import APIRequest from "../../functions/apiRequest";


export default function Blog() {

    return (
        <>
            <NavBar/>
            <div className="container flex justify-content flex-col ">
            <div className="container m-10 text-center ">
                <p className="text-3xl">My Blog</p>
            </div>
            
            <div >
    <APIRequest/>
</div>
             
           
            </div>
            



            <Footer/>
        </>
    )
}
