// Jalankan di script.google.com: buat proyek baru, paste kode ini, klik Run.
// Link edit form muncul di Execution log dan form tersimpan di Google Drive.
function buatFormSUS() {
  const form = FormApp.create('Kuesioner SUS - Aplikasi Welya');
  form.setDescription(
    'Berilah penilaian untuk setiap pernyataan setelah mencoba aplikasi.'
  );

  form.addTextItem().setTitle('Nama').setRequired(true);
  form.addTextItem().setTitle('Program Studi').setRequired(true);
  form.addTextItem().setTitle('Nama Universitas').setRequired(true);

  const pernyataan = [
    'Saya merasa akan sering menggunakan aplikasi Welya ini.',
    'Saya merasa aplikasi ini terlalu rumit padahal seharusnya bisa dibuat lebih sederhana.',
    'Saya merasa aplikasi ini mudah digunakan.',
    'Saya merasa membutuhkan bantuan dari orang teknis untuk dapat menggunakan aplikasi ini.',
    'Saya merasa fitur-fitur pada aplikasi ini berjalan dengan baik dan saling terintegrasi.',
    'Saya merasa ada terlalu banyak hal yang tidak konsisten pada aplikasi ini.',
    'Saya merasa kebanyakan orang akan dapat mempelajari aplikasi ini dengan cepat.',
    'Saya merasa aplikasi ini membingungkan untuk digunakan.',
    'Saya merasa percaya diri saat menggunakan aplikasi ini.',
    'Saya perlu mempelajari banyak hal terlebih dahulu sebelum dapat menggunakan aplikasi ini.'
  ];

  const pilihan = [
    'Sangat Tidak Setuju',
    'Tidak Setuju',
    'Netral',
    'Setuju',
    'Sangat Setuju'
  ];

  // Satu pertanyaan pilihan ganda per pernyataan: teks di atas, jawaban di bawah
  pernyataan.forEach((teks, i) => {
    form.addMultipleChoiceItem()
      .setTitle((i + 1) + '. ' + teks)
      .setChoiceValues(pilihan)
      .setRequired(true);
  });

  Logger.log('Form: ' + form.getEditUrl());
}
