import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/programs";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle= "Our PROGRAM" title= "What We Offer"/>
        <Programs />
      </div>
    </div>
  );
};

export default App;
