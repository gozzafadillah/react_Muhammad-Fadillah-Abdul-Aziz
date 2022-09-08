## Problem 1 - Analysis

Berikut merupakan hasil dari analisis saya mengenai code problem 1 :

- Class name Seharusnya case style menggunakan Pascal Case
- Untuk deklarasi variable tidak menggunakan case style, disini seharusnya variable menggunakan styling Camel Case
- Tidak menggunakan comment untuk menjelaskan maksud kode yang dibuat
- Tidak menggunakan constructor untuk mendeklarasikan properti pada Class
- penulisan kode seperti 'user[ ] users' dan 'user[ ] getallusers( )' tidak dikenal dalam javascript, sehingga saat dirunning code error
- Pada 'class userservice' penamaaan function tidak dengan case style, sehingga diubah dengan camel case
- Method array filter tidak lengkap, seharunya ditambahkan callback

```javascript
class UserService {
  constructor() {
    this.users = ["Anton", "Tong", "Kiana"];
  }

  //ambil seluruh data user
  getAllUsers() {
    return this.users;
  }

  // ambil data user berdasarkan id-nya
  getUserById(userId) {
    return this.users.filter((user) => user === userId);
  }
}
```
