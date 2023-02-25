## input new type

兼容性都不怎么好

- Calendar 类

  - date
    - chrome 支持， safari ie 不支持
  - time
  - week
  - datetime-local

- number
- email
- color
- range
- search
- url
- submit

## contenteditable

布尔属性
没有兼容性问题
default value: false;

```html
<div contenteditable="true">panda</div>
```

这个属性是可以继承的，如果父级有设置，子级会自动继承，子级也可以设置自己的
但是这么做不好

```html
<div contenteditable="true">
  panda
  <br />
  <span>Monkey</span>
  <span contenteditable="false">Monkey</span>
</div>
```

## draggable

布尔属性
有兼容性问题

```html
<div class="a" draggable="true"></div>
```

a img, 这俩标签默认是可拖拽的

### 拖拽的生命周期

- 拖拽开始
- 拖拽进行中
- 拖拽结束
  - 所以的标签元素，当拖拽周期结束时，默认事件是回到原处，也就是会执行 ondragend
  - 可以在 ondragover 里面加一个阻止默认事件
    > 事件是有行为触发的，但是一个行为可以不止触发一个事件，比如鼠标按下，onclick，onmousedown 都会执行
    > 责任链模式：比如有一个事件执行队列，A -> B -> C, B 执行完会默认执行 C，所以如果要阻止 C 的执行，必须要在 B 事件里面，在 A 事件里面阻止不好使

### 拖拽的组成

- 被拖拽的物体

```html
    <div class="a" draggable="true"></div>
    <script>
      var oDragDiv = document.getElementsByClassName("a")[0];
      // 拖拽开始 按下的一瞬间是不会触发事件的
      oDragDiv.ondragstart = function (e) {
    e.dataTransfer.effectAllowed = 鼠标样式
        console.log(e);
      };
      // 移动事件
      oDragDiv.ondrag = function (e) {
        console.log(e);
      };
      // 拖拽结束
      oDragDiv.ondragend = function (e) {
        console.log(e);
      }
    </script>
  </body>
```

- 目标区域(目标元素)

```html
<body>
  <div class="a" draggable="true"></div>
  <div class="target"></div>
  <script>
    var oDragDiv = document.getElementsByClassName("a")[0];

    var target = document.getElementsByClassName("target")[0];
    // ondragenter 不是元素图形进入就出触发的，是鼠标进入目标范围才触发的
    target.ondragenter = function (e) {
      // console.log(e);
    };
    // 鼠标一旦进入目标区域就一直触发
    target.ondragover = function (e) {
      // console.log(e);
      // 在 ondragover 里面加 e.preventDefault 后面的 ondrop 才会执行
      e.preventDefault();
    };
    // 鼠标离开才会触发
    target.ondragleave = function (e) {
      // console.log(e);
    };
    target.ondrop = function (e) {
      e.dataTransfer.drapEffect = 鼠标样式;
      console.log("drop");
    };
  </script>
</body>
```

## 语意化标签

帮助我们理解结构，理解代码

- header
- footer
- nav
- article
- section
  - section 通常被放在 artical 的里面
- aside
  - 不常用

## canvas

### 画线

#### moveTo

```html
<body>
  <!-- canvas 要用行间样式 width height 设置宽高 -->
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    // 获取 canvas 的内容区, getContext 要传参数，不然画不出来
    var ctx = canvas.getContext("2d");

    // lineWidth 其实写到哪都相当于写道moveTo的后面
    ctx.lineWidth = 10;
    // 最好在每次开始之前都加一个 beginPath
    ctx.beginPath();
    // 起点，任何图形的起点，都是moveTo
    ctx.moveTo(100, 100);
    // 路径终点
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 100);
    // 图形闭合
    ctx.closePath();
    // 图形填充
    ctx.fill();
    // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色
    // 使用 strokeStyle 属性来绘制另一种颜色/渐变。
    ctx.stroke();
  </script>
</body>
```

#### beginPath

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.moveTo(100, 100);
    ctx.lineWidth = 10;
    ctx.lineTo(200, 200);
    ctx.stroke();
    ctx.beginPath();
    // 新起的路径也要写起始点
    ctx.moveTo(200, 200);
    ctx.lineWidth = 5;
    ctx.lineTo(200, 300);
    // 一定要写stroke
    ctx.stroke();
    // 这个时候写 closePath 就不会生效了。close 针对当前路线进行闭合
    // 因为 closePath 是针对同一个path
    // 但是现在相当于两个path
    // 第二条 path 只有一条线，也没法闭合，除非第二个path有最少两笔
    ctx.closePath();
  </script>
</body>
```

### 画矩形

#### ctx.rect(x, y, width, height)

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    // 左上定点的位置，+ 宽高
    ctx.rect(100, 100, 200, 100);
    ctx.stroke();
  </script>
</body>
```

#### ctx.fillRect(x, y, width, height)

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    // 不需要ctx.stroke();
    ctx.fillRect(100, 100, 200, 100);
  </script>
</body>
```

#### ctx.strokeRect(x, y, width, height)

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.strokeRect(100, 100, 200, 100);
  </script>
</body>
```

#### ctx.clearRect(0, 0, 500, 300)

清除之前动画的清除范围

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    var height = 100;
    var timer = setInterval(() => {
      ctx.clearRect(0, 0, 500, 300);
      ctx.fillRect(100, height, 50, 50);
      height += 5;
    }, 1000 / 30);
  </script>
</body>
```

### 画圆

#### 饼图

ctx.arc + ctx.lineTo + ctx.closePath 一起使用

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    // 圆心(x, y)，半径(r)，弧度(起始弧度，结束弧度)，方向(顺时针，逆时针)
    ctx.arc(100, 100, 50, 0, Math.PI / 2, 1);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.stroke();
  </script>
</body>
```

#### 圆角矩形

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    // B(x, y), C(x y) ,半径

    ctx.moveTo(100, 110);
    ctx.arcTo(100, 200, 200, 200, 10);
    ctx.arcTo(200, 200, 200, 100, 10);
    ctx.arcTo(200, 100, 100, 100, 10);
    ctx.arcTo(100, 100, 100, 200, 10);
    ctx.stroke();
  </script>
</body>
```

### 贝塞尔曲线

#### 二次 quadraticCurveTo(x2, y2, x3, y3)

moveTo 定第一个点的位置

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(100, 100);
    // quadraticCurveTo(x2, y2, x3, y3);
    ctx.quadraticCurveTo(200, 200, 300, 100);
    ctx.stroke();
  </script>
</body>
```

#### 三次 bezierCurveTo(x2, y2, x3, y3, x4, y4)

```html
<body>
  <canvas id="can" width="500px" height="300px"></canvas>

  <script>
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(100, 100);
    ctx.bezierCurveTo(200, 200, 300, 100, 400, 200);
    ctx.stroke();
  </script>
</body>
```

### translate rotate

对全局起作用

```html
  <body>
    <canvas id="can" width="500px" height="300px"></canvas>

    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");

      ctx.beginPath();

      // 移动画布的坐标中心
      // 注意是画布的坐标中心移动，但是画布的位置不会移动
      ctx.translate(100, 100);
      // rotate 的旋转中心是画布的顶点，也就是画布的坐标中心
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(0, 0);
      ctx.lineTo(100, 100);
      ctx.stroke();

    </script>
  </body>
```

### scale

对全局起作用

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>

    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");

      // ctx.beginPath();
      ctx.scale(1, 2);

      // 相当于：100 * 1, 100 * 2, 100 * 1, 100 * 2
      ctx.strokeRect(100, 100, 100, 100);

      ctx.scale(2, 1);
      // scale 会叠乘
      // 相当于：300 * 2, 300 * 2, 100 * 2, 100 * 2
      ctx.strokeRect(300, 300, 100, 100);
    </script>
  </body>
```

### save restore

可以保存坐标系的平移数据，缩放数据，旋转数据

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>

    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");
      // 在坐标轴变换之前先 save，保留画布变换之前的值
      ctx.save();
      ctx.beginPath();
      ctx.scale(1, 2);

      // 相当于：100 * 1, 100 * 2, 100 * 1, 100 * 2
      ctx.strokeRect(100, 100, 100, 100);

      ctx.beginPath();

      // 拿出画布变换之前的值
      ctx.restore();
      ctx.scale(1, 1);
      // scale 会叠乘
      // 相当于：300 * 1, 300 * 1, 100 * 1, 100 * 1
      ctx.strokeRect(300, 300, 100, 100);
    </script>
  </body>
```

### fillStyle

背景填充：可以填充颜色，也可以填充图片

#### 填充颜色

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>

    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");
      
      ctx.fillStyle = 'blue';
      ctx.fillRect(100, 100, 200, 100);
    </script>
  </body>
```

#### 填充图片 createPattern

纹理的填充，是从画布坐标系原点开始填充的

可以通过改变坐标系原点的位置，让图片从自己想要的位置，开始填充

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>
    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");

      var img = new Image();
      img.src = "./images/cat.jpeg";

      img.onload = function () {
        ctx.beginPath();
        const bg = ctx.createPattern(img, "no-repeat");
        ctx.fillStyle = bg;
        ctx.
        ctx.fillRect(0, 0, 200, 100);
      };
    </script>
  </body>
```

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>
    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");

      var img = new Image();
      img.src = "./images/cat.jpeg";

      img.onload = function () {
        ctx.beginPath();
        const bg = ctx.createPattern(img, "no-repeat");
        ctx.fillStyle = bg;
        ctx.translate(100, 100);
        ctx.fillRect(0, 0, 400, 400);
      };
    </script>
  </body>
```

### ctx.createLinearGradient(x1, y1, x2, y2)

线性渐变的起点也在画布坐标系的原点位置

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>
    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");

      ctx.beginPath();
      // 渐变范围的大小
      const bg = ctx.createLinearGradient(0, 0, 100, 100);
      // 第一个参数只能是0 - 1
      bg.addColorStop(0, 'white');
      bg.addColorStop(.5, 'green');
      bg.addColorStop(1, 'black');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 300, 300);
    </script>
  </body>
```

### ctx.createRadialGradient(x1, y1, r1, x2, y2, r2)

起始圆， 结束圆

两个圆的位置不同，战术出来的效果不同

### ctx.shadow

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>
    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");

      ctx.shadowColor = "blue";
      ctx.shadowBlur = "10";
      ctx.shadowOffsetX = '10';
      ctx.shadowOffsetY = '10';
      ctx.strokeRect(0, 0, 300, 300);
    </script>
  </body>
```

### 文字

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>
    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");
      ctx.font = '100px 宋体';

      // 文字描边，空心字
      ctx.strokeText('landa', 100, 100);

      // 文字填充
      ctx.fillText('moket', 200, 300);
    </script>
  </body>
```

### 线端样式 lineCap

```html
  <body>
    <canvas id="can" width="1000px" height="1000px"></canvas>
    <script>
      var can = document.getElementById("can");
      var ctx = can.getContext("2d");
      ctx.beginPath();

      ctx.moveTo(100, 100);
      ctx.lineTo(200, 200);
      ctx.lineWidth = 15;
      ctx.lineCap = "round"; // butt, square, round, 

      ctx.lineTo(200, 100);
      // 两条线相交的样式
      ctx.lineJoin = "bevel"; // round bevel miter
      // 防止过分尖锐
      ctx.moterLimit = 5;
      ctx.stroke();
    </script>
  </body>
```

## SVG

svg: 矢量图，放大不会失真，适合大面积的贴图，通常动画较少，图形较简单，用标签和css画
canvas: 适合用于小面积的绘图，适合动画（js 操作，方便计算）

### line

要写样式才可以显示出来

```html
  <style>
    line {
      stroke: black;
    }
    /* 像圆，椭圆，可以用这种方法调节样式 */
    polyline {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid" >
      <line x1="100" y1="100" x2="200" y2="200" ></line>
    </svg>
  </body>
```

### rect

```html
  <style>
    /* 像圆，椭圆，可以用这种方法调节样式 */
    rect {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid" >
      <!-- rx 是圆角 矩形会自动填充 -->
      <rect width="100" height="20" x="10" y="10" rx="10" />
    </svg>
  </body>
```

### circle

```html
  <style>
    /* 像圆，椭圆，可以用这种方法调节样式 */
    circle {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid" >
      <!-- r: 半径，cx：圆心到x轴的距离，cy：圆心到y轴的距离 -->
      <circle r="50" cx="100" cy="100" />
    </svg>
  </body>
```

### ellipse

```html
  <style>
    /* 像圆，椭圆，可以用这种方法调节样式 */
    ellipse {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid" >
      <!-- rx: x轴半径，ry：y轴半径，cx：圆心到x轴的距离，cy：圆心到y轴的距离-->
      <ellipse rx="100" ry="30" cx="200"  cy="100"></ellipse>
    </svg>
  </body>
```

### polyline

```html
  <style>
    /* 像圆，椭圆，可以用这种方法调节样式 */
    polyline {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid" >
      <!-- 折线 -->
      <polyline points="0 0, 50 50, 50 100, 100 100"></polyline>
    </svg>
  </body>
```

### polygon

```html
  <style>
    /* 像圆，椭圆，可以用这种方法调节样式 */
    polyline,
    polygon {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid">
      <polyline points="0 0, 50 50, 50 100, 100 100"></polyline>

      <!-- 多边形 -->
      <!-- 会自动把收尾相连，如果选择填充的话，效果和polyline 是一样的 -->
      <polygon points="0 0, 50 50, 50 100, 100 100"></polygon>
    </svg>
  </body>
```

### text

```html
  <style>
    /* 像圆，椭圆，可以用这种方法调节样式 */
    text,
    polyline,
    polygon {
      /* 改变填充的颜色 */
      fill: transparent;
      /* 边框的样式 */
      stroke: lightblue;
      /* 边线的宽 */
      stroke-width: 3px;
    }
  </style>
  <body>
    <svg width="300" height="500" style="border: 1px solid">
      <text x="100" y="100">abc</text>
    </svg>
  </body>
```

### path

连续运动

```html
<style>
  /* 像圆，椭圆，可以用这种方法调节样式 */
  path {
    fill: transparent;
    /* 边框的样式 */
    stroke: lightblue;
    /* 边线的宽 */
    stroke-width: 3px;
    stroke-linecap: butt;
    stroke-linejoin: bevel;
  }
</style>
<body>
  <svg width="300" height="500" style="border: 1px solid">
    <!-- 大写字母表示绝对位置，根据 svg 的坐标轴定位 -->
    <!-- M -> moveTo(100, 100) -->
    <!-- L -> lineTo(200, 200) -->
    <!-- 小写表示相对位置，根据上一个点的坐标进行定位 -->
    <path d="M 100 100 L 200 200 l 0 100"></path>
  </svg>
</body>
```

```html
<style>
  /* 像圆，椭圆，可以用这种方法调节样式 */
  path {
    fill: transparent;
    /* 边框的样式 */
    stroke: lightblue;
    /* 边线的宽 */
    stroke-width: 3px;
    stroke-linecap: butt;
    stroke-linejoin: bevel;
  }
</style>
<body>
  <svg width="300" height="500" style="border: 1px solid">
    <!-- 大写字母表示绝对位置，根据 svg 的坐标轴定位 -->
    <!-- M -> moveTo(100, 100) -->
    <!-- L -> lineTo(200, 200) -->
    <!-- 小写表示相对位置，根据上一个点的坐标进行定位 -->
    <path d="M 100 100 L 200 200 l 0 100"></path>
  </svg>
</body>
```

```html
<style>
  /* 像圆，椭圆，可以用这种方法调节样式 */
  path {
    fill: transparent;
    /* 边框的样式 */
    stroke: lightblue;
    /* 边线的宽 */
    stroke-width: 3px;
    stroke-linecap: butt;
    stroke-linejoin: bevel;
  }
</style>
<body>
  <svg width="300" height="500" style="border: 1px solid">
    <!-- 大写字母表示绝对位置，根据 svg 的坐标轴定位 -->
    <!-- M -> moveTo(100, 100) -->
    <!-- L -> lineTo(200, 200) -->
    <!-- 小写表示相对位置，根据上一个点的坐标进行定位 -->
    <path d="M 100 100 L 200 200 l 0 100"></path>
  </svg>
</body>
```

```html
<style>
  /* 像圆，椭圆，可以用这种方法调节样式 */
  path {
    fill: transparent;
    /* 边框的样式 */
    stroke: lightblue;
    /* 边线的宽 */
    stroke-width: 3px;
    stroke-linecap: butt;
    stroke-linejoin: bevel;
  }
</style>
<body>
  <svg width="300" height="500" style="border: 1px solid">
    <!-- M -> moveTo(100, 100) -->
    <!-- H -> 水平移动到什么位置 -->
    <!-- V -> 垂直移动到什么位置 -->
    <!-- Z 代表闭合 -->
    <path d="M 100 100 H 200 V 50 Z"></path>
    <!-- 画弧 -->
    <!-- 起点，x半径，y半径，旋转角度，大弧还是小弧，顺时针/逆时针，终点 -->
    <path d="M 100 100 A 100 50 0 0 1 100 300"></path>
  </svg>
</body>
```

### linearGradient feGaussianBlur

```html
  <svg width="300" height="500" style="border: 1px solid">
    <!-- 定义, 要写到 defs 标签里 -->
    <defs>
      <!-- 定义渐变 -->
      <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 0)"></stop>
        <stop offset="100%" style="stop-color: rgb(255, 0, 0)"></stop>
      </linearGradient>
      <!-- 高斯滤镜 -->
      <filter id="gaussian">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20"></feGaussianBlur>
      </filter>
    </defs>
    <rect
      width="100"
      height="100"
      x="10"
      y="10"
      rx="5"
      style="fill: url(#bg1); filter: url(#gaussian)"
    ></rect>
  </svg>
```

### 虚线

```css
  line {
    stroke: lightblue;
    stroke-width: 10px;
    /* 可是当数组来用 */
    /* 线段会按照数组的顺序 显示填充区域和空白区域的长度 */
    stroke-dasharray: 10px 20px;
    /* 虚线偏移，正值，向左偏移 */
    stroke-dashoffset: 20px;
  }
```

### viewBox 比例尺

```html
  <svg
    width="300"
    height="500"
    style="border: 1px solid"
    viewBox="0, 0, 150, 250"
  >
    <line x1="100" y1="100" x2="200" y2="200"></line>
  </svg>
```

### 属性

```css
  polygon {
    /* 改变填充的颜色 */
    fill: transparent;
    /* 填充的半透明 */
    fill-opacity: .3;
    /* 边框的样式，如果不设置边框样式，没有边框 */
    stroke: lightblue;
    /* 边框的半透明 */
    stroke-opacity: .3;
    /* 在原来长度的基础之上，额外加了一个长度 */
    stroke-linecap: butt;
    /* 两条线相交的地方 */
    stroke-linejoin: bevel;
    /* 边线的宽, 线加粗的时候，是一半一半的，一半在里，一半在外 */
    stroke-width: 3px;
  }
```

## 获取地理信息

定位 GPS
台式机几乎都没有GPS
笔记本绝大多数都没有GPS
智能手机大部分都有

没有GPS的情况下，进行网络定位

在 https 协议，和 file 协议 下可以获取
回调函数执行需要时间
可当前浏览器也有关系，比如用 谷歌浏览器，因为中国不能访问谷歌，所以获取不到地理信息位置

```js
  window.navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
  });
```

posotion 有当前网络的经纬度，

## deviceorientation

```js
  // 手机里面有一个设备：陀螺仪
  // 只有支持 陀螺仪 的设备，才支持体感
  // 苹果设备的页面，只有在https协议的情况下，才能使用这些接口
    
  window.addEventListener("deviceorientation", function (event) {
    console.log(event);
  });

  window.addEventListener("deviceorientation", function (event) {
    document.getElementById("main").innerHTML =
      "alpha: " +
      event.alpha +
      ", " +
      "beta: " +
      event.beta +
      ", " +
      "gamma: " +
      event.gamma; 
  });
```

### event 属性

- alpha: 指北 [0, 360),当为0的时候，指北，180，指南
- beta: 手机平放时，beta 值为 0。如果将手机立起来（短边接触桌面），直立的时候 beta 的值为 90 或者 -90。正着立起来就是 90，倒着立起来时 -90。
- gamma: 手机平放时，gamma 值为 0。如果将手机立起来（长边接触桌面），直立的时候 gamma 的值为 90 或者 -90。正着立起来(顺时针转)就是 90，倒着立起来(逆时针转)时 -90。

### 手机访问电脑

1. 手机和电脑在同一个局域网下
2. 获取电脑ip地址

- mac

  - 打开命令框，输入 ```ifconfig```, 会返回很多参数, 找 **inet**, 有一个 127.0.0.1 是本机，还有一个值，就是ip地址
    - 过滤的命令: ```ifconfig |grep "inet"```
  - 打开系统偏好设置 -> 网络 -> 已连接

- window
  - 打开命令框，输入 ```ipconfig```。 如果连的是网线，看以太网适配器；如果用无线，看无线局域网适配器，IPv4地址。 有了ip地址还是访问不了，进入控制面板 -> 网络和internet -> 系统和安全 -> 防火墙 -> 该关的都关了

3. 在手机浏览器上输入相应的ip和端口进行访问

## devicemotion

```js
  // 手机摇一摇
  window.addEventListener("devicemotion", function (event) {
    // 三个方向的加速度
    document.getElementById("main").innerHTML =
      event.acceleration.x +
      ", " +
      event.acceleration.y +
      ", " +
      event.acceleration.z;

    if (
      Math.abs(event.acceleration.x) > 9 ||
      Math.abs(event.acceleration.y) > 9 ||
      Math.abs(event.acceleration.z) > 9
    ) {
      console.log("在晃");
    }
  });
```

## requestAnimationFrame

使用时要考虑兼容性

屏幕刷新的频率: 每秒60次
如果变化在一秒内超过60次，必然会有一些动画帧会被丢掉

因为 requestAnimationFrame 是每秒 60 帧, 每一帧的执行时间要少于 1/60 帧。requestAnimationFrame 可以准时执行每一帧。但是 setInterval / setTimeout 会把整体的执行时间拉长。

```js
  var timer = null;
  function move() {
    var square = document.getElementsByClassName("main")[0];
    if (square.offsetLeft > 700) {
      cancelAnimationFrame(timer);
      return;
    }
    console.log('square.style.left: ', square.style.left);
    square.style.left = square.offsetLeft + 20 + "px";
    timer = requestAnimationFrame(move);
  }
  move();
```

```js
  function move() {
    var square = document.getElementsByClassName("main")[0];
    if (square.offsetLeft > 700) {
      return;
    }
    square.style.left = square.offsetLeft + 20 + "px";
    requestAnimationFrame(move);
  }
  // setInverval 有自己的执行队列，上一个任务执行完才会执行下一个，所以整体时间，60 帧执行完的整体时间，可能会大于1秒
  setInterval(move, 1000 / 60);
```

### 处理兼容性

```js
  window.cancelAnimationFrame = function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  };

  window.requestAnimationFrame = function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (id) {
        window.setTimeout(id, 1000 / 60);
      }
    );
  };
```

## localStorage + sessionStorage

- cookie: 每次请求都有可能传送很多没用的东西到后端。存储的内容比较少，4k。

- localStorage: 只能存储字符串, 适合长期存放在浏览器的，无论窗口打开还是关闭，都需要存储。 在发送请求时不会把数据带上，可以存放较多的内容，5M 左右。每一个域都有自己的localStorage。同协议，同端口，同端口称为一个域。
- sessionStorage: 这次会话临时需要存储的变量，下次会话就没有用了。每一次窗口关闭的时候，sessionStorage 会自动清空。在发送请求时不会把数据带上

```js
  localStorage.name = "panda";

  // 如果对象属性直接存，会调用对象的 toString 方法
  localStorage.arr1 = [1, 2, 3]; // 1, 2, 3
  localStorage.arr = JSON.stringify([1, 2, 4]);

  // [object Object]
  localStorage.obj1 = {
    name: "cheng",
    age: 12,
  };

  localStorage.obj = JSON.stringify({
    name: "cheng",
    age: 12,
  });
  console.log(JSON.parse(localStorage.obj));

  // 另一种读写方法
  localStorage.setItem('name', 'cheng');
  localStorage.getItem('name');
  localStorage.removeItem('name');
```

## history

为了网页的性能，大多都是单页面操作
没听明白
困了，不想听了

## worker

js 都是单线程的。
worker 是多线程的，是真的多线程，不是伪多线程
worker 不能操作dom，没有window对象，不能读取文件，可以发 ajax，可以计算

```js
  var a = 10000;
  var result = 0;
  // 创建worker对象。
  // 在理论上可以在worker文件里面创建worker，但是没有一款浏览器支持
  var worker = new Worker("./worker.js");
  // worker 和主线程都是用 postMessage 发消息
  worker.postMessage({ num: a });
  for (var i = 0; i < a; i++) {
    result += 1;
  }
  // 用 onmessage 接收消息
  worker.onmessage = function (e) {
    console.log(e.data);
  };
  console.log("=======");
  console.log("=======");

  // 结束worker
  worker.terminate();
```
