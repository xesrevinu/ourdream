# ourdream 0.0.1

###采用babel编写es6版
***

###安装：
* node
* monogodb
* redis

```js
cd ${project}/public/ && bower install
```

###运行：

****

####先编译

开发环境：

```js
npm run build-watch
```

<<<<<<< HEAD
####新建一个tab，运行
=======
```js
nodemon  server/dist/app.js
```

部署：
>>>>>>> defbbcb4fe73c9128b98857d5b079f345e69bd89

```js
npm run dev

<<<<<<< HEAD
```

部署：

```js
npm run deploy
=======
```js
pm2 start server/dist/app.js -i 0
>>>>>>> defbbcb4fe73c9128b98857d5b079f345e69bd89
```