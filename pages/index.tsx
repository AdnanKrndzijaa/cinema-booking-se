import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

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
    <div>
      <h1>Cinema Booking</h1>
      <button className="text-white" onClick={()=> signOut()}>LogOut</button>
    </div>
  )
}
