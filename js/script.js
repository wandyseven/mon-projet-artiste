fetch('../biographie.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('biographie').querySelector('p').textContent = text;
    });
