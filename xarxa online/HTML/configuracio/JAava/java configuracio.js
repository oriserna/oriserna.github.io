document.getElementById('darkMode').addEventListener('change', function() {
    document.body.style.backgroundColor = this.checked ? '#333' : '#f4f4f9';
    document.body.style.color = this.checked ? '#fff' : '#000';
});

document.getElementById('syncData').addEventListener('click', function() {
    alert('Datos sincronizados correctamente');
});

document.getElementById('connectGoogle').addEventListener('click', function() {
    alert('Conectado con Google');
});

document.getElementById('connectFacebook').addEventListener('click', function() {
    alert('Conectado con Facebook');
});