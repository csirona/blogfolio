import Image from 'next/image'

import React from "react";
import GetProjects from '../../functions/getProjects';
const Pjs = () => {
    return (
        <>
            <div className=" text-center m-10">
                    <div className="text-4xl font-bold">My Projects</div>
                </div>
                
                <GetProjects />
        </>
    )
}

export default Pjs;
