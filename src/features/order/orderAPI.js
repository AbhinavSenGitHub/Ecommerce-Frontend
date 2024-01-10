export function createOrder(order) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" }
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/orders/" +order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" }
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}

export function fetchAllOrders(sort, pagination) {
  let queryString = '';
  // sort
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  // pagination
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders?' + queryString) 
    const data = await response.json()
    const totalOrders = response.headers.get("X-Total-Count")
    resolve({data: {orders: data, totalOrders: +totalOrders}})
  }
  )
}