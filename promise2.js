const getDataFromAPI = () => {
  // penulisan promise = new Promise(callback)
  // callback promise menerima 2 parameter (resolve, reject)
  // resolve untuk keadaan jika promise berhasil
  // reject untuk keadaan jika promise gagal
  data = [1,2,3,4]
  return new Promise((resolve, reject) => {
    if(data.length === 0){
      const error = {
        message: "data not found"
      }
      reject(error) // -> catch
    }else{
      resolve(data) // -> then
    }
  })
}

getDataFromAPI()
// penulisan then = .then(callback)
// callback then hanya bisa menerima 1 parameter
.then((data) => {
  console.log(data)
})
// penulisan catch = .catch(callback)
// callback catch hanya bisa menerima 1 parameter
.catch((error) => {
  console.log(error.message)
})