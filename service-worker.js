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
    "revision": "5b0092204d1d2ecdb200509f482758e8"
  },
  {
    "url": "about/index.html",
    "revision": "5fa8a053a9e278a8dab7a1c851c20e6f"
  },
  {
    "url": "archives/index.html",
    "revision": "dfdd2ad9c588abd564247f618e126e9b"
  },
  {
    "url": "assets/css/0.styles.e6b74d66.css",
    "revision": "ddba42d83ce38fc2f3319ee7e8369ce7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9287b14c.js",
    "revision": "4178ff84fbc583f8a62e26e30784be2b"
  },
  {
    "url": "assets/js/11.f0ba3a2f.js",
    "revision": "547487cfe990e96f002df02824b93019"
  },
  {
    "url": "assets/js/12.a2ff9df7.js",
    "revision": "61afee6db19c051e278846eb4ce0c430"
  },
  {
    "url": "assets/js/13.5abdf667.js",
    "revision": "6ef3a694af44669ed3adf283df3c8e86"
  },
  {
    "url": "assets/js/14.d5e5d4b2.js",
    "revision": "bdadb05a479e2ca7e49a1aeb98b92558"
  },
  {
    "url": "assets/js/15.e765798c.js",
    "revision": "8d1078cf82fc21399fb8910e9ef467b0"
  },
  {
    "url": "assets/js/16.2d11e117.js",
    "revision": "e9d109be4b9f22f4cddbe0cfb2360f5a"
  },
  {
    "url": "assets/js/17.0bcfba43.js",
    "revision": "c0e927c42d5d3828da8c2d99acf82e27"
  },
  {
    "url": "assets/js/18.1e388bac.js",
    "revision": "36be0df2ab157aee149055a42d59a7aa"
  },
  {
    "url": "assets/js/19.30540303.js",
    "revision": "fbf90d82e618e87c4c065b9fdadf2cd3"
  },
  {
    "url": "assets/js/2.81d7026f.js",
    "revision": "48f6c1fc80a5fca69f5086118217f910"
  },
  {
    "url": "assets/js/20.ba9a4b3b.js",
    "revision": "a5a06d70d5350d4302bb37e0462397f8"
  },
  {
    "url": "assets/js/21.8f2477ea.js",
    "revision": "52487f89e9aade8401fbd40601a98d7d"
  },
  {
    "url": "assets/js/22.be18565e.js",
    "revision": "52d96de6c15aa7a9673c13bc17f26fd8"
  },
  {
    "url": "assets/js/23.7ee16a6a.js",
    "revision": "9e65384713d3530dd9ccaa7a9a3f4de5"
  },
  {
    "url": "assets/js/24.79a3750a.js",
    "revision": "26e30291d2084f250af94e2f3ad7f038"
  },
  {
    "url": "assets/js/25.31627544.js",
    "revision": "cffaab2f09273e291bd2798988ac1a6f"
  },
  {
    "url": "assets/js/26.278d4982.js",
    "revision": "b232850d2b8b33f9f7f586ffc9d4a3fd"
  },
  {
    "url": "assets/js/27.9e9ce978.js",
    "revision": "6be9d246d886661024172e7ba8b73aac"
  },
  {
    "url": "assets/js/28.cbecf5c6.js",
    "revision": "e0c82a43674b28fee4874366cefab3a1"
  },
  {
    "url": "assets/js/29.f3daf399.js",
    "revision": "7f1778372ab791b66c60a4bde5594506"
  },
  {
    "url": "assets/js/3.e9b5f7e4.js",
    "revision": "4f7c06764db776bd56436ae6bd9d8eac"
  },
  {
    "url": "assets/js/4.156da50e.js",
    "revision": "9b33be6f9a178eb7fa852a0fd455ecd4"
  },
  {
    "url": "assets/js/5.ba1bc21f.js",
    "revision": "0317b18ed98d8051287743ca537c6d3a"
  },
  {
    "url": "assets/js/6.ba310156.js",
    "revision": "64f0f457ca8dd0bebb04f5dce083eadf"
  },
  {
    "url": "assets/js/7.e01425b3.js",
    "revision": "1547d377e6baac574b16fec5904eb8a6"
  },
  {
    "url": "assets/js/8.89d7c631.js",
    "revision": "b076d56ea6f9f1c8392901edfb6756db"
  },
  {
    "url": "assets/js/9.198abb1d.js",
    "revision": "8ea62f104fd270a9d4bc7fb1fa845092"
  },
  {
    "url": "assets/js/app.61647802.js",
    "revision": "da6303105239252f0323c73a21e76a0b"
  },
  {
    "url": "img/cat1.png",
    "revision": "6dd6dbdcdc5df9c524c67b8bb0188733"
  },
  {
    "url": "img/favicon.png",
    "revision": "36be070ca00461136b819c503b5986ff"
  },
  {
    "url": "img/ilovecoding1.png",
    "revision": "62146865aaea64c90bc562df849952f3"
  },
  {
    "url": "img/web.png",
    "revision": "c1718a647a4b41978bc8af6b0a3f41da"
  },
  {
    "url": "img/Xpoet1.png",
    "revision": "6dfb8ad64fd1198e54ea18a8478d0725"
  },
  {
    "url": "index.html",
    "revision": "66449b6876cb77f86ca105ff6ca526c8"
  },
  {
    "url": "pages/07d124/index.html",
    "revision": "316c8ed3dd228b1275f55f71f921bf3b"
  },
  {
    "url": "pages/11a23c/index.html",
    "revision": "c7fa601b5a929e97c872e63d90f3fea3"
  },
  {
    "url": "pages/18862c/index.html",
    "revision": "a90fee07503ca246f7c6cf47c5571d75"
  },
  {
    "url": "pages/1f68ca/index.html",
    "revision": "31eae65714a52259971439a6fdea655e"
  },
  {
    "url": "pages/4e9a71/index.html",
    "revision": "e8d16e5f161894a1f7acf226ddf3925a"
  },
  {
    "url": "pages/505274/index.html",
    "revision": "3b758bf18cb1f2e8766e1a7cd208b01a"
  },
  {
    "url": "pages/506103/index.html",
    "revision": "27da4f6f9f330c691f5f5489d28ace1d"
  },
  {
    "url": "pages/5d2f22/index.html",
    "revision": "9160bceaa3e46786c5e2046596e928ff"
  },
  {
    "url": "pages/64f260/index.html",
    "revision": "4f7ee9ddf2dc49630861ed66cf6bef14"
  },
  {
    "url": "pages/7adc5a/index.html",
    "revision": "df7fc1fa9b18b5d428676866394f2dda"
  },
  {
    "url": "pages/970900/index.html",
    "revision": "b073149c5aa3e6ef009ca93be47a35a6"
  },
  {
    "url": "pages/aa265c/index.html",
    "revision": "fe009e0cdabe7b15be9cde84e8636aa2"
  },
  {
    "url": "pages/c67e1c/index.html",
    "revision": "e96a3871154250d3973283661bfb4830"
  },
  {
    "url": "pages/e6b38e/index.html",
    "revision": "597f00ade791138b01068b0280e1d2cf"
  },
  {
    "url": "tags/index.html",
    "revision": "0ed1660207150db475dcb86c0ba62639"
  },
  {
    "url": "web/index.html",
    "revision": "cb4f6b473617079d8c4f899afc1f1d21"
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
