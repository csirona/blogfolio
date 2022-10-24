import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import APIRequest from "../../functions/apiRequest";


export default function Blog() {

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
                
                <div className="container flex justify-center mt-3">
                    <div className="btn-group ">
                        <button className="btn">1</button>
                        <button className="btn btn-active">2</button>
                        <button className="btn">3</button>
                        <button className="btn">4</button>
                    </div>
                </div>
            </div>



            <Footer/>
        </>
    )
}
