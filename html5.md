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

### ctx.strokeRect(x, y, width, height);

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

### ctx.clearRect(0, 0, 500, 300);

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
