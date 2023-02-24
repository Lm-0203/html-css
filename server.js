const express = require("express");

const app = new express();

app.use(express.static("./page")); // express 默认访问 index.html

app.listen(12345); // 端口号大于 8000 或者 等于 80，默认访问 80 端口

// node server.js
