// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/src/main.js',
          '/src/assets/descarga.jpeg',
          './public/images/icons/app-icon-114x114.png',
          '/src/components/IMC.vue',
          '/src/components/Inicio.vue',
          '/src/components/Login.vue',
          'src/plugins/vuetify.js',
          '/src/components/RecipeDetails.vue',
          '/src/components/RecipeHipertension.vue',
          '/src/components/Registro.vue',
          '@mdi/font/css/materialdesignicons.css',
          
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