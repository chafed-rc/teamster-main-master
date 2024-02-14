import FeatureSection from "./components/features";
import MiniFeatureSection from "./components/miniFeatures";

export default function Home() {
  return (
    <div className="mt-20 mx-auto px-4 md:mt-28">
      <div className="text-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text lg:text-5xl xl:text-6xl">Teamster is the new way to build products</h1>
        <p className="mt-10 text-md text-gray-300 lg:text-xl xl:text-2xl">
          Streamline your way to success.
          Elevate your project, achieve goals faster,
          and simplify collaboration with ease. 
        </p>
        <div className="flex  md:flex-row mt-7 lg:mt-10 items-center justify-center gap-4 md:gap-6">
          <button className="bg-[#5CB8E4] border-2 border-transparent rounded-3xl text-xl text-white px-4 py-2  hover:border-[white] transition-colors duration-200 ease-in-out lg:text-2xl lg:px-8 lg:py-4">Learn More</button>
          <button className="bg-[#5CB8E4] border-2 border-transparent rounded-3xl text-xl text-white px-4 py-2  hover:border-[white] transition-colors duration-200 ease-in-out lg:text-2xl lg:px-8 lg:py-4">Get Started</button>
        </div>
        <FeatureSection/>
        <MiniFeatureSection />
      </div>
    </div>
  );
}
