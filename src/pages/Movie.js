import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const params=useParams()
  const [moviesData,setMoviesData]=useState([])
  const [error,setError]=useState("")
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(res=>(res.json()))
    .then(data=>setMoviesData(data))
    .catch(error=>window.location.href='/bad-route')
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{moviesData.title}</h1>
        <p>{moviesData.time}</p>
       
        
      </main>
    </>
  );
};

export default Movie;
