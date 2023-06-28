import directus from "./lib/directus"
import ContentBlock from '@/components/ContentBlock'
import Hero from '@/components/Hero'


async function getD(){ // this uses the default api
  const { data } = await directus.items('Home').readByQuery();
	return data;
}
async function getData(){ // this uses graphql api to retrive data for this page
  const { data } = await directus.graphql.items('query{Home{isLeft title body hero{id}}}');
	//@ts-ignore
  return data.Home; // the data we need is nested within ({x:{}}) so this call will just send the data needed (x:{})
}
// let title = "tesdast"
// let body = "yolo"
// let contentImage = ''


export default async function Home() {
  const data = await getData();
  console.log(data);
  const d = await getD();
  console.log("totot ", d);
  // console.log(data.status);
  let x = "" + directus.url + "assets/" + data.hero.id  ;
  console.log(x);
  console.log(typeof(data.status));
  let y = 1;
  if (y){

    console.log("HERE HERE HERE");
    console.log(typeof(data.body));
  }
  return (
    <main>
      
      <Hero title='Hero Component' />

    {/* Use props to render content on left or right  */}
      <ContentBlock srcImage={x} textLeft={data.isLeft} useImage={true} textInput={data.body}/>


      <div className='bg-red-500 w-3/4 h-full mx-auto m-12 text-center'>
        <h1 className='h-20'>Title goes here: <br /> <div className='w-full h-10 bg-white text-black'>{data.title}</div></h1>
        <p className='h-20'>Content goes here: <br />  <div className='w-full h-10 bg-white text-black'>{data.body}</div></p>
        <img src={`${directus.url}assets/${data.hero.id}`} alt="not working" />
        
        {/* {console.log('"${directus.url}assets/${data.hero.id}"');} */}
      </div>
    </main>

  )
}
