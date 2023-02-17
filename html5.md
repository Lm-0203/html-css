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
