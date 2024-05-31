import React from "react";
import FavCard from "./FavCard";
import { useState, useEffect } from "react";

function Favourite() {
  let [text, setText] = useState(null);
  const fetchData = () => {
    let apiUrl = "https://strapi-movie-backend.onrender.com/api/favourites?populate=*";
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
    <div>
      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">
        Favourites
      </h1>
      <section className="hover:cursor-pointer w-[70%] m-auto pb-8 flex justify-around">
        {text !== null ? (
          text.map((item, index) => {
            return (
              <FavCard
                key={index}
                title={item.attributes.title}
                image={`${item.attributes.image.data.attributes.url}`}
                link={item.attributes.to}
              />
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </section>
    </div>
  );
}

export default Favourite;
