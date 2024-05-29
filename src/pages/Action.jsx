import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionCard from "../components/ActionCard";
import { useState, useEffect } from "react";


function Action() {
  let [text, setText] = useState(null);
  const fetchData = () => {
    let apiUrl = "https://strapi-movie-backend.onrender.com/api/actions?populate=*";
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
      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">
        Science Fiction
      </h1>
      <section className="w-[70%] m-auto pb-[17%] flex justify-around">
        {text !== null ? (
          text.map((item, index) => {
            return (
              <ActionCard
                key={index}
                title={item.attributes.title}
                image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
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

export default Action;