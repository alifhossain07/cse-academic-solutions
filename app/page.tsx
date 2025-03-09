import MarqueeComponent from "./components/component/MarqueeComponent";
import Hero from "./components/Pages/Home/Hero";
import Services from "./components/Pages/Home/Services";


export default function Home() {
  return (
    <div className=" ">
      <MarqueeComponent />
      <Hero></Hero>
      <Services></Services>
    </div>
  );
}
