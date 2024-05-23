document.getElementById('hitungLuasButton').addEventListener('click', function() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    
    if (document.getElementById('alas').value === '' || document.getElementById('tinggi').value === '') {
        alert('Semua input harus diisi.');
        return;
    }

    if (alas <= 0 || tinggi <= 0) {
        alert('Input harus bernilai positif.');
        return;
    }

    const luas = 0.5 * alas * tinggi;
    document.getElementById('luasHasil').innerText = 'Luas Segitiga: ' + luas;
});

document.getElementById('hitungKelilingButton').addEventListener('click', function() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (document.getElementById('sisi1').value === '' || document.getElementById('sisi2').value === '' || document.getElementById('sisi3').value === '') {
        alert('Semua input harus diisi.');
        return; 
    } 

    if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert('Input harus bernilai positif.');
        return;
    }

    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('kelilingHasil').innerText = 'Keliling Segitiga: ' + keliling;
});