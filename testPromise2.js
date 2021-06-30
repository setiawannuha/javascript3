cars = ["BMW", "Toyota", "Suzuki", "Lamborghini", "BMW"]

const filterData = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // buatlah sebuah proses filter
      // ketika data tidak ditemukan maka kirim error, pesan data tidak di temukan
      const carsFilter = cars.filter((e, i) => {
        if(e === car){
          return e
        }
      })
    
      if(carsFilter.length >= 1 ){
        const obj = {
          data: carsFilter,
          pesan: "data berhasil di temukan"
        }
        resolve(obj)
      }else{
        reject(new Error("Data tidak di temukan"))
      }
    }, 1000);
  })
}

filterData("BMW")
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err.message)
})