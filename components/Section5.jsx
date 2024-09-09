import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section5() {
    return (
        <div className="bg-black h-auto py-5">
            <div>
                <Row className="text-center text-lg-start">
                    <Col xs={12} lg={6} className="mb-4 h-auto">
                        <p className="fs-2 fw-bold text-white">
                            What people are
                        </p>
                        <p className="fs-3 fw-bold text-white">
                            saying about us
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                        <p className="text-slate-500 w-[90%] mx-auto lg:w-[400px]">
                            Everything you need to accept card payments and grow your business anywhere on the planet.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center text-center text-lg-start">
                    <Col xs={12} md={6} lg={3} className="mb-4 h-auto rounded-xl hover:bg-gray-500 p-3 mx-2">
                        <Image src="/“.png" height={30} width={50} className="mt-2 mx-auto" alt="quote-icon" />
                        <p className="mt-3 text-white">
                            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                        </p>
                        <div className="d-flex align-items-center mt-3">
                            <Image src="/Image.png" width={50} height={50} className="rounded-circle" alt="person1" />
                            <div className="flex flex-col ml-2">
                                <span className="text-white">Herman Jensen</span>
                                <span className="text-gray-400">Founder & Leader</span>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={3} className="mb-4 h-auto rounded-xl hover:bg-gray-500 p-3 mx-2">
                        <Image src="/“.png" height={30} width={50} className="mt-2 mx-auto" alt="quote-icon" />
                        <p className="mt-3 text-white">
                            Money makes your life easier. If you're lucky to have it, you're lucky.
                        </p>
                        <div className="d-flex align-items-center mt-3">
                            <Image src="/Image (1).png" width={50} height={50} className="rounded-circle" alt="person2" />
                            <div className="flex flex-col ml-2">
                                <span className="text-white">Steve Mark</span>
                                <span className="text-gray-400">Founder & Leader</span>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={3} className="mb-4 h-auto rounded-xl hover:bg-gray-500 p-3 mx-2">
                        <Image src="/“.png" height={30} width={50} className="mt-2 mx-auto" alt="quote-icon" />
                        <p className="mt-3 text-white">
                            It is usually people in the money business, finance, and international trade that are really rich.
                        </p>
                        <div className="d-flex align-items-center mt-3">
                            <Image src="/Image (2).png" width={50} height={50} className="rounded-circle" alt="person3" />
                            <div className="flex flex-col ml-2">
                                <span className="text-white">Kenn Gallagher</span>
                                <span className="text-gray-400">Founder & Leader</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Section5;
