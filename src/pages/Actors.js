import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors,setActors]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(res=>res.json())
    .then(data=>setActors(data))
    .catch(error=>window.location.href='/bad-route')
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map((actor)=>{
          return (
            <article key={actor.index}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie,index)=>{
                  return (
                    <li key={index}>{movie}</li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Actors;
