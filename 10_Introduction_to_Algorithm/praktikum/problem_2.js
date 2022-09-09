const ANGKA = [];
let inputAngka = (angka) => {
  for (let index = 1; index <= angka; index++) {
    ANGKA.push(index);
  }
  console.log(`inputan : ${angka}`);
  tombol();
};

let tombol = () => {
  let index = 1;
  let lampu = "Lampu mati";
  while (index <= ANGKA.length) {
    if (ANGKA.length % ANGKA[index - 1] == 0) {
      if (lampu == "lampu menyala") {
        lampu = "lampu mati";
      } else {
        lampu = "lampu menyala";
      }
    }
    index++;
  }
  console.log("keadaan " + lampu);
};

inputAngka(4);
inputAngka(5);
