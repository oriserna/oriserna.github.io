// notifications.js

document.addEventListener("DOMContentLoaded", () => {
    const notificationList = document.querySelector(".notification-list");

    // Simular nueva notificación después de 5 segundos
    setTimeout(() => {
        addNotification(
            "@Usuario5",
            "te mencionó en un comentario: \"¡Impresionante entrenamiento!\"",
            "Hace 10 minutos"
        );
    }, 5000);
});

// Función para añadir una notificación dinámica
function addNotification(user, message, timestamp) {
    const notificationList = document.querySelector(".notification-list");

    // Crear elemento de notificación
    const notification = document.createElement("div");
    notification.classList.add("notification");

    notification.innerHTML = `
        <p><strong>${user}</strong> ${message}</p>
        <span class="timestamp">${timestamp}</span>
    `;

    // Insertar notificación al principio de la lista
    notificationList.insertBefore(notification, notificationList.firstChild);
}
