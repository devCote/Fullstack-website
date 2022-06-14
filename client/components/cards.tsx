import { useEffect, useState } from "react"
import { fetchUsers } from "./http/userApi"

// const Card: any = dynamic((): any => import('../components/card'), { ssr: false, loading: () => <div>loading</div> })

const Cards: React.FC = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    if (!users) async () =>
    const res = await fetchUsers()
      setUsers(res.data)
    })

  return <div>sdasd</div>
}

export default Cards
