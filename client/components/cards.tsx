import { useEffect, useState } from "react"
import Card from "./card"
import { fetchUsers } from "./http/userApi"
import { Faker } from "./faker"
import { url } from "./http/axios.config"

const Cards: React.FC = () => {
  const [users, setUsers]: any = useState()

  const fetch = async () => {
    const res = await fetchUsers()
    const data = res.data.map((i: any, idx: number, arr: any) => {
      const image = url + i.image
      return { ...arr[idx], image }
    })
    setUsers(data.reverse())
  }

  const getUser = (id: number) => {
    return users[id]
  }

  useEffect(() => {
    if (!users) fetch()
  })

  return (
    <>
      <Card key={0} user={users && users.length > 0 ? getUser(0) : Faker.getUser()} />
      <Card key={1} user={users && users.length > 1 ? getUser(1) : Faker.getUser()} />
      <Card key={2} user={users && users.length > 2 ? getUser(2) : Faker.getUser()} />
      <Card key={3} user={users && users.length > 3 ? getUser(3) : Faker.getUser()} />
      <Card key={4} user={users && users.length > 4 ? getUser(4) : Faker.getUser()} />
      <Card key={5} user={users && users.length > 5 ? getUser(5) : Faker.getUser()} />
    </>
  )
}

export default Cards
