import Link from "next/link";
import { useState, useEffect } from "react";

export default function GetAbout() {
  const baseURL = "https://nextjsapiblogfolio.vercel.app/api/about";
  const [posts, setPosts] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(baseURL);
    const responseJSON = await response.json();
    setPosts(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        "loading ..."
      ) : (
        posts.map((post, index) => (
          <div key={index} className="bg-slate-700 p-3 mb-5">
            <p className="text-3xl">{post.title}</p>
            <div className="text-sm">{post.description}</div>
            <p className="text-base bg-slate-800">{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
