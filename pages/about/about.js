import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const About = () => {
    return (<>
        <NavBar/>
        <div className="container flex justify-content flex-col text-center">
            <div className="m-10">
                <p className="text-3xl font-bold">This is an about</p>
            </div>
            <div className="stack">
                <div className="text-center border border-base-content card w-36 bg-base-100">
                    <div className="card-body">A</div>
                </div>
                <div className="text-center border border-base-content card w-36 bg-base-100">
                    <div className="card-body">B</div>
                </div>
                <div className="text-center border border-base-content card w-36 bg-base-100">
                    <div className="card-body">C</div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}

export default About;
