export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const responce = await fetch(" http://localhost:8080/products")
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// categories
export function fetchCategories() {
  return new Promise(async (resolve) => {
    const responce = await fetch(" http://localhost:8080/categories")
    const data = await responce.json()
    resolve({ data })
  }
  )
}
//brands
export function fetchBrands() {
  return new Promise(async (resolve) => {
    const responce = await fetch(" http://localhost:8080/brands")
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// product by id
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const responce = await fetch(" http://localhost:8080/products/"+id)
    const data = await responce.json()
    resolve({ data })
  }
  )
}
export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = '';
  for(let key in filter){
    const categoryValue = filter[key]
    if(categoryValue.length){
      const lastCategoryValue = categoryValue[categoryValue.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
// sort
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
    console.log(key, " ", sort[key], " ", queryString)
  }
// pagination
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString) 
    const data = await response.json()
    const totalItems = response.headers.get("X-Total-Count")
    resolve({data:{products: data, totalItems: totalItems}})
  }
  );
}
 

// admin APIs
export function createProduct(product) {
  return new Promise(async (resolve) => {
    const responce = await fetch(" http://localhost:8080/products/",{
      method: 'POST',
      body: JSON.stringify(product),
      headers: {'content-type': 'application/json'}
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}
// update product
export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products/"+update.id,{
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type': 'application/json'}
    })
    const data = await responce.json()
    resolve({ data })
  }
  )
}