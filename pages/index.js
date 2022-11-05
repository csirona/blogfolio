import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Coffe from "../components/Homee/Coffe";
import Bio from "../components/Homee/bio";
import Pjs from "../components/Homee/Pjs";
import getOne from "../functions/getOne";
import Link from "next/link";



export default function Home() {
    const one = getOne()

    return (
        <>
            <NavBar/>
            <div>
                <div className="hero min-h-screen backimg">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                                {one}
                                
                            </h1>
                            <p className="text-4xl">I am </p><p className="font-semibold text-4xl"> Cristian Osorio</p>
                            <p className="text-3xl">Web Developer</p>
                            <p className="my-5">I love exploring and creating. Chasing my dreams. Always I want to be better than the person I was in the morning.</p>
                            
                            <Link href='/about/about'><button className="btn btn-primary">Know more about me</button></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex bg-slate-900 flex-col w-full mt-10">
                <Bio/>
                <div className="divider"></div>

               <Pjs/>

                <div className="divider"></div>

                <Coffe/>

            </div>
            <Footer/>
        </>
    )
}
