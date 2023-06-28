import Link from 'next/link';
import * as React from 'react';


export default function Footer() {


  return (
    <footer className='w-full h-auto flex  bg-slate-500'>
        {/* Implement different color on active/focus state  */}
        <div className='my-auto  flex flex-row ml-auto mr-44  h-10 justify-end'>
            <Link className='mx-5' href="/about">ABN</Link>
            <Link className='mx-5' href="/services">ACN</Link>
        </div>
    </footer>
  );
}
