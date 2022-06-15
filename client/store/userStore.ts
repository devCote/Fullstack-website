import { action, makeAutoObservable } from "mobx"
import { url } from "../components/http/axios.config"
import { fetchUsers } from "../components/http/userApi"

export class Store {
  users = []
  state = "pending" // "pending", "done" or "error"

  constructor() {
    makeAutoObservable(this)
  }

  fetchUsersProcessing(users: any) {
    const data = users.data.map((i: any, idx: number, arr: any) => {
      const image = url + i.image
      return { ...arr[idx], image }
    })
    return data.reverse()
  }

  fetchUsers() {
    this.users = []
    this.state = "pending"
    fetchUsers().then(
      action("fetchSuccess", users => {
        this.users = this.fetchUsersProcessing(users)
        this.state = "done"
      }),
      action("fetchError", (error: Error) => {
        alert(error.message)
        this.state = "error"
      })
    )
  }
}
