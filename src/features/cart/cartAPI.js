export function addtoCart(item) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart",{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {'content-type': 'application/json'}
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}

// fetch cart data
export function fecthItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const responce = await fetch(" http://localhost:8080/cart?user="+userId)
    const data = await responce.json()
    resolve({ data })
  }
  )
}

// update cart items
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart/"+update.id,{
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type': 'application/json'}
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}

// cart remove item
export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/cart/"+itemId,{
      method: 'DELETE',
      headers: {'content-type': 'application/json'}
    })
    const data = await responce.json()
    resolve({ data:{id:itemId} })
  }
  )
}