// Conexión al servidor WebSocket
const socket = new WebSocket('ws://localhost:8080/chat');

// Cuando se abre la conexión WebSocket
socket.onopen = function(event) {
    console.log('Conexión abierta');
};

// Cuando se recibe un mensaje del servidor (respuesta de la otra persona)
socket.onmessage = function(event) {
    console.log('Mensaje recibido: ', event.data);
    
    // Crear un nuevo div para el mensaje recibido
    const messageContainer = document.getElementById('chat-messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'left');  // Agregar la clase de mensaje a la izquierda
    newMessage.innerHTML = `<p>${event.data}</p>`;
    messageContainer.appendChild(newMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight;  // Desplazar hacia abajo
};

// Cuando se hace clic en el botón "Enviar"
document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        socket.send(message);  // Enviar el mensaje al servidor

        // Crear un nuevo div para el mensaje enviado por el usuario
        const messageContainer = document.getElementById('chat-messages');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'right');  // Agregar la clase de mensaje a la derecha
        userMessage.innerHTML = `<p>${message}</p>`;
        messageContainer.appendChild(userMessage);
        
        // Limpiar el campo de entrada y enfocar nuevamente
        messageInput.value = '';
        messageInput.focus();

        // Desplazar hacia abajo para mostrar el nuevo mensaje
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});

// Cuando la conexión se cierra
socket.onclose = function(event) {
    console.log('Conexión cerrada');
};

// Si ocurre un error en WebSocket
socket.onerror = function(error) {
    console.log('Error en la conexión WebSocket: ', error);
};