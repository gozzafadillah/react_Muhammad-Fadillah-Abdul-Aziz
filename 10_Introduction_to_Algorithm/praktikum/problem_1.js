const Input = (angka) => {
  let count = 1;
  for (let i = 1; i < angka; i++) {
    let hasil;
    if (angka % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    hasil = "prima";
  } else {
    hasil = "bukan prima";
  }

  console.log(`angka : ${angka} adalah bilangan ${hasil}`);
};

Input(3);
Input(7);
Input(10);
