let input = (angka) => {
  let i = 1;
  for (let m = 1; m < angka; m++) {
    let hasil;
    if (angka % m == 0) {
      i++;
    }
  }
  if (i == 2) {
    hasil = "prima";
  } else {
    hasil = "bukan prima";
  }

  console.log(`angka : ${angka} adalah bilangan ${hasil}`);
};

input(3);
input(7);
input(10);
