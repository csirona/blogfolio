import React from "react";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import prof from '../../assets/images/prfile-glass.jpg'
import Link from "next/link";
const Bio = () => {
    const [perfil, setPerfil] = useState('')

    useEffect(() => setPerfil(prof), [])
    return (
        <>
            <div className="grid  card bg-base-300 rounded-box place-items-center sm:p-20">

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="container mask mask-decagon p-5">
                    <figure><Image src={prof} alt="perfil" intrinsic="true" 
                    /></figure>
                    </div>
                    <div className="card-body bg-slate-700	">
                        <p className="text-4xl">Who I am ?</p>
                        <p>Hi! I am a Computer Engineer from Concepción, Chile. I have a degree in Computer Engineering and a passion for technology. While Spanish is my native language, I am proficient in English for both personal and professional use. I have experience with Python, Go, and JavaScript, as well as their frameworks. I work with APIs and databases, applying my skills to a variety of projects. From desktop applications to web services, I enjoy creating solutions that solve real-world problems. I am always eager to learn and grow in my field. Thank you for visiting my page. Feel free to explore my projects and reach out if you have any questions or ideas.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Bio;
