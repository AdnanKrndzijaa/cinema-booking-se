import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import Navbar from "@/components/Navbar";



export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}



export default function Home() {
  return (
    <div className="px-[9.5vw]">
        <Navbar/>
        <button className="text-white" onClick={()=> signOut()}>LogOut za testiranje</button>
    </div>
  )
}
