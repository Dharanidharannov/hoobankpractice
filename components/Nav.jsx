import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from "react-bootstrap";
import Image from "next/image";


function Nav(){
    return(
       <div className="bg-black h-16 w-full">
         <div className=" rounded d-none d-lg-block ">
              <nav>
                <Row >
                   <Col  lg={6}>
                    <div className="ml-20 mt-4 flex">
                    <Image src="/Group 481747.svg" width={30} height={10} />
                    <span className="text-white mt-1">Hoo</span>
                    <span className="text-teal-500 mt-1">Bank</span>
                    </div>
                   </Col>
                   <Col lg={6}>

                       <div className="mt-4 ml-36 md:mt-2">
                       <span className="text-white mr-8">Home</span>
                       <span className="text-white mr-8" >About Us</span>
                       <span className="text-white mr-8">Features</span>
                       <span className="text-white mr-8">Solution</span>
                       </div>
                  
                   </Col>
                </Row>
              </nav>
        </div>

        {/* mobile responsive */}

        <nav className="d-lg-none">
                <Row >
                   <Col  lg={5}>
                    <div className="ml-2 mt-4 flex">
                    <Image src="/Group 481747.svg" width={30} height={10} />
                    <span className="text-white mt-1">Hoo</span>
                    <span className="text-teal-500 mt-1">Bank</span>
                    </div>
                   </Col>
                   {/* <Col lg={7}>

                       <div className=" ml-3 ">
                       <span className="text-white mr-8">Home</span>
                       <span className="text-white mr-8" >About Us</span>
                       <span className="text-white mr-8">Features</span>
                       <span className="text-white mr-8">Solution</span>
                       </div>
                  
                   </Col> */}
                </Row>
              </nav>


       </div>
    )
}

export default Nav