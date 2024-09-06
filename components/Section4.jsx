import React from "react";
import Image from "next/image";
import { Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section4(){
    return(
        <div className="bg-black h-[80vh]">
             <div className=' p-1'>

<Row>

  <Col lg={6} className=' h-[60vh]'>
    <p className='ml-36 mt-5 fw-bold fs-2'>
      Find a better card deal
    </p>
    <p className='fw-bold fs-3 ml-36'>
      in few easy steps.
    </p>
    <p className='ml-36 w-[320px] text-slate-400'>
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
    </p>
    <button className='ml-36 bg-teal-500 p-2 rounded-xl text-black bg-gradient-radial '>Get Started</button>
  </Col>
  <Col lg={6} className='position-relative'>
    <div className='position-relative flex' >

      <Image src="/Ellipse 2357 (Stroke).png" width={350} height={100} className='m-auto ' />
      <Image src="/Ellipse 2360 (Stroke).png" width={260} height={0} className='position-absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ' />
      <Image src="/Ellipse 2361 (Stroke).png" width={150} height={0} className='position-absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ' />
      <Image src="/Group 481767.png" width={150} height={50} className='position-absolute -bottom-8 left-64' />
      <Image src="/Group 481732.png" width={140} height={50} className='position-absolute bottom-32 left-32' />
      <Image src="/Group 481766.png" width={200} height={50} className='position-absolute bottom-24 left-80' />

    </div>
  </Col>
</Row>


</div>
        </div>
    )
}

export default Section4