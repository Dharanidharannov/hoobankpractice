import React from "react";
import Image from "next/image";
import { Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Section1(){
    return(
        <div className="bg-black">
             <div >
        <Row>
          <Col lg={7} className="h-[90vh]" >
          <div className='position-relative'>
            <Image src="/Ellipse 2333.png" width={500} height={5} />
            <div className='position-absolute top-32 left-0 bg-black rounded-2xl flex ml-36 ' >
              <Image src="/Discount.svg" width={40} height={10}/>
              <div className='mt-2'>
              <span className='text-white mr-2'>20%</span>
              <span className='text-gray-500 mr-2'>DISCOUNT FOR</span>
              <span className='mr-2'>1 MONTH</span>
              <span className='text-gray-500'>ACCOUNT</span>
              </div>
           
         </div>
               <div className='position-absolute top-56 left-36 '>
                <p className='text-white fw-bold fs-1 '>
                  The Next
                </p>
                <p className='text-teal-500 fw-bold fs-1 text-gradient-radial'>
                  Generation
                </p>
                <p className='fw-bold fs-1'>
                  Payment Method.
                </p>

                <p className='w-96'>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.
                </p>
                <div className='position-absolute top-5 left-80' >
                  <button className='border-2 border-teal-500  h-24 w-24 rounded-full p-1 '>
                   <div className='flex '>
                   <span className='text-teal-500 ml-3 mr-2'>Get</span>
                   <Image src="/Arrow - Up.png" width={20} height={10} />
                   </div>
                   <p className='text-teal-500'>Started</p>
                  </button>
                </div>


               </div>
              

            
         

         </div>
          </Col>
          <Col lg={5}>
            <div  className='position-relative top-80'>
            <Image src="/robot-hand-background-presenting-technology-gesture 1.png" width={400} height={50}/>
            </div>
            <div className='position-absolute top-0 right-28'>
              <Image src="/Vector 16.png" width={600} height={100}/>

            </div>
            <div className=' mt-24 ml-64'>
               <Image src="/Vector.png" width={60} height={60}/>
            </div>
            <div className='ml-10'>
               <Image src="/Vector.png" width={30} height={30}/>
            </div>
            <div className='position-absolute top-80 right-64 mr-14'>
              <Image src="/Rectangle 14404.png" width={178} height={284}/>
            </div>
            <div className='position-absolute top-64 right-64 mr-14'>
              <Image src="/Group 481765.png" width={208} height={284}/>
            </div>
            <div className='position-absolute top-56 right-64 mr-14'>
              <Image src="/Group 481764.png" width={208} height={284}/>
            </div>
            <div className=' position-absolute top-40 right-90'>
               <Image src="/Vector.png" width={80} height={80}/>
            </div>
             
          </Col>
        </Row>
       </div>
       <div className=' flex  mt-20'>
        <div className='ml-36 '>
          <span className='fw-bold fs-4 '>
            3800+
          </span>
          <span className='text-gradient-radial ml-10 '>
            USER ACTIVE
          </span>
          <span className='ml-5'>
            |
          </span>
        </div>
        <div className='ml-16 '>
          <span className='fw-bold fs-4 '>
            230+
          </span>
          <span className='text-gradient-radial ml-10 '>
            TRUSTED BY COMPANY
          </span>
          <span className='ml-4'>
            |
          </span>
        </div>
        <div className='ml-16 '>
          <span className='fw-bold fs-5 '>
            $230M+
          </span>
          <span className='text-gradient-radial ml-4 '>
            TRANSACTION
          </span>

        </div>

      </div>
        </div>
    )
}

export default Section1