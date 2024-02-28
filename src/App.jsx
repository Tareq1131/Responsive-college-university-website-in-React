import About from "./components/About/About";
import Campous from "./components/Campous/Campous";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/programs";
import Testimonial from "./components/Testimonial/Testimonial";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle= "Our PROGRAM" title= "What We Offer"/>
        <Programs />
        <About/>
        <Title subtitle= "Gallery" title= "Campus Photos"/>
        <Campous/>
        <Title subtitle= "TESTIMONIALS" title= "What Student Says"/>
        <Testimonial/>
      </div>
    </div>
  );
};

export default App;
