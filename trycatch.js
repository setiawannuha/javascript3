const kemungkinanError = () => {
  return new Promise((resolve, reject) => {
    reject(new Error("Data Error"))
    // resolve("123")
  })
}

const result = async() => {
  try {
    const data = await kemungkinanError()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}
result()