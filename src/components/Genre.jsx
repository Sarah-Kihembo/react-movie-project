import React from "react";
import GenreCard from "../components/GenreCard"
import { useState, useEffect } from "react";



function Genre() {
    let [text, setText]= useState(null)
  const fetchData =() =>{
    let apiUrl="http://localhost:1337/api/genres?populate=*"
    fetch(apiUrl)
    .then((response)=>{
      return response.json()
    })
    .then((dataObject)=>{
      let content=dataObject.data
      setText(content)
    })
    
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (

    <div>
      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">
        Genres
      </h1>
      <section className="hover:cursor-pointer w-[70%] m-auto pb-8 flex justify-around">
      {
        text!== null ?(
          text.map((item,index)=>{
            return (
              <GenreCard
              key={index}
      title={item.attributes.title}
      image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
      link={item.attributes.to}
      />
            )
          })
        ):
          <p>loading...</p>
        
      }
        
        
      </section>
    </div>
  );
}

export default Genre;
