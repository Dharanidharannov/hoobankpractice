import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section2() {
  return (
    <div className="bg-black">
      <div className="p-4 md:p-20">
        <Row className="text-white">
          <Col lg={6} className="mb-4">
            <p className="ml-4 md:ml-20 fw-bold text-lg md:text-3xl mb-2">
              You do the business,
            </p>
            <p className="ml-4 md:ml-20 fw-bold text-xl md:text-2xl mb-3">
              we’ll handle the money.
            </p>
            <p className="ml-4 md:ml-20 mb-4 text-slate-500 text-sm md:text-base">
              With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds of credit cards on the market.
            </p>
            <button className="bg-teal-500 rounded p-2 ml-12 md:ml-36 px-3 text-black">
              Get Started
            </button>
          </Col>
          <Col lg={6}>
            <div className="ml-4 md:ml-36">
              <div className="flex  rounded-xl w-full md:w-96 hover:bg-gray-400 cursor-pointer p-4 mb-4">
                <Image src="/Group 481727.png" width={50} height={50} className="mr-2" alt="Rewards" />
                <div>
                  <p className="mt-2">Rewards</p>
                  <p className="text-sm md:text-base">
                    The best credit cards offer some tantalizing combinations of promotions and prizes.
                  </p>
                </div>
              </div>
              <div className="flex  rounded-xl w-full md:w-96 hover:bg-gray-400 cursor-pointer p-4 mb-4">
                <Image src="/Group 481744.png" width={60} height={60} className="mr-2" alt="100% Secured" />
                <div>
                  <p className="mt-2">100% Secured</p>
                  <p className="text-sm md:text-base">
                    We take proactive steps to make sure your information and transactions are secure.
                  </p>
                </div>
              </div>
              <div className="flex  rounded-xl w-full md:w-96 hover:bg-gray-400 cursor-pointer p-4">
                <Image src="/Group 481745.png" width={60} height={60} className="mr-2" alt="Balance Transfer" />
                <div>
                  <p className="mt-2">Balance Transfer</p>
                  <p className="text-sm md:text-base">
                    A balance transfer credit card can save you a lot of money in interest charges.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section2;
