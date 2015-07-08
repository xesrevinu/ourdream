# Ourdream 0.0.1
[![build status][travis-image]][travis-url]

## Koa + React (webpack + Redux)

***

## 请先安装
 - node
 - mongodb

## 后端

### 安装依赖

```js
npm install
npm run bower //安装前端依赖
```

## 配置
采用config/config-server-{process.env.NODE_ENV}.js作为配置文件

***

## 测试
```js
npm run test
```

## 开发：

```js
npm run watch //npm run build
```

```js
npm run dev //启动服务,并监听文件该动,打开浏览器[http://localhost:3000][1]
```

### 发布:

```js
npm run deploy //编译文件,用pm2启动
```

## 前端

### 开发:

```js
npm run dev-hot // npm run build,open a browser input [http://localhost:4000][localhost]
```

### 发布:

```js
npm run deploy  // publish
```


[travis-image]:https://img.shields.io/travis/xiaokekeT/ourdream/master.svg?style=flat-square
[travis-url]:https://travis-ci.org/xiaokekeT/ourdream


  [1]: http://localhost:3000
