import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorsCard from "../components/DirectorsCard";

function Directors() {
  const [directors,setDirectors]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(res=>res.json())
    .then(data=>setDirectors(data))
    .catch(error=>window.location.href='/bad-route')
  },[])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        <DirectorsCard directors={directors}/>
       
      </main>
    </>
  );
};

export default Directors;
