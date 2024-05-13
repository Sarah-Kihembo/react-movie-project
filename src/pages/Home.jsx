import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GenreCard from "../components/GenreCard";


function Home() {
  return (
    <div className="mx-8 bg-blue-300">
      <Header />

      <HeroSection
      title="Movie Ranking Site"
      description="A leading local animation and entertainmet children's site
      that your child should opt for when voting for the best movie"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulDe4szrl-3Iej-yZLgjoZSrnkfUOb1-6J-LTTHH6nQ&s"
      />

      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Movie Genres</h1>
      <section className="w-[70%] m-auto pb-8 flex justify-around">
        <GenreCard 
          genre="Action"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzGSDzcqvq4Q6Vc070mEAWMYQdclm8s4odzT8PdAddw&s "
        />
        <GenreCard 
          genre="Adventure"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBAmDbNPDN3Ue508d-l70mUW-uGwoHFZxqgfe1eJpiw&s"
        />
        <GenreCard 
          genre="Sci-Fiction"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR74vnRfdcJlLDMbtfCTxCN6D3gda_pl6SMSezVY4LOg&s"
        />
        <GenreCard 
          genre="Romance"
          image="https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1686758421/Events/2023/1822/1000x1480%20FE%20Website%20Thumbnail.jpg.jpg"
        />
        
      </section>
      </div>
  );
}

export default Home;
