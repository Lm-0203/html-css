https://www.postcss.com.cn/

# 属性

outline:只能同时设置四条边，同border-box
tabindex：tab键切换顺序，默认从页面上到下，既tabindex从1到高
outline-offset:外边框的偏移量
## 透明度opacity
每个元素都具有透明通道，0~1，
1. rgba(红（0 ~ 255)，绿，蓝，alpha（0 ~ 1）)
2. hex：#红绿蓝透明（也是00 ~ ff）
3. 如果设置元素的opaxity属性，那么元素内所有的内容都会变得透明，所以一般在颜色位置设置alpha通道（rgba、hex）
## 鼠标 cursor
除了已知的，cursor的样式也可以设置为图片
使用cursor:url(地址) auto;
auto表示没有这张图片的话，使用系统默认样式 

## 盒子隐藏
1. display:none;
2. visibility:hidden; 仍然生成盒子，不影响盒子类型，仍然占据空间，默认值visible，可以做成闪烁效果
## 背景图
### 和img元素的区别
img元素属于HTML的概念
背景图属于css概念
1. 当图片属于网页内容时，必须使用img元素
2. 当图片用于美化页面时，必须使用背景图
### 涉及的CSS属性
1. background-image
2. background-repeat
3. background-size
1). 预设值
    contain
    cover
2). 数值或百分比
4. background-position
1). 预设值
center 横向纵向居中
conter top 横向居中，纵向靠上
2). 数值或百分比 
0px（右0左）0px（上0下），是一组 x/y 坐标（可以设置负数）
50% 50% （居中）
5. background-attachment
fixed（背景图相对于可视区窗口固定）
### 背景图和背景颜色混用
    设置background-image 和background-color
### 速写（简写）属性

**位置写到尺寸前面，可以是任何形式，用/隔开**

    center top/5px 3px

### body的背景
css里面的天坑
以下这些规则是为了在元素高度不够的时候设置背景

**画布 canvas**

不是指canvas元素
只是指一块区域

特点：
1. 最小宽度为视口宽度
2. 最小高度为视口高度

**html元素的背景**
覆盖画布

**body元素的背景**
如果html元素有背景，body元素正常，背景覆盖边框盒
如果html元素没有背景，body元素的背景覆盖画布

**关于背景图**
这里只是指代body的背景图，或者是html的背景图
1. 背景图的宽度 __百分比__ ，是相对于可视区窗口
2. 背景图的高度 __百分比__，是相对于html高度，与画布或者body无关
3. 背景图的横向位置，百分比或者预设值，相对于视口
4. 背景图的纵向位置，百分比或者预设值，相对于是相对于html高度，与画布或者body无关 

## 行高的取值 line-height
- px 像素值

当字体大小的取值大于行高的取值时，行与行之间会发生重叠
- 无单位数字
```html
<style>
    p{
        /* 行高为字体大小的两倍 */
        /* 先继承，后计算 */
        line-height:2;
    }
</style>
```

- em单位
```html
<style>
    p{
        /* 行高为字体大小的两倍 */
        /* 先计算像素值，再继承 */
        font-size:12px;
        line-height:2em;
        /* line-height的大小是12*2 */
    }
</style>
```
- 百分比

200%同2em

# css规则
    选择器+声明块
# 样式表
## 内部样式表
    书写在style元素中
```html
<style></style>
```
## 内联样式表 元素样式表
    书写在元素的style属性中
```html
<p style="color:red"></p>
```
## 外部样式表
书写在独立的css文件中
1. 解决多页面样式重复问题（不同页面样式重复可以引用同一css文件，相同代码只书写一次就行）
2. 有利于浏览器缓存，从而提高页面响应速度
## 常见样式声明
```css
body{
    margin:8px;
}
```
1. font-size
px:绝对单位
em:相对于父元素字体大小
2. font-family
sans-serif: 通用字体族名，无衬线字体
3. line-height
有多行文本的情况下，使用相对单位，例如直接写数字1.5
行高可以设置为纯数字，表示相对于当前元素的字体大小
4. letter-spacing
文字间隙
5. font-variant
小写字母转换成大写
# 选择器
帮助你精准的选中想要的元素
## 简单选择器
1. ID选择器
2. 元素选择器
3. 类选择器 
4. 通配符选择器
5. 属性选择器
6. 伪类选择器
1) 爱恨法则：love hate
2) first-child/last-child
3) first-of-type/last-of-type
4) focus html进阶，美化表单元素
4) checked 单选或多选框聚焦时的样式（特有的伪类）
```css
<style>
    /* 选中a元素，并且a元素是第一个子元素 */
    a:first-child{
        color: red;
    }
    /* 选中子元素中的第一个a元素 */
    a:first-of-type{
        color: red;
    }
</style>
```
4) nth-child(an+b)
从1开始排序，n=0，1，2，3...
n也可以使even（偶数2n），odd（奇数2n+1）
5) nth-of-type()

```css
<style>
    /* 选中a元素，并且a元素是父级的第n个子元素 */
    a:nth-child(n){
        color:red;
    }
    /* 选中子元素中的第n个a元素 */
    a:nth-of-type(n){

    }
</style>
```
6) :root{}
选中html元素
7) :target{}
目标选择器，和超链接的锚点连接搭配使用
7. 伪元素选择器
1) first-letter：选中元素中的第一个字母
2) first-line：选中元素中的第一行文字
3) selection：选中被用户框选的文字，比如设置个背景，文字颜色，因为选中的是文字，所以不是所有属性都有效的

## 选择器的组合
1. 并且
2. 后代元素 —— 空格
3. 子元素 —— >
4. 相邻兄弟元素 —— +（最近的那个弟弟）

选中.active下面的li元素

```html
<ul>
    <li>lorem1</li>
    <li class="active">lorem1</li>
    <li>lorem1</li>
    <li>lorem1</li>
    <li>lorem1</li>
</ul>
```
```css

.active{
    color: rgb(158, 212, 212);
}
.active+li{
    color: #abc;
}
```
5. 兄弟元素 —— ~ （全部的弟弟）
6. 分组/群组选择器 —— ,
# 层叠
1. 声明冲突：同一属性，多次应用到同一个元素
2. 层叠：解决声明冲突问题，浏览器自动处理（权重问题）
## 1. 比较重要性
重要性从高到低
>作者样式表
1) 作者样式表中的!important
2) 作者样式表中的普通样式
3) 浏览器默认样式表中的样式
## 2. 比较特殊性
总体规则：看选择器（选择器选中的范围越窄越特殊）
具体规则：通过选择器计算出一个四位数(逢256进1)
1. 千位：内联样式
2. 百位：ID选择器
3. 十位：类、属性、伪类
4. 个位：元素、伪元素
```css
a:link{
    /* 0011 */
    color:#008c8c;
}
```
## 3. 比较源次序
代码书写靠后的胜出
# 应用
1. 重置样式表
常见的重置样式表：normalize.css rset.css meyer.css
2. 爱恨法则
源次序
# 继承
通常跟文字相关的属性都能被继承
# 属性值的计算过程
1. 确定声明值 （作者样式表，浏览器默认样式表）
2. 层叠冲突
3. 使用继承
4. 使用默认值

特殊的两个CSS取值
- inherit: 手动强制继承，将父元素的值取出应用到该元素
- initial：初始值，将该属性设置为默认值
# 盒模型
边框盒：border-box
内容盒: content-box
填充盒: padding-box
## 改变背景覆盖范围
默认情况下，背景覆盖边框盒
background-clip属性的默认值是border-box，可以修改属性值
## 内容溢出处理
>overflow：
当 overflow-x, overflow-y 其中一个设置为 非visible 时，另一个属性会自动将默认值 visible 计算为 auto
> - visible；（默认值）
> - hidden；（溢出隐藏）
> - scroll；（生成滚动条）
> - auto；（生成上下滚动条，没有左右）
> - overflow-x
> - overflow-y
## 断词规则
word-break: 会影响文字在什么位置被截断

- normal：普通。CJK字符（文字位置截断）
             非CJK字符（单词位置截断，也就是空格）
- break-all：所有字符都在文字处截断。
           对CJK字符没什么影响，但是非CJK字符会从单词内部截断，一个单词分成两部分
- keep-all：保持所有，所有文字都在单词之间截断
          对非CJK字符没什么影响，但是CJK字符无法截断，除非文本之间有空格
## 空白处理
单行文本溢出
```css
p{
    overflow:hidden;
    white-space:nowrap;
    /* 另一个属性值pre参考html笔记 */
    text-overflow:ellipsis;
}
```
多行文本溢出加点可以使用js动态生成
# 行盒的盒模型
## 显著特点
1. 盒子沿内容延伸
2. 行盒不能设置宽高
    设置了line-height，如果没有内边距，边框会紧挨内容，但是line-height也是有效的，自己敲代码看看效果
    padding/border/margin：水平方向有效，垂直方向仅会影响背景，不会实际占据空间
```css
{
    line-height:20px;
    /* 在控制台逐渐增加line-height的值 */
    border:10px solid;
}
```
## 行块盒
1. 不独占一行
2. 盒模型中所有尺寸都有效
### 行盒垂直对齐
**多个行盒垂直方向上的对齐**
给没有对齐的元素设置一个vertical-align属性
- 预设值
>好多预设值，top，middle，buttom，text-top······好多好多好多
```css
input{
    vertical-align:middle;
}
```
```html
<input type="checkbox">
<span>七龙珠</span>
```
>一般来说，行盒是底边对齐，改变input的vertical-align属性，从视觉上看，是文字在向复选框对齐，实际上是复选框改变它的对齐方式，使文字相对于复选框对齐，但是这不是重点，vertical-align这个属性在任一行盒上用都可以，最后对齐就行
- 数值
>可以设置数值??px，也可以设置百分比??%

**图片的底部白边**
图片的父元素是一个块盒且块盒高度自动，图片底部和块元素底边之间往往会出现空白，这个问题给父元素加一个边框才能看出来，并且父元素的字体大小 越大，空白越宽
```html
<p><img src=""></p>
```
四种解决方式：
1. 设置父元素的字体大小为0
```css
p{
    font-size:0;
}
span{
    font-size:18px;
}
```
```html
<p>
    <img src="">
    <span></span>
</p>
```
>缺点：
即使span元素的字体大小设置成18px，在网页上还是显示不出来，所以不单单是继承性的问题
所以父元素中有文字的话，不建议这种方法
2. 将图片设置成块盒
>行块盒不行，必须是块盒
3. 图片的对齐方式
```css
img{
    vertical-align:middle;
}
```
```html
<p>
    <img src="">
    <span></span>
</p>
```
4. 改变父元素的行高
```css
p{
    line-height:1ex;
}
span{
    font-size:18px;
}
```
```html
<p>
    <img src="">
    <span></span>
</p>
```
> 使用这种方法不知道对子元素的行高有没有影响，自己后期试验一下，ex这个单位之前没接触过，而且，就是1ex，不是2,3,4,5,6。
>
> 这方法可以用，子元素的行高，也会变为1ex，1ex就是给定字体的小写x单词的高度
## 可替换元素 和 非可替换元素
非可替换元素：大部分元素，页面上显示的结果，取决于元素的内容

可替换元素：页面上显示的属性，取决于元素的属性，eg:img audio video，类似于行块盒，盒模型中所有的尺寸都有效
# 视觉格式化模型
盒模型：规定单个盒子的规则
视觉格式化模型（布局规则）：页面中多个盒子排列规则,大体上将页面中盒子的排列分为三种方式
1. 常规流
2. 浮动
3. 定位
## 常规流
常规流、文档流、普通文档流、常规文档流
所有元素，默认情况下，都属于常规流布局
总体规则：块盒独占一行
         行盒水平依次排列
包含块（containing block）：每个盒子都有它的包含块，包含块决定了盒子的排列区域
绝大部分情况下：盒子的包含块，为其父元素的内容盒（content-box）

### 块盒
1. 每个块盒的总宽度，刚好等于包含块的宽度；
    width的默认值是auto
    auto：将剩余空间吸收掉
    不同情况下auto的意义不同
    margin的取值也可以是auto，但是默认值是0px；
    当width和margin的值都为auto时，width的吸收值强于margin；
    若width、border、padding、margin计算后，仍然有剩余空间，则该剩余空间全部被margin-right吸收
    常规流中，块盒在包含块中居中，可以定宽，然后左右margin设置成auto

  定宽，margin直接auto的话，也只会左右居中，上下是，靠在最上方，因为margin在垂直方向上的auto表示0

2. 每个块盒垂直方向上的auto值
    height:auto 适应内容的高度；
    margin:auto 表示0；

3. 百分比取值
    padding、width、margin可以取值为百分比
    以上的所有百分比相对于包含块的宽度
    eg：margin-top：50%；不是包含块高度的50%，而是包含块宽度的50%
    高度的百分比：
    1). 如果包含块的高度取决于子元素的高度，设置百分比无效
    eg：父元素没有设置高度的话，父元素的高度应该是由子元素撑开的，但是子元素的高度又是父元素高度的一半，相互矛盾
    2). 包含块的高度不取决于子元素的高度，可以设置百分比

4. 上下外边距的合并
    两个常规流块盒，上下外边距相邻，会进行合并，取最大值
    兄弟元素 父子元素


## 浮动
### 浮动的细节规则
- 左浮动的盒子自上向左排列
- 右浮动的盒子自上向右排列
- 浮动盒子的顶边不得高于上一个盒子的顶边
- 若剩余空间无法放下浮动的盒子，则该盒子向下移动，直到具备足够的空间能容纳盒子，然后再向左或向右移动
### 应用场景
1. 文字环绕
2. 横向排列
### 浮动的基本特点
1. 当一个元素浮动后，元素必定为块盒（更改display属性为block）
2. 浮动元素的包含块，和常规流一样，为父元素的内容盒
### 盒子尺寸
1. 宽度为auto时，适应内容宽度
2. 高度为auto时，与常规流一样，适应内容高度
3. margin为auto时，为0；
4. 边框，内边距，百分比设置与常规流一样
### 盒子排列
1. 左浮动的盒子靠上靠左排列
2. 右浮动的盒子靠上靠右排列
3. 浮动盒子在包含块中排列时，会避开常规流块盒
4. 常规流块盒在排列时，无视浮动盒子
5. 行盒在排列时，会避开浮动盒子
> 如果文字没有在行盒中，浏览器会自动生成一个行盒包裹文字，该行盒叫匿名行盒
>


6. **上下外边距合并不会发生**
### 高度坍塌
高度坍塌的原因：常规流盒子的自动高度，在计算时，不会考虑浮动盒子
清除浮动，涉及CSS属性：clear
- none（默认值）
- left（清除左浮动：该元素必须出现在前面所有左浮动盒子的下方）
- right（清除右浮动：该元素必须出现在前面所有右浮动盒子的下方）
- both
## 定位
定位：手动控制元素在包含块中的精准定位
### position属性
- static 默认值
- relative 相对定位
- absolute 绝对定位
- fixed 固定定位

一个元素，只要position属性不是static，认为该元素是一个定位元素
定位元素会脱离文档流（相对定位除外relative）
一个脱离了文档流的元素：
1. 文档流中的元素摆放时，会忽略脱离了文档流的元素
2. 文档流中的元素计算高度时，会忽略脱离了文档流的元素

### 相对定位 relative
不会导致元素脱离文档流，保留原来位置进行定位,不会对其他元素造成影响
可以通过四个CSS属性设置其位置
- left
- right
- top
- bottom
这四个值出现矛盾时，以left和top为准

### 绝对定位 absolute
1. 宽高为auto，适应内容
2. 包含块变化：找祖先元素中第一个定位元素，该元素的填充盒（padding-box）为其包含块，若找不到，则它的包含块为整个网页（整个网页为初始化包含块）

### 固定定位 fixed
其他情况和绝对定位完全一样，只有包含块不一样
包含块为浏览器可视窗口

### 定位下的居中
1. 定宽（高）
2. 将左右（上下）距离设置为0
3. 将左右（上下）margin距离设置为auto

绝对定位和固定定位中margin设置为auto自动吸收剩余空间
### 多个定位元素重叠
堆叠上下文
z-index属性，默认值auto
只有定位元素设置z-index属性有效
属性值可以是负数，如果是负数，会被常规流和浮动流元素覆盖

### 补充
1. 绝对定位、固定定位元素一定是块盒
2. 绝对定位、固定定位元素一定不是浮动
3. 没有外边距合并















