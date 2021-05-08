/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a7ea76dcc57ddd9ff2881c342e1e66ac"
  },
  {
    "url": "assets/css/0.styles.bed79ac7.css",
    "revision": "8a8ae7d0b8ba8bea96d0281a5fd980cd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9cc1005a.js",
    "revision": "49a6de99eeb3c9944568df226326c207"
  },
  {
    "url": "assets/js/11.bf65a946.js",
    "revision": "c6ab3b2f5fb24299481edae6030a90f8"
  },
  {
    "url": "assets/js/12.daa7dafb.js",
    "revision": "0791149f3d6529f4b3efc66ec5286de7"
  },
  {
    "url": "assets/js/13.5b00cc60.js",
    "revision": "92d5aafcd770feea74abd6f23b256d03"
  },
  {
    "url": "assets/js/2.ec2f2734.js",
    "revision": "92eb7a3425f06c2936a81604b05bc5cf"
  },
  {
    "url": "assets/js/3.7afe944b.js",
    "revision": "18c5a65fb317422d9b71767fe290a614"
  },
  {
    "url": "assets/js/4.7870dab9.js",
    "revision": "dcb8750b684338cc82caae63c507de81"
  },
  {
    "url": "assets/js/5.3deea0bc.js",
    "revision": "25eb2d6327576f3fe53c2ab22dbfa8b9"
  },
  {
    "url": "assets/js/6.766ac94c.js",
    "revision": "1febb33f512f34dc4d730d06e342b232"
  },
  {
    "url": "assets/js/7.d54b474a.js",
    "revision": "2f66ebf3fc9b9dbe01c48bfdb7959021"
  },
  {
    "url": "assets/js/8.6ca75d4c.js",
    "revision": "1c18e3f2ef9484a4e7bd99ace831b795"
  },
  {
    "url": "assets/js/9.24d60c09.js",
    "revision": "eb7e6b48e01e0cd695b512b89b9d00a4"
  },
  {
    "url": "assets/js/app.71796aef.js",
    "revision": "20076b4310c696098f5e24f40049f811"
  },
  {
    "url": "guide.html",
    "revision": "81872e05d8dcfbbd9def033879668d3e"
  },
  {
    "url": "index.html",
    "revision": "812fc1aa7b9f2db51427a98dcb255e03"
  },
  {
    "url": "logo.png",
    "revision": "6a4df5fb3d86ca8bc218bb90d2b471f9"
  },
  {
    "url": "sentence.html",
    "revision": "512f5562ce5f6e2878d17d2c07f7d73f"
  },
  {
    "url": "steins-gate/index.html",
    "revision": "c28fdf66f2f4cce26cdbf26181d6050d"
  },
  {
    "url": "word.html",
    "revision": "09b3124ec94c9076b855ecb7250a6e29"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
