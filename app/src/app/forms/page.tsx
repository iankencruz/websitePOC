import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Forms',
    description: 'test'
}


// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return <h1 className="text-red-500 text-center align-middle">Hello, Forms Page! This is inserted to children</h1>
  }