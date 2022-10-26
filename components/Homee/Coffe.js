import React from "react";
import Image from 'next/image'

import coffe from '../../assets/images/coffeecup_114302.png'
import Link from "next/link";

const Coffe =() => {
    return(
        <>
        <div className="container flex flex-row px-20">
                    <div className="flex  mb-10 card bg-base-300 rounded-box place-items-start">
                        <div className="mx-5 mask mask-squircle bg-slate-100 p-5">
                            <Image src={coffe}
                                width="150px"
                                height="150px"
                                alt="coffe"/>
                        </div>

                    </div>

                    <div className="container flex flex-col px-10 ">
                        <p className="text-3xl">Also we can share a coffe!</p>
                        <p className="text-lg">Have a small chat is a good way to spend time.</p>
                        <p className="text-base">I will be always gratefull for your coffe</p>
                        <div>
                            <button className="btn btn-outline mt-5"><Link href="https://www.buymeacoffee.com/cristianosorio">BuyMe a coffe</Link></button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Coffe;