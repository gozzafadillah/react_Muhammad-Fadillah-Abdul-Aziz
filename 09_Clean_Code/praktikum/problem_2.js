class Kendaraan {
  constructor() {
    this.kecepatanPerJam;
  }
}

class Mobil extends Kendaraan {
  constructor() {
    super();
    this.kecepatanPerJam = 0;
  }

  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }

  berjalan() {
    this.tambahKecepatan(10);
  }

  speedo() {
    return this.kecepatanPerJam;
  }
}

let mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();
console.log(`Mobil cepat = ${mobilCepat.speedo()}`);

let mobilLambat = new Mobil();
mobilLambat.berjalan();
console.log(`Mobil lambat = ${mobilLambat.speedo()}`);
