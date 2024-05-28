import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GenreCard from "../components/GenreCard";
import FavCard from "../components/FavCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";



function Home() {
  let [text, setText]= useState(null)
  const fetchData =() =>{
    let apiUrl="http://localhost:1337/api/herosections?populate=*"
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
    <div className="mx-8 bg-teal-900">
      <Header />
      <div>
      {
        text!== null ?(
          text.map((item,index)=>{
            return (
              <HeroSection
              key={index}
      title={item.attributes.title}
      description={item.attributes.description}
      image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
      />
            )
          })
        ):
          <p>loading...</p>
        
      }
      </div>
      

      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Genres</h1>
      <section className="hover:cursor-pointer w-[70%] m-auto pb-8 flex justify-around">
        <GenreCard 
          genre="Scifi"
          image="https://m.media-amazon.com/images/M/MV5BYzM0NjJhM2YtMTBkNS00MzcwLWFjNjMtNzI1NmIzODQxNGQzXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_FMjpg_UX1000_.jpg"
          link="/Scifi"
        />
        <GenreCard 
          genre="Action"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR74vnRfdcJlLDMbtfCTxCN6D3gda_pl6SMSezVY4LOg&s"
          link="/Action"
        />
        <GenreCard 
          genre="Family"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBAmDbNPDN3Ue508d-l70mUW-uGwoHFZxqgfe1eJpiw&s"
          link=""
        />
        
        
      </section>

      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Favourites</h1>
      <section className="hover:cursor-pointer w-[70%] m-auto pb-8 flex justify-around">
        <FavCard 
          fav="1. Luca"
          image="https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg"
          link="https://www.youtube.com/watch?v=RJG6fKiVj2s&pp=ygUPbHVjYSBmdWxsIG1vdmll"
        />
        <FavCard 
          fav="2. Vivo"
          image="https://m.media-amazon.com/images/M/MV5BMzk2ODc3OTEtNjUwNC00NGI1LTkzOWItZTY3NGYxZDUzZWY5XkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_FMjpg_UX1000_.jpg"
          link="https://www.youtube.com/watch?v=0Tc-cnbwqig&list=PLuDeAmlbRBkLEa8QUQmNWj5S0zmAKLJtO"
        />
        <FavCard 
          fav="3. Garfield"
          image="https://m.media-amazon.com/images/I/71fexjMV6CL._AC_UF1000,1000_QL80_.jpg"
          link="https://www.youtube.com/watch?v=g6fMwBP1MfU&pp=ygUTZ2FyZmllbGQgZnVsbCBtb3ZpZQ%3D%3D"
        />
        <FavCard 
          fav="4. Inside Out"
          image="https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg"
          link="https://www.youtube.com/watch?v=LEjhY15eCx0&pp=ygUKaW5zaWRlIG91dA%3D%3D"
        />
        {/* <FavCard 
          fav="5. Orion and the Dark"
          image="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdIR7Nesl9Zn8uijqRbgO4xf7SbAmbPQe4G00OiQKkONUak_eg8l7vtAufyI3iCe0T-e_6lC_GUOcNnqm51wOCzaaw98Ck51B508PAfBhjHnYmxi69sTBlLgfTTO720rOhp_YQ.jpg?r=50d"
        /> */}
       
      </section>
      <Footer />
    </div>
  );
}

export default Home;
