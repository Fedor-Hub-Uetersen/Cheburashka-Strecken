// Фоновый скрипт для обработки уведомлений (sw.js)
self.addEventListener('push', function(event) {
    // Оставляем для интеграции с сервером, если понадобится
});

self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: 'wolf.png', // Иконка уведомления (если есть)
            tag: 'chebuyoga-alert',
            renotify: true
        });
    }
});