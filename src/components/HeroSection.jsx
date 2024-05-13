



function HeroSection(props){
    return(
        <section className="m-auto w-3/4 p-8">
        <h1 className="font-sans text-white text-5xl text-center p-4 font-bold">{props.title}</h1>
        <p className="text-xl bg-purple-200 text-white text-center p-4 m-auto">{props.description}</p>
        <div>
          <img className="w-full" src={props.image} alt="hero section cover-image" />
        </div>
      </section>
    )
}

export default HeroSection;