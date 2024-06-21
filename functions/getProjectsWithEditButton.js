import Link from "next/link";
import {useState, useEffect} from "react";


export default function APIRequest() {

  const baseURL = "https://nextjsapiblogfolio.vercel.app/api/posts";
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
         { !posts ? 'Loading... ':
           posts.map( (post)=>{
             return <div className="bg-slate-700 p-3 mb-5 flex-col ml-10">
              <Link href={'/blog/'+`${post.id}`}><a className="text-3xl ">{post.title}</a></Link>
             <div className="text-sm ">{post.created_at}</div>
             <div className="container flex flex-row justify-around">
             <div className="badge badge-primary m-5">{post.tag}</div>
             <div className='mb-3'> 
             <Link href={post.gitlink} ><a className='link'>Link to github</a></Link>
             </div>
             </div>
             
            
             <p className="text-base bg-slate-800">{post.content}</p>
             <div className="container flex justify-center mt-4">
             <button className="btn ">Edit Me</button>
            </div>
         </div>
         
           })
         }
           
    </div>
  )
}
