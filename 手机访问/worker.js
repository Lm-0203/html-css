// 不是加载完就执行，是接收到命令才执行

this.onmessage = function (e) {
  console.log(e);
  this.postMessage(123);
  // 结束worker
  this.close();
};
