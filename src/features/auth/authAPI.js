// signup
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/users",{
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {'content-type': 'application/json'}
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// login
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email
    const password = loginInfo.password
    const responce = await fetch("http://localhost:8080/users?email="+email)
    const data = await responce.json()
    if (data.length) {
      // if data has some length then check following fields
      if (password === data[0].password) {
        resolve({ data: data[0] })
      } else {
        reject({ message: "wrong credentials" })
      }
    } else {
      reject({ message: "user not fount" })
    }
  }
  )
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: 'success' })
  }
  )
}