import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section4() {
  return (
    <div className="bg-black h-auto p-10 md:p-8">
      <div className="container">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 lg:mb-0">
            <p className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:ml-36">
              Find a better card deal
            </p>
            <p className="text-xl lg:text-3xl font-bold text-white lg:ml-36">
              in few easy steps.
            </p>
            <p className="text-sm lg:text-base text-slate-400 mt-3 lg:ml-36 lg:w-[320px]">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
            </p>
            <button className="mt-4 lg:ml-36 bg-teal-500 p-2 rounded-xl text-black bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-600">
              Get Started
            </button>
          </Col>

          <Col xs={12} lg={6} className="text-center">
            <div className="relative flex justify-center items-center">
              <Image
                src="/Ellipse 2357 (Stroke).png"
                width={350}
                height={100}
                alt="Ellipse Image 1"
                className="m-auto"
              />
              <Image
                src="/Ellipse 2360 (Stroke).png"
                width={260}
                height={0}
                alt="Ellipse Image 2"
                className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src="/Ellipse 2361 (Stroke).png"
                width={150}
                height={0}
                alt="Ellipse Image 3"
                className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src="/Group 481767.png"
                width={150}
                height={50}
                alt="Group Image 1"
                className="absolute -bottom-8 lg:left-64"
              />
              <Image
                src="/Group 481732.png"
                width={140}
                height={50}
                alt="Group Image 2"
                className="absolute bottom-32 lg:left-32"
              />
              <Image
                src="/Group 481766.png"
                width={200}
                height={50}
                alt="Group Image 3"
                className="absolute bottom-24 lg:left-80"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section4;
