import clc from 'cli-color'
const root = process.cwd()
const env = process.env.NODE_ENV || 'development'
export default {
  debug: true,
  root: root,
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
    root: root + "/public/dist/",
    cache: false
  },
  static: {
    path: root + "/public/",
    options: {
      maxAge: null
    }
  },
  compress: {
    // 默认压缩
    level: "Z_DEFAULT_COMPRESSION"
  },
  serverPath: root + "/server/dist",
  publicPath: root + "/public/",
	ctrlPath: root + '/server/dist/controller',
	apiPath:root + '/server/dist/api',
  favicon: root + "/public/favicon.ico",
  cliColor: {
    filters: {
      log: clc.black.bgWhite,
      trace: clc.magenta,
      debug: clc.cyan,
      info: clc.green,
      warn: clc.xterm(202).bgXterm(236),
      error: clc.red.bold
    }
  }
};
