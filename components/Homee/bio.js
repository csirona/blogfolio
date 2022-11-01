import React from "react";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import prof from '../../assets/images/prfile-glass.jpg'
const Bio = () => {
    const [perfil, setPerfil] = useState('')

    useEffect(() => setPerfil(prof), [])
    return (
        <>
            <div className="grid  card bg-base-300 rounded-box place-items-center p-20">

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="container mask mask-decagon p-5">
                    <figure><Image src={prof} alt="perfil" intrinsic="true" 
                    /></figure>
                    </div>
                    <div className="card-body bg-slate-700	">
                        <p className="text-4xl">Who I am ?</p>
                        <p>Right now I am coding, playing bass, maybe watching a football match or trying to speak japanese. But always listening music.</p>
                        <div className="card-actions justify-end">
                            <p>My spotify list  </p>
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Bio;
