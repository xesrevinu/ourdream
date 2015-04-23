# ourdream

###采用babel编写es6版
***

###安装：
* node
* pm2


###运行：

****

####先编译

开发：

* ```
npm run build-watch
```

* ```
pm2 start server/dist/app.js --watch
```

部署：

* ```
npm run build
```

* ```
pm2 start server/dist/app.js -i 0
```

or

* ```
npm start
```