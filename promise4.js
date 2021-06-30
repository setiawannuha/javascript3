const filterData = () => {
  data = []
  return new Promise((resolve, reject) => {
    if(data.length >= 1){
      resolve(data)
    }else{
      if(){
        // kondisi 1 = error by system / internal server error
        reject(new Error("error"))
      }else{
        // kondisi 2 = error by human/ data tidak ada
        reject(new Error("error"))
      }
    }
  })
}

filterData()
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err.message)
})
