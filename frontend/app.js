// Конфигурация API
const API_CONFIG = {
    development: 'http://localhost:5000',
    production: 'https://ваш-сайт.com' // Замените на реальный URL вашего сайта
};

// Определяем текущее окружение
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_URL = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

document.addEventListener('DOMContentLoaded', () => {
    // Проверка соединения с backend
    fetch(`${API_URL}/api/health`)
        .then(response => response.json())
        .then(data => {
            console.log('Backend status:', data.status);
        })
        .catch(error => {
            console.error('Ошибка подключения к backend:', error);
        });
}); 