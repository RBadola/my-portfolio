import Bg from "./Bg"
// import './BluuNext-Bold.ttf'
const HeroSection = () => {
  return (
    <div className="w-full h-full bg-black  flex flex-col md:flex-row justify-center items-center  font-extrabold   ">
      <Bg/>
        <img className="w-[300px] h-max border border-black object-contain rounded-md z-10 pointer-events-none " src="portrait.avif" alt="my-image" />
        <section className="max-w-screen-md  z-10 pointer-events-none"  >
            <p className="text-4xl text-white text-center">
                Hi, I am Roshan Badola. A passionate web developer 
                looking to showcase my talent and skills to all the recruiters out thier.
            </p>
            <span></span>
        </section>
    </div>
  )
}

export default HeroSection