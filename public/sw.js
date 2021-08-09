const cacheName = 'C-09-08-21-17-30-00'

const resourcesToCache = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/robots.txt',
  '/adaptive-icon.png',
  '/favicon.png',
  '/icon-192.png',
  '/icon-512.png'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToCache)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
        if(response) {
          return response
        }
        
        return fetch(event.request).catch(() => caches.match('/offline.html'))
      }
    )
  )
})

self.addEventListener('active', event => {
  const cacheWhiteList = []
  cacheWhiteList.push(cacheName)

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if(!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    ))
  )
})
