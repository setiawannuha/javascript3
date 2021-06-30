const fetch = () => {
  console.log("1. fetch data from db")
}
const filter = () => {
  data = [1,2,3,4,5,6]
  return new Promise((resolve, reject) => {
    // setTimeout contoh prosess (butuh waktu)
    setTimeout(() => {
      console.log("2. filter data")
      resolve(data)
    }, 3000);
  })
}

fetch()
filter().then((response) => {
  console.log("3. result data")
  console.log(response)
})