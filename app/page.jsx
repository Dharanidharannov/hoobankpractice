"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '@/components/Nav';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className="text-white w-full">
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      {/* Logo Row */}
      <div className="flex flex-wrap justify-center items-center h-auto bg-black py-4">
        <div className="mx-4 my-2 flex-shrink-0">
          <Image src="/Group 481734.png" width={150} height={50} alt="logo1" />
        </div>
        <div className="mx-4 my-2 flex-shrink-0">
          <Image src="/Group 481735.png" width={150} height={50} alt="logo2" />
        </div>
        <div className="mx-4 my-2 flex-shrink-0">
          <Image src="/Group 481736.png" width={150} height={50} alt="logo3" />
        </div>
        <div className="mx-4 my-2 flex-shrink-0">
          <Image src="/Group 481737.png" width={150} height={50} alt="logo4" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-black p-5">
        <div className="w-full lg:w-[1000px] h-auto mx-auto p-6 lg:p-10 flex flex-col lg:flex-row justify-between items-center rounded-2xl bg-slate-800">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <p className="text-3xl lg:text-4xl font-medium">Let’s try our service now!</p>
            <p className="text-slate-500 mt-3 lg:w-[430px]">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>
          <button className="h-12 w-40 bg-teal-500 rounded-xl text-black bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-600">
            Get Started
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
