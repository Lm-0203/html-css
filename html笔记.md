
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

# 文档声明

## 经典真题

- 什么是`<!DOCTYPE>`？是否需要在 *HTML5* 中使用？
- 什么是严格模式与混杂模式？
- 列举几条怪异模式中的怪癖行为

## 文档声明概念

*HTML* 文档通常以文档声明开始，该声明的作用是帮助浏览器确定其尝试解析和显示的 *HTML* 文档类型。

```html
<!DOCTYPE html>
```

文档声明必须是 *HTML* 文档的第一行、且顶格显示，对大小写不敏感。因为任何放在 *DOCTYPE* 前面的东西，比如批注或 *XML* 声明，会令 *IE9* 或更早期的浏览器触发怪异模式（后面的渲染模式会介绍）

文档声明并非一个 *HTML* 标签。它是一条“信息”，告知浏览器期望的文档类型。

那么说到文档类型，我们首先有必要先了解一下 *HTML* 的发展历史。如下图所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-020539.png" alt="image-20210907100539198" style="zoom:50%;" />

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-020626.png" alt="image-20210907100626110" style="zoom:50%;" />

可以看到，*HTML* 版本从最开始诞生到最新的 *HTML5*，中间经历了很多版本。

那不同的版本有啥区别么？当然有区别，比如一个最显著的区别就是支持的 *HTML* 元素不同。例如：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-021238.png" alt="image-20210907101237957" style="zoom:50%;" />

> 更多各版本所支持的不同 *HTML* 元素可以参阅：*https://www.w3school.com.cn/tags/html_ref_dtd.asp*

所以，你现在就知道为什么要书写文档声明了。原因是不同版本所支持的 *HTML* 元素类型是不同的，我需要告诉浏览器以哪一种文档类型方式来解析当前的这个 *HTML* 文件。

那么，最新的 *HTML5* 的文档类型倒是很简单，前面我们已经看到了

```html
<!DOCTYPE html>
```

那么稍微老一点的版本，例如 *HTML4* 或 *XHTML* 的文档类型声明长啥样呢？

这里我们来看两个。

***HTML 4.01 Strict***

该 *DTD* 包含所有 *HTML* 元素和属性，但不包括展示性的和弃用的元素（比如 *font*）。不允许框架集（*Framesets*）。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```



***HTML 4.01 Transitional***

该 *DTD* 包含所有 *HTML* 元素和属性，包括展示性的和弃用的元素（比如 *font*）。不允许框架集（*Framesets*）。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
```



> 更多不同文档类型的声明写法可以参阅：*https://www.w3school.com.cn/tags/tag_doctype.asp*



首先，给我们的第一直观感受，就是声明写得很长。

那么为什么会这么长呢？

原因很简单，*HTML5* 不需要引入 *DTD* 文件，而其他类型的文档声明是需要引入 *DTD* 的。



很好，一个新的名词出现了，*DTD*。



在早期的 *HTML* 版本，例如 *HTML 4.01* 中，*<!DOCTYPE>* 声明之所以要引用 *DTD*，是因为 *HTML 4.01* 基于 *SGML*。而 *DTD* 规定的是标记语言的规则，这样浏览器才能正确地呈现内容。

但是最新的 *HTML5* 不基于 *SGML*，所以不需要引用 *DTD*。



到这里估计有的小伙伴要懵圈了，怎么又冒出来一个 *SGML* ？？

是的，你没有看错，我们有：*SGML、HTML、XML、XHTML、HTML5*

他们都是一家人

从这五者的名字中，我们都可以看到 “*ML*” 这两个字母，所以我们先从 “*ML*” 说起。

“*ML*”即 “*Markup language*(置标语言)”。

根据维基百科对其的解释，“*Markup language*” 是用标准的标记来解释纯文本文档的内容，从而提供关于文档结构或文档该如何渲染的信息。置标语言的发展可以用下图来表示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-023423.png" alt="image-20210907103423285" style="zoom:50%;" />

*GML* 是第一代置标语言，使文档能明确将标示和内容分开，所有文件使用同样的标示方法。

*SGML* 在 *GML* 的基础上进行整理，形成了一套非常严谨的文件描述方法。它的组成包括语法定义，*DTD*，文件实例三部分。*SGML* 因太严谨规范达 *500* 多页，故而不易学、不易用、难以实现，所以在它的基础上又发展出了其他的更易用的置标语言。

*HTML* 抛弃了*SGML* 复杂庞大的缺点，继承了 *SGML* 的很多优点。*HTML* 最大的特点是简单性和跨平台性。它只使用了 *SGML* 中很少的一部分标记，例如 *HTML 4.0* 中只定义了 *70* 余种标记。为了便于在计算机上实现，*HTML* 规定的标记是固定的，即 *HTML* 语法是不可扩展的。

随着 *Web* 应用的不断发展，*HTML* 的局限性也越来越明显地显现了出来，如 *HTML* 无法描述数据、可读性差、搜索时间长等。人们又把目光转向 *SGML*，再次改造 *SGML* 使之适应现在的网络需求。*1998* 年 *2* 月 *10* 日，*W3C*(*World Wide Web Consortium*，万维网联盟)公布 *XML 1.0* 标准，*XML* 诞生了。很长一段时间，*XML* 都作为网络传输的标准数据格式。

*XHTML* 的出现是因为当时的 *HTML* 语法要求比较松散，这样对网页编写者来说，比较方便，但对于机器来说，语言的语法越松散，处理起来就越困难，对于传统的计算机来说，还有能力兼容松散语法，但对于许多其他设备，比如手机，难度就比较大。因此产生了由 *DTD* 定义规则，语法要求更加严格的 *XHTML*。

> *DTD* 教程可以参阅：*https://www.w3school.com.cn/dtd/index.asp*

最终，*HTML5* 是 *HTML* 的第五个修订版，该版本不在基于 *SGML* 了，所以也就不用再引入 *DTD* 声明了。

*HTML5* 的出现，其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。

现在国内通常所说的 *H5* 开发，实际上是 *HTML5* 与 *CSS3* 及 *ES6* 的一个组合，大概可以用以下公式说明：*HTML5 ≈ HTML + CSS3 + ES6* 

## 渲染模式

明白了文档类型声明的作用之后，接下来我们还需要看一个东西，那就是渲染模式。

浏览器渲染模式分为 *3* 种：

- 怪癖模式（混杂模式）[*Quirks mode*] 
- 严格模式（标准模式） [*Standars mode*]
- 几乎标准模式 [*Almost standards mode*]

>之所以出现不同的渲染模式，是由于历史原因造成的。
>
>当年 *Netscape4*（网景公司早期的浏览器）和 *IE4*（微软公司早期的浏览器）实现 *CSS* 机制时，没有遵循 *W3C* 提出的标准。*Netscape4* 提供了糟糕的支持，而 *IE4* 虽然接近标准，但依旧未能完全正确的支持标准。
>
>所以，在 *W3C* 标准推出以前，浏览器在对页面的渲染上没有统一规范，产生了差异（*Quirks mode* 或者称为 *Compatibility Mode*）
>
>为了保障自己的网站在各个浏览器上显示正确，网页开发者们不得不依据各个浏览器自身的规范来使用 *CSS*，因此大部分网站的 *CSS* 实现并不符合 *W3C* 规范的标准。
>
>*W3C* 标准推出后，浏览器渲染页面有了统一的标准（*Strict mode* 也有叫做 *Standars mode*）浏览器都开始采纳新标准，但存在一个问题就是如何保证旧的网页还能继续浏览，在标准出来以前，很多页面都是根据旧的渲染方法编写的，如果用的标准来渲染，将导致页面显示异常。
>
>为保持浏览器渲染的兼容性，使以前的页面能够正常浏览，浏览器都保留了旧的渲染方法（如：微软的 *IE*）。这样浏览器渲染上就产生了 *Quircks mode* 和 *Standars mode*，两种渲染方法共存在一个浏览器上。混杂模式服务于旧式规则，而严格模式服务于标准规则。



对于 *HTML* 文档来说，浏览器使用文档开头的 *DOCTYPE* 来决定用怪异模式处理或标准模式处理。

如果文档中没有 *DOCTYPE* 将触发文档的怪异模式。怪异模式最明显的影响是会触发怪异盒模型。

在  *DOCTYPE*  声明中，没有使用 *DTD* 声明或者使用 *HTML4* 以下的 *DTD* 声明时，基本所有的浏览器都是使用 *Quirks mode* 呈现，其他的则使用 *Standars mode* 解析。



**严格模式和怪异模式的部分渲染区别**

1. 盒模型的高宽包含内边距 *padding* 和边框 *border*

![img](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-035904.png)

 

在 *W3C* 标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在 *IE5.5* 及以下的浏览器及其他版本的 *Quirks* 模式下，*IE* 的宽度和高度还包含了 *padding* 和 *border*。



2. 可以设置行内元素的高宽

 在 *standards* 模式下，给 *span* 等行内元素设置 *wdith* 和 *height* 都不会生效，而在 *Quirks* 模式下，则会生效。



3. 可设置百分比的高度

 在 *standards* 模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度是无效的。



4. 用 *margin:0 auto* 设置水平居中在 *IE* 下会失效

使用 *margin:0 auto* 在 *standards* 模式下可以使元素水平居中，但在 *Quirks* 模式下却会失效，*Quirks* 模式下的解决办法，用 *text-align* 属性：*body{text-align:center};#content{text-align:left}*



5. *Quirks* 模式下设置图片的 *padding* 会失效

6. *Quirks* 模式下 *Table* 中的字体属性不能继承上层的设置

7. *Quirks* 模式下 *white-space:pre* 会失效



> 更多可以参阅 *MDN* 上对怪异模式和标准模式的解释：*https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode*

> *MDN* 上还给出了不同模式在不同浏览器下的渲染区别（英文）：*https://hsivonen.fi/doctype/*



## 真题解答



- 什么是`<!DOCTYPE>`？是否需要在 *HTML5* 中使用？



> 它是 *HTML* 的文档声明，通过它告诉浏览器，使用哪一个 *HTML* 版本标准解析文档。
>
> 在浏览器发展的历史中，*HTML* 出现过很多个版本，不同版本在元素、属性等书写格式上略有差异，如果不预先告诉浏览器，浏览器就不知道我们的文档标准是什么，在这种情况下，大部分浏览器将开启最大兼容模式来解析网页，我们称之为怪异模式。这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的 *bug*，所以文档声明是必须的。
>
> 而文档声明有多种书写格式，对应不同的 *HTML* 版本，`<!DOCTYPE>`这种书写是告诉浏览器，整个文档使用 *HTML5* 的标准进行解析。



- 什么是严格模式与混杂模式？



> **严格模式：**又称标准模式，是指浏览器按照 *W3C* 标准解析代码。
>
> **混杂模式：**又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。
>
> **如何区分：**浏览器解析时到底使用严格模式还是混杂模式，与网页中的 *DTD* 直接相关。
>
> 1. 如果文档包含严格的 *DOCTYPE* ，那么它一般以严格模式呈现。**（严格 *DTD* ——严格模式）** 
> 2. 包含过渡 *DTD* 和 *URI* 的 *DOCTYPE* ，也以严格模式呈现，但有过渡 *DTD* 而没有 *URI* （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现。**（有 *URI* 的过渡 *DTD* ——严格模式；没有 *URI* 的过渡 *DTD* ——混杂模式）** 
> 3. *DOCTYPE* 不存在或形式不正确会导致文档以混杂模式呈现。**（*DTD* 不存在或者格式不正确——混杂模式）**
> 4. *HTML5* 没有 *DTD* ，因此也就没有严格模式与混杂模式的区别，*HTML5* 有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。**（ *HTML5* 没有严格和混杂之分）**
>
> **意义：**严格模式与混杂模式存在的意义与其来源密切相关，如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。





- 列举几条怪异模式中的怪癖行为



>1. 宽高的算法与 *W3C* 盒模型不同
>2. 在表格中的字体样式不会继承
>3. 怪异模式下可以设置行内元素宽高
>4. 怪异模式下 *white-space:pre* 会失效







# 语义化



## 经典真题



- 说说对 *html* 语义化的理解



## 什么是语义元素？



语义是指对一个词或者句子含义的正确解释。很多 *HTML* 标签也具有语义的意义，也就是说元素本身传达了关于标签所包含内容类型的一些信息。例如，当浏览器解析到`<h1></h1>`标签时，它将该标签解释为包含这一块内容的最重要的标题。*h1* 标签的语义就是用它来标识特定网页或部分最重要的标题。



## 为什么要语义化？



- 代码结构：使页面没有css的情况下，也能够呈现出很好的内容结构
- 有利于 *SEO*： 爬虫依赖标签来确定关键字的权重，因此可以和搜索引擎建立良好的沟通，帮助爬虫抓取更多的有效信息
- 提升用户体验：例如 *title、alt* 可以用于解释名称或者解释图片信息，以及 *label* 标签的灵活运用。
- 便于团队开发和维护：语义化使得代码更具有可读性，让其他开发人员更加理解你的 *html* 结构，减少差异化。
- 方便其他设备解析：如屏幕阅读器、盲人阅读器、移动设备等，以有意义的方式来渲染网页。
  



## *HTML5* 常用的语义元素



*HTML5* 提供了新的语义元素来定义网页的不同部分，它们被称为“切片元素”，如图所示 ：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-062515.png" alt="image-20210907142515375" style="zoom:50%;" />



- *header*：用于定义页面的头部区域，通常包括网站 *logo*、主导航、全站链接以及搜索框。
- *nav*：定义页面的导航链接部分区域。
- *main*：定义文档的主要内容，该内容在文档中应当是独一无二的
- *article*：定义页面独立的内容，它可以有自己的 *header、footer、sections* 等，专注于单个主题的博客文章，报纸文章或网页文章。
- *section*：表示文档中的一个区域（或节），比如，内容中的一个专题组。
- *aside*：表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分且可以被单独的拆分出来而不会影响整体。通常表现为侧边栏或嵌入内容。
- *footer*：定义最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。



大约有 *100* 多个 *HTML* 语义元素可供选择，以下是常用的语义元素：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-062552.png" alt="image-20210907142551909" style="zoom:50%;" />



> 更多的语义化标签可以参阅：*https://developer.mozilla.org/en-US/docs/Web/HTML/Element*



## 无障碍网页



*W3C* 在 *1997* 年发起了一项 *WAI*（*Web Accessibility Initiative*）的计划，该计划的目标是提升网站的易用性(*accessibility*)，而其中有一个很重要的指标，那就是能够被残障人士使用的网站才能称得上一个易用的（易访问的）网站。



*HTML5* 在无障碍方面进行了加强，加入了无障碍属性。



所谓 *HTML5* 无障碍属性，主要针对的是视觉缺陷，失聪，行动不便的残疾人以及假装残疾的测试人员。尤其像盲人，眼睛看不到，其浏览网页则需要借助辅助设备，如屏幕阅读器，屏幕阅读机可以大声朗读或者输出盲文。



而 *HTML5* 无障碍属性就是可以让屏幕阅读器准确识别网页中的内容，变化，状态的技术规范，可以让盲人这类用户也能无障碍阅读！



> 关于无障碍的更多说明，可以参阅 *MDN*：*https://developer.mozilla.org/zh-CN/docs/Web/Accessibility*



**常见的无障碍属性**



*WAI-ARIA* 是 *W3C* 编写的规范，定义了一组可用于其他元素的 *HTML* 特性，用于提供额外的语义化以及改善缺乏的可访问性。以下是规范中三个主要的特性：



- 角色：这定义了元素是干什么的。许多「标志性的角色」，其实重复了 *HTML5* 的结构元素的语义价值。例如 *role="navigation"* (*nav*) 或者 *role="complementary"* (*aside*)。



- 属性：我们能通过定义一些属性给元素，让他们具备更多的语义。例如：*aria-required="true"* 意味着元素在表单上是必填的。然而 *aria-labelledby="label"* 允许在元素上设置一个 *ID*，用于 *labelledby* 引用作为屏幕阅读器指定的 *label* 内容 ，多个也可以。



- 状态：用于表达元素当前的条件的特殊属性，例如 *aria-disabled="true"*，屏幕阅读器就会这个表单禁止输入。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 *Javascript*。



关于 *WAI-ARIA* 属性重要的一点是它不会对 *Web* 页面有任何影响，除了让更多的信息从浏览器暴露给 *accessibility APIs* (无障碍 *API*)，这也是屏幕阅读器这一类软件的信息源。*WAI-ARIA* 不会影响网页的结构，以及 *DOM* 等等，尽管这些属性可用于作为 *CSS* 选择器。



> 更多无障碍属性可以参阅：*https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics*



## 真题解答



- 说说对 *html* 语义化的理解



>语义化的目的主要有以下几点：
>
>1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
>2. 有利于 *SEO*：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重
>3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
>4. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循 *W3C* 标准的团队都遵循这个标准，可以减少差异化。*HTML5* 中新增加的很多标签，例如：*article、nav、header* 和 *footer* 等，就是基于语义化设计原则






# *W3C* 标准组织



## 经典真题



- 对于 *WEB* 标准以及 *W3C* 的理解与认识问题



## 什么是 *W3C*



- W3C 指万维网联盟（*World Wide Web Consortium*）
- W3C 创建于*1994年10月*
- W3C 由 *Tim Berners-Lee* 创建
- W3C 是一个*会员组织*
- W3C 的工作是*对 web 进行标准化*
- W3C 创建并维护 *WWW 标准*
- W3C 标准被称为 *W3C 推荐（W3C 规范）*



## *W3C* 是如何创建的？



万维网（*World Wide Web*）是作为欧洲核子研究组织的一个项目发展起来的，在那里 *Tim Berners-Lee* 开发出万维网的雏形。*Tim Berners-Lee* 是万维网的发明人，目前是万维网联盟的主任。

*W3C* 在 *1994* 年被创建，其创立目的是为了完成麻省理工学院（*MIT*）与欧洲粒子物理研究所（*CERN*）之间的协同工作，并得到了美国国防部高级研究计划局（*DARPA*）和欧洲委员会（*European Commission*）的支持。



## 标准化 *Web*



*W3C* 致力于实现所有的用户都能够对 *Web* 加以利用（不论其文化教育背景、能力、财力以及其身体残疾）。

*W3C* 同时与其他标准化组织协同工作，比如 *Internet* 工程工作小组（*Internet Engineering Task Force*）、无线应用协议（*WAP*）以及 *Unicode* 联盟（*Unicode Consortium*）。

*W3C* 由美国麻省理工学院计算机科学和人工智能实验室 (*MIT CSAIL*)，总部位于法国的欧洲信息数学研究联盟(*ERCIM*) 和日本的庆应大学（*Keio University*）联合运作，并且在世界范围内拥有分支办事处。



## *W3C* 成员



正因为 *Web* 是如此的重要（不论在其影响范围还是在投资方面），以至于不应由任何一家单独的组织来对它的未来进行控制，因此 *W3C* 扮演着一个会员组织的角色：

一些知名的会员包括：

- *IBM*
- *Microsoft*
- *America Online*
- *Apple*
- *Adobe*
- *Macromedia*
- *Sun Microsystems*



*W3C* 的会员包括了：软件开发商、内容提供商、企业用户、通信公司、研究机构、研究实验室、标准化团体以及政府。



## *W3C* 规范的批准步骤



在 *W3C* 发布某个新标准的过程中，规范是通过下面的严格程序由一个简单的理念逐步确立为推荐标准的：

- *W3C* 收到一份提交
- 由 *W3C* 发布一份记录
- 由 *W3C* 创建一个工作组
- 由 *W3C* 发布一份工作草案
- 由 *W3C* 发布一份候选的推荐
- 由 *W3C* 发布一份被提议的推荐
- 由 *W3C* 发布推荐



> 具体步骤可以参阅：*https://www.runoob.com/w3c/w3c-process.html*



## 真题解答



- 对于 *WEB* 标准以及 *W3C* 的理解与认识问题



>任何东西都需要一个标准，有了标准才能够更好的进行交流和推广。不同的标准，得出的便是不同的结果。因此，制定什么样的标准，如何确立标准，至关重要。
>
>正因为有了网页的标准，才能降低开发难度及开发成本，减少各种 *BUG*、安全问题， 提高网站易用性。
>
>就好比 *HTML* 在 *W3C* 组织推出标准之前，不同的浏览器厂商有一套自己的标准，这对于开发人员来讲是痛苦的，所以才会遗留下浏览器的标准模式和怪异模式这个历史问题。
>
>*W3C* 就是一个推出标准的组织，被称之为万维网联盟，*W3C* 最重要的工作是发展 *Web* 规范。





# *SEO*



## 经典真题



- 请描述下 *SEO* 中的 *TDK*？



## 什么是 *SEO*？
*SEO* 由英文 *Search Engine Optimization* 缩写而来，中文意译为“搜索引擎优化”。

其实叫做针对搜索引擎优化更容易理解。它是指从自然搜索结果获得网站流量的技术和过程，是在了解搜索引擎自然排名机制的基础上，对网站进行内部及外部的调整优化，改进网站在搜索引擎中的关键词自然排名，获得更多流量，从而达成网站销售及品牌建设的目标。



## 如何进行 *SEO* 优化工作？



有的同学第一反应：给钱。

虽然，国内的百度搜索引擎，确实存在给钱就把你排在前面的情况，但是在不给钱的情况下，我们也能够通过一些优化手段来提升页面的权重，从而使我们的页面获取更多流量。



下面就介绍一些常见的 *SEO* 优化手段。



整个 *SEO* 工作大致可以分为**内部优化**和**外部优化**。



### 内部优化



#### 1. 合理的 *title、description、keywords*

这个就是上面经典面试题中出现的 *TDK*，其实就是这 *3* 个单词的缩写。



- *title*：浏览器上显示的那些内容，不仅用户能看到，也能被搜索引擎检索到，搜索引擎在抓取网页时，最先读取的就是网页标题，所以 *title* 是否正确设置极其重要。*title* 一般不超过 *80* 个字符，而且词语间要用英文 “-” 隔开，因为计算机只对英语的敏感性较高，对汉语的敏感性不高。

- *description*：也就是网页的内容摘要，这是对于一个网页的简要内容概况。*description* 一般不超过 *150* 个字符，描述内容要和页面内容相关。

- *keywords*：主要作用是告诉搜索引擎本页内容是围绕哪些词展开的。因此 *keywords* 的每个词都要能在内容中找到相应匹配，才有利于排名。*keywords* 一般不超过 *3* 个，每个关键词不宜过长，而且词语间要用英文 “,” 隔开，尽量将重要的关键字靠前放。

  

#### 2. 语义化的 *HTML* 代码，符合 *W3C* 规范



语义化代码能够让搜索引擎容易理解网页，即使脱去了 *CSS* 这一层外衣，整个网页的结构也是清清楚楚的，无论是搜索引擎还是阅读者，都能够很容易的分辨网页的结构。

关于语义化的具体内容，可以参阅《语义化》章节。



#### 3. 非装饰性图片必须加 *alt*



*img* 标签的 *alt* 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。

例如：`<img src="/xxx.jpg" alt="海尔官网-双门冰箱" />`

*alt* 标签的作用：

- 增强内容相关性：它是可以利用汉字介绍文章内容的，对于一些特定的企业产品，由于视觉的体验，它往往是少文字的。  
- 提高关键词密度：在操作企业站的时候，我们经常遇到是站点首屏一个大的横幅 *banner*，几乎占用了首页的大部分页面，为了有效的提高首页核心关键词密度，我们只能利用一切办法增添关键词，比如：在图片的 *alt* 标签中添加。  



#### 4. 对于不显示的对象谨慎使用 *display:none*



对于不想显示的文字内容，应当设置 *z-index* 或设置到浏览器显示器之外。因为搜索引擎会过滤掉 *display:none* 其中的内容。



#### 5. 重要内容 *HTML* 代码放在最前



索引擎抓取 *HTML* 顺序是从上到下，所以我们尽量将重要的内容放在前面，保证重要内容一定会被抓取。



#### 6. 少用 *iframe*

少用或者尽量不用 *iframe*，因为搜索引擎不会抓取 *iframe* 中的内容



优化的细节还有很多，更多细节可以参阅这篇博文：*https://blog.csdn.net/yanyihan16/article/details/89209436?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.control*



### 外部优化



外部优化主要是指放友情链接和外链。好的友情链接可以快速的提高网站的权重，高质量的外链，会给你的网站提高源源不断的权重提升。另外，就是要向各大搜索引擎登陆入口提交尚未收录站点。



## 真题解答



- 请描述下 *SEO* 中的 *TDK*？

>在 *SEO* 中，所谓的 *TDK* 其实就是 *title、description、keywords*。
>
>- *title*：浏览器上显示的那些内容，不仅用户能看到，也能被搜索引擎检索到，搜索引擎在抓取网页时，最先读取的就是网页标题，所以 *title* 是否正确设置极其重要。*title* 一般不超过 *80* 个字符，而且词语间要用英文 “-” 隔开，因为计算机只对英语的敏感性较高，对汉语的敏感性不高。
>- *description*：也就是网页的内容摘要，这是对于一个网页的简要内容概况。*description* 一般不超过 *150* 个字符，描述内容要和页面内容相关。
>- *keywords*：主要作用是告诉搜索引擎本页内容是围绕哪些词展开的。因此 *keywords* 的每个词都要能在内容中找到相应匹配，才有利于排名。*keywords* 一般不超过 *3* 个，每个关键词不宜过长，而且词语间要用英文 “,” 隔开，尽量将重要的关键字靠前放。





# *iframe*



## 经典真题



- *iframe* 框架有哪些优缺点？
- *iframe* 用来干什么的



## *iframe* 介绍



*iframe* 称之为嵌入式框架，嵌入式框架可以把一个完整的网页内容嵌入到现有的网页中。



下面是一个 *iframe* 的简单示例：



```html
<body>
    <p>iframe 示例</p>
    <iframe src="https://juejin.cn/"></iframe>
</body>
```



效果：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-09-011259.png" alt="image-20210909091258084" style="zoom:50%;" />



可以看到，在当前的网页，又嵌入了一个其他页面。



那么这在实际开发中有啥意义呢？



实际上，在早期的时候， *iframe* 在开发中用得很多。使用 *iframe* 可以很方便的制作一个页面的公共部分，例如导航栏。

现在仍然能够找到使用 *iframe* 的网站（大多是旧的项目）

例如 *W3C school*：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-09-015133.png" alt="image-20210909095133166" style="zoom:50%;" />



再比如邮箱：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-09-014911.png" alt="image-20210909094911187" style="zoom:50%;" />



但是随着 *Ajax* 的出现，*iframe* 用得越来越少了。现在在某些特定的场景还能见到，比如模拟窗口，邮箱或者 *HTML* 在线编辑器等。



究其原因，是因为 *iframe* 有种种不便，比如一个直观的问题就是 *iframe* 的自适应高度，这是处理起来比较麻烦的问题，随便百度下都是一大串的代码。

另外还有个重大的缺点，那就是搜索引擎的“爬虫”程序无法解读这种页面，当“爬虫”遇到多个页面嵌套的网页时只看到框架却找不到链接，然后认定此网站是死站点并离开。这对于 *SEO* 来讲无疑是毁灭性的打击。并且使用大量的 *iframe* 标签也会稀释你该页面的关键词密度并对其产生影响。



## 真题解答



- *iframe* 用来干什么的？有哪些优缺点？

>参考答案：
>
>*iframe* 也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入在现有的网页中。
>
>**优点**
>
>- 重载页面时不需要重载整个页面，只需要重载页面中的一个框架页(减少了数据的传输，增加了网页下载速度)
>- 方便制作导航栏
>
>**缺点**
>
>- 会产生很多页面，不容易管理
>- 调用外部页面，需要额外调用 *CSS*，给页面带来额外的请求次数
>- 会阻塞页面的加载，*window* 的 *onload* 事件需要在所有 *iframe* 加载完毕后(包含里面的元素)才会触发
>- 浏览器的后退按钮无效
>- 无法被一些搜索引擎索引到
>- 多数小型的移动设备（*PDA* 手机）无法完全显示框架
>
>由于上面诸多缺点，因此不符合标准网页设计的理念，已经被标准网页设计抛弃，目前框架的所有优点完全可以使用 *Ajax* 实现，因此已经没有必要使用 *iframe* 框架了。





# 微格式



## 经典真题



- 知道什么是微格式吗？谈谈理解。在前端构建中应该考虑微格式吗？



## 微格式介绍



所谓微格式，是建立在已有的、被广泛采用的标准基础之上的一组简单的、开放的数据格式。

具体表现是把语义嵌入到 *HTML* 中，以便有助于分离式开发，并通过制定一些简单的约定，来兼顾 *HTML* 文档的人机可读性，相当于对 *Web* 网页进行了语义注解。



*talk is cheap，show me code*



以前我们是这样写一个链接到首页的代码的：



```html
<a href=”http://www.bbon.cn”>Web Design Blog</a>
```



而现在我们要为这个代码元素 *a* 加上 *rel* 属性：



```html
<a href=”http://www.bbon.cn“ rel=”homepage”>Web Design Blog</a>
```



通过上面的代码，我们可以发现，多了一个 *rel* 属性。这个 *rel=”home”* 属性显示链接的目标页面是该网站的首页。

通过为已有的链接元素添加语义化属性，就为这个链接添加了具体的结构和意义。



就这？



*No、No、No*，我们再去微格式的官网瞅一瞅：*https://microformats.org/*



官网对微格式是这么介绍的：

>*Microformats are based on simple markup conventions that enable you to add meaningful structure to your web content.*
>
>微格式基于简单的标记约定，使您能够向web内容添加有意义的结构。
>
>*One of the key principles of microformats, is to privilege human readable content. This means that you should think first and foremost of your content design being readable and accessible to web viewers.* 
>
>微格式的一个关键原则是赋予人类可读内容特权。这意味着您应该首先考虑内容设计的可读性和可访问性。
>
>*Using the most appropriate HTML elements and applying structured class names to your markup enables you to produce content that can be clearly understood by a human audience and also used in a structured way by automated programs and other online tools.* 
>
>通过使用最合适的HTML元素并将结构化类名应用到标记中，您可以生成人类观众可以清楚理解的内容，并通过自动化程序和其他在线工具以结构化方式使用这些内容。
>
>*But the point is that you shouldn't have to go out of your way to produce such machine friendly markup - microformats make it easy to integrate this greater degree of structure into your websites, without the overhead of having to learn complicated new languages or formats.*
>
>但关键是，你不应该不遗余力地制作这样的机器友好型标记——微格式可以轻松地将这种更高程度的结构集成到你的网站中，而无需学习复杂的新语言或格式。



正如前面所介绍的，微格式就是为了兼顾 *HTML* 文档的人机可读性，在标签中添加的语义注解。



那好，那么我们以后书写所有的 *HTML* 代码，都要这样书写注解么？



并不是，否则人都傻了。微格式一般用于标记人员、组织、事件、地点、博客帖子、产品、评论、简历、食谱等的 *HTML*。

例如：

>*Mark-up your contact info with h-card, link to other profiles with rel="me"*
>
>使用 *h-card* 标记您的联系信息，使用 *rel=“me”* 链接到其他个人资料
>
>*Mark-up your blog with h-entry.*
>
>用 *h-entry* 标记你的博客。



这里我们以  *h-card* 为例。

*h-card* 是一种微格式，用来发布个人，公司，组织，地点等详细的联系信息。 它可以使分析器（比如其他网站，*Firefox* 的 *Operator* 插件）获得详细的信息，并通过别的网站或者地图工具进行显示，或者载入到地址簿等其他程序。

例如，没有加入 *h-card* 微格式时，我们的 *HTML* 结构如下：

```html
<div>
  <div>Joe Doe</div>
  <div>The Example Company</div>
  <div>604-555-1234</div>
  <a href="http://example.com/">http://example.com/</a>
</div>
```

加入微格式后，成为：

```html
<div class="vcard">
  <div class="fn">Joe Doe</div>
  <div class="org">The Example Company</div>
  <div class="tel">604-555-1234</div>
  <a class="url" href="http://example.com/">http://example.com/</a>
</div>
```

这里，正式名称（*class=”fn”*），组织（*class=”org”*），电话号码（*class=”tel”*）和 *url*（*class=”url”*）分别用相应的 *class* 标示。

同时，所有内容都包含在 *class="vcard"* 里。



再例如，我们用一个维基媒体基金会的联系方式，来作为 *h-card* 微格式实例。

加入  *h-card* 微格式之前的信息内容如下：

```html
Wikimedia Foundation Inc.
200 2nd Ave. South #358
St. Petersburg, FL 33701-4313
USA
Phone: +1-727-231-0101
Email: info@wikimedia.org
Fax: +1-727-258-0207
```

加入微格式后，成为：

```html
<div class="vcard">
  <div class="fn org">Wikimedia Foundation Inc.</div>
  <div class="adr">
  	<div class="street-address">200 2nd Ave. South #358</div>
    <div>
      <span class="locality">St. Petersburg</span>,
      <span class="region">FL</span> <span class="postal-code">33701-4313</span>
    </div>
  	<div class="country-name">USA</div>
  </div>
  <div>Phone: <span class="tel">+1-727-231-0101</span></div>
  <div>Email: <span class="email">info@wikimedia.org</span></div>
  <div>
    <span class="tel"><span class="type">Fax</span>:
    <span class="value">+1-727-258-0207</span></span>
  </div>
</div>
```

在这个例子中，正式名称（*class=”fn”*）和组织（*class=”org”*）写在了一个属性中，表示这是一个组织，而不是个人。



这个时候，有的小伙伴就要提问了，这些 *h-card* 里面的属性名是固定的么？

没错，常用的  *h-card*  属性还包括：*bday*（生日）、*email*（邮箱）、*tel*（电话）、*nickname*（昵称）等。



目前已具备完整规范的微格式还包括：*hCard、hCalendar、XOXO、XFN、VoteLinks* 和 *3* 个 “rel-” 的微格式：*rel- license、rel-nofollow* 和 *rel-tag*。



至于每一种微格式的规范（里面有哪些属性）是什么，我们可以在官网进行查阅。

例如：  *h-card*  的规范就可以参阅：*https://microformats.org/wiki/h-card*



## 真题解答



- 知道什么是微格式吗？谈谈理解。在前端构建中应该考虑微格式吗？

>参考答案：
>
>所谓微格式，是建立在已有的、被广泛采用的标准基础之上的一组简单的、开放的数据格式。
>
>具体表现是把语义嵌入到 *HTML* 中，以便有助于分离式开发，并通过制定一些简单的约定，来兼顾 *HTML* 文档的人机可读性，相当于对 *Web* 网页进行了语义注解。
>
>采用微格式的 *Web* 页面，在 *HTML* 文档中给一些标签增加一些属性，这些属性对信息的语义结构进行注解，有助于处理 *HTML* 文档的软件，更好的理解该 *HTML* 文档。
>
>**在前端构建中微格式的意义**
>
>微格式按照某种已有的被广泛应用的标准，通过对内容块的语义标记，可以让外部应用程序、聚合程序和搜索引擎能够做以下事情：
>
>1. 在爬取 *Web* 内容时，能够更为准确地识别内容块的语义；
>2. 对内容进行操作，包括提供访问、校对，还可以将其转化成其他的相关格式，提供给外部程序和Web服务使用。
>
>总结： 微格式可以对网站进行 *SEO* 优化，如果需要可以考虑。





# 替换元素



## 经典真题



- 什么是可替换元素，什么是非可替换元素，它们各自有什么特点？



## 什么是替换元素



所谓可替换元素（*replaced element*），是指一些展现效果不由 *CSS* 来控制的元素。这些元素是一种外部对象，它们外观的渲染，是独立于 *CSS* 的。



简单来说，它们的内容不受当前文档的样式的影响。*CSS* 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 `<iframe>` 元素，可能具有自己的样式表，但它们不会继承父文档的样式。



与替换元素相对应的，就是非替换元素，顾名思义就是那些样式完全由 *CSS* 来控制的元素，例如 *p，h1～h6* 等。



> 更多可替换元素内容可以参阅 *MDN*：*https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element*



## 常见的替换元素



- 图片标签 *img*
- 内联框架 *iframe*
- 音频视频标签



## 真题解答



- 什么是可替换元素，什么是非可替换元素，它们各自有什么特点？

>可替换元素是指这样一种元素，它在页面中的大部分展现效果不由 *CSS* 决定。
>
>比如 *img* 元素就是一个可替换元素，它在页面中显示出的效果主要取决于你连接的是什么图片，图片是什么它就展示什么，*CSS* 虽然可以控制图片的尺寸位置，但永远无法控制图片本身。
>
>再比如，*select* 元素也是一个典型的可替换元素，它在页面上呈现的是用户操作系统上的下拉列表样式，因此，它的展现效果是由操作系统决定的。所以，同一个 *select* 元素，放到不同操作系统的电脑上会呈现不同的外观。
>
>*img、video、audio*、大部分表单元素都属于可替换元素。
>
>非可替换元素就是指的普通元素，它具体在页面上呈现什么，完全由 *CSS* 来决定。






# 页面可见性



## 经典真题



- 页面可见性（*Page Visibility*）*API* 可以有哪些用途？



## 页面可见性介绍



长期以来我们一直缺少一个判断用户是否正在浏览某个指定标签页的方法。



用户是否去看别的网站了？他们切换回来了么？



现在，*HTML5* 里页面可见性接口就提供给了程序员一个方法，让他们使用 *visibilitychange* 页面事件来判断当前页面可见性的状态，并针对性的执行某些任务。同时还有新的 *document.hidden* 属性可以使用。



常用的 *API* 如下：



- ***document.hidden***：这个新出现的 *document.hidden* 属性，它显示页面是否为用户当前观看的页面，值为 *ture* 或 *false*。



- ***document.visibilityState***：*visibilityState* 的值要么是 *visible* ，表明页面为浏览器当前激活 *tab*，而且窗口不是最小化状态；要么是 *hidden* ，表示页面不是当前激活 *tab* 页面，或者窗口最小化了；或者 *prerender* ，表示页面在重新生成，对用户不可见。



- ***visibilitychange*** 事件：监听页面可见性变化事件



下面是一个页面可见性的具体示例：



```html
<body>
    <p>页面可见性示例</p>
    <script>
        document.addEventListener("visibilitychange", function () {
            if(document.visibilityState === "hidden"){
                document.title = "小样去哪儿了？快回来"
            }
            if(document.visibilityState === "visible"){
                document.title = "页面可见性示例"
            }
        });
    </script>
</body>
```



> 更多有关页面可见性的内容可以参阅 *MDN*：*https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API*



## 真题解答



- 页面可见性（*Page Visibility*）*API* 可以有哪些用途？

>所谓页面可见性，就是获取当前页面的可见状态。因为对于用户来讲可以打开好多标签页面来回切换，然而始终只有一个页面处于显示状态。所以我们可以通过页面可见性（*Page Visibility*）*API* 来判断当前页面是显示状态还是隐藏状态。
>
>常用的 *API* 有三个，*document.hidden* 返回一个布尔值，如果是 *true*，表示当前页面隐藏，*false* 则表示页面可见。不同页面之间来回切换，会触发 *visibilitychange* 事件，还有一个 *document.visibilityState*，表示页面所处的状态。
>
>常见的用途：
>
>- 网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片。
>- 显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新。
>- 页面想要检测是否正在渲染，以便可以准确的计算网页浏览量
>- 当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）






