export function fetchLoggedInUserOrder(userId) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/orders/user/"+userId)
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// userInfo
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/users/"+userId)
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// update user for checkout
export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" }
    })
    const data = await response.json()
    resolve({ data })
  }
  )
}