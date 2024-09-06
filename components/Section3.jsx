import React from "react";
import Image from "next/image";
import { Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function Section3(){
    return(
        <div className="bg-black">

<div className=' position-relative'>
        <Row>
          <Col lg={6} className=' h-[65vh]'>
            <Image src="/Group 481722.png" width={300} height={100} className='ml-36 mt-24 ' />
            <Image src="/Group 481710.png" width={200} height={100} className='ml-36 mt-20 position-absolute -top-20 left-52' />

            <div className='flex bg-white w-[310px] p-1 text-black rounded h-10 position-absolute top-80 left-80'>
              <Image src="/maps-and-flags (1) 1.png" width={15} height={15} c />
              <p className='ml-2 mt-1'>
                Great! Your Payment is succesfully.
              </p>
            </div>
          </Col>
          <Col lg={6} >
            <p className='fw-bold fs-3 mt-10 ml-36' >
              Easily control your
            </p>
            <p className='fw-bold fs-3 ml-36'>
              billing & invoicing.
            </p>

            <p className='ml-36 md:ml-10 text-slate-400'>
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>

            <div className='mt-5 ml-36 flex'>
              <Image src="/Group 481724.png" width={100} height={50} />
              <Image src="/Group 481725.png" width={100} height={50} className='ml-10' />

            </div>
          </Col>
        </Row>
      </div>

        </div>
    )
}

export default Section3