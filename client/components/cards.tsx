import { useEffect, useState } from "react"
import Card from "./card"
import { fetchUsers } from "./http/userApi"
import { Faker } from "./faker"

const Cards: React.FC = () => {
  const [users, setUsers]: any = useState([])

  const fetch = async () => {
    const res = await fetchUsers()
    setUsers(res.data)
    console.log(res)
  }


  useEffect(() => {
    if (!users) fetch()
  })

  return (
    <>
      <Card key={0} user={users && users.length > 0 ? users[0] : Faker.getUser()} />
      <Card key={1} user={users && users.length > 1 ? users[1] : Faker.getUser()} />
      <Card key={2} user={users && users.length > 2 ? users[2] : Faker.getUser()} />
      <Card key={3} user={users && users.length > 3 ? users[3] : Faker.getUser()} />
      <Card key={4} user={users && users.length > 4 ? users[4] : Faker.getUser()} />
      <Card key={5} user={users && users.length > 5 ? users[5] : Faker.getUser()} />
    </>
  )
}

export default Cards
