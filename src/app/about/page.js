import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

const About = () => {
  return (
    <div className="min-h-screenbg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      
      <main className="container mx-auto p-6 pt-28">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="mb-8">
            <Logo width={12} height={12} />
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          
          <div className="max-w-2xl mx-auto space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              We are passionate about creating meaningful digital experiences that inspire and engage. Our team combines creativity with technical expertise to build innovative solutions.
            </p>

            <p className="text-lg leading-relaxed">
              Founded with a vision to transform ideas into reality, we work closely with our clients to understand their unique needs and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400">To deliver innovative digital solutions that empower businesses and delight users.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-gray-400">To be at the forefront of digital transformation, setting new standards in web development.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-gray-400">Innovation, integrity, and excellence in everything we do.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
