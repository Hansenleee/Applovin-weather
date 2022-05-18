const CACHE_NAME = 'fed-cache'
const Self = globalThis

Self.addEventListener('install', function (event) {
  Self.skipWaiting()
  Self.caches.open(CACHE_NAME)
})

Self.addEventListener('fetch', function (event) {
  /*
   * 是否含有网络
   * 是：进行网络请求，且更新cache数据（保持数据比较新）
   * 否：进行离线缓存
   */
  if (Self.navigator.onLine) {
    util.fetchPut(event.request.clone())
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response
      })
    )
  }
})

let util = {
  fetchPut: function (request) {
    return fetch(request).then((response) => {
      const responseClone = response.clone()
      if (util.noCache(response)) {
        return response
      }
      if (request.method === 'GET') {
        Self.caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone)
        })
      }
      return response
    })
  },
  noCache: function (response) {
    if (
      !response ||
      response.status !== 200 ||
      response.type !== 'basic' ||
      !response.url.includes('http') ||
      response.url.includes('vite')
    ) {
      return true
    }
    return false
  }
}