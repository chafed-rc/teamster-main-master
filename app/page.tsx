'use client'
import FeatureSection from "./components/features";
import MiniFeatureSection from "./components/miniFeatures";
import Navbar from "./components/nav";

export default function Home() {
  return ( 
    <>
      <Navbar/>
      <div className="mt-20 mx-auto px-4 md:mt-28">
        <div className="text-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#5CB8E4] lg:text-5xl xl:text-6xl mb-4">Teamster</h1>
          <p className="text-2xl text-white mb-10">
            The new way to build products.
          </p>
          <p className="mt-6 text-md text-gray-400 lg:text-xl xl:text-2xl mb-10">
            Streamline your way to success. Elevate your project, achieve goals faster, and simplify collaboration with ease.
          </p>
          <div className="flex flex-col md:flex-row mt-7 lg:mt-10 items-center justify-center gap-6">
            <button className="bg-transparent border-2 border-[#5CB8E4] text-[#5CB8E4] hover:bg-[#5CB8E4] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl text-xl px-6 py-3 lg:text-2xl">Learn More</button>
            <button className="bg-[#5CB8E4] text-white hover:opacity-90 transition-opacity duration-300 ease-in-out rounded-3xl text-xl px-6 py-3 lg:text-2xl">Get Started</button>
          </div>
          <FeatureSection />
          <MiniFeatureSection />
        </div>
      </div>
    </>
  );
}
