import {useState, useEffect} from "react";


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
         { !project ? 'Loading... ':
           project.map( (post,index)=>{
                return  <div key={index+1} className="grid grid-flow-rows grid-cols-2 gap-4 px-20 m-10">
                            <div key={index+2} className="grid  card bg-base-300 rounded-box place-items-center">
                                <div key={index+3} className="card w-96 bg-base-100 shadow-xl">
                                <div key={index+4}className="card-body">
                                        <h2 key={index +5}className="card-title">
                                            {post.title}
                                        <div key={index+7}className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p key={index+9}>{post.description}</p>
                                    <div key={index+10}className="card-actions justify-end">
                                    <div key={index+11}className="badge badge-outline">{post.tag}</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div key={index+13} className="container p-5">
                                    <div key={index+14} className="text-xl font-medium p-5">{post.title}</div>
                                    <p className="text-base">{post.content}</p>
                                </div>
                    </div>
                
                    })
         }
           
    </div>
  )
}
