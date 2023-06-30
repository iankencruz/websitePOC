import Link from 'next/link';
import { type } from 'os';
import * as React from 'react';

type NavProps = {
  title: string
}


export default function NavBar(props: NavProps) {

    let title = props.title

  return (
    <div className='w-full h-20 flex  bg-slate-500'>
        <div className='my-auto mx-32' >
        <Link className='text-4xl' href="/">{title}</Link>
        </div>
        {/* Implement different color on active/focus state  */}
        <div className='my-auto  flex flex-row ml-auto mr-44  justify-end'>
            <Link className='mx-5' href="/about">About</Link>
            <Link className='mx-5' href="/blog">Blogs</Link>
            <Link className='mx-5' href="/services">Services</Link>
            <Link className='mx-5' href="/forms">Forms</Link>
            <Link className='mx-5' href="/contact">Contact</Link>
        </div>
    </div>
  );
}
