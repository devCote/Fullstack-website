import { useEffect, useState } from "react"
import { fetchUsers } from "./http/userApi"

// const Card: any = dynamic((): any => import('../components/card'), { ssr: false, loading: () => <div>loading</div> })

const Cards: React.FC = () => {
  const [users, setUsers] = useState()

  const test = async () => {
    const res = await fetchUsers()
    setUsers(res.data)
    console.log({ res })
  }

  useEffect(() => {
    if (!users) test()
  })

  return <div>sdasd</div>
}

export default Cards
