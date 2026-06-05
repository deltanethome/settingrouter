const input = document.getElementById('globalSearch');
const results = document.getElementById('results');

input.addEventListener('keyup', () => {
    const q = input.value.toLowerCase();
    results.innerHTML = '';

    if (!q) {
        results.style.display = 'none';
        return;
    }

    const found = modems.filter(m =>
        (m.brand + ' ' + m.model).toLowerCase().includes(q)
    );

    results.style.display = 'block';

    if (found.length === 0) {
        results.innerHTML = '<div class="result-item">Modem belum tersedia. Hubungi CS WhatsApp.</div>';
        return;
    }

    found.forEach(m => {
        results.innerHTML += `<div class='result-item'><a href='${m.link}'>${m.brand} ${m.model}</a></div>`;
    });
});