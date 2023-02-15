reference manual website: http://css.doyoe.com

Authoritative inquiry website: http://www.caniuse.com

预处理器（pre-processor）：less/sass cssNext

后处理器（post-processor）：

### 一些选择器

```css
#red,
#green,
#gray {
  width: 100%;
  height: 100%;
}
#red {
  background-color: #f20;
}
#green {
  background-color: green;
}
#gray {
  background-color: gray;
}
div[id]:not(:target) {
  display: none;
}

/* location.hash = XXX */
/* 哪个div的id变成location.hash的值了，哪个div的状态 */
div:target {
  background: red;
}
div.button-wrapper {
  position: fixed;
  width: 600px;
  top: 400px;
}

div.button-wrapper a {
  text-decoration: none;
  color: #fff;
  background-color: lightcoral;
  font-size: 30px;
  border-radius: 3px;
  margin: 0 10px;
}

div :first-child {
  background-color: red;
}

div span:only-child {
  background-color: goldenrod;
}
```

```html
<div>
  <p>only child</p>
</div>
<div>
  <span>3</span>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
<div>
  <span>only child</span>
</div>
<a href="#box1">box1</a>
<a href="#box2">box2</a>
<div id="box1">box1</div>
<div id="box2">box2</div>
<div class="button-wrapper">
  <a href="#red" class="bgred">red</a>
  <a href="#green" class="bggreen">green</a>
  <a href="#gray" class="bggray">gray</a>
</div>
<div id="red"></div>
<div id="green"></div>
<div id="gray"></div>
```

### box-shadow

阴影在文字的上面，在背景颜色的上面

```css
div {
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: #fff;

  box-shadow: 0px 0px 51px 42px #fff, 0px 0px 200px 150px #ff0;
}
```

```css
div {
  position: absolute;
  height: 300px;
  width: 300px;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  border-radius: 50%;

  box-shadow: inset 0px 0px 30px #fff, inset 10px 0px 80px #f0f,
    inset -10px 0px 80px #0ff, inset 10px 0 100px #f0f,
    inset -10px 0px 100px #0ff, 0px 0px 50px #fff, -10px 0 80px #f0f, 10px 0
      80px #0ff;
}
```

```css
div {
  position: absolute;
  height: 100px;
  width: 100px;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  transition: all 0.6s;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}

div::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.6s;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

div:hover {
  transform: scale(1.25, 1.25);
}

div:hover::after {
  opacity: 1;
}
```

### border-color

```css
div {
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-style: solid;
  color: red;
  /* 中转颜色值，没有border设置颜色的时候，默认值是currentColor */
  /* currentColor的值，默认是黑色，如果设置了文字颜色，也就是color属性，那么和color的属性的属性值保持一直 */
  /* border-color: currentColor; */
}
```

### border-image

```html
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    :root,
    body {
      height: 100%;
    }

    div {
      width: 100px;
      height: 100px;
      border: 10px solid black;
      /* 支持渐变色 */
      /* liner-gradient: 线性渐变 */
      /* radial-gradient: 径向渐变 */
      border-image-source: linear-gradient(red, yellow);
      border-image-slice: 10;
    }

    .div2 {
      width: 100px;
      height: 100px;
      border: 60px solid black;
      /* 支持渐变色 */
      border-image-source: url(html+css笔记/images/border.jpg);
      /* 可以有4个值，相当于有4条分割线 上右下左，直接写数值， 默认值是100% */
      /* 100% 只会展示4个角 */
      /* fill 会把内容区域填充 */
      border-image-slice: 80 170 90 170 fill;
      /* 让背景图片往外延申 */
      border-image-outset: 100px;
      /* 设置border里面图片所占的宽度 */
      /* 比如border-width是100px，border-image-width 是50px，border image 只会占border宽度的一半 */
      /* 默认值是1，auto 是 slice 的值加px，纯数字是 数字 × border-width + px，纯数字是倍数 */
      border-image-width: 50px;
      /* stretch(default value) round repeat space */
      /* 支持写两个参数 先水平 后垂直 */
      border-image-repeat: round;
    }
  </style>
</head>

<body>
  <div></div>
  <div class="div2"></div>
</body>
```

### background

#### background-image

##### 使用渐变颜色

```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid black;
  /* 支持渐变色 */
  /* 渐变生成器有两种 */
  background-image: linear-gradient(red, yellow);
}
```

##### 背景图片

可以写多个背景图片

```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid black;
  /* 支持渐变色 */
  /* 渐变生成器有两种 */
  background-image: url(./html+css笔记/images/font.PNG),
    url(./html+css笔记/images/font_2.PNG);
  /* 这是两张背景图片的size，逗号前面是第一张的size，逗号后面是第二张的size */
  /* 第一个值是width，第二个值是height */
  background-size: 100px 200px, 100px 200px;
  /* 这是两张背景图片的position，逗号前面是第一张的position，逗号后面是第二张的position */
  /* 第一个值是水平位置，第二个值是垂直位置 */
  background-position: 0 0, 100px 0;
  background-repeat: no-repeat;
}
```

#### background-origin

图片是从哪里开始渲染的
而且这个值只规定背景图是从哪里开始渲染的，不规定从哪里开始结束
有三个值：border-box padding-box(default value) content-box
和 background-repeat background-position background-clip 配合使用
相对于哪个位置开始渲染，background-position 就是相对于哪一部分左顶点开始定位

#### background-clip

图片从哪里结束渲染
设置的从哪里开始截断，就是从那个部位以外的地方不会显示背景图片
有四个值：border-box(default value) padding-box content-box text
比如设置为 padding-box，padding 以外的地方不会显示背景图片，也就是 border 的部分不会显示
设置为 text，显示文字的区域才会显示背景图片，而且是文字笔画区域才由，一个文字的空白区域没有
但是如果把值设置成 test，需要配置一个属性：text-fill-color： transparent

```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid black;
  /* 支持渐变色 */
  /* 渐变生成器有两种 */
  background-image: url(./html+css笔记/images/font.PNG);
  /* webkit 独有样式 */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

```css
body {
  background-color: #000;
}
div {
  position: absolute;
  left: calc(50% - 250px);
  top: 100px;
  font-size: 60px;
  font-weight: bolder;
  transition: all 2s;
  background-image: url(./images/sharingan.png);
  background-size: 240px;
  background-position: -240px;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 10px 10px 3px #ddd1;
}

div:hover {
  background-position: 0px;
}
```

#### background-repeat

no-repeat: 不平铺
round: 平铺 + 拉伸或者压缩，取决于盒子的剩余空间能不能放下一张图
space: 不会压缩图片改变图片的大小，不能放下一一张图片的区域用空白填充
repeat-x
repeat-y

也可以设置多个值

```css
div {
  /* 第一个值表示水平方向，第二值表示垂直方向 */
  /* 但是repeat 相关的值只能写一个，因为一个值就代表俩， */
  /* repeat-y : no-repeat repeat */
  /* 所以写两个值话，只能 round space 互换，round space 和 repeat 相关的值搭配都不好使 */
  background-repeat: round space;
}
```

#### background-attachment

改变图片的定位属性

- fixed: 相对于可视区窗口进行定位。但是不能在容器以外显示。
- local: 相对于容器的真实内容高度进行定位。比如容器 height 300px， 内容 height 500px，滚动容器的时候，背景图会随着容器一起滚动
- scroll: default value, 相对于容器进行定位。和 positon: fixed 类似，无论容器有没有滚动条，不会随着滚动条滚动

```css
div {
  border: 1px solid red;
  height: 700px;
  width: 500px;
  overflow: scroll;
  background-image: url(images/cat.jpeg);
  background-size: 300px 400px;
  background-repeat: no-repeat;
  background-position: 100px 100px;
  background-attachment: local;
}
```

#### background-size

cover 和 contain 都是用一张图来填充背景,都是等比例缩放图片
cover 用一张图片填充容器，让一张图片完完整的把容器填充满, 并且是宽高等比例放大，也就是不改变图片的原始比例，有图片超出容器的情况存在，超出部分肯定会隐藏
contain 在不改变图片的比例下，让容器完整的显示图片，有 repeat 的情况存在。如果设置的 no-repeat， 会有容易不能被填满的情况存在。肯定会有图片的一条边和容器完全对齐，不会有 repeat 多张的情况存在

### linear-gradient

第一个值写方向，可以是 top，bottom，right，left，或者这四个值两两组和， top right 等等。

```css
div {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(to right, #0f0, #ff0);
}
```

第一个值也可以是角度
0deg -> 从下到上
90deg -> 从左到右
180deg -> 从上到下
270deg -> 从右到左
感觉是 从 0 -> 360 是 一个向上的箭头，顺时针旋转一圈，箭头方向，表示渐变的方向

```css
div {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(270deg, #0f0, #ff0);
}
```

颜色值可以是两个值，第一个值是色值(只要是颜色值就可以，透明色 transparent 也可以)，第二个值是色值的结束位置, 也是下一个色值的开始位置，或者是开始有渐变的位置。
如果到了色值的结束位置，但是后面没有其他颜色，容器也没有填满，当前色值会继续填充，直到把容器填满

```css
div {
  width: 200px;
  height: 200px;
  /*  */
  background-image: linear-gradient(90deg, #0f0 20px, #ff0 30px, #f00 50px);
}
```

### radial-gradient

第一个值可以是圆心的位置，默认是在正中间
ellipse farthest-corner at 50px 50px
ellipse | circle
farthest-corner | farthest-side | closest-corner | closest-side
50px 50px | 百分数 | top bottom right left 代替

```css
div {
  width: 200px;
  height: 200px;
  background-image: radial-gradient(
    ellipse farthest-corner at 50px 50px,
    #abc,
    #acc,
    #989
  );
}
```

### text-shadow

<!-- x y blur color -->

#### 浮雕 + 镂刻

```css
body {
  background-color: #ccc;
}
.div1 {
  position: absolute;
  left: calc(50% - 250px);
  top: 100px;
  width: 500px;
  height: 200px;
  font-size: 60px;
  color: #ccc;
  text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;
}
.div2 {
  position: absolute;
  left: calc(50% - 250px);
  top: 200px;
  width: 500px;
  height: 200px;
  font-size: 60px;
  color: #ccc;
  text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;
}
```

### -webkit-text-stroke 描边

```css
body {
  background-color: #000;
}
div {
  position: absolute;
  left: calc(50% - 250px);
  top: 200px;
  font-size: 100px;
  font-weight: bolder;
  transition: all 0.6s;
  -webkit-text-stroke: 1px red;
}
```

### column

```css
div {
  column-count: 3;
  column-gap: 30px;
  column-rule: 1px solid;
}
p {
  color: red;
  /* column-span: all; */
  padding: 10px 0;
  -webkit-column-break-before: always;
}
```

### box

#### box-sizing: content-box

常规模式下(w3c 标准模式下):
boxWidth = width + border*2 + padding*2

#### box-sizing: border-box

ES6 混杂模式(怪异模式)下，
boxWidth = width(在 css 中设置的 width)，
contentWidth = width - border*2 - padding *2

### display: flex

#### flex-grow

当主轴方向还有剩余空间时，剩余空间根据 每一个 item 设置的比例分配
默认值是 0

#### flex-shrink

如果全部的宽度超出容器，并且不换行的话，每一个 item 会有缩减
默认值是 1
计算方法
200(width) * 1(flex-shrink) + 200(width) * 1(flex-shrink) + 400(width) * 3(flex-shrink) = 1600 (加权值)
加权值计算时，不是用的盒子的真实宽度，是用的内容区的宽度。

200 * 1
------- * 200(超出容器的宽度) = 25px(应该缩小的宽度)
 1600

200 * 1
------- * 200(超出容器的宽度) = 25px(应该缩小的宽度)
 1600

400 * 3
------- * 200(超出容器的宽度) = 150px(应该缩小的宽度)
 1600

#### flex-basis

默认值是 auto

- 在元素没有设置宽度的时候，flex-basis 代表元素的最小宽度，元素会被内容撑开
- 在元素设置宽度是，设置的宽度是元素宽度的上限。
  - width: 200px, flex-basis: 100px, 元素最小宽度是 100px，最多增长到 200px;
  - width: 200px, flex-basis: 300px, 元素还是 200px;

如果 item 只设置了 flex-basis，但是没有

### transition

复合属性，可以这样写：width 2s, height 1s,
或者 all 3s,

#### transition-property

用来监听到底要监听哪个属性的状态改变

- all: 监听所有具有动画改变的属性
- 填写特定的属性：width, herght ....

#### transiton-duration

动画完成的时间

#### transition-timing-function

指定动画的运动状态

#### transition-delay

动画延迟多长时间执行

#### cubic-bezier

(x1, y1, x2, y2)
用曲线表示一个运动状态
起点 + 终点 + (n - 1)个控制点
如果斜率小于 0 的话，方向是负的。

### animation

#### @keyframes

关键帧容器
可以两个关键帧作用到同一个容器上

```css
div {
  /* 第一个属性值：关键帧名字，独一无二 */
  /* 第二个属性值：运动时间，根据关键帧的步骤平均分配 */
  /* 第三个属性指：运动状态, 运动状态会作用于每一帧，比如是先快后慢，0 - 25 快到慢，25 - 50 快到慢 等等等等 */
  animation: run 4s cubic-bezier(), colorChange 4s;
}
@keyframes run {
  /* 0% 可以换成 from */
  0% {
    left: 0;
    top: 0;
  }
  25% {
    left: 100px;
    top: 0;
  }
  50% {
    left: 100px;
    top: 100px;
  }
  75% {
    left: 0;
    top: 100px;
  }
  /* 100% 可以换成 to */
  100% {
    left: 0;
    top: 0;
  }
}
@keyframes colorChange {
  from {
    background-color: red;
  }
  60% {
    background-color: green;
  }
  to {
    background-color: black;
  }
}
```

#### animation-iteration-count

动画执行次数
一旦动画开始都算作一个完整动画，所以延迟只会在刚开始会执行。
infinite | number
默认值：1

#### animation-direction

关键帧执行方向
从 0% -> 100% 或者 100% -> 0%
有一个值是 alternate, 代表正着来一次，倒着来一次，所以关键帧执行次数，必须大于等于 2

#### animation-fill-mode

default value: none : 原始状态，不是 第一帧(0%)， 也不是最后一帧(100%)

- both: 设置对象状态为结束或者开始时的状态 动画开始时是第一帧(0%)，结束后是最后一帧(100%)
- backwards: 设置对象状态为开始时的状态, 也就是第一帧的状态(0%)
- forwards: 设置对象状态为结束时的状态, 也就是最后一帧的状态(100%)

#### animation-timing-function

- step

```css
* {
  margin: 0;
  padding: 0;
}

@keyframes change-color {
  0% {
    background-color: red;
  }
  25% {
    background-color: green;
  }
  50% {
    background-color: aqua;
  }
  75% {
    background-color: antiquewhite;
  }
  100% {
    background-color: yellowgreen;
  }
}

div {
  height: 100px;
  width: 100px;
  background-color: red;
  /* steps 的步数，是从一帧跳到另一帧需要多少步来实现 */
  /* start：丢的是第一帧，保留下一帧状态，直到这段动画结束 */
  /* end：丢的是最后一帧，保留当前帧状态，知道这段动画时间结束 */
  /* steps(1, end) === step-end */
  /* steps(1, start) === step-start */
  animation: change-color 4s steps(1, end) forwards;
}
```
