import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Genre from "../components/Genre";
import FavCard from "../components/FavCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Favourite from "../components/Favourite";

function Home() {
  let [text, setText] = useState(null);
  const fetchData = () => {
    let apiUrl =
      "https://strapi-movie-backend.onrender.com/api/herosections?populate=*";
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
    <div className="mx-8 bg-teal-900 ">
      <Header />
      <div>
        {text !== null ? (
          text.map((item, index) => {
            return (
              <HeroSection
                key={index}
                title={item.attributes.title}
                description={item.attributes.description}
                image={item.attributes.image.data.attributes.url}
              />
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>

      <Genre />

      <Favourite />

      <Footer />
    </div>
  );
}

export default Home;
