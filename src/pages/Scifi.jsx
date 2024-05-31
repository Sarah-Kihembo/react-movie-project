import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScifiCard from "../components/ScifiCard";
import { useState,useEffect } from "react";




function Scifi() {
    let [text, setText] = useState(null);
    const fetchData = () => {
      let apiUrl = "https://strapi-movie-backend.onrender.com/api/science-fictions?populate=*";
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((dataObject) => {
          let content = dataObject.data;
          setText(content);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);
    return (
      <div className="bg-teal-900">
        <Header />
        <div className="bg-teal-900">
        <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4 ">
          Science Fiction
        </h1>
        <section className="w-[70%] m-auto pb-[14%] flex justify-around phone:flex-wrap">
          {text !== null ? (
            text.map((item, index) => {
              return (
                <ScifiCard
                  key={index}
                  title={item.attributes.title}
                  image={item.attributes.image.data.attributes.url}
                  link={item.attributes.to}
                />
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </section>
        </div>
        <Footer />
      </div>
    );
  }
  
export default Scifi;
  