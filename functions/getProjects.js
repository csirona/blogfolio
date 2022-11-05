import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import cod from '../assets/images/coding.jpg'

export default function GetProjects() {

  const baseURL = "https://grafibook.cl/api/cat/project";
  const [project, setProject] = useState();

  const fetchApi = async () => {
    const response = await fetch(baseURL)
    const responseJSON = await response.json()
    setProject(responseJSON)


  }
  
  useEffect(() => {
    fetchApi()
  },[]);
   return (
     <div>
         { !project ? <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>:
           project.map( (post,index)=>{
                return  <div key={index.toString()+'a'} className="max-w-md mx-auto bg-slate-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl p-10 mb-10">
                          <div key={index.toString()+'b'} className="md:flex">
                            <div key={index.toString()+'c'} className="md:shrink-0">
                             
                            </div>
                            <div key={index.toString()+'e'} className="p-8">
                              <p key={index.toString()+'f'} className="uppercase tracking-wide text-bg text-emerald-300 underline decoration-indigo-500 font-semibold">{post.title}</p>
                              <a key={index.toString()+'g'}href="#" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">{post.description}</a>
                              <div key={index.toString()+'h'} className=" hidden sm:block badge badge-outline m-5">{post.tag}</div>
                              <div>
                              <Link  key={index.toString()} href={{pathname:post.gitlink}}><a className="link link-info m-5">Link to repository</a></Link>
                              </div>

                            </div>
                          </div>
                        </div>
                
                    })
         }
           
    </div>
  )
}
