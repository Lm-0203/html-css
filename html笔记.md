
```html
> lorem :乱数假文，没有任何实际含义的文字；
> HTML5弃用了行级元素，块级元素这一说法，
        根据W3C官方标准的内容：行级、块级表示的是显示效果，应该是css中的内容
<pre> ：预格式化文本
        在<pre>元素内部出现的内容，会按照源代码格式出现在页面中；
        该元素通常用于在网页中显示一些代码；
        pre元素功能的本质：有一个默认的css属性（white-space：pre）；
<code> : 表示页面上显示的代码区
        语义化更好
<strong> : 表示重要的不能忽视的内容
<em> : 表示强调的内容
<s> : 已经过期的信息（淘宝价钱）
<del> : 错误的信息（错别字）
<img> ：有一个属性object-fit，默认属性值是fill

```

# HTML实体

    实体字符：HTML Entiyt ($lt; $gt;)
             通常用于在页面中显示一些特殊符号
             1. $单词;
             2. $#数字;

# 路径的写法

## 站内资源和站外资源

站内资源：当前网站的资源；（相对路径）
站外资源：非当前网站的资源；（绝对路径）

## 绝对路径和相对路径

    绝对路径的书写格式：

        协议名://主机名:端口号/路径
        schema://host:port/path
        https://www.baidu.com/s

        协议名：http、https、file；（当跳转目标和当前页面的协议相同时，可以省略协议）
        主机名：域名、IP地址；
        端口号：如果协议是http协议，默认端口号80；如果协议是https协议，默认端口号为443；（默认端口显示是会忽略）

# img元素

    与<a>、<map>、<figure>联用

 ```html
    了解map元素的用法
    <img usemap="#map" src="" alt="">
 <map name="map">
  <area shape="" coords="" href="" alt="" target="">
    </map> 
    坐标：从图片的顶点开始量取
        圆（circle）：圆心，半径；
        矩形（）：左上角，右下角；
        多边形（poly）: 依次描述每一个点的坐标
```

```html
    figure:指代、定义。通常用于把图片、图片标题、描述包裹起来；
    <figure>
        <figcaption><h2>指代整个figure元素的标题</h2></figcaption>
  <p>
  </p>
  <img src="" alt="">
  <map name=""></map>
  <p></p>
    </figure>
 ```

# 多媒体元素

## video 视频

```html
<video src="" controls autoplay muted loop></video>
视频格式有要求（mp4、webm）
controls属性：控制控件的显示，取值只能是controls（布尔属性）；
autoplay属性：自动播放（布尔属性）；
muted属性：静音播放（布尔属性）；（某些浏览器不允许自动播放，需要设置这个属性值才可以）
loop属性：循环播放
```

## audio 音频

```html
    和视频用法完全一样
    因为没有宽高，所以要添加controls属性，页面内才可以显示出来
    <audio scr="" controls></audio>
```

## 兼容性

1. 旧版本的浏览器不支持这两个元素
2. 不同的浏览器支持的音/视频格式可能不一致

```html
    同一视频两个格式，浏览器选择自己所支持的格式播放
    <video>
        <source src=".mp4">
        <source src=".webm">
        <p>对不起，您的浏览器不支持video元素，请点击这里下载最新版本的浏览器</p>
        <!-- 或者嵌入flash -->
    </video>
```

# 列表元素

## 无序列表、有序列表

ol>li
ul>li

## 定义列表

dl>dt+dd

# 容器元素

该元素代表一块区域，内部用于放置其他元素

## div元素

没有语义

## 语义化容器元素

header：通常用于表示页头，也可用于表示文章的头部；
footer：通常用于表示页脚，也可用于表示文章的尾部；
artical：通常用于表示整篇文章；
section：通常用于表示文章的章节；
aside：通常用于表示额外信息，侧边栏

# 元素包含关系

以前：块级元素可以包含行级元素，行级元素不可以包含块级元素，a元素除外
元素的包含关系由元素的内容类别决定

## 总结

1. 容器元素中可以包含任何元素
2. a元素几乎可以包含所有元素
3. 某些元素有固定的子元素
4. 标题元素和段落元素不能相互嵌套，并且不能包含容器元素


# iframe

通常用于在网页中嵌入另一个页面
iframe 可替换元素

1. 通常是行盒
2. 通常显示内容取决于元素的属性
3. css不能完全控制其中的样式
4. 具有行块盒的特点

```html
<!-- iframe的name属性和a元素的target属性相关联 -->
<style>
    iframe{
    width: 100%;
        height: 500px;
    }
</style>
<a href="https://www.baidu.com" target="myframe">百度</a>
<a href="https://douyu.com"  target="myframe">斗鱼</a>
<a href="https://www.taobao.com"  target="myframe">淘宝</a>
<iframe src="https://www.baidu.com" frameborder="0" name="myframe"></iframe>
```

# 在页面中使用flash

有两个元素可以使用object和embed
都是可替换元素

## object

```html
<!-- data表示资源位置，相当于图片的路径 -->
<!-- type描述，标准为MIME类型
MIME(Multipurpose Internet Mail Extensions)多用途互联网邮件扩展类型 -->
<object data="" type="">
    <!-- param是参数 -->
    <!-- quality表示画面质量，high表示画面质量为高，所以推测name和value是键值对 -->
    <param name="quality" value="high">
</object>
```

## embed

```html
<!-- 单标签 -->
<embed quility="height" src="" type="">
```

有的浏览器不能不能识别其中一个，
如果不能识别object，会读到第三行，识别embed，
如果能识别object，embed不能作为object的子元素，不会被识别

```html
<!-- 兼容性写法 -->
<object data="" type="">
    <param name="" value="">
    <embed quility="height" src="" type="">
</object>
```

# 表单元素

一系列元素，主要用于用户收集数据

## input元素

可替换元素
输入框

- type属性：输入框类型
type:text，普通文本输入框
type:radio, 单选框，通过name属性分类 checked
type:checkbox, 多选框，通过name属性分类 checked
type:password, 密码框
type:image,
type:date, 日期选择框，兼容性问题
type:search, 搜索框，兼容性问题
type:range, 范围，自己看看吧，有两个属性，min max
type:color, 颜色选择器
type:number, 数字，min max step
type:file, 与js配合实现文件上传
- type属性：按钮类型
button；普通按钮
reset：重置
submit：提交
- value属性：文本框内容
- placeholder：显示提示的文本，文本框没有内容时显示
用imput元素制作按钮，已经过时了，兼容老版本浏览器

## select元素

通常和option元素配合使用 selected

### 给下拉列表进行分组

```html
<p>
    请选择你最喜欢看的小说：
    <select name="" id="">
        <optgroup label="校园">
            <option value="">《撒野》</option>
            <option value="">《某某》</option>
            <option value="">《伪装学渣》</option>
            <option value="">《岁月间》</option>
        </optgroup>
        <optgroup label="刑侦">
            <option value="">《默读》</option>
            <option value="">《破云》</option>
            <option value="">《犯罪心理》</option>
        </optgroup>
    </select>
</p>
```

### 下拉多选

```html
<select multiple="multiple"></select>
```

## textarea元素

文本域，多行文本框
没有空白折叠，例如pre

## button按钮元素

type属性：button，reset，submit(默认值)
button的使用更灵活，是一个双标签，里面可以加其他的元素

```html
<button>
    <img>
    <p></p>
</button>
```

## 表单状态

readonly属性：布尔属性，表示只读，不会改变表单显示样式
disabled属性：布尔属性，禁用，会改变到显示样式

```html
<input type="text" readonly>
```

## 配合表单元素的其他元素

### label元素

里面不能加div元素
通常使用单选框或者复选框的时候，只有点中input元素才能被选中，
通常配合多选和单选框使用，点文字的时候，单选框或者复选框也可以被选中，for属性和id属性相配合

```html
<!-- 显示关联 -->
<p>
    请选择性别：
    <input id="radMale" type="radio" name="gender">
    <label for="radMale">男</label>
    <input id="radFemale" type="radio" name="gender">
    <label for="radFemale">女</label>
</p>
<!-- 隐示关联，不需要for属性和id属性 -->
<!-- 文本如果要设计样式的话，可以用span元素 -->
<p>
    请选择性别：
    <label>
        <input type="radio" name="gender">
        <span>男</span>
    </label>
    <label>
        <input type="radio" name="gender">
        <span>女</span>
    </label>
</p>
```

### datalist元素

display:none;
数据类表，不会显示到页面中，通常用于和文本框配合使用

```html
<!-- input的list属性和datalist的id属性相配合，回车的时候文本框中显示的是option的value值 -->
<p>
    请输入你常用的浏览器：
    <input list="userAgent" type="text">
</p>
<datalist id="userAgent">
    <option value="Chrome">谷歌浏览器</option>
    <option value="IE">IE浏览器</option>
    <option value="Safari">苹果浏览器</option>
    <option value="Chrome">谷歌浏览器</option>
    <option value="Fair Fox">火狐浏览器</option>
</datalist>
```

### form元素

通常情况下，会将整个表单元素放置到form元素的内部
作用：当点击提交按钮时，会将form元素内部的表单内容以合适的方式提交到服务器。
元素必须有name属性数据才会传送到服务器

### fieldset元素

表单分组，多个字段的集合

# 美化表单元素

## 新的伪类

1. focus
聚焦样式
2. checked

## 常见用法

1. 重置表单元素样式
2. 设置多行文本框是否允许调整尺寸
1). resize属性
both: 默认值，两个方向都可以
none: 都不行
horizontal: 水平
vertical: 垂直
3. 文本框边缘到内容的距离
padding
text-indent
4. 控制单选和多选的样式
使用lable和input隐示关联，input的checked选择器

```html
<style>
    .radio-item .radio{
        display:inline-block;
        position: relative;
        width:10px;
        height:10px;
        border-radius:50%;
        border: 2px solid #aaaaaa;
        cursor: pointer;
    }
    .radio-item input[type="radio"]{
        display: none;
    }
    .radio-item input:checked+.radio{
        border: 2px solid #99aaff;
    }
    .radio-item input:checked~span{
        color: #99aaff;
    }
    .radio-item input:checked+.radio::after{
        content:"";
        display: block;
        margin-top: 2.5px;
        margin-left: 2.5px;
        height:5px;
        width:5px;
        border-radius: 50%;
        background:#9af;
    }
</style>
```

```html
<p>
    请选择性别：
    <label class="radio-item">
        <input type="radio" name="gender">
        <span class="radio"></span>
        <span>男</span>
    </label>
    <label class="radio-item">
        <input type="radio" name="gender">
        <span class="radio"></span>
        <span>女</span>
    </label>
</p>
```

# 表格元素

在css技术出现之前，网页通常使用表格布局
现在一般在后台管理系统中会使用表格
前台：面向用户
后台管理系统：面向管理人员。对界面要求不高，对功能要求高。
表格不再适用于网页布局：表格的渲染速度过慢，浏览器是把整个表格全部读完才会进行渲染

# 其他元素

1. abbr
表示缩写词

```html
<!-- 运行出来以后css有下边框，点式的 -->
<p>
    <abbr title="cascading style sheet">CSS</abbr>是用于为页面添加样式
</p>
```

2. time
提供给浏览器或搜索引擎阅读时间

```html
<!-- 因为浏览器可能不懂今年5月，所以用time元素标记，datetime属性给浏览器阅读 -->
<p>
    <time datetime="2019-5-1">今年5月</time>我录制了课程
</p>
```

3. b（bold）
以前是一个无语义元素，主要用于加粗字体
html5之后，有了新的语义。
放在词的两边，语音阅读时可能会重读或者其他，默认样式还会加粗
4. q
表示一小段引用文本

```html
<!-- 默认状态会自动加上双引号 -->
<!-- 双引号其实是添加了伪元素，before after ，content:close-quote -->
<!-- cite属性表示引用地址，用于浏览器和搜索引擎 -->
<p cite="">
    《孔子家语·在厄》<q>君子修道立德，不谓困厄而改节</q>。
</p>
```

5. blockquote
大段引用文本，有默认的margin值
也有cite属性
6. br
主要用于在文本中换行
7. hr
水平线
8. mete
添加数据
还可以用于搜索引擎优化

```html
<!-- 内容选自淘宝网的源代码 -->
<meta name="spm-id" content="a21bo" />
<!-- description这一内容可以在百度的搜索框中看见 -->
<meta name="description" content="淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！" />
<meta name="aplus-xplug" content="NONE">
<meta name="keyword" content="淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺" />
```

9. link
连接外部资源，可能是css或图标，或其他
type属性：连接资源的MIME（标准模式的字符串）类型
rel属性：relation表示链接的资源和当前网页的关系

```html
<!-- css对应stylesheet -->
<link rel="stylesheet" href="">
<!-- ion图标对应icon/shortcut -->
<link rel="icon" href="">
```

>关于ico图标，也可以放在根目录下面，在根目录下面是必须命名为favicon.ico
强制刷新：ctrl+shift+r

