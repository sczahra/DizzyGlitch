// DizzyGlitch service worker
// Cache-first for videos + app shell. Keeps playback smooth after first run.

const CACHE = "dizzyglitch-cache-v1";

// App shell (add more later if you want)
const SHELL = [
  "./",
  "./index.html",
  "./sw.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Cache-first for everything (esp. video MP4s)
self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return resp;
      }).catch(() => cached);
    })
  );
});
