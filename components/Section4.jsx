import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section4() {
  return (
    <div className="bg-black min-h-[80vh] p-4">
      <div className="p-1">
        <Row className="text-center text-lg-start">
          <Col lg={6} className="h-auto mb-5 lg:mb-0">
            <p className="mt-5 fw-bold text-3xl lg:ml-36">
              Find a better card deal
            </p>
            <p className="fw-bold text-2xl lg:ml-36">
              in few easy steps.
            </p>
            <p className="lg:ml-36 w-[320px] mx-auto lg:mx-0 text-slate-400">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
            </p>
            <div className="text-center lg:text-start">
              <button className="lg:ml-36 mt-4 bg-teal-500 p-2 rounded-xl text-black bg-gradient-radial">
                Get Started
              </button>
            </div>
          </Col>

          <Col lg={6} className="d-flex justify-content-center position-relative">
            <div className="relative flex justify-center items-center">
              <Image src="/Ellipse 2357 (Stroke).png" width={350} height={100} alt="Ellipse 1" />
              <Image
                src="/Ellipse 2360 (Stroke).png"
                width={260}
                height={260}
                alt="Ellipse 2"
                className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src="/Ellipse 2361 (Stroke).png"
                width={150}
                height={150}
                alt="Ellipse 3"
                className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src="/Group 481767.png"
                width={150}
                height={50}
                alt="Group 1"
                className="absolute -bottom-8 left-[60%] lg:left-64"
              />
              <Image
                src="/Group 481732.png"
                width={140}
                height={50}
                alt="Group 2"
                className="absolute bottom-32 left-[35%] lg:left-32"
              />
              <Image
                src="/Group 481766.png"
                width={200}
                height={50}
                alt="Group 3"
                className="absolute bottom-24 left-[70%] lg:left-80"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section4;
