# Introduction React

## Apa itu React

React merupakan library javascript untuk membuat UI yang interaktif dan cepat. React dapat digunakan untuk mendesain web maupun mobile atau multi-platform. React bersifat open source yang dimaintain oleh facebook dan memiliki komunitas yang besar dibanding framework atau library lain seperti angular dan vue.

Hal yang menguntungkan ketika merancang UI dengan react adalah kita dapat memprogram dengan cara deklaratif sehingga lebih sederhana dari vanila.js, bersifat component based sehingga kita dapat membuat aplikasi dari component-component terkecil seperti menyusun blok-blok lego, lalu keunggulan terakhir dari react adalah bersifat multi-platform app sehingga kita dapat membuat aplikasi berbasis web, android, dan ios dengan satu library.

## Virtual DOM React

DOM manipulation merupakan hal penting dalam website masa kini, namun sayangnya memanipulasi DOM menggunakan javascript biasa itu sulit. Oleh karena itu React memiliki fitur virtual DOM. Virtual DOM merupakan representasi UI yang berbentuk object yang disimpan dalam memori.

## Setup Environment

Tools :

- Web Browser
- IDE / Text Editor
- CLI Mau PowerShell (windows) ataupun CLI Git Bash

Struktur file penting pada React JS :

- Index.js untuk rendering component dari App.js ke id 'root' pada index.html
- App.js tempat untuk membuat component pada aplikasi yang akan dibuat
- index.css untuk memberikan styling pada aplikasi
- index.html sebagai wadah untuk menampung aplikasi react dan styling

## Cara Membuat React js

1. Gunakan node NPM untuk menginstal dengan cara `npx create-react-app <nama-project>`
2. Setelah terinstal dependensinya coba run di `npm run start` atau `yarn run start`
3. Buka server di `localhost:3000` pada web Browser
