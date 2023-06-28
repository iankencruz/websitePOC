import directus from "./lib/directus"
import ContentBlock from '@/components/ContentBlock'
import Hero from '@/components/Hero'


// async function getD(){ // this uses the default api
//   const { data } = await directus.items('Home').readByQuery();
// 	return data;
// }
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
  // const d = await getD();
  // console.log("totot ", d);
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
      
      <Hero title={data.title} />

    {/* Use props to render content on left or right  */}
      <ContentBlock srcImage={x} textLeft={data.isLeft} textInput={data.body}/>


      
    </main>

  )
}
