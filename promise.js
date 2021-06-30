const sibuk = 0
const acaraLain = 0
const janjian = new Promise((resolve, reject) => {
  if(sibuk === 1){
    reject("maaf sibuk") // -> catch
  }else{
    // resolve("oke saya datang") // -> then
    if(acaraLain === 1){
      resolve("oke saya datang tapi terlambat")
    }else{
      resolve("oke saya datang")
    }
  }
})

janjian
.then((success) => {
  console.log(success)
})
.catch((error) => {
  console.log(error)
})
// finally bersifat opsional
// finally tidak peduli hasil resolve atau reject
// finally akan selalu di jalankan di akhir ketika promise selesai
.finally(() => { 
  console.log("selesai")
})