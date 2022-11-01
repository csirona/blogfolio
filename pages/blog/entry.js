import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import APIRequest from "../../functions/apiRequest";


export default function Entry() {

    return (
        <>
            <NavBar/>
            <div className="container m-10 text-center ">
                <p className="text-3xl">My Blog</p>
            </div>
            <div className="grid grid-cols-1 gap-4 m-10">
            <div>
    <APIRequest/>
</div>
                
                
            </div>



            <Footer/>
        </>
    )
}
