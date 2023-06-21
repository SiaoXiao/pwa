// install
self.addEventListener("install", (event) => {
  console.log("installing…");
});

// activate
self.addEventListener("activate", (event) => {
  console.log("now ready to handle fetches!");
});

self.addEventListener("fetch", function (event) {
  console.log("now fetch!");
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
