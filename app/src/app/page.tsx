import directus from "./lib/directus"
import ContentBlock from '@/components/ContentBlock'
import Hero from '@/components/Hero'


// async function getData(){ // this uses the default api
//   const { data } = await directus.items('Home').readByQuery();
// 	return data;
// }
async function getData(){ // this uses graphql api to retrive data for this page
  const { data } = await directus.graphql.items('query{Home{status title body hero{id}}}')
	//@ts-ignore
  return data.Home; // the data we need is nested within ({x:{}}) so this call will just send the data needed (x:{})
}
// let title = "tesdast"
// let body = "yolo"
// let contentImage = ''


export default async function Home() {
  const data = await getData();
  console.log(data);
  // console.log(data.status);
  return (
    <main>
      
      <Hero title='Hero Component' />

    {/* Use props to render content on left or right  */}
      <ContentBlock textLeft={true} useImage={true} textInput="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum IpsumLorem Ipsum IpsumLorem Ipsum"/>


      <div className='bg-red-500 w-3/4 h-full mx-auto m-12 text-center'>
        <h1 className='h-20'>Title goes here: <br /> <div className='w-full h-10 bg-white text-black'>{data.title}</div></h1>
        <p className='h-20'>Content goes here: <br />  <div className='w-full h-10 bg-white text-black'>{data.body}</div></p>
        <img src={`${directus.url}assets/${data.hero.id}`} alt="not working" />
      </div>
    </main>

  )
}
