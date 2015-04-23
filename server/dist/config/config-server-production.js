"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
"use strict";
var root = process.cwd();
exports["default"] = {
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
    memoryCapacity: 500,
    serverPath: root + "/server",
    ctrlPath: root + "/server/Controller",
    appPath: root + "/app",
    staticPath: root + "/app/static/",
    viewsPath: root + "/app/views/",
    templates: "html" };
module.exports = exports["default"];
//swig