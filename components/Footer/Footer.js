import React from "react";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import rock from "../../assets/images/rock_gesture_icon.png"
import Link from "next/link";
const Footer =() =>{

  const [imagen, setImagen] = useState('')

  useEffect(() => setImagen(rock), [])
    return(
        <>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <Image className="bg-current rounded-lg" alt="footer image"src={rock} width="60" height="60" />
            <p className="text-lg">Cristiab Osorio Vargas</p>
            <p>2022</p>
          </div> 
          <div>
            <span className="footer-title">Links</span> 
            <Link href="https://github.com/csirona" className="link link-hover">GitHub</Link> 
            <Link href="https://www.linkedin.com/in/cristian-osorio-srna/" className="link link-hover">LinkedIn</Link> 
            <a className="link link-hover">Twitter</a> 

            <Link href="https://www.buymeacoffee.com/cristianosorio" className="link link-hover">Buy Me a Coffe</Link> 
          </div> 

   
        </footer>
        </>
    )
}

export default Footer;