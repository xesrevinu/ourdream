const root = process.cwd();
export default {
  debug: true,
  listenPort: 3000,
  keys: ['koa secret secret'],
  mongo: {
    host: "mongodb://localhost/",
    database: "ourdream",
    user: "",
    pass: ""
  },
  redis: {
    host: "localhost",
    port: 6379,
    db: "",
    pass: ""
  },
  session: {
    //defer: true,
    cookie: {
      path: '/',
      httpOnly: true,
      maxage: 24 * 60 * 60 * 3,
      rewrite: true,
      signed: true
    }
  },
  view: {
    ext: 'html',
    root:root + "/public/views/",
    cache:false
  },
  static: {
    path: root + "/public/",
    options:{
      maxAge: 0
    }
  },
  compress:{
    // 默认压缩
    level:"Z_DEFAULT_COMPRESSION"
  },
  serverPath: root + "/server/dist",
  publicPath: root + "/public",
  favicon: root + "/public/favicon.ico"
};
