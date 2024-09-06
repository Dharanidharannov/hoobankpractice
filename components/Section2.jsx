import React from "react";
import Image from "next/image";
import { Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section2(){
    return(
        <div className="bg-black ">
              <div className='p-20 '>
        <Row>
          <Col lg={6}>
          <p className='ml-20  fw-bold fs-3 mb-10'>
          You do the business, 
          </p>
          <p className='ml-20  fw-bold fs-2'>
          we’ll handle the money.
          </p>
          <p className='ml-20 mb-10 text-slate-500'>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <button className='bg-teal-500 rounded p-2 ml-36 px-3 text-black'>Get Started</button>
          
          </Col>
          <Col lg={6}>
               
                <div className='ml-36'>
                <div className='ml-10 flex border-2px rounded-xl w-96 hover:bg-gray-400 cursor-pointer '>
                  <Image src="/Group 481727.png" width={50} height={50} className='mr-2'/>
                  <div>
                  <p className='mt-2'>
                    Rewards
                  </p>
                  <p > 
                  The best credit cards offer some tantalizing combinations of promotions and prizes
                  </p>
                  </div>
                </div>
                <div className='ml-10 flex border-2px rounded-xl w-96 hover:bg-gray-400 mt-5 cursor-pointer'>
                  <Image src="/Group 481744.png" width={60} height={60} className='mr-2'/>
                  <div>
                  <p>
                   100% Secured
                  </p>
                  <p > 
                  We take proactive steps make sure your information and transactions are secure.
                  </p>
                  </div>
                </div>
                <div className='ml-10 flex border-2px rounded-xl w-96 hover:bg-gray-400 mt-5 cursor-pointer'>
                  <Image src="/Group 481745.png" width={60} height={60} className='mr-2'/>
                  <div>
                  <p>
                     Balance Transfer
                  </p>
                  <p > 
                  A balance transfer credit card can save you a lot of money in interest charges.
                  </p>
                  </div>
                </div>
                </div>
                
          </Col>
        </Row>
       </div>

       
        </div>
    )
}

export default Section2