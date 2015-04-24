# ourdream

###采用babel编写es6版
***

###安装：
* node
* pm2

```js
cd ${project}/public/ && bower install
```

###运行：

****

####先编译

开发：

```js
npm run build-watch
```

```js
pm2 start server/dist/app.js --watch
```

部署：

```js
npm run build
```

```js
pm2 start server/dist/app.js -i 0
```

or

```js
npm start
```