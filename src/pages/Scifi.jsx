import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScifiCard from "../components/ScifiCard";




function Scifi() {
    return (
      <div className="mx-8 bg-teal-900">
        <Header />
  
        <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Science Fiction</h1>
        <section className="w-[70%] m-auto pb-8 flex justify-around">
          <ScifiCard
            scifi="RBoy"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzGSDzcqvq4Q6Vc070mEAWMYQdclm8s4odzT8PdAddw&s"
            link="https://www.youtube.com/watch?v=1TVQdggLy6A&pp=ygUJcm9ib3QgYm95"
          />
          <ScifiCard 
            scifi="Eden"
            image="https://i0.wp.com/downandnerdypodcast.com/wp-content/uploads/2021/05/EdenS1_Main_RGB_EN-US_PRE-e1622017402783.jpg?fit=675%2C1000&ssl=1"
            link="https://www.youtube.com/watch?v=XvtI3PZ9gaY&pp=ygUOZWRlbiBhbmltYXRpb24%3D"
          />
          <ScifiCard 
            scifi="Arcane"
            image="https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
            link="https://www.youtube.com/watch?v=fXmAurh012s&pp=ygUQYXJjYW5lIGFuaW1hdGlvbg%3D%3D"
          />
          <ScifiCard 
            scifi="Ironman"
            image="https://m.media-amazon.com/images/I/713l7NBEc1L._AC_UF894,1000_QL80_.jpg"
            link="https://www.youtube.com/watch?v=0FQaXyAymTg&pp=ygUSaXJvbiBtYW4gYW5pbWF0aW9u" 
          />

        </section>
      <Footer />
    </div>
  );
}

export default Scifi;
  