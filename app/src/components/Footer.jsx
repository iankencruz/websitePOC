import Link from 'next/link';
import * as React from 'react';


export default function Footer() {


  return (
    <footer className='w-full h-20 flex  bg-slate-500'>
        {/* Implement different color on active/focus state  */}
        <div className='my-auto  flex flex-row ml-auto mr-44  justify-end'>
            <Link className='mx-5' href="/">Home</Link>
            <Link className='mx-5' href="/about">About</Link>
            <p className='mx-2'>ABN: 30 549 538 952</p>
            <p className='mx-2'>ACN: 549 538 952</p>
            
        </div>
    </footer>
  );
}
