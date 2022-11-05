import Link from "next/link";
import {useState, useEffect} from "react";


export default function GetAbout() {

  const baseURL = "https://grafibook.cl/api/cat/about";
  const [posts, setPost] = useState();

  const fetchApi = async () => {
    const response = await fetch(baseURL)
    const responseJSON = await response.json()
    setPost(responseJSON)


  }
  
  useEffect(() => {
    fetchApi()
  },[]);
   return (
     <div>
         { !posts ? 'loading ...':
           posts.map( (post)=>{
             return <div className="bg-slate-700 p-3 mb-5">
             <p className="text-3xl">{post.title}</p>
             <div className="text-sm">{post.created_at}</div>
             <div className='m-5'>
              <Link href={{pathname:post.gitlink}}><a className="link link-info ">Link to repository</a></Link>
              </div>             <p className="text-base">{post.content}</p>
            </div>
           })
         }
           
    </div>
  )
}
