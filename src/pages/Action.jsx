import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionCard from "../components/ActionCard";




function Action() {
    return (
      <div className="mx-8 bg-teal-900">
        <Header />
  
        <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Action</h1>
        <section className="w-[70%] m-auto pb-8 flex justify-around">
          <ActionCard
            action="9"
            image="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p182095_p_v8_ag.jpg"
            link="https://www.youtube.com/watch?v=_qApXdc1WPY&pp=ygULOSBhbmltYXRpb24%3D"
          />
          <ActionCard 
            action="Tron"
            image="https://m.media-amazon.com/images/M/MV5BMmI5OWZiYzktMDc3OC00Y2Q5LWE3MzAtOTUyYTVlNzAzZGYyXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_FMjpg_UX1000_.jpg"
            link="https://www.youtube.com/watch?v=yb3-FsWhYGQ&pp=ygUOdHJvbiBhbmltYXRpb24%3D"
          />
          <ActionCard 
            action="Beowulf"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBEV9EwnVH_uhBDsQow-l00jqWCgBFcyyY_dwWVWW7g&s"
            link="https://www.youtube.com/watch?v=QKjcoFZmKuA&pp=ygURYmVvd3VsZiBhbmltYXRpb24%3D"
          />
          <ActionCard 
            action="Epic"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS009N4W38zuqYdOIIxFq6oIDAbI66bDSRNjvCSvPt4lA&s" 
            link="https://www.youtube.com/watch?v=BJVkoq_wK80&pp=ygUOZXBpYyBhbmltYXRpb24%3D"
          />

        </section>
      <Footer />
    </div>
  );
}

export default Action;
  