"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '@/components/Nav'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import Footer from '@/components/Footer';


function Home() {
  return (
    <div className='   text-white  w-full  ' >
      <Nav />
      <Section1 />

      
      <Section2 />

     <Section3/>

    <Section4/>

     <Section5/>

     <div className=' flex h-[25vh] bg-black'>
      <div className=' ml-40' >
         <Image src="/Group 481734.png" width={180} height={50} className='mt-2'/>
      </div>
      <div className='ml-20 mt-2'>
      <Image src="/Group 481735.png" width={180} height={50} className='mt-2'/>
      </div>
      <div className='ml-20 mt-1'>
      <Image src="/Group 481736.png" width={180} height={50} />
      </div>
      <div className='ml-20 mt-3'>
      <Image src="/Group 481737.png" width={180} height={50} />
      </div>
     </div>

    <div className='bg-black p-5'>
    <div className=' w-[1000px] h-[40vh] ml-20 p-10 flex rounded-2xl bg-slate-800'>
      <div>
        <p className='fs-1 font-medium'>Let’s try our service now!</p>
        <p className='text-slate-500 w-[430px] '>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <button className=' ml-52 mt-12 h-[8vh] w-[100px] bg-teal-500  rounded-xl text-black bg-gradient-radial '>Get Started</button>
         
     </div>
    </div>

     <Footer/>

    </div>
  )
}

export default Home