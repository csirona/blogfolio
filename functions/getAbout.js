import {useState, useEffect} from "react";


export default function GetAbout() {

  const baseURL = "http://127.0.0.1:8000/api/cat/about";
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
             return <div className="bg-slate-700 p-3 mb-5">
             <p className="text-3xl">{post.title}</p>
             <div className="text-sm">{post.created_at}</div>
             <p className="text-base">{post.content}</p>
         </div>
           })
         }
           
    </div>
  )
}
