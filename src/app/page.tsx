import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="">
        <Hero /> 
        <About />
        <Services />
        <Products />
        <Blog type="blogs"/>
      </div>
    </div>
  );
}
