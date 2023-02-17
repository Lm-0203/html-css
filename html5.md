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
    > 责任链模式：比如有一个事件执行队列，A -> B -> C, B 执行完会默认执行 C，所以如果要阻止 C 的执行，必须要在 B 事件里面，在 A 事件里面组织不好使

### 拖拽的组成

- 被拖拽的物体

```html
    <div class="a" draggable="true"></div>
    <script>
      var oDragDiv = document.getElementsByClassName("a")[0];
      // 拖拽开始 按下的一瞬间是不会触发事件的
      oDragDiv.ondragstart = function (e) {
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
      console.log("drop");
    };
  </script>
</body>
```
