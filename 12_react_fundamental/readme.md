# React Fundamental

## Beberapa hal yang penting dalam penggunaan React adalah sebagai berikut:

### JSX

JSX merupakan ekstensi javascript yang dapat menampung markup. Dengan menggunakan JSX, kita dapat dengan mudah membuat komponen yang dapat reusable karena kita hanya perlu memodifikasi ekspresi dari JSX. Menggunakan JSX perlu menggunakan huruf kapital di awal untuk komponen buatan kita, lalu untuk komponen bawaan menggunakan awalan huruf kecil. Lalu untuk menyematkan code javascript dalam HTML kita menggunakan kurung kurawal {}.

### Component

Cara membuat website menggunakan React itu prinsipnya mirip dengan membuat bangunan, karena kita dapat memecah sebuah tampilan website menjadi komponen terkecilnya (button, nav, header, dll). Component dalam React merupakan kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state dari suatu UI. Alur kerjanya adalah props → Component → DOM.

### Props

Props adalah properties yang memungkinkan kita dapat memasukan data / argumen ke dalam component sehingga UI dapat menjadi lebih dinamis. Penggunaannya sama seperti menambahkan atribut pada HTML.

### React Lifecycle

Life cycle react umumnya dapat dibagi menjadi 4, yaitu render, mounting, updating, dan unmount. - Render merupakan fungsi untuk merender JSX pada React dan fungsi ini paling sering digunakan. - Mounting merupakan fungsi yang dipanggil ketika component sudah dirender untuk pertama kali. Pada mounting biasanya terdapat pemanggilan API dan ada setState di dalamnya - Updating merupakan fungsi yang dipanggil ketika ada perubahan pada props atau state - Unmounting merupakan fungsi yang dipanggil ketika komponen akan dihilangkan

### Conditional Rendering

Conditional rendering dalam react bisa dibilang singkat dan bersifat deklaratif. Best practice dalam conditional rendering adalah menggunakan inline if atau ternary. Khusus pada kasus rendering list, kita perlu menambahkan key pada atribut list agar React dapat mengidentifikasi item tersebut.

### Struktur direktori

Pada dasarnya tidak ada patokan baku untuk struktur direktori pada React, oleh karena itu kita dapat membuat standar kita sendiri. Umumnya struktur direktori React dapat dikelompokan berdasarkan fitur, page, jenis file. Hal yang penting adalah file-file tersebut dapat dengan mudah dicari dan dikelola.

### Styling

- Kita dapat melakukannya pada file terpisah (index.css)
- Inline styling pada atribut JSX
- Menggunakan modul CSS
