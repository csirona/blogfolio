import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import gh from "../../assets/images/GitHub_Logo.png"


export default function Entry({data}) {

    return (
        <>
            <NavBar/>
            <div className="container m-10 text-center ">
                <p className="text-3xl">Check this project</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:m-10">
            <div>
            <div className="bg-slate-700 p-3 mb-5 flex-col ml-10">
             <p className="text-3xl text-center">{data.title}</p>
             <div className="text-sm text-center">{data.created_at}</div>
             <div className='flex flex-row justify-around'>
             <div className="badge badge-primary m-5">{data.tag}</div>
             <div className='mb-3 '> 
             <Link href={data.gitlink} ><a className=' bg-slate-200'><Image src={gh} width="100px"
                                height="40px"
                                alt="github_logo"/></a></Link>
             </div>
             </div>
             
            
             <p className="text-base bg-slate-800">{data.content}</p>
         </div>
</div>
                
                
            </div>



            <Footer/>
        </>
    )
}

export async function getStaticPaths(){
    try {
        const res= await fetch('https://grafibook.cl/api/post/');
        const data = await res.json();
        const paths = data.map(({id}) => ({params: {id: `${id}`}}));
        return {
            paths,
            fallback: false
        }
    } catch(error){
        console.log(error);
    };
};

export async function getStaticProps({params}){
    try{
        const res = await fetch("https://grafibook.cl/api/post/"+params.id);
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error);
    };
};