import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section5() {
    return (
        <div className="bg-black h-auto py-10 px-4">
            <div className="container">
                <Row className="text-center mb-4">
                    <Col xs={12} lg={6} className="mb-4 lg:mb-0">
                        <p className="text-2xl lg:text-4xl font-bold text-white">
                            What people are
                        </p>
                        <p className="text-xl lg:text-3xl font-bold text-white">
                            saying about us
                        </p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <p className="text-sm lg:text-base text-slate-500">
                            Everything you need to accept card payments and grow your business anywhere on the planet.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700">
                            <Image src="/“.png" height={50} width={50} className='mb-4' alt="profile"/>
                            <p className='text-sm text-white'>
                                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                            </p>
                            <div className='flex items-center mt-4'>
                                <Image src="/Image.png" width={50} height={50} alt="avatar" />
                                <div className='ml-2'>
                                    <span className='text-white font-semibold'>
                                        Herman Jensen
                                    </span>
                                    <br />
                                    <span className='text-gray-400'>
                                        Founder & Leader
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700">
                            <Image src="/“.png" height={50} width={50} className='mb-4' alt="profile"/>
                            <p className='text-sm text-white'>
                                Money makes your life easier. If you&apos;re lucky to have it, you&apos;re lucky.
                            </p>
                            <div className='flex items-center mt-4'>
                                <Image src="/Image (1).png" width={50} height={50} alt="avatar" />
                                <div className='ml-2'>
                                    <span className='text-white font-semibold'>
                                        Steve Mark
                                    </span>
                                    <br />
                                    <span className='text-gray-400'>
                                        Founder & Leader
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700">
                            <Image src="/“.png" height={50} width={50} className='mb-4' alt="profile"/>
                            <p className='text-sm text-white'>
                                It is usually people in the money business, finance, and international trade that are really rich.
                            </p>
                            <div className='flex items-center mt-4'>
                                <Image src="/Image (2).png" width={50} height={50} alt="avatar" />
                                <div className='ml-2'>
                                    <span className='text-white font-semibold'>
                                        Kenn Gallagher
                                    </span>
                                    <br />
                                    <span className='text-gray-400'>
                                        Founder & Leader
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Section5;
