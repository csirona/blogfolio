import React from "react";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import rock from "../../assets/images/rock_gesture_icon.png"
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
            <a className="link link-hover">GitHub</a> 
            <a className="link link-hover">LinkedIn</a> 
            <a className="link link-hover">Twitter</a> 

            <a className="link link-hover">Buy Me a Coffe</a> 
          </div> 

   
        </footer>
        </>
    )
}

export default Footer;