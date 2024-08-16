import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(res=>res.json())
    .then(data=>setMovies(data))
    .catch(error=>window.location.href='/bad-route')
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map((movie)=>{
          return <MovieCard title={movie} key={movie.id}/>
        })}
      </main>
    </>
  );
};

export default Home;
