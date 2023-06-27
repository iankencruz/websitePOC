import Link from 'next/link';
import * as React from 'react';


export default function Footer() {


  return (
    <footer className='w-full h-auto flex  bg-slate-500'>
        <div className='my-auto mx-32' >
        <Link className='text-4xl' href="/">Title</Link>
        </div>
        {/* Implement different color on active/focus state  */}
        <div className='my-auto  flex flex-row ml-auto mr-44  justify-end'>
            <Link className='mx-5' href="/about">About</Link>
            <Link className='mx-5' href="/services">Services</Link>
            <Link className='mx-5' href="/forms">Forms</Link>
            <Link className='mx-5' href="/contact">Contact</Link>
        </div>
    </footer>
  );
}
