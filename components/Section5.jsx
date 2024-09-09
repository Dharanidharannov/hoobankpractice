import React from "react";
import Image from "next/image";
import { Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section5(){
    return(
        <div className="bg-black h-[70vh]">
              <div>
         <Row>
            <Col lg={6} className=' h-[18vh]'>

            <p className='ml-36 fs-2 fw-bold'>
            What people are 
            </p>
            <p className='ml-36 fs-3 fw-bold'>

            saying about us
            </p>
            
            </Col>
            <Col lg={6}>
               <p className='ml-36 mt-10 w-[400px] text-slate-500'>
               Everything you need to accept card payments and grow your business anywhere on the planet.
               </p>
            </Col>

         </Row>
         <Row className="mt-2 mb-2">
          <Col lg={3} className=' h-[45vh]  ml-36 rounded-xl hover:bg-gray-500'>
          <Image src="/“.png" height={10} width={50} className='mt-10 ml-5'/>
          <p className='mt-3 ml-5'>
          Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
          </p>
          <div className='ml-5 flex mt-1'>
            <Image src="/Image.png" width={50} height={10} />
           <div className='flex flex-col ml-2'>
             <span>
            Herman Jensen
            </span>
            <span className='text-gray-400'>
            Founder & Leader
            </span>
           </div>
          </div>
               
          </Col>
          <Col lg={3} className=' h-[45vh] ml-10 rounded-xl hover:bg-gray-500'>

          <Image src="/“.png" height={10} width={50} className='mt-10 ml-5'/>
          <p className='mt-3 ml-5'>
          Money makes your life easier. If you&apos;re lucky to have it, you&apos;re lucky.
          </p>
          <div className='ml-5 flex mt-5'>
            <Image src="/Image (1).png" width={50} height={10} />
           <div className='flex flex-col ml-2'>
             <span>
             Steve Mark
            </span>
            <span className='text-gray-400'>
            Founder & Leader
            </span>
           </div>
          </div>
          
          </Col>
          <Col lg={3} className=' h-[45vh] ml-10 rounded-xl hover:bg-gray-500'>

          <Image src="/“.png" height={10} width={50} className='mt-10 ml-5'/>
          <p className='mt-3 ml-5'>
          It is usually people in the money business, finance, and international trade that are really rich.
          </p>
          <div className='ml-5 flex mt-4'>
            <Image src="/Image (2).png" width={50} height={10} />
           <div className='flex flex-col ml-2'>
             <span>
             Kenn Gallagher
            </span>
            <span className='text-gray-400'>
            Founder & Leader
            </span>
           </div>
          </div>
          
          </Col>
         </Row>

      </div>
      
        </div>
    )
}

export default Section5