'use strict'
const root = process.cwd();
export default {
    root: root,
    listenPort: 8080,
    template: "html",
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
    memoryCapacity:500,
    serverPath :root+"/server",
    ctrlPath:root+"/server/Controller",
    appPath:root+"/app",
    staticPath: root+"/app/static/",
    viewsPath:  root+"/app/views/",
    templates: "html",//swig
}