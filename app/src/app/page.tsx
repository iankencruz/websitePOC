import directus from "./lib/directus"

async function getData(){
  const { data } = await directus.items('Home').readByQuery();
	return data;
}
// let title = "tesdast"
// let body = "yolo"
// let contentImage = ''


export default async function Home() {
  const d = await getData();
  return (
    <main>
      <div className='bg-red-500 w-3/4 h-full mx-auto m-12 text-center'>
        <h1 className='h-20'>Title goes here: <br /> <div className='w-full h-10 bg-white text-black'>{d.title}</div></h1>
        <p className='h-20'>Content goes here: <br />  <div className='w-full h-10 bg-white text-black'>{d.body}</div></p>
        <img src={`${directus.url}assets/${d.hero}`} alt="not working" />
      </div>
    </main>

  )
}
