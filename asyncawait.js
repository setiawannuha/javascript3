const fetchData = () => {
  const data = [0,1,2,3,4,5]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000);
  })
}

const filter = (data) => {
  const hasil = data.filter((e) => {
    return e > 1
  })
  return hasil
}

const getData = async() => {
  // await menunggu prosess selesai
  // fetchData untuk mengambil data [0,1,2,3,4,5]
  const data = await fetchData() 
  // filter untuk mengfilter data yang berasal dari fetchData
  const fillterData = await filter(data)
  console.log(fillterData)
}
getData()