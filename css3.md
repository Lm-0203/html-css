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
*/
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


#### background-repeat
no-repeat: 不平铺
round