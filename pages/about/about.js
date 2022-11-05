import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import GetAbout from "../../functions/getAbout";

const About = () => {
    return (<>
        <NavBar/>
        <div className="container flex justify-content flex-col  ml-10">
            <div className="m-10 text-center">
                <p className="text-3xl font-bold">About Me</p>
            </div>
            <div>
            <GetAbout/>
            </div>
            

        </div>
        <Footer/>
    </>)
}

export default About;
