const fetch = () => {
  console.log("1. fetch data from db")
}
const filter = (callback) => {
  // settimeout = pending proses
  setTimeout(() => {
    console.log("2. filter data")
    callback()
  }, 3000); // 3000 = 3detik
}
const result = () => {
  console.log("3. menampilkan data")
}

fetch()
filter(result)