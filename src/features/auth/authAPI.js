// signup
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/auth/signup", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' }
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// login
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try{
      const responce = await fetch("http://localhost:8080/auth/login", {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' }
      })
      if(responce.ok){
        const data = await responce.json()
        resolve({ data })
      }else{
        const err = await responce.text()
        reject(err)
      }
    } catch (err){
      reject({err})
    }
  }
  )
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try{
      const responce = await fetch("http://localhost:8080/auth/check")
      if(responce.ok){
        const data = await responce.json()
        resolve({ data })
      }else{
        const err = await responce.text()
        reject(err)
      }
    } catch (err){
      reject({err})
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