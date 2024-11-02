import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex xl:flex-row items-center justify-between xl:pt-0 xl:pb-1">
          <div className="text-center xl:text-left order-1 xl:order-none">
            <h1 className="h2 mb-3">
              Hello I'm
              <br />
              <span className="text-indigo-600">AR.Papon</span>
            </h1>
            <h3 className="text-animation text-xl text-orange-500">
              I'm a <span></span>
            </h3>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and i am proficient
              in various programming language and tecnologiy
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cv.pdf" download="AR_Papon_CV.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-2 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
