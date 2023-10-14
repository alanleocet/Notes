self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('notes-cache').then((cache) => {
      return cache.addAll([
        './',
        '_styles.css', // Replace with your actual CSS file name
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
