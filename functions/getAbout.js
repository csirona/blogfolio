import Link from "next/link";
import {useState, useEffect} from "react";


export default function GetAbout() {

  const baseURL = "https://nextjsapiblogfolio.vercel.app/api/about";
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
      {!post ? (
        "loading ..."
      ) : (
        <div className="bg-slate-700 p-3 mb-5">
          <p className="text-3xl">{post.title}</p>
          <div className="text-sm">{post.description}</div>
          <p className="text-base bg-slate-800">{post.content}</p>
        </div>
      )}
    </div>
  )
}
