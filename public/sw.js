const cacheStatic = 'C-29-01-21'

const resourcesToCache = [
  '/',
  '/manifest.json',
  '/robots.txt',
  '/adaptive-icon.svg',
  '/favicon.png',
  '/logo-192.png',
  '/logo-512.png',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheStatic).then(cache => {
      return cache.addAll(resourcesToCache)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})
