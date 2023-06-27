import ContentBlock from '@/components/ContentBlock'
import Hero from '@/components/Hero'
import Image from 'next/image'

let title = "tesdast"
let body = "tesdast"
let contentImage = ''




async function getData() {
  const res = await fetch('https://api.example.com/...')




  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()

}



export default function Home() {
  return (
    <main>
      
      <Hero title='Hero Component' />

    {/* Use props to render content on left or right  */}
      <ContentBlock textLeft={true} useImage={true} textInput="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum IpsumLorem Ipsum IpsumLorem Ipsum"/>


      <div className='bg-red-500 w-3/4 h-full mx-auto m-12 text-center'>
        <h1 className='h-20'>Title goes here: <br/> <div className='w-full h-10 bg-white text-black'>{title}</div></h1>
        <p className='h-20'>Content goes here: <br/>  <div className='w-full h-10 bg-white text-black'>{body}</div></p>
        <img src={contentImage} alt="" />
      </div>
    </main>
  )
}
