if(!self.define){let e,n={};const s=(s,c)=>(s=new URL(s+".js",c).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let r={};const o=e=>s(e,a),t={module:{uri:a},exports:r,require:o};n[a]=Promise.all(c.map((e=>t[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-5e12853a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next//static/media/movie.b14646fe.png",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/DHS9Lmr1mp6VxMGhcJCK1/_buildManifest.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/DHS9Lmr1mp6VxMGhcJCK1/_middlewareManifest.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/DHS9Lmr1mp6VxMGhcJCK1/_ssgManifest.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/127.1e1b7014dcb0a04d.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/152-97809a7f98e28985.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/154.c2b250c6804e4725.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/256.8bbd01ff955d05b4.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/352.90dd90ed75528855.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/358-51d29b154897846a.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/4-00c0af1861ec557e.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/896.9bffe08e7f3c286b.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/main-5796e195018e7200.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/_app-1763bacacf21c63c.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/index-7285f14b81ea8b9c.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/movie-2a44649152ba0876.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/movie/%5B...id%5D-73044bc387aba893.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/movie/%5Bcategory%5D-cd6a37ac904a87b7.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/server-sitemap.xml-aba7b4bfa21f7aa1.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/tv-2dca977ee617d485.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/tv/%5B...id%5D-a03b28ae54749cf9.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/pages/tv/%5Bcategory%5D-9297f4975f820b1c.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/chunks/webpack-4c6293f15a6f72ec.js",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/_next/static/css/c35b80af1bb00fca.css",revision:"DHS9Lmr1mp6VxMGhcJCK1"},{url:"/favicon.ico",revision:"62c486f9c4b20803339a1d418eceb120"},{url:"/icons/android-icon-144-144.png",revision:"bc6eba04441c5dca338ba1e1b4e988fb"},{url:"/icons/android-icon-192-192.png",revision:"fdd0be7d6ccb735ea73c03942dd52b57"},{url:"/icons/android-icon-48-48.png",revision:"71fd31f4ef68ae7f6495d0aaf3941ed5"},{url:"/icons/android-icon-512-512.png",revision:"fc38cc3ce80ed37f9497fae8b4c587c9"},{url:"/icons/android-icon-72-72.png",revision:"4c2d6a8654715d3a8670004583461fa6"},{url:"/icons/android-icon-96-96.png",revision:"f2c0f41ca77214abd65a3ec87a9c1bc2"},{url:"/icons/apple-icon-114x114.png",revision:"592c3b8f24ad9e50f010276ed31c08ea"},{url:"/icons/apple-icon-120x120.png",revision:"f88487db797cd68c1ca1615b38dac57c"},{url:"/icons/apple-icon-144x144.png",revision:"bc6eba04441c5dca338ba1e1b4e988fb"},{url:"/icons/apple-icon-152x152.png",revision:"9b8d4a8193fbbcc6f1f8aeca42d674d1"},{url:"/icons/apple-icon-180x180.png",revision:"36742bb10080a606b5474f1297745952"},{url:"/icons/apple-icon-57x57.png",revision:"402470202fb93443f0536375646dab2d"},{url:"/icons/apple-icon-60x60.png",revision:"09625cb688687a96905a2bfbe8c89cdb"},{url:"/icons/apple-icon-72x72.png",revision:"4c2d6a8654715d3a8670004583461fa6"},{url:"/icons/apple-icon-76x76.png",revision:"34aaf042e2e7d74b116b9d7b163c7f04"},{url:"/icons/apple-icon-precomposed.png",revision:"fdd0be7d6ccb735ea73c03942dd52b57"},{url:"/icons/apple-icon.png",revision:"41ab829034745da450f84097b4d394da"},{url:"/icons/favicon-16x16.png",revision:"f251adf55a15f7fb174743647d43b398"},{url:"/icons/favicon-32x32.png",revision:"80d8e3c844c96437311afb8c0f1b9b10"},{url:"/icons/favicon-96x96.png",revision:"f2c0f41ca77214abd65a3ec87a9c1bc2"},{url:"/icons/ms-icon-107x107.png",revision:"04ee8a6276231af9b87c1a177dc9c46e"},{url:"/icons/ms-icon-142x142.png",revision:"7686dd11365373bd5457b0f22bb0524a"},{url:"/icons/ms-icon-284x284.png",revision:"bd0d746a02ab65446bea57a779957042"},{url:"/icons/ms-icon-71x71.png",revision:"e47dd00dc1d044f799d62e1a9d40cc23"},{url:"/icons/ms-icon-89x89.png",revision:"fc8b9796686d21f78dd89dcb588eac0f"},{url:"/manifest.json",revision:"b70e08bf0455ccd92ec49c5b64c705dc"},{url:"/robots.txt",revision:"04c748d9f7ffc5829cebd1722f5349ad"},{url:"/sitemap-0.xml",revision:"262289381827921cde191dec24453558"},{url:"/sitemap.xml",revision:"dc310a30d4f6ceac286bd0d32e512ce6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
