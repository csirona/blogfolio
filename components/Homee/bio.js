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
                        <p>Right now I'm probably coding, playing bass, watching a football game, or trying to learn Japanese right now. But I'm always listening to music.</p>
                        <div className="card-actions justify-end">
                            <p>My spotify list  </p>
                            <Link href="https://open.spotify.com/playlist/1uFNBuHlxB9BhmqPzZnO2p?si=RWgDzt12R-K9JbUl3TNYzA&utm_source=copy-link"><a className="btn btn-primary">Listen</a></Link>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Bio;
