import { useEffect, useContext } from "react"
import Card from "./card"
import { Faker } from "./faker"
import { StoreContext } from "../pages/_app"
import { observer } from "mobx-react-lite"

const Cards = observer(() => {
  const store = useContext(StoreContext)
  const { users } = store

  const getUser = (id: number) => {
    return users[id]
  }

  useEffect(() => {
    store.fetchUsers()
  }, [])

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
})

export default Cards
