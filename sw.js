// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        'src/main.js',
        'src/components/Sidebar.vue',
        'src/images/h1.png',
        'src/images/h2.jpg',
        'src/images/h4.jpg',
        'src/images/h5.jpg',
        'src/images/h7.jpg',
        'src/images/h8.jpg',
        'src/images/h9.jpg',
        'src/images/h10.jpg',
        'src/images/h11.jpg',
        'src/images/p1.jpg',
        'src/images/p2.jpg',
        'src/images/p3.jpg',
        'src/images/p4.jpg',
        'src/images/p5.jpg',
        'src/images/p6.jpg',
        'src/images/p7.jpg',
        'src/images/p8.jpg',
        'src/router/index.js',
        'src/views/About.vue',
        'src/views/Home.vue',
        'src/views/Login.vue',
        'src/views/Personas.vue',
        'src/App.vue',
        'src/style.css',
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