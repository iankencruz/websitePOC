import Image from 'next/image'

let title = "tesdast"

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
      <div className='bg-red-500 w-3/4 h-full mx-auto m-12 text-center'>
        <h1 className='h-20'>Title goes here: <br/> <div className='w-full h-10 bg-white text-black'>{title}</div></h1>
        <p className='h-20'>Content goes here: <br/>  <div className='w-full h-10 bg-white text-black'>{title}</div></p>
      </div>
    </main>
  )
}
