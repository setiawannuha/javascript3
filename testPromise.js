cars = ["BMW", "Toyota", "Suzuki", "Lamborghini"]

const filterData = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // buatlah sebuah proses filter
      // ketika data tidak ditemukan maka kirim error, pesan data tidak di temukan
    }, 3000);
  })
}

filterData("BMW")