# *CSS* 面试题汇总



### 1.  介绍下 *BFC* 及其应用

> 参考答案：
>
> 参考答案：
>
> 所谓 *BFC*，指的是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响。
>
> 触发 *BFC* 的方式有很多，常见的有：
>
> - 设置浮动
> - *overflow* 设置为 *auto、scroll、hidden*
> - *position* 设置为 *absolute、fixed*
>
> 常见的 *BFC* 应用有：
>
> - 解决浮动元素令父元素高度坍塌的问题
> - 解决非浮动元素被浮动元素覆盖问题
> - 解决外边距垂直方向重合的问题



### 2. 介绍下 *BFC、IFC、GFC* 和 *FFC*

> 参考答案：
>
> - *BFC*：块级格式上下文，指的是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响。
> - *IFC*：行内格式化上下文，将一块区域以行内元素的形式来格式化。
> - *GFC*：网格布局格式化上下文，将一块区域以 *grid* 网格的形式来格式化
> - *FFC*：弹性格式化上下文，将一块区域以弹性盒的形式来格式化



### 3. *flex* 布局如何使用？

> 参考答案：
>
> flex 是 Flexible Box 的缩写，意为"弹性布局"。指定容器display: flex即可。
>
> 容器有以下属性：flex-direction，flex-wrap，flex-flow，justify-content，align-items，align-content。
>
> - flex-direction属性决定主轴的方向；
> - flex-wrap属性定义，如果一条轴线排不下，如何换行；
> - flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap；
> - justify-content属性定义了项目在主轴上的对齐方式。
> - align-items属性定义项目在交叉轴上如何对齐。
> - align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
>
> 项目（子元素）也有一些属性：order，flex-grow，flex-shrink，flex-basis，flex，align-self。
>
> - order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
> - flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
> - flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
> - flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
> - flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
> - align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 *auto*，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。



### 4. 怎么让一个 *div* 水平垂直居中

> 参考答案：
>
> 水平垂直居中有好多种实现方式，主要就分为两类不定宽高和定宽高 以在 *body* 下插入一个 *div* 为例
>
> **定宽高** 
>
> 使用定位 + *margin*
>
> ```js
> element.style {
>  position: absolute;
>  left: 50%;
>  top: 50%;
>  margin-left: -250px;
>  margin-top: -250px;
>  width: 500px;
>  height: 500px;
>  background: yellow;
>  z-index: 1;
> }
> ```
>
> 使用定位 + *transfrom*
>
> ````js
> element.style {
>  position: absolute;
>  left: 50%;
>  top: 50%;
>  width: 500px;
>  height: 500px;
>  background: yellow;
>  z-index: 1;
>  transform: translate(-50%, -50%);
> }
> ````
>
> **不定宽高**
>
> 定位 + *transform* 同样适用于定宽高的情况 这里把 *div* 的宽高按照内容撑开
>
> ```js
> element.style {
>  position: absolute;
>  left: 50%;
>  top: 50%;
>  background: yellow;
>  z-index: 1;
>  transform: translate(-50%, -50%);
> }
> ```



### 5. 分析比较 *opacity: 0、visibility: hidden、display: none* 优劣和适用场景。

> 参考答案：
>
> - 结构： display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击， visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击 opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击
>
> - 继承： display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。 visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。
>
> - 性能： display:none 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大 visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容 opacity: 0 ： 修改元素会造成重绘，性能消耗较少
>
> 1. display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）
> 2. visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）
> 3. opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）



### 6. 已知如下代码，如何修改才能让图片宽度为 *300px* ？注意下面代码不可修改。

```js
<img src="1.jpg" style="width:480px!important;”>
```

> 参考答案：
>
> **CSS 方法** 
>
> - *max-width:300px;* 覆盖其样式
> - *transform: scale(0.625)* 按比例缩放图片； 
> - 利用 *CSS* 动画的样式优先级高于 *!important* 的特性
>
> **JS 方法** 
>
> - *document.getElementsByTagName("img")[0].setAttribute("style","width:300px!important;")*



### 7. 如何用 *css* 或 *js* 实现多行文本溢出省略效果，考虑兼容性

> 参考答案：
>
> CSS 实现方式
>
> 单行：
>
> ```css
> overflow: hidden;
> text-overflow:ellipsis;
> white-space: nowrap;
> ```
>
> 多行：
>
> ```css
> display: -webkit-box;
> -webkit-box-orient: vertical;
> -webkit-line-clamp: 3; //行数
> overflow: hidden;
> ```
>
> 兼容：p 标签行高20，最大高度40，也就是最多两行，after 的内容是 ... 说明是强行在文本末加一个 ... 无论有没有溢出
>
> ```css
> p {
>   position: relative;
>   line-height: 20px; 
>   max-height: 40px;
>   overflow: hidden;
> }
> p::after {
>   content: "..."; 
>   position: absolute; 
>   bottom: 0; 
>   right: 0;       
>   padding-left: 40px;
>   background: -webkit-linear-gradient(left, transparent, #fff 55%);
>   background: -o-linear-gradient(right, transparent, #fff 55%);
>   background: -moz-linear-gradient(right, transparent, #fff 55%);
>   background: linear-gradient(to right, transparent, #fff 55%);
> }
> ```
>
> JS 实现方式：
>
> - 使用split + 正则表达式将单词与单个文字切割出来存入words
> - 加上 '...'
> - 判断scrollHeight与clientHeight，超出的话就从words中pop一个出来



### 8. 居中为什么要使用 *transform*（为什么不使用 *marginLeft/Top*）（阿里）

> 参考答案：
>
> transform 属于合成属性（composite property），对合成属性进行 transition/animation 动画将会创建一个合成层（composite layer），这使得被动画元素在一个独立的层中进行动画。通常情况下，浏览器会将一个层的内容先绘制进一个位图中，然后再作为纹理（texture）上传到 GPU，只要该层的内容不发生改变，就没必要进行重绘（repaint），浏览器会通过重新复合（re-composite）来形成一个新的帧。
>
> top/left属于布局属性，该属性的变化会导致重排（reflow/re-layout），所谓重排即指对这些节点以及受这些节点影响的其它节点，进行CSS计算->布局->重绘过程，浏览器需要为整个层进行重绘并重新上传到 GPU，造成了极大的性能开销。



### 9. 介绍下粘性布局（*sticky*）（网易）

> 做吸顶效果的时候，可以用

> 参考答案：
>
> position 中的 sticky 值是 CSS3 新增的，设置了 sticky 值后，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是top、left等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成fixed，根据设置的left、top等属性成固定位置的效果。
>
> sticky 属性值有以下几个特点：
>
> - 该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。
> - 当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了top: 50px，那么在sticky元素到达距离相对定位的元素顶部50px的位置时固定，不再向上移动。
> - 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于viewport来计算元素的偏移量



### 10. 说出 *space-between* 和 *space-around* 的区别？（携程）

> 参考答案：
>
> 这个是 *flex* 布局的内容，其实就是一个边距的区别，按水平布局来说，`space-between`是两端对齐，在左右两侧没有边距，而`space-around`是每个 子项目左右方向的 margin 相等，所以两个item中间的间距会比较大。
>
> 如图所示：
>
> <img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-03-010805.png" alt="image-20210816161354713" style="zoom:50%;" />
>
> justify-content: 
> center; start; end; flex-start; flex-end; left; right; normal; space-between; space-around; space-evenly; stretch; safe center; unsafe center; inherit; initial; revert; revert-layer; unset;



### 11. *CSS3* 中 *transition* 和 *animation* 的属性分别有哪些（哔哩哔哩）

> 参考答案：
>
> *transition* 过渡动画：
>
> - *transition-property*：指定过渡的 *CSS* 属性
> - *transition-duration*：指定过渡所需的完成时间
> - *transition-timing-function*：指定过渡函数
> - *transition-delay*：指定过渡的延迟时间
>
> *animation* 关键帧动画：
>
> - *animation-name*：指定要绑定到选择器的关键帧的名称
> - *animation-duration*：动画指定需要多少秒或毫秒完成
> - *animation-timing-function*：设置动画将如何完成一个周期
> - *animation-delay*：设置动画在启动前的延迟间隔
> - *animation-iteration-count*：定义动画的播放次数
> - *animation-direction*：指定是否应该轮流反向播放动画
> - *animation-fill-mode*：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
> - *animation-play-state*：指定动画是否正在运行或已暂停



### 12. 隐藏页面中的某个元素的方法有哪些？

> 参考答案：
>
> 1. 隐藏类型
>
> 屏幕并不是唯一的输出机制，比如说屏幕上看不见的元素（隐藏的元素），其中一些依然能够被读屏软件阅读出来（因为读屏软件依赖于可访问性树来阐述）。为了消除它们之间的歧义，我们将其归为三大类：
>
> - 完全隐藏：元素从渲染树中消失，不占据空间。
> - 视觉上的隐藏：屏幕中不可见，占据空间。
> - 语义上的隐藏：读屏软件不可读，但正常占据空间。
>
> **完全隐藏**
>
> (1) css display 属性
>
> ```css
> display: none;
> ```
>
> (2) 标签 hidden 属性
> HTML5 新增属性，相当于 display: none
>
> ```html
> <div hidden></div>
> ```
>
> **视觉上的隐藏**
>
> (1) 设置 position 为 absolute 或 fixed，通过设置 top、left 等值，将其移出可视区域。
>
> ```css
> position:absolute;
> left: -99999px;
> ```
>
> (2) 设置 position 为 relative，通过设置 top、left 等值，将其移出可视区域。
> position relative 是根据元素的当前位置进行偏移，不会影响其他兄弟元素的布局
> ```css
> position: relative;
> left: -99999px;
> height: 0
> ```
>
> (3) 设置 margin 值，将其移出可视区域范围（可视区域占位）。
> 
> ```css
> margin-left: -99999px;
> height: 0;
> ```
>
> (4) [不确定是不是] opacity: 0、visibility: hidden -> 渲染的时候会继续占据空间
>
>
> **语义上隐藏**
>
> *aria-hidden 属性*
>
> 读屏软件不可读，占据空间，可见。
>
> ```js
> <div aria-hidden="true">
> </div>
> ```



### 13. 层叠上下文

> 参考答案：
>
> **层叠上下文概念**
>
> 在 *CSS2.1* 规范中，每个盒模型的位置是三维的，分别是平面画布上的 *X* 轴，*Y* 轴以及表示层叠的 *Z* 轴。
>
> 一般情况下，元素在页面上沿 *X* 轴 *Y* 轴平铺，我们察觉不到它们在 *Z* 轴上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。
>
> **层叠上下文触发条件**
>
> - *HTML* 中的根元素 *HTML* 本身就具有层叠上下文，称为“根层叠上下文”。
> - 普通元素设置 *position* 属性为非 *static* 值并设置 *z-index* 属性为具体数值，产生层叠上下文
> - *CSS3* 中的新属性也可以产生层叠上下文
>
> **层叠顺序**
>
> “层叠顺序”（*stacking order*）表示元素发生层叠时按照特定的顺序规则在 *Z* 轴上垂直显示。
>
> 说简单一点就是当元素处于同一层叠上下文内时如何进行层叠判断。
>
> 具体的层叠等级如下图：
>
> <img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-03-010804.png" alt="image-20210816174742449" style="zoom:50%;" />


### 15. 讲一下*png8、png16、png32*的区别，并简单讲讲 *png* 的压缩原理

> 参考答案：
>
> PNG图片主要有三个类型，分别为 PNG 8/ PNG 24 / PNG 32。
>
> - `PNG 8`：PNG 8中的8，其实指的是8bits，相当于用2^8（2的8次方）大小来存储一张图片的颜色种类，2^8等于256，也就是说PNG 8能存储256种颜色，一张图片如果颜色种类很少，将它设置成PNG 8得图片类型是非常适合的。
> - `PNG 24`：PNG 24中的24，相当于3乘以8 等于 24，就是用三个8bits分别去表示 R（红）、G（绿）、B（蓝）。R(0-255),G(0-255),B(0-255)，可以表达256乘以256乘以256=16777216种颜色的图片，这样PNG 24就能比PNG 8表示色彩更丰富的图片。但是所占用的空间相对就更大了。
> - `PNG 32`：PNG 32中的32，相当于PNG 24 加上 8bits的透明颜色通道，就相当于R（红）、G（绿）、B（蓝）、A（透明）。R(0~255),G(0~255),B(0~255),A(0~255)。比PNG 24多了一个A（透明），也就是说PNG 32能表示跟PNG 24一样多的色彩，并且还支持256种透明的颜色，能表示更加丰富的图片颜色类型。
>
> PNG图片的压缩，分两个阶段：
>
> - `预解析（Prediction）`：这个阶段就是对png图片进行一个预处理，处理后让它更方便后续的压缩。
> - `压缩（Compression）`：执行Deflate压缩，该算法结合了 LZ77 算法和 Huffman 算法对图片进行编码。



### 16. 说说渐进增强和优雅降级

> 参考答案：
>
> 这并不是一个新的概念，其实就是以前提到的"向上兼容"和"向下兼容"。渐进增强相当于向上兼容，优雅降级相当于向下兼容。向下兼容指的是高版本支持低版本，或者说后期开发的版本能兼容早期开发的版本。
>
> 在确定用户群体的前提下，渐进增强：针对低版本浏览器进行页面构建，保证基本功能，再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验。优雅降级：一开始就构建完整的功能，再针对低版本浏览器进行兼容。区别：优雅降级是从复杂的现状开始并试图减少用户体验的供给，而渐进增强则是从一个基础的、能够起到作用的版本开始再不断扩充，以适应未来环境的需要。
>
> 绝大多少的大公司都是采用渐进增强的方式，因为业务优先，提升用户体验永远不会排在最前面。
>
> - 例如新浪微博网站这样亿级用户的网站，前端的更新绝不可能追求某个特效而不考虑低版本用户是否可用。一定是确保低版本到高版本的可访问性再渐进增强。
> - 如果开发的是一面面向青少面的软件或网站，你明确这个群体的人总是喜欢尝试新鲜事物，喜欢炫酷的特效，喜欢把软件更新至最新版本，这种情况再考虑优雅降级。



### 17. 介绍下 *position* 属性

> 参考答案：
>
> position 属性主要用来定位，常见的属性值如下：
>
> - `absolute` 绝对定位，相对于 `static` 定位以外的第一个父元素进行定位。
> - `relative` 相对定位，相对于其自身正常位置进行定位。
> - `fixed` 固定定位，相对于浏览器窗口进行定位。
> - `static` 默认值。没有定位，元素出现在正常的流中。
> - `inherit` 规定应该从父元素继承 position 属性的值。
> - `sticky` 粘性定位，当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。



### 18. 如何用 *CSS* 实现一个三角形

> 参考答案：
>
> 可以利用 border 属性
>
> 利用盒模型的 `border` 属性上下左右边框交界处会呈现出平滑的斜线这个特点，通过设置不同的上下左右边框宽度或者颜色即可得到三角形或者梯形。
>
> 如果想实现其中的任一个三角形，把其他方向上的 `border-color` 都设置成透明即可。
> 在三角形的基础上增加宽或者高的值，就可以实现梯形
>
> 示例代码如下：
>
> ```html
> <div></div>
> ```
>
> ```css
> div{
>   width: 0;
>   height: 0;
>   border: 10px solid red;
>   border-top-color: transparent;
>   border-left-color: transparent;
>   border-right-color: transparent;
> }
> ```



### 19. 如何实现一个自适应的正方形

> 参考答案：
>
> **方法1：利用 CSS3 的 vw 单位**
>
> `vw` ：浏览器可见视口【宽度】的百分比（1vw代表视窗【宽度】的1%）会把视口的宽度平均分为 100 份
>
> ```
> .square {
>     width: 10vw;
>     height: 10vw;
>     background: red;
> }
> ```
>
> **方法2：利用 margin 或者 padding 的百分比计算是参照父元素的 width 属性**
>
> ```
> .square {
>     width: 10%;
>     padding-bottom: 10%; 
>     height: 0; // 防止内容撑开多余的高度
>     background: red;
> }
> ```



### 20. 如何实现三栏布局

> 参考答案：
>
> 三栏布局是很常见的一种页面布局方式。左右固定，中间自适应。实现方式有很多种方法。
>
> **第一种：flex**
>
> ```css
> <div class="container">
>  <div class="left">left</div>
>  <div class="main">main</div>
>  <div class="right">right</div>
> </div>
> .container{
>  display: flex;
> }
> .left{
>  flex-basis:200px;
>  background: green;
> }
> .main{
>  flex: 1;
>  background: red;
> }
> .right{
>  flex-basis:200px;
>  background: green;
> }
> ```
>
> **第二种：position + margin**
>
> ```
> <div class="container">
>  <div class="left">left</div>
>  <div class="right">right</div>
>  <div class="main">main</div>
> </div>
> body,html{
>  padding: 0;
>  margin: 0;
> }
> .left,.right{
>  position: absolute;
>  top: 0;
>  background: red;
> }
> .left{
>  left: 0;
>  width: 200px;
> }
> .right{
>  right: 0;
>  width: 200px;
> }
> .main{
>  margin: 0 200px ;
>  background: green;
> }
> ```
>
> **第三种：float + margin**
>
> ```
> <div class="container">
>  <div class="left">left</div>
>  <div class="right">right</div>
>  <div class="main">main</div>
> </div>
> body,html{
>  padding:0;
>  margin: 0;
> }
> .left{
>  float:left;
>  width:200px;
>  background:red;
> }
> .main{
>  margin:0 200px;
>  background: green;
> }
> .right{
>  float:right;
>  width:200px;
>  background:red;
> }
> ```



### 21. *import* 和 *link* 区别

> 参考答案：
>
> 1. 从属关系区别
>
> `@import`是 CSS 提供的语法规则，只有导入样式表的作用；`link`是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
>
> 2. 加载顺序区别
>
> 加载页面时，`link`标签引入的 CSS 被同时加载；`@import`引入的 CSS 将在页面加载完毕后被加载。
>
> 3. 兼容性区别
>
> `@import`是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；`link` 标签作为 HTML 元素，不存在兼容性问题。
>
> 4. DOM可控性区别
>
> 可以通过 JS 操作 DOM ，插入`link`标签来改变样式；由于DOM方法是基于文档的，无法使用`@import`的方式插入样式。



### 22. 说说你对 *BFC* 的理解

> 参考答案：
>
> 块级格式化上下文 *Block Formatting Context* 是 CSS 规范中一个概念，决定元素的内容如何渲染以及与其他元素的关系。存在5条规则：
>
> 1. *BFC* 有隔离作用，内部元素不受外部元素影响，反之亦然。
> 2. 一个元素只能存在于一个 *BFC* 中，如果能同时存在于两个 *BFC* 中，那么就违反了 *BFC* 的隔离原则。
> 3. *BFC* 内的元素按正常流排列，元素间的间隙由元素外边距控制。
> 4. *BFC* 中的内容不会与外面的浮动元素重叠。
> 5. 计算 *BFC* 的高度需要包括 *BFC* 内的浮动子元素的高度。



### 23. 清除浮动的方法

> 参考答案：
>
> - clear 清除浮动（添加空div法）在浮动元素下方添加空div，并给该元素写css样式： {clear:both;height:0;overflow:hidden;}
>
> - 给浮动元素父级设置高度
>
> - 父级同时浮动（需要给父级同级元素添加浮动）
>
> - 父级设置成inline-block，其margin: 0 auto居中方式失效
>
> - 给父级添加overflow:hidden 清除浮动方法
>
> - 万能清除法 after 伪类清浮动（现在主流方法，推荐使用）



### 24. 说说选择器的权重计算方式

> 参考答案：
>
> *!important* 最高，\* 为0，行内样式 A 组加一，id 选择器 B 组加一，类、伪类、属性选择器 C 组加一，元素、伪元素 D 组加一。
>
> <img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-03-10806.png" alt="image-20210816194530798" style="zoom:50%;" />
>
> 其中 A 组权重值为 1000，B 组权重值为 100，C 组权重值为 10，D 组权重值为 1。



### 25. *css reset* 和 *normalize.css* 有什么区别？

> 参考答案：
>
> - 两者都是通过重置样式，保持浏览器样式的一致性
>
> - 前者几乎为所有标签添加了样式，后者保持了许多浏览器样式，保持尽可能的一致
>
> - 后者修复了常见的桌面端和移动端浏览器的 bug：包含了 HTML5 元素的显示设置、预格式化文字的 font-size 问题、在 IE9 中 SVG 的溢出、许多出现在各浏览器和操作系统中的与表单相关的 bug。
>
> - 前者中含有大段的继承链
>
> - 后者模块化，文档较前者来说丰富



### 26. 说说两种盒模型以及区别

> 参考答案：
>
> 盒模型也称为框模型，就是从盒子顶部俯视所得的一张平面图，用于描述元素所占用的空间。它有两种盒模型，W3C盒模型和IE盒模型（IE6以下，不包括IE6以及怪异模式下的IE5.5+）
>
> 理论上两者的主要区别是二者的盒子宽高是否包括元素的边框和内边距。当用CSS给给某个元素定义高或宽时，IE盒模型中内容的宽或高将会包含内边距和边框，而W3C盒模型并不会。



### 27. 如何避免重绘或者重排？

> 参考答案：
>
> 1. **集中改变样式**
>
> 我们往往通过改变 class 的方式来集中改变样式
>
> ```
> // 判断是否是黑色系样式
> const theme = isDark ? 'dark' : 'light'
> 
> // 根据判断来设置不同的class
> ele.setAttribute('className', theme)
> ```
>
> 2. **使用 DocumentFragment**
>
> 我们可以通过createDocumentFragment创建一个游离于DOM树之外的节点，然后在此节点上批量操作，最后插入DOM树中，因此只触发一次重排
>
> ```
> var fragment = document.createDocumentFragment();
> 
> for (let i = 0;i<10;i++){
>   let node = document.createElement("p");
>   node.innerHTML = i;
>   fragment.appendChild(node);
> }
> 
> document.body.appendChild(fragment);
> ```
>
> 3. **提升为合成层**
>
> 将元素提升为合成层有以下优点：
>
> - 合成层的位图，会交由 GPU 合成，比 CPU 处理要快
> - 当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层
> - 对于 transform 和 opacity 效果，不会触发 layout 和 paint
>
> 提升合成层的最好方式是使用 CSS 的 will-change 属性：
>
> ```
> #target {
>   will-change: transform;
> }
> ```



### 28. 如何触发重排和重绘？

> 参考答案：
>
> 任何改变用来构建渲染树的信息都会导致一次重排或重绘：
>
> - 添加、删除、更新DOM节点
> - 通过display: none隐藏一个DOM节点-触发重排和重绘
> - 通过visibility: hidden隐藏一个DOM节点-只触发重绘，因为没有几何变化
> - 移动或者给页面中的DOM节点添加动画
> - 添加一个样式表，调整样式属性
> - 用户行为，例如调整窗口大小，改变字号，或者滚动。



### 29. 重绘与重排的区别？

> 参考答案：
>
> - 重排: 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算，表现为重新生成布局，重新排列元素
> - 重绘: 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新，表现为某些元素的外观被改变
>
> 单单改变元素的外观，肯定不会引起网页重新生成布局，但当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分
>
> 重排和重绘代价是高昂的，它们会破坏用户体验，并且让UI展示非常迟缓，而相比之下重排的性能影响更大，在两者无法避免的情况下，一般我们宁可选择代价更小的重绘。
>
> 『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。



### 30. 如何优化图片

> 参考答案：
>
> 1. 对于很多装饰类图片，尽量不用图片，因为这类修饰图片完全可以用 CSS 去代替。
>
> 2. 对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。
>
> 3. 小图使用 *base64* 格式
>
> 4. 将多个图标文件整合到一张图片中（雪碧图）
>
> 5. 选择正确的图片格式：
>
> - 对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好
> - 小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替
> - 照片使用 JPEG



### 31. 说说重绘（Repaint）和回流（Reflow）

>参考答案：
>
>请参阅前面 *28、29、30* 题。



### 32. 你能描述一下渐进增强和优雅降级之间的不同吗?

>参考答案：
>
>渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
>
>优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
>
>区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。



### 33. 如何在页面上实现一个圆形的可点击区域？

>参考答案：
>
>首先使用 *CSS3* 新增的 *border-radius* 属性来将一个区域变成圆形，然后再使用 *JS* 来绑定事件。



### 34. 什么是渐进式渲染（*progressive rendering*）？

>参考答案：
>
>渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。
>
>在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。
>
>一些举例：
>
>- 图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。
>- 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听`DOMContentLoaded`/`load`事件加载其他资源和内容。
>- 异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。



### 35. *CSS3* 新增了那些东西？

>参考答案：
>
>*CSS3* 新增东西众多，这里列举出一些关键的新增内容：
>
>- 选择器
>- 盒子模型属性：*border-radius、box-shadow、border-image*
>- 背景：*background-size、background-origin、background-clip*
>- 文本效果：*text-shadow、word-wrap*
>- 颜色：新增 *RGBA，HSLA* 模式
>- 渐变：线性渐变、径向渐变
>- 字体：*@font-face*
>- 2D/3D转换：*transform、transform-origin*
>- 过渡与动画：*transition、@keyframes、animation*
>- 多列布局
>- 媒体查询



### 36. 我想实现一根只有 *1px* 的长线怎么实现?

>参考答案：
>
>实现的方式很多，下面是一种参考方案：
>
>```css
>.line {
>width: 100%;
>height: 1px;
>overflow: hidden;
>font-size: 0px; 
>border-bottom: dashed 1px #ccc;
>}
>```
>
>```html
><div class="line"></div>
>```



### 37. 三角形怎么实现？要设置宽高吗？

>参考答案：
>
>设置块级元素宽高为 0，边框3条设置为透明色。具体可以参阅第 18 题答案



### 38. *box-sizing* 有什么作用？

>参考答案：
>
>*box-sizing* 是用于告诉浏览器如何计算一个元素是总宽度和总高度，主要用来切换标准盒模型和 IE 盒子。
>
>- 标准盒模型 box-sizing: content-box
>  content-box:
>  width  = content width;
>  height = content height
>
>- IE盒模型      box-sizing: border-box
>  border-box:
>  width  = border + padding + content width
>  heigth = border + padding + content heigth



### 39. *img* 标签在页面中有 *1px* 的边框，怎么处理

> 参考答案：
>
> ```css
> img{
> 	border: 0;
> }
> ```



### 40. 如何绝对居中（不用定位）（看书网）

> 参考答案：
>
> 方法一：
>
> 使用 *flex* 弹性盒来绝对居中
>
> 方法二：
>
> 设置 *margin-left* 为 *calc(50% - 50px);*



### 41. *CSS* 选择器权重值

> 参考答案：
>
> 请参阅前面第 *24* 题答案。



### 42. 我有5个div在一行，我要让div与div直接间距10px且最左最右两边的div据边框10px，同时在我改变窗口大小时，这个10px不能变，div根据窗口改变大小（长天星斗）

> 参考答案：
>
> ```css
> *{
> margin: 0;
> }
> .container {
> display: flex;
> }
> .container>div{
> outline: 1px solid;
> margin: 0 5px;
> flex-grow: 1;
> }
> 
> .container>div:first-child {
> margin-left: 10px;
> }
> .container>div:last-child {
> margin-right: 10px;
> }
> ```
>
> ```html
> <div class="container">
> <div>1</div>
> <div>2</div>
> <div>3</div>
> <div>4</div>
> <div>5</div>
> </div>
> ```



### 43. *bootstrap* 响应式的原理是什么

> 参考答案：
>
> *bootstrap* 使用的是栅格布局。栅格布局的实现原理，是通过定义容器大小，平分 *12* 份，再调整内外边距，最后结合媒体查询，就制作出了强大的响应式网格系统。



### 44. 如何做响应式？

> 参考答案：
>
> 可以使用 *CSS3* 新增的媒体查询。
>
> 媒体查询的语法如下：
>
> ```css
> @media mediatype and|not|only (media feature) { CSS-Code;}
> ```



### 45. 什么是响应式设计

> 参考答案：
>
> 响应式设计简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。
>
> 优点：
>
> - 面对不同分辨率设备灵活性强
> - 能够快捷解决多设备显示适应问题
>
> 缺点：
>
> 兼容各种设备工作量大，效率低下
>
> 代码累赘，会出现隐藏无用的元素，加载时间加长
>
> 其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果
>
> 一定程度上改变了网站原有的布局结构，会出现用户混淆的情况
>
> 具体步骤：
>
> - 第一步：meta 标签
>
> 为了适应屏幕，多数的移动浏览器会把HTML网页缩放到设备屏幕的宽度。你可以使用meta标签的viewport属性来设置。下面的代码告诉浏览器使用设备屏幕宽度作为内容的宽度，并且忽视初始的宽度设置。这段代码写在 `<head>`里面
>
> ```
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> ```
>
> IE8及以下的浏览器不支持media query。你可以使用 media-queries.js 或 respond.js 。这样IE就能支持media query了。
>
> ```
> <!--[if lt IE 9]> <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script> <![endif]-->
> ```
>
> - 第二步：HTML 结构
>
> 这个例子里面，有header、content、sidebar和footer等基本的网页布局。
>
> header 有固定的高180px，content 容器的宽是600px，sidebar的宽是300px。
>
> - 第三步：Media Queries
>
> CSS3 media query 响应式网页设计的关键。它像一个 if 语句，告诉浏览器如何根据特定的屏幕宽口来加载网页。
>
> 下面是一个媒体查询示例代码：
>
> ```js
> @media screen and (max-width: 300px) {
>     body {
>         background-color:lightblue;
>     }
> }
> ```
>
> 如果文档宽度小于 300 像素则修改背景演示(background-color)



### 46. 块级元素转行内元素除了 *display:inline* 还有什么？ 

> 参考答案：
>
> *display:inline-block*



### 47. 对 *CSS hack* 技术的理解

> 参考答案：
>
> **什么是CSS hack**
> 由于不同厂商的流览器或某浏览器的不同版本（如IE6-IE11,Firefox/Safari/Opera/Chrome等），对CSS的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的CSS样式，我们把这个针对不同的浏览器/不同版本写相应的CSS code的过程，叫做CSS hack!
>
> **CSS hack的原理**
> 由于不同的浏览器和浏览器各版本对CSS的支持及解析结果不一样，以及CSS优先级对浏览器展现效果的影响，我们可以据此针对不同的浏览器情景来应用不同的CSS。
>
> **CSS hack分类**
> CSS Hack大致有3种表现形式，CSS属性前缀法、选择器前缀法以及IE条件注释法（即HTML头部引用if IE）Hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。
>
> - 属性前缀法(即类内部Hack)：例如 IE6能识别下划线"_"和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认识"\9"，但firefox前述三个都不能认识。
> - 选择器前缀法(即选择器Hack)：例如 IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
> - IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： `<!--[if IE]>`IE浏览器显示的内容 `<![endif]-->`，针对IE6及以下版本： `<!--[if lt IE 6]>`只在IE6-显示的内容 `<![endif]-->`。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。
>
> 下面是微软官方推荐使用的 hack 方式：
>
> ```js
> 只在IE下生效<!--[if IE]>  这段文字只在IE浏览器显示<![endif]-->只在IE6下生效<!--[if IE 6]>  这段文字只在IE6浏览器显示<![endif]-->只在IE6以上版本生效<!--[if gte IE 6]>  这段文字只在IE6以上(包括)版本IE浏览器显示<![endif]-->只在IE8上不生效<!--[if ! IE 8]>  这段文字在非IE8浏览器显示<![endif]-->非IE浏览器生效<!--[if !IE]>  这段文字只在非IE浏览器显示<![endif]-->
> ```



### 48. *px* 和 *em* 的区别 

> 参考答案：
>
> - *px* 即 *pixel* 像素，是相对于屏幕分辨率而言的，是一个相对绝对单位，即在同一设备上每个设备像素所代表的物理长度是固定不变的（绝对性），但在不同设备间每个设备像素所代表的物理长度是可以变化的（相对性）。
> - *em* 一个相对单位，不是一个固定的值，来源于纸张印刷业，在 *web* 领域它指代基准字号，浏览器默认渲染文字大小是 16*px* ，它会继承计算后的父级元素的 font-size。



### 49. *div* 之间的间隙是怎么产生的，应该怎么消除？

>参考答案：
>
>原因：浏览器解析的时候，会把回车换行符解析成一定的间隙，间隙的大小跟默认的字体大小设置有关。
>
>解决：其父元素加上 font-size:0 的属性，但是字体需要额外处理。



### 50. *position* 有哪些值，各自的用法如何？

>参考答案：
>
>*position* 属性值有 *static、relative、absolute、fixed、sticky*。
>
>1. *static*：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。
>
>2. *relative*：相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。
>
>3. *absolute*：相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其它元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 *static* 祖先元素定位。
>
>4. *fixed*：固定定位与绝对定位相似，但元素的包含块为 *viewport* 视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素。
>
>5. *sticky*：粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。



### 51. 相对定位、绝对定位、固定定位的区别

>参考答案：
>
>请参阅上一题答案。



### 52. *display:none* 和 *visibility:hidden* 的区别

>参考答案：
>
>相同点：都是设置某一个 DOM 元素不可见
>
>区别：
>
>- display:none 设置不可见后不会再存在于文档流中，也就是说不会再占据空间
>- visibility:hidden 仍然存在于文档流中，之前所占据的空间还存在



### 53. 触发 *BFC* 的机制

>参考答案：
>
>请参阅前面第 1 题。



### 54. div 怎么垂直居中

>参考答案：
>
>div 垂直居中的方式比较多，常见的有下面 3 种：
>
>- 利用绝对定位实现的居中
>- 利用flex垂直居中
>- transform+relative实现的居中

> 解析：
>
> 下面针对上面所列举的 3 种垂直居中的方式，给出对应的代码片段
>
> **利用绝对定位实现的居中**
>
> ```js
> <!DOCTYPE html>
> <html>
>  <head>
>      <meta charset="UTF-8">
>      <title>居中</title>
>      <style type="text/css">
>          *{
>              padding: 0px;
>              margin: 0px;
>          }
>          body {
>              height: 100%;
>              overflow: hidden;
>          }
>          .father{
>              position: absolute;
>              height: 500px;
>              width: 100%;
>              background-color:#2AABD2;
>          }
>          .children{
>              position: absolute;
>              top: 50%;
>              left: 50%;
>              background-color: red;
>              width: 100px; 
>              height: 100px;
>              margin: -50px 0 0 -50px;
>          }
>      </style>
>  </head>
>  <body>
>      <div class="father">
>          <div class="children">
>          </div>
>      </div>
>  </body>
> </html>
> ```
>
> **利用flex垂直居中**
>
> ```js
> <!DOCTYPE html>
> <html>
>  <head>
>      <meta charset="UTF-8">
>      <title>居中</title>
>      <style type="text/css">
>          *{
>              padding: 0px;
>              margin: 0px;
>          }
>          body {
>              height: 100%;
>              overflow: hidden;
>          }
>          .father{
>              height: 500px;
>              width: 100%;
>              background-color:#2AABD2;
>              display: flex;
>              justify-content: center;/*实现水平居中*/
>              align-items:center; /*实现垂直居中*/
>          }
>          .children{
>              background-color: red;
>              width: 100px; 
>              height: 100px;
>          }
>      </style>
>  </head>
>  <body>
>      <div class="father">
>          <div class="children">
>          </div>
>      </div>
>  </body>
> </html>
> ```
>
> **transform+relative实现的居中**
>
> ```js
> <!DOCTYPE html>
> <html>
>  <head>
>      <meta charset="UTF-8">
>      <title>居中</title>
>      <style type="text/css">
>          *{
>              padding: 0px;
>              margin: 0px;
>          }
>          body {
>              height: 100%;
>              overflow: hidden;
>          }
>          .father{
>              position: absolute;
>              height: 500px;
>              width: 100%;
>              background-color:#2AABD2;
>          }
>          .children
>          {
>              width: 300px;
>              height: 150px;
>              background-color: #333333;
> 
>              position: relative;
>              top: 50%;
>              left: 50%;
>              transform: translateX(-50%) translateY(-50%);
>          }
>      </style>
>  </head>
>  <body>
>      <div class="father">
>          <div class="children">
>          </div>
>      </div>
>  </body>
> </html>
> ```



### 55. *less、sass* 是什么？为什么要用它？

>参考答案：
>
>*Less* 和 *Sass* 被称之为 *CSS* 预处理器。
>
>*CSS* 预处理器可以为 *CSS* 增加变编程特性，通过编译器将使用新语法的文件输出为一个 *CSS* 文件，解决 *CSS* 难以复用、代码冗余、可维护性低的缺点。常见的预处理器有 *less、sass、stylus*。
>
>使用他们来书写 *CSS* 代码可以更符合编程思维、简化代码、提高代码重用、便于维护。



### 56. 如何隐藏一个 *DOM* 元素

> 参考答案：
>
> 1. *display: none;*
> 2. *visibility: hidden;*
> 3. *opacity: 0;*



### 57. 你怎么处理页面兼容性问题？

> 参考答案：
>
> 1. 统一标准模式
> 2. 利用 *CSS* 重置技术初始化默认样式
> 3. 针对不同浏览器采用不同的解决方案
> 4. 使用 *CSS Hack* 技术



### 58. *CSS* 引用的方式有哪些？*link* 和 *@import* 的区别？

> 参考答案：
>
> *CSS* 引用的方式有：
>
> - 外联，通过 *link* 标签外部链接样式表
> - 内联，在 *head* 标记中使用 *style* 标记定义样式
> - 嵌入，在元素的开始标记里通过 *style* 属性定义样式
>
> *link* 和 *@import* 的区别：
>
> 1. ***link* 属于 *HTML* 标签，而 *@import* 完全是 *CSS* 提供的一种方式。**
>
>    *link* 标签除了可以加载 *CSS* 外，还可以做很多其它的事情，比如定义 *RSS*，定义 *rel* 连接属性等，*@import* 就只能加载 *CSS* 了。
>
> 2. **加载顺序的差别。**
>
>    比如，在 *a.css* 中使用 *import* 引用 *b.css*，只有当使用当使用 *import* 命令的宿主 *css* 文件 *a.css* 被下载、解析之后，浏览器才会知道还有另外一个 *b.css* 需要下载，这时才去下载，然后下载后开始解析、构建 *render tree* 等一系列操作.
>
> 3. **兼容性的差别。**
>
>    由于 *@import* 是 *CSS2.1* 提出的所以老的浏览器不支持，*@import* 只有在 *IE5* 以上的才能识别，而 *link* 标签无此问题。
>
> 4. **当使用 *JS* 控制 *DOM* 去改变样式的时候，只能使用 *link* 标签，因为 *@import* 不是 *DOM* 可以控制的**。
>
>    对于可换皮肤的网站而言，可以通过改变 *link* 便签这两个的 *href* 值来改变应用不用的外部样式表，但是对于 *import* 是无法操作的，毕竟不是标签。



### 59. *CSS* 动画如何实现？

> 参考答案：
>
> 即 *animation* 属性，对元素某个或多个属性的变化进行控制，可以设置多个关键帧。属性包含了动画的名称、完成时间（以毫秒计算）、周期、间隔、播放次数、是否反复播放、不播放时应用的样式、动画暂停或运行。
>
> 它不需要触发任何事件就可以随着时间变化来改变元素的样式。
>
> **使用 *CSS* 做动画**：
>
> - *@keyframes* 规定动画。       
> - *animation* 所有动画属性的简写属性。     
> - *animation-name* 规定 *@keyframes* 动画的名称。
> - *animation-duration* 规定动画完成一个周期所花费的秒或毫秒。默认是 0。      
> - *animation-timing-function* 规定动画的速度曲线。默认是 *ease*。           
> - *animation-fill-mode* 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。   
> - *animation-delay* 规定动画何时开始。默认是 *0*。    
> - *animation-iteration-count*  规定动画被播放的次数。默认是 *1*。    
> - *animation-direction* 规定动画是否在下一周期逆向地播放。默认是 *normal*。
> - *animation-play-state* 规定动画是否正在运行或暂停。默认是 *running*。



### 60. *display：inline-block* 在什么情况下会产生间隙？

> 参考答案：
>
> **空隙产生的原因**
>
> 元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据 white-space 的处理方式（默认是 normal，合并多余空白），原来 HTML 代码中的回车换行被转成一个空白符，在字体不为 0 的情况下，空白符占据一定宽度，所以 inline-block 的元素之间就出现了空隙。
>
> 这些元素之间的间距会随着字体的大小而变化，例如：当行内元素 font-size:16px 时，间距为8px。
>
> 
>
> **解决空隙的办法**
>
> 1. 办法一：解决元素之间的空白符
>
> ```html
> <!-- 将前一个标签结束符和后一个标签开始符写在同一行 -->
> <div class="parent">
>   <div class="child">child1
>   </div><div class="child">child2
>   </div>
> </div>
> <!-- 将所有子元素写在同一行 -->
> <div class="parent">
>   <div class="child">child1</div><div class="child">child2</div>
> </div>
> ```
>
> 缺点：代码的**可读性变差。**
>
> 
>
> 2. 方法二：为父元素中设置 font-size: 0，在子元素上重置正确的 font-size
>
> ```html
> <div class="parent" style="font-size: 0px">  <div class="child" style="font-size: 16px">child1</div>  <div class="child" style="font-size: 16px">child2</div></div>
> ```
>
> 缺点：inline-block 元素必须设定字体，不然行内元素中的字体不会显示。 增加了代码量。
>
> 
>
> 3. 方法三：为 inline-block 元素添加样式 float:left
>
> 缺点：**float布局会有高度塌陷**问题
>
> 
>
> 4. 方法四：设置子元素margin值为负数
>
> ```css
> .parent .child + .child {
>   margin-left: -2px
> }
> ```
>
> 缺点：元素之间间距的大小与上下文字体大小相关；并且同一大小的字体，元素之间的间距在不同浏览器下是不一样的。
>
> 如：font-size:16px时，Chrome下元素之间的间距为  8px,而 Firefox 下元素之间的间距为 4px。所以不同浏览器下 margin-right 的负值是不一样的，因此这个方法不通用。
>
> 注意：当 marigin-right 使用相对单位 em 来表示时，Chrome 下可以正常去除间距,而 Firefox 下元素之间有重叠。
>
> 
>
> 5. 方法五：最优解在这，设置父元素，display:table 和 word-spacing
>
> ```css
> .parent{
>   display: table;
>   word-spacing:-1em; /*兼容其他浏览器，题主还未验证*/
> }
> ```



### 61. *position* 和 *display、overflow* 发生重叠时会发生什么？

> 参考答案：
>
> 浮动的行内变成块级元素，绝对定位的行内也会变成块级元素。绝对定位时浮动失效，top,bottom,left,right能改变位置。相邻普通流块级垂直方向margin叠压。浮动，inline-block，绝对定位不会和垂直方向其他元素margin叠压。BFC不会和子元素margin叠压。(absolute,fixed都是绝对定位)



### 62. 什么是选择器？有哪些选择器？

> 参考答案：
>
> 选择器决定将样式应用在哪个或哪些元素身上。
>
> - 元素选择器：例如 *div{…} p{...}*
> - id 选择器： 例如 *#box{...}*
> - 类选择器： 例如 *.box{...}*
> - 属性选择器：*[href="#"]{...}*
> - 通配：\*{...}
> - 组合（并集）选择器：*div,p,a,.main{...}*
> - 交集选择器：*input[type="text"]{...}*
> - 后代选择器：*header nav{...}*
> - 子级选择器： *ul>li{...}*
> - 伪类选择器：
>   - *:nth-child(num){...}*
>   - *:nth-child(odd){...}*
>   - *:nth-child(even){...}*
>   - *:nth-of-type{...}*
>   - *:first-child{...}*
>   - *:last-child{...}*
>   - *only-child{...}*
>   - *a:link{...}*
>   - *a:visited{...}*
>   - *:hover{...}*
>   - *a:active{...}*
> - 伪元素选择器：
>   - *::before{...}*
>   - *::after{...}*
>   - *::first-letter{...}*
>   - *::first-line{...}*



### 63. 什么是继承？*CSS* 中哪些属性可以继承？哪些不可以继承？

> 参考答案：
>
> - 继承，指元素可以自动获得祖先元素的某些 *CSS* 属性。通常来说文本类的属性具有继承性。
> - 文本类的样式可以继承：例如 *color、 font-size、 line-height、 font-family、 font-weight、 font-weight、 text-decoration、 letter-spacing、text-align* 等等
> - *display、 margin、 padding、 border、 background、 position、 float* 等则不会被继承



### 64. 谈谈你对响应式的理解。

> 参考答案：
>
> 响应式布局是 *Ethan Marcotte* 在2010年5月提出的一个概念。即页面的设计与开发应当根据用户行为，以及设备环境进行相应的响应与调整。能让一个网站兼容多个终端，展示出不同的结构样式，而不是为每个终端做一个特定的版本。
>
> 具体的实践方式可由多方面组成，包括使用 *flex* 布局、使用 *CSS3*  媒介查询 *media query* 实现。其特点在于灵活性较强，但缺点在于兼容性较差、工作量巨大、代码冗余、网页加载时间过长。



### 65. *CSS* 的计算属性知道吗

> 参考答案：
>
> 即 *calc( )* 函数，主要用于指定元素的长度，支持所有 CSS 长度单位，运算符前后都需要保留一个空格。
>
> 比如： *width: calc(100% - 50px);*



### 66. 为何 *CSS* 放在 *HTML* 头部？

> 参考答案：
>
> 为了尽早让浏览器拿到 *CSS* 并且生成 *CSSOM*，然后与 *HTML* 一次性生成最终的 *RenderTree*，渲染一次即可。如果放在 *HTML* 底部，会出现渲染卡顿的现象影响性能和用户体验。



### 67. *background-size* 有哪 *4* 种值类型？

> 参考答案：
>
> ```css
> background-size: length|percentage|cover|contain;
> ```
>
> - *length*：设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动)
> - *percentage*：将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为“*auto*(自动)”
> - *cover*：此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
> - *contain*：此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。



### 68. *transition、transform、animate* 的区别？

> 参考答案：
>
> transition：过渡效果，它有4个属性：
>
> ```css
> transition: property duration timing-function delay;
> ```
>
> - property ：css属性的名称
>
> - duration ：多长时间完成
>
> - timing-function：转速曲线
>
> - delay：开始的时候。
>
> 
>
> transform： 应用于元素的 2D 或 3D 转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。
>
> - 旋转：rotate
> - 缩放：scale
> - 移动：translate
> - 倾斜：skew
>
> 
>
> animate：应用动画效果。语法如下：
>
> ```css
> animation: name duration timing-function delay iteration-count direction fill-mode play-state;
> ```
>
> - name ：定义的名称
> - duration ：多长时间完成
> - delay ：开始前多长的延迟
> - iteration-count：播放几次
> - direction ：指定是否应该轮流反向播放动画。
> - fill-mode：结束的状态
> - play-state：指定动画是否正在运行或已暂停。



### 69. 描述 *CSS reset* 的作用和用途？

> 参考答案：
>
> 因为不同浏览器间的内核存在差异，对于标记都有自己默认的样式用来保证在没有自定样式的情况下也能被排列、渲染。但各个厂家有自己的风格样式，想要样式不被浏览器默认样式影响，就需要清除默认样式，使各浏览器表现得一致。



### 70. 在 *CSS* 中，关于盒子的 *margin* 属性叙述正确的是

A.  边距 margin 只能取一个值  

B.  margin 边距的属性有 margin-left、margin-right、margin-top、margin-bottom

C. margin 属性的值不可为 auto  

D. margin 的参数值不能全部设置为 0px

> 参考答案：
>
> B

> 解析：
>
> 选项 A，margin 能够设置四个方向的值
>
> 选项 C，可以为 auto
>
> 选项 D，可以设置为 0px



### 71. 以下代码中，属于相对定位的是

A. `#b{width:100px; position:relative}`

B. `#b{width:100px; position:static}`

C. `#b{width:100px;}`

D. `#b{width:100px; position:absolute}`

> 参考答案：
>
> A

> 解析：
>
> B 和 C 都是静态定位，D 是绝对定位



### 72. 以下选项中不能实现清除浮动的是（ ）

A.  空 div

B. hover 伪选择器

C. clear 属性

D. overflow 属性

> 参考答案：
>
> B
>
> A、C、D 是常用的清除浮动的方式，B 是为元素添加 hover 效果



### 73. 关于 *z-index* 属性叙述正确的是（ ）

A. 必须与 postion 一起使用才能生效，此时 postion 取任何值都可以

B. 此值越大，层的顺序越往下

C. 一般后添加的元素，其 z-index 值越大

D.  即使上面的层没有任何内容也会挡住下面的层，使下面的层显示不出来

> 参考答案：
>
> C

> 解析：
>
> 选项 A 确实要和 postion 一起使用，但是不是任何值都可以，z-index 仅能在定位元素上奏效（例如 absolute）
>
> 选项 B 值越大，层的顺序越在上面
>
> 选项 D，如果当前层没有内容或者内容是透明的，是可以看到下面的层的内容的



### 74. 有一个高度自适应的 div，里面有 2 个 div，一个高度 100px，希望另一个填满剩下的高度？（CSS 实现）

> 参考答案：
>
> 方法一：利用定位
>
> ```html
> <div class="main">
> <div class="box1"></div>
> <div class="box2"></div>
> </div>
> ```
>
> ```css
> html,
> body {
> height: 100%;
> margin: 0px;
> padding: 0px;
> }
> 
> .main {
> position: relative;
> height: 100%;
> }
> 
> .box1 {
> height: 100px;
> background-color: red;
> }
> 
> .box2 {
> position: absolute;
> width: 100%;
> top: 100px;
> bottom: 0px;
> background-color: blue;
> }
> ```
>
> 方法二：利用计算属性*calc*
>
> ```css
> html,
> body {
> height: 100%;
> margin: 0px;
> padding: 0px;
> }
> 
> .main {
> height: 100%;
> }
> 
> .box1 {
> height: 100px;
> background-color: red;
> }
> 
> .box2 {
> height: calc(100% - 100px);
> background-color: blue;
> }
> ```



### 75. *display* 有哪些值？说明他们的作用。

> 参考答案：
>
> 常用的有：
>
> - *none*：此元素不显示。
> - *block*：将元素显示为块级元素，前后会带换行符。
> - *inline*：默认值，元素会被显示为内联元素，前后没有换行符。
> - *inline-block*：行内块级元素。



### 76. *position* 的值 *relative* 和 *absolute* 的定位原点是？

> 参考答案：
>
> - **absolute**：生成绝对定位的元素，定位原点是离自己这一级元素最近的一级 *position* 设置为 *absolute* 或者 *relative* 的父元素的左上角为原点的。
> - **relative**：生成相对定位的元素，定位原点是元素本身所在位置。



### 77. 当 margin-top、padding-top 的值是百分比时，分别是如何计算的？

A. 相对父级元素的 height，相对自身的 height

B. 相对最近父级块级元素的 height，相对自身的 height

C. 相对父级元素的 width，相对自身的 width

D. 相对最近父级块级元素的 width，相对最近父级块级元素的 width

> 参考答案：
>
> D
>
> 可以对元素的margin设置百分数，百分数是相对于父元素的width计算，不管是margin-top/margin-bottom还是margin-left/margin-right。（padding同理）
>
> 如果没有为元素声明width，在这种情况下，元素框的总宽度包括外边距取决于父元素的width，这样可能得到“流式”页面，即元素的外边距会扩大或缩小以适应父元素的实际大小。如果对这个文档设置样式，使其元素使用百分数外边距，当用户修改浏览窗口的宽度时，外边距会随之扩大或缩小。



### 78. 伪元素 *:before :after* 的作用？

> 参考答案：
>
> 特有的 *content* 可用于在 *CSS* 中向元素的头部或尾部添加内容，常用于制作小图标。



### 79. 如何使用选择器来隐藏第一个列表项目？

> 参考答案：
>
> ```css
> ul>li:first-child{ 
> display: none; 
> }
> ```



### 80. *transition* 和 *animation* 的区别以及应用场景？

> 参考答案：
>
> - 区别：
>   1. 触发条件不同。*transition* 通常需要交互，由事件触发。*animation* 则与 *gif* 动图差不多，立即播放。
>   2. 循环。*animation* 可以设定循环次数。
>   3. 精确性。*animation* 可以设定每一帧的样式和时间，其中的每一帧都可以有单独的变化。而 *transition* 中的所有样式都是一起变化的。
>   4. 与 *JS* 的交互。使用 *JS* 去操作时，transition 更多。
> - 应用场景：
>   1. 如果需要灵活定制多帧以及循环，使用 *animation* 。
>   2. 如果只是简单的从 XX 样式变到 XX 样式，两者皆可。
>   3. 如果要使用 JS 设定动画，使用 *transition* 。



### 81. 在 *rem* 自适应页面中使用 *sprite* 会出现背景图不随元素放大缩小的情况，如何解决？

> 参考答案：
>
> 将 *backgroud-size* 也换算为 *rem* 作为单位。



### 82. *Normalize* 是什么？

> 参考答案：
>
> 一个样式表的重置文件。因为不同浏览器间的内核存在差异，对于标记都有自己默认的样式用来保证在没有自定样式的情况下也能被排列、渲染。但各个厂家有自己的风格样式，想要样式不被浏览器默认样式影响，就需要清除默认样式，使各浏览器表现得一致。



### 83. 谈一谈 *CSS* 中的 *2D* 转换。

> 参考答案：
>
> 即 *transform*，能够对元素进行移动、缩放、拉伸。
>
> 1. *translate(x, y)*: 元素从当前位置根据给定的 x 坐标 y 坐标移动。
> 2. *rotate(angle)*: 元素顺时针旋转指定的角度，若为负值则逆时针旋转。
> 3. *scale(num, num)*: 放大或缩小元素。
> 4. *skew(angle, angle)*: 围绕 X Y 轴进行转动。



### 84. 谈一谈  *CSS3* 多列属性是什么？以及其使用场景

> 参考答案：
>
> 多列布局是 *CSS3* 新增的一组属性，常用的属性如下：
>
> - *column-count: num*: 规定元素被分隔的列数。
> - *column-gap: num*; 规定列之间的间隔。
> - *column-rule: width style color*: 规定列之间的样式规则。
>
> 更多多列布局相关属性可以参阅：*https://www.runoob.com/css3/css3-multiple-columns.html*
>
> 应用场景：可以将文本内容设计成像报纸一样的多列布局。



### 85. *vw、vh* 是什么？

> 参考答案：
>
> *vw* 和 *vh* 是 *CSS3* 新单位，即 *view width* 可视窗口宽度 和 *view height* 可视窗口高度。1*vw* 就等于可视窗口宽度的百分之一，1*vh* 就等于可视窗口高度的百分之一。



### 86. 如何通过选择器选择 *3* 的倍数？

> 参考答案：
>
> *:nth-child(3n){...}*



### 87. 页面布局有几种方式？

> 参考答案：
>
> 1. 固定宽度布局：为网页设置一个固定的宽度，通常以 *px* 做为长度单位，常见于 *PC* 端网页。
> 2. 流式布局：为网页设置一个相对的宽度，通常以百分比做为长度单位。
> 3. 栅格化布局：将网页宽度人为的划分成均等的长度，然后排版布局时则以这些均等的长度做为度量单位，通常利用百分比做为长度单位来划分成均等的长度。
> 4. 响应式布局：通过检测设备信息，决定网页布局方式，即用户如果采用不同的设备访问同一个网页，有可能会看到不一样的内容，一般情况下是检测设备屏幕的宽度来实现。



### 88. 什么是流式布局？

> 参考答案：
>
> 即 *Fluid Layout* 。这种布局方式在前端开发的早期历史上用来应对不同尺寸的 PC 屏幕，那时的屏幕尺寸差异不会太大，在当今的移动设备开发也常用。
>
> 流式布局是页面元素宽度依照屏幕分辨率进行适配调整，但整体布局不变，其代表就是栅格系统（网格布局）。划分区域的尺寸使用百分比（通常也会搭配 min-\* 或 max-\*）。例如设置网页主体宽度为 85%，min-width 为 960px，图片也做类似的处理 width: 100%; max-width 设置为图片本身尺寸以防止被拉伸变形。
>
> 布局特点在于：屏幕分辨率发生变化时布局不变元素尺寸变。但缺点也很明显，如果屏幕尺寸跨度太大，那么在相对其原始设计而言过大过小的屏幕上就不能正常显示。



### 89. 什么是静态布局？

> 参考答案：
>
> 即 *Static Layout*。传统的 *web* 设计，网页中所有元素的尺寸一律使用 *px* 作为单位。
>
> 布局特点在于：无论浏览器尺寸为多少，布局始终按照最初的设计稿布局来显示。常规的 PC 网站都是使用的静态（定宽度）布局，如果浏览器小于这个宽度则出现滚动条，如果浏览器大于这个宽度则内容居中或添加背景。这些设计方式是最常见的。
>
> 在 *PC* 中，居中布局，所有样式使用一个绝对宽度（定宽）适配当今主流屏幕宽度。在移动设备中，另外建立移动网站，单独设计一个布局，使用不同的域名，比如 *wap.* 或 *m.*。 
>
> 这种布局方案对于 UI 设计师和前端开发人员来说都是最简单、没有兼容性问题的。但缺点显而易见，需要做两次开发。当前大部门门户网站、企业宣传站点都采用了这种布局方式。



### 90. 什么是自适应布局？什么是响应式布局？

> 参考答案：
>
> **自适应布局**
>
> 即 *Adaptive Layout* ，可以把自适应布局看作是静态布局的一个系列。其特点就是分别为不同屏幕分辨率定义布局，即创建多个静态布局，每个静态布局对应一个屏幕分辨率范围，改变分辨率可以切换不同的静态布局，页面元素位置发生改变，元素不随窗口大小的调整而变化。
>
> 布局特点在于：屏幕分辨率变化时元素位置发生变化，尺寸不变。
>
> **响应式布局**
>
> 即 *Responsive Layout*，其目标是确保一个页面在所有终端（各种尺寸的 PC、手机、电视等）都能完美展现，对于开发人员来说通常是结合了流式布局 + 弹性布局 + 媒介查询。分别为不同屏幕分辨率定义布局。
>
> 其特点在于：每个屏幕分辨率下都会有一个布局样式，元素位置、尺寸都会随之发生改变。使用多种布局方法配合，如果足够耐心效果完美。但缺点在于：媒介查询有限只能适应主流宽高，需要匹配足够多的屏幕大小工作量巨大，设计和开发都要需要多个版本。



### 91. 对比各种布局方式的特点。

> 参考答案：
>
> 原理其实类似，都是检测设备，根据不同的设备采用不同的 *CSS*，而且 *CSS* 都是采取百分比的方式。不同点在于：
>
> - 响应式的模板在不同设备上看上去不同，会随着设备的改变而改变表现样式，常用于解决不同设备间分辨率间的兼容。
> - 自适应则是所有设备看起来都是一个模板，不过就是元素长度、图片尺寸变化。
> - 流式则是采用了一些设置，当宽度大于多少时将怎样展示，小于多少时将怎样展示，并且，展示方向像水流一样一部分一部分的加载。常用于解决分辨率差异较小的情况。
> - 静态即采用固定宽度。



### 92. 文字超出了元素的宽度如何使用 *CSS* 处理？

>参考答案
>
>可以使用 *word-wrap* 配合 *word-break* 属性来进行处理。
>
>示例代码如下：
>
>```css
>p{
>word-wrap: break-word;
>	word-break: break-all;
>	overflow: hidden;
>}
>```



### 93. 内外边距取值 *1* 个、*2* 个、*3* 个、*4* 个参数分别表示什么意思？

>参考答案
>
>- 1个值： *margin {10px;}* 表示上右下左
>- 2个值： *margin {10px 20px ;}* 表示上下 左右
>- 3个值： *margin {10px 20px 30px;}* 表示上  左右 下
>- 3个值： *margin {10px 20px 30px 40px ;}* 表示上 右 下 左



### 94. 处理长宽不固定的元素居中方案？

>参考答案
>
>1. 使用 *flex-box*
>2. *ele { position: absolute; top: 50%; left: 50%; transform:translate(-50%;-50%);}*



### 95. 三角形如果不使用图片实现，*CSS* 如何实现？

>参考答案
>
>设置块级元素宽高为 0，边框3条设置为透明色。具体可以参阅第 18 题答案



### 96. 你在工作中是如何使用伪类的？列举一些常用的伪类以及用途。

>参考答案
>
>1. 快速选择到父元素中某一个子级元素
>2. 制作小图标 *icon*
>3. 清除浮动
>4. 使用 *:not()* 排除一些不想选择的元素
>5. 使用 *:nth-child(3n)* 可以快速实现 “每N个实现XX效果”



### 97. 列举 *flex* 布局在你的实际项目里的使用，它能很方便的帮你做一些什么事情？

>参考答案
>
>*flex* 是根据主轴和交叉轴的方向来对元素进行排列，在不固定宽高的情况下可以很方便的帮助我们进行布局、居中、控制对齐方式。



### 98. 如何将大量可变化的图片显示到页面并不影响浏览器性能？

>参考答案
>
>使用图片懒加载。将页面中未出现在可视区域的图片先不做加载，等滚动到可视区域后，再加载。



### 99. 图片与图片之间默认存在的间距如何去除？

>参考答案
>
>1. 将图片全部脱离文档流
>2. 将图片父元素设置文字大小为 0



### 100. 阅读代码，计算元素在 *W3C* 盒模型中的宽度，和在 *IE* 盒模型中的宽度。

```css
div{
  width: 100px;
  padding: 10px;
  border: 1px solid;
  margin: 10px;
}
```

> 参考答案
>
> - W3C 盒模型中的宽度: *width* + *padding* + *border* = 122*px*
> - *IE* 盒模型中的宽度： 100*px*



### 101. 两个相邻兄弟元素如代码所示，此时两个元素之间的间隔是多少？

```markup
<div style="margin-bottom: 20px;"></div>
<div style="margin-top: 10px;"></div>
```

> 参考答案
>
> 20*px*，由于两个元素见发生了外边距塌陷，所以中间的间隔就是取其中较大的值。



### 102. 不使用 border 属性，使用其他属性模拟边框。

> 参考答案
>
> 使用 *outline* 或 *box-shadow* 都可以模拟出边框。



### 103. 阅读代码，计算 ul 的高度。

```markup
 <ul style="overflow: hidden;">
   <li style="height: 100px; float: left;"></li>
 </ul>
```

> 参考答案
>
> *ul* 的高度为 100*px*，虽然子级 *li* 浮动会造成父元素 *ul* 的高度塌陷，但父元素触发了 *BFC*，所以高度可以自动找回。



### 104. 有哪些方式可以将 *p* 文字设置为红色？

> 参考答案
>
> 1. *color: red;*
>
> 2. *color: #f00;*
> 3. *color: #FF0000;*
> 4. *color: rgb(255, 0, 0);*
> 5. *color: hsl(120, 100%, 50%);*



### 105. 如何使用媒体查询实现视口宽度大于 320*px* 小于 640*px* 时 *div* 元素宽度变成 30%？

>参考答案
>
>```css
>@media screen and (min-width: 320px) and (max-width: 640px){
> div{
>    width: 30%;
> }
>}
>```



### 106. 什么是 *HTML* 实体？

>参考答案
>
>即对当前文档的编码方式不能包含的字符提供一种转义表示。例如对于 “>” 符号，它是 HTML 元素的一部分，如果要在文档中显示就需要进行转义为“\&gt;”。



### 107. 什么是全局属性？列举两个全局属性。

>参考答案
>
>全局属性 *Global Attribute* 指全部元素都能使用的通用属性，与之对应的是局部属性 *Local Attribute* 。*class、contenteditable、onclick、data-* 都是全局属性。



### 108. 什么是 *hasLayout*? 触发 *hasLayout* 会有什么后果？

> 参考答案
>
> *hasLayout* 是微软的一个私有概念，类似于 *BFC* ，能够运行在早期的 *IE*6、7 当中，但在 *IE*8+ 已被抛弃。在早期 *IE* 浏览器中，元素会被分为：拥有布局（*hasLayout*）和没有布局，拥有布局的元素就可以控制自己内容的尺寸和位置，没有布局的元素需要由最近的拥有布局的祖先元素代劳。
>
> *IE6* 中很多 *bug* 都是由于元素没有布局所引起的，例如浮动元素会拥有双倍外边距。可以通过定义特定的属性来触发 *lasLayout*：
>
> 1. *float* 为 *left* 或 *right*
> 2. *position* 为 *absolute*
> 3. *width* *height* 不为 *auto*
> 4. *zoom* 不为 *normal*



### 109. 在定位属性 *position* 中，哪个值会脱离文档流?

> 参考答案
>
> *absolute、fixed*。



### 110. 假设视口的宽是 *70px*，高为 *50px*，执行下面代码后，*div* 元素的宽度为多少？

```markup
 <style>
   section{
     margin: 6px;
   }
   div{
     width: 50vw;
     height: 50vh;
   }
 </style>
 <section>
    <div></div>
 </section>
```

> 参考答案
>
> *vw* 和 *vh* 单位，1*vw* 等于视口宽度的 1/100，1*vh* 等于视口高度的 1/100，即 1*vw* = 0.7*px*，1*vh* = 0.5*px*，0.7\*50 = 35*px*，0.5\*50 = 25*px* ，即 *div* 宽度为35*px*，高度25*px*。



### 111. 伪元素 *::before* 和 *:before* 有什么区别？

>参考答案
>
>作用相同，但 *CSS3* 规范中为了区分伪类和伪元素，将 *:before* 改为了 *::before*。



### 112. *cale( )* 函数是什么？有什么作用？

>参考答案
>
>是 *CSS* 的一个函数，只有一个数学表达式参数，可处理数学运算，并且在表达式中可混用不同的单位。例如 
>
>```css
>div{
>width: cale(80% - 20px);
>}
>```



### 113. *:first-child* 和 *:first-of-type* 有什么不同？

>参考答案
>
>- 伪类 *:first-child* 表示父元素第一个子元素，只要这个元素是在第一个位置就会被匹配。
>- 伪类 *:first-of-type* 表示父元素中第一个相同类型的子元素，这个类型得是相同的元素名。
>
>例如：
>
>```html
><div>
> <span>第一个 sapn 元素</span>
> <p>第一个 p 元素</p>
> <p>第二个 p 元素</p>
></div>
>```
>
>```css
>/*匹配第一个 span*/
>div :first-child{}
>/*匹配第一个 p*/
>div p:first-child{}
>```



### 114. 什么叫 *web* 安全色？

>参考答案
>
>在过去，显示器性能比较落后最多支持 256 种颜色，其中 40 种被操作系统作为了保留色，剩下 216 种就是安全色。安全色就指在各种平台下显示效果与预期一致，如果不是安全色，那么操作系统可能在处理颜色时产生抖动（混合几种颜色，模拟出系统没有的颜色），这样就会造成颜色在不同平台中显示出色差。



### 115. 在 *CSS* 中，*background-color: transparent* 和 *opacity: 0* 有什么区别？

>参考答案
>
>*transparent* 关键字相当于 *rgba(0,0,0,0,)*，作为 *background* 的属性值仅仅是将元素的背景色设置为透明，而元素中的内容还可以被显示。*opacity* 则会将元素和内容当作一个整体，全部透明。



### 116. 阅读代码分析 *p* 元素的字体大小。

```markup
 <style>
   section{font-size: 32px;}
   section>div{font-size: 50%;}
 </style>
 <section>
    <div>
     <p>lorem</p>
   </div>
 </section>
```

> 参考答案
>
> 16*px*，因为 *font-size* 具有继承性。



### 117. *@font-face* 有什么作用？

>参考答案
>
>以前，*CSS* 只能使用操作系统中安装的字体，自从引入了 *@font-face* 允许使用在线字体，能将放置在服务器上的自定义字体嵌入到页面中，这个字体也可以是矢量图标。



### 118. 绝对定位和浮动有什么异同？

>参考答案
>
>1. 都会脱离文档流，改变元素盒子类型，将元素变为块级
>2. 都会创建 *BFC*
>3. 不同点在于对包含块的定义、兄弟元素间的影响、可摆放的位置、能否设置 *z-index*



### 119. 字体风格 *font-style* 的关键字有两个：*italic* 和 *oblique* 它们有什么区别？

>参考答案
>
>- *italic* 会对文字的结构有改动，得到一种倾斜字体
>- *oblique* 不会修改文字结构，仅仅是倾斜字体
>- 如果不存在 *italic* 的变形字体 *italic* 的功能将会与 *oblique* 相同



### 120. 文本“强制换行”的属性是什么？

>参考答案
>
>*word-break: break-all*;



### 121. 阅读代码，分析最终执行结果 *div* 的水平、垂直位置距离。

```css
 div{
   width: 200px;
   height: 100px;
   padding: 10px;
   transform: translate(50%, 50%);
 }
```

> 参考答案
>
> 水平位移 *110px* 垂直位移 *60px*。水平方向参照的是元素的宽度，处置方向参照的是元素的高度。*HTM*L 元素默认都以标准盒模型，当元素存在内边距，计算时还要包含内边距。即 *220* 的 *50%* 和 *120* 的 *50%*。



### 122. 设置了元素的过渡后需要有触发条件才能看到效果，列举出可用的触发条件。

>参考答案
>
>1. *:hover 、:checked* 等伪类
>2. 媒体查询，当改变窗口尺寸触发
>3. *js* 触发，用脚本更改元素样式



### 123. 怎样把背景图附着在内容上？

>参考答案
>
>*background-attachment: fixed;*



### 124. *CSS* 优化、提高性能的方法有哪些？

>参考答案
>
>1. 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
>2. 避免 *!important*，可以选择其他选择器
>3. 使用紧凑的语法
>4. 避免不必要的命名空间
>5. 尽可能的精简规则，你可以合并不同类里的重复规则



### 125. 网页中应该使用奇数还是偶数的字体？

>参考答案
>
>偶数。偶数字号相对更容易与 *web* 设计的其他部分构成比例关系， *windows* 自带的点阵宋体（中易宋体）从  *Vista* 开始只提供 12、14、16*px* 这3个大小的点阵，而奇数时是用的是小一号的点。即每个字占的空间大了 1*px* 但点阵没有变，于是略显稀疏。



### 126. *margin* 和 *padding* 分别适合什么场景使用？

>参考答案
>
>- 使用 *margin*：需要在 *border* 外侧添加空白、空白处不需要背景色、上下相连的两个盒子之间的空白，需要相互抵消时。
>- 使用 *padding*: 需要在 *border* 内侧添加空白、空白处需要背景色



### 127. 对于 *line-height* 是如何理解的？

>参考答案
>
>- 行高指一行文字的高度，两行文字间基线与基线之间的距离。在 CSS 中，起高度作用的是 *height* 和 *line-height*
>- 使用行高等于高的方式可以实现单行文字垂直居中
>- 将 *display* 设置为 *inline-block* 可以实现多行文本居中



### 128. 如何让 *Chrome* 支持小于 12px 的文字？

>参考答案
>
>可以配合 *CSS3* 中的 *transform* 属性来实现，例如：
>
>```css
>p{
>font-size: 10px;
>-webkit-transform: scale(0.8);
>}
>```



### 129. 如果需要手动写动画，你认为最小时间间隔是多久？

>参考答案
>
>多数显示器默认频率是 60*Hz*，即 1*s* 刷新 60 次，理论上最小间隔为 1/60\*1000*ms* = 16.7*s*



### 130. 简述 *png、jpg、gif* 这些图片格式的适用场景，有没有了解过 *webp*?

>参考答案
>
>- *png* 是便携式网络图片，一种无损数据压缩位图，优点：压缩比高，色彩好。 大多数地方都可以用。
>- *jpg* 是一种针对相片使用的一种有损的压缩格式，在色调及颜色平滑变化做的不错。常被用来储存和传输照片的格式。
>- *gif* 是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果。
>- *webp* 格式是谷歌在2010年推出的图片格式，压缩率只有 *jpg* 的2/3，大小比 *png* 小了45%。缺点是压缩的时间更久了，兼容性不好，目前只有 *Google* 和 opera 支持。



### 131. *style* 标签写在 *body* 后面与 *body* 前面有什么区别？

>参考答案
>
>页面加载自上而下，当然是先加载样式。写在 *body* 标签后由于浏览器以逐行方式对 *HTML* 文档进行解析，当解析到写在尾部的样式表（外联或写在 *style* 标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在 *windows* 的 *IE* 下可能会出现 *fouc* 现象（即样式失效导致的页面闪烁问题）。



### 132. 阐述一下 *CSS Sprites*

>参考答案
>
>将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 *CSS* 的 *background-image、background- repeat、background-position* 的组合进行背景定位。利用 *CSS Sprites* 能很好地减少网页的 *http* 请求，从而大大的提高页面的性能；还能减少图片的字节。



### 133. 写出背景色渐变的 *CSS* 代码

>参考答案
>
>**线性渐变**
>
>```css
>background: linear-gradient(direction,color-stop1,color-stop2,...);
>```
>
>- direction：用角度值指定渐变的方向(或角度)；
>
>- color-stop1,color-stop2,...：用于指定渐变的起止颜色
>
>**径向渐变**
>
>CSS 径向颜色渐变(Radial Gradients)跟线性渐变(linear gradients)不一样，它不是沿着一个方向渐变，而是以一个点为中心，向四周辐射渐变。
>
>语法：
>
>```css
>background-image: radial-gradient([<position> || <angle>]，[<shape> || <size>]，<stop>，<stop>，<stop>)
>```



### 134. 写出添加下划线的 *CSS* 代码

> 参考答案
>
> 一般有两种方法：
>
> - 通过 *CSS* 下划线代码：text-decoration:underline 来设置文字下划线。
> - 通过设置 *div* 的 *border* 实现效果



### 135. 写出让对象顺时针旋转 90 度的 CSS 代码（最好附带动画效果）

> 参考答案
>
> 顺时针旋转可以使用 *CSS3* 新增的 *transform* 属性，属性值对应 *rotate(90deg)*，如果要附带动画效果，那么可以添加 *transition* 过渡。下面是一段示例代码：
>
> ```html
> <div></div>
> ```
>
> ```css
> div{
> width: 100px;
> height: 100px;
> background-color: red;
> transition: all 1s;
> }
> div:hover{
> transform: rotate(90deg);
> }
> ```



### 136. CSS 优先级顺序正确的是（ ）

A.  !important > class > id > tag

B.  !important > tag > class > id

C.  !important  > id > class > tag

D.  Class > !important > id > tag

> 参考答案
>
> 选 C

> 解析：
>
> 关于 *CSS* 选择器的优先级，具体可以参阅下图：
>
> <img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-11-03-10806.png" alt="image-20210816194530798" style="zoom:50%;" />



### 137. 如何产生带有正方形项目的列表

A. *type:square*

B. *type:2*

C. *list-style-type:square*

D. *list-type:square*

> 参考答案
>
> C

> 解析：
>
> *CSS list-style-type* 属性可以设置不同的列表样式
>
> 具体属性值可以参阅：*https://www.w3school.com.cn/cssref/pr_list-style-type.asp*



### 138. 手写一个三栏布局，要求：垂直三栏布局，所有两栏宽度固定，中间自适应

> 参考答案：
>
> 这是一道经典的面试题，实现的方式很多，这里列举两种。
>
> 方法一：*flexbox* 的解决方案
>
> ```html
> <body>
>  <!-- flexbox解决方案 -->
>  <section class="layout flexbox">
> 
>      <article class="left-center-right">
>          <div class="left"></div>
>          <div class="center">
>              <h1>flexbox的解决方案</h1>
>              <p>1.这是布局的中间部分</p>
>              <p>2.这是布局的中间部分</p>
>          </div>
>          <div class="right"></div>
>      </article>
>  </section>
> </body>
> ```
>
> ```css
> <style>
> .layout.flexbox {
> margin-top: 140px;
> }
> 
> .layout.flexbox .left-center-right {
> display: flex;
> }
> 
> .layout.flexbox .left {
> width: 300px;
> background: red;
> }
> 
> .layout.flexbox .center {
> flex: 1;
> background: yellow;
> }
> 
> .layout.flexbox .right {
> width: 300px;
> background: blue;
> }
> </style>
> ```
>
> 方法二：网格布局解决方案
>
> ```html
> <body>
>  <!-- 网格布局的解决方案     -->
>  <section class="layout grid">
> 
>      <article class="left-center-right">
>          <div class="left"></div>
>          <div class="center">
>              <h1>网格布局的解决方案</h1>
>              <p>1.这是布局的中间部分</p>
>              <p>2.这是布局的中间部分</p>
>          </div>
>          <div class="right"></div>
>      </article>
>  </section>
> </body>
> ```
>
> ```css
> <style>
> .layout.grid .left-center-right {
> display: grid;
> width: 100%;
> grid-template-rows: 100px;
> grid-template-columns: 300px auto 300px;
> }
> 
> .layout.grid .left {
> background: red;
> }
> 
> .layout.grid .center {
> background: yellow;
> }
> 
> .layout.grid .right {
> background: blue;
> }
> </style>
> ```

# *CSS* 单位总结

## 经典真题

- *px* 和 *em* 的区别 

## *CSS* 中的哪些单位

首先，在 *CSS* 中，单位分为两大类，**绝对长度单位**和**相对长度单位**。

### 绝对长度单位

我们先来说这个，绝对长度单位最好理解，和我们现实生活中是一样的。在我们现实生活中，常见的长度单位有米（*m*）、厘米（*cm*）、毫米（*mm*），每一种单位的长度都是固定，比如 *5cm*，你走到任何地方 *5cm* 的长度都是一致的

例如：

```html
<div class="container"></div>
```

```css
.container{
  width: 5cm;
  height: 5cm;
  background-color: pink;
}
```

在上面的代码中，我们设置了盒子的宽高都是 *5cm*，这里用的就是绝对长度单位。

常见的绝对单位长度如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-073818.png" alt="image-20210914153818508" style="zoom:50%;" />

这些值中的大多数在用于打印时比用于屏幕输出时更有用。例如，我们通常不会在屏幕上使用 *cm*。

惟一一个经常使用的值，估计就是 *px*(像素)。

### 相对长度单位

相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。使用相对单位的好处是，经过一些仔细的规划，我们可以使文本或其他元素的大小与页面上的其他内容相对应。

下表列出了 *web* 开发中一些最有用的单位。

![image-20210914154021389](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-074021.png)

上面的单位中，常用的有 *em、rem、vw、vh*，其中 *vw* 和 *vh* 代表的是视口的宽度和高度，例如：

```html
<div class="container"></div>
```

```css
*{
  margin: 0;
  padding: 0;
}
.container {
  width: 50vw;
  height: 100vh;
  background-color: pink;
}
```

在上面的代码中，我们设置了容器的宽度为 *50vw*，也就是占视口的一半，而高度我们设置的是 *100vh*，就是占满整个视图。

接下来来看一下 *em* 和 *rem*。

*em* 和 *rem* 相对于 *px* 更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局。

对于 *em* 和 *rem* 的区别一句话概括：***em* 相对于父元素，*rem* 相对于根元素。**

来看关于 *em* 和 *rem* 示例。

*em* 示例

```html
<div>
  我是父元素div
  <p>
    我是子元素p
    <span>我是孙元素span</span>
  </p>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

div {
  font-size: 40px;
  width: 10em;
  /* 400px */
  height: 10em;
  outline: solid 1px black;
  margin: 10px;
}

p {
  font-size: 0.5em;
  /* 20px */
  width: 10em;
  /* 200px */
  height: 10em;
  outline: solid 1px red;
}

span {
  font-size: 0.5em;
  width: 10em;
  height: 10em;
  outline: solid 1px blue;
  display: block;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-075220.png" alt="image-20210914155219732" style="zoom:50%;" />

*rem* 示例

*rem* 是全部的长度都相对于根元素，根元素是谁？

那就是 *html*元素。通常做法是给 *html* 元素设置一个字体大小，然后其他元素的长度单位就为 *rem*。

例如：

```html
<div>
  我是父元素div
  <p>
    我是子元素p
    <span>我是孙元素span</span>
  </p>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

div {
  font-size: 4rem;
  /* 40px */
  width: 30rem;
  /* 300px */
  height: 30rem;
  /* 300px */
  outline: solid 1px black;
  margin: 10px;
}

p {
  font-size: 2rem;
  /* 20px */
  width: 15rem;
  /* 150px */
  height: 15rem;
  /* 150px */
  outline: solid 1px red;
}

span {
  font-size: 1.5rem;
  width: 10rem;
  height: 10rem;
  outline: solid 1px blue;
  display: block;
}
```

所以当用 *rem* 做响应式时，直接在媒体中改变 *html* 的 *font-size*，此时用 *rem* 作为单位的元素的大小都会相应改变，很方便。

看到这里我想大家都能够更深刻的体会了 *em* 和 *rem* 的区别了，其实就是参照物不同。

## 真题解答

- *px* 和 *em* 的区别 

> 参考答案：
>
> *px* 即 *pixel* 像素，是相对于屏幕分辨率而言的，是一个绝对单位，但是具有一定的相对性。因为在同一设备上每个设备像素所代表的物理长度是固定不变的（绝对性），但在不同设备间每个设备像素所代表的物理长度是可以变化的（相对性）。
>
> *em* 是相对长度单位，具体的大小要相对于父元素来计算，例如父元素的字体大小为 *40px*，那么子元素 *1em* 就代表字体大小和父元素一样为 *40px*，*0.5em* 就代表字体大小为父元素的一半即 *20px*。

# 居中方式总结

## 经典真题

- 怎么让一个 *div* 水平垂直居中

## 盒子居中



首先题目问到了如何进行居中，那么居中肯定分 *2* 个方向，一个是水平方向，一个是垂直方向。



### 水平方向居中



水平方向居中很简单，有 *3* 种常见的方式：

1. 设置盒子 *margin : 0 auto*：这种居中方式的原理在于设置 *margin-left* 为 *auto* 时，*margin-left* 就会被设置为能有多大就设置多大，所以盒子会跑到最右边，而设置 *margin-right* 为 *auto* 时，同理盒子就会跑到最左边。所以，当我们设置左右的 *margin* 都是 *auto* 的时候，盒子就跑到了中间，从而形成了水平居中。

2. 第二种常见的方式就是通过 *display : flex* 设置盒子的外层盒子是一个弹性盒，然后通过 *justify-content : center* 使得内部的盒子居中。

3. 可以通过定位配合 *translate* 可以在不知道元素宽的情况下实现水平居中，下面垂直居中有示例。

4. 通过绝对定位 + calc函数



### 垂直方向居中



关于盒子的垂直方向居中，方法就比较多了，这里介绍几种：



1. 通过 *verticle-align:middle* 实现垂直居中

通过 *vertical-align:middle* 实现垂直居中是最常使用的方法，但是有一点需要格外注意，*vertical* 生效的前提是元素的 *display：inline-block*。并且在使用 *vertical-align:middle* 的时候需要一个兄弟元素做参照物，让它垂直于兄弟元素的中心点。*vertical-align* 对齐的方法是寻找兄弟元素中最高的元素作为参考。



代码示例如下：

```html
<div class="container">
  <div class="item"></div>
  <div class="brotherBox"></div>
</div>
```

```css
.container{
  width: 500px;
  height: 300px;
  background-color: pink;
  text-align: center;
}
.item{
  width: 100px;
  height: 100px;
  background-color: skyblue;
  vertical-align: middle;
  margin: 0 auto;
  display: inline-block;
}
.brotherBox{
  height: 100%;
  /* width: 2px; */
  background: red;
  display: inline-block;
  vertical-align: middle;
}
```



2. 通过伪元素 :*before* 实现垂直居中

平白无故添加一个无意义的参考元素不怎么好，我们可以去除作为参考的兄弟元素，转为给父元素添加一个伪元素，如下：

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 500px;
  height: 300px;
  background-color: pink;
  text-align: center;
}
.container::before{
  content : '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.item{
  width: 100px;
  height: 100px;
  background-color: skyblue;
  vertical-align: middle;
  margin: 0 auto;
  display: inline-block;
}
```



3. 通过绝对定位实现垂直居中

这种方式需要设置父元素为相对定位，子元素为绝对定位，然后配合 *margin-left* 为负的盒子高度一半来实现垂直居中

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 500px;
  height: 300px;
  background-color: pink;
  position: relative;
}
.item{
  width: 100px;
  height: 100px;
  background-color: skyblue;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```



4. 通过 *transform* 实现垂直居中

可以通过定位配合 *transform* 也可以实现垂直居中

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 500px;
  height: 300px;
  background-color: pink;
  position: relative;
}
.item{
  width: 100px;
  height: 100px;
  background-color: skyblue;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50px) translateY(-50px);
}
```



5. 使用弹性盒子居中

通过设置父元素为弹性盒子，然后使用 *justify-content: center* 和 *align-items: center* 来设置内部盒子水平垂直居中

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 500px;
  height: 300px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item{
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
```



以上就是比较常见的盒子居中的解决方案，当然目前来讲最推荐的就是使用弹性盒子，这是目前最常用的一种方式，也是最推荐的一种方式。



## 真题解答



- 怎么让一个 *div* 水平垂直居中

> 参考答案：
>
> 1. 通过 *verticle-align:middle* 实现垂直居中
> 2. 通过父元素设置伪元素 :*before* ，然后设置子元素  *verticle-align:middle* 实现垂直居中
> 3. 通过绝对定位实现垂直居中
> 4. 通过 *transform* 实现垂直居中
> 5. 使用弹性盒子居中


# 隐藏元素方式总结



## 经典真题



- 隐藏页面中的某个元素的方法有哪些？



## 隐藏元素方案汇总



首先什么叫隐藏元素，大家第一反应就是 *display:none*，元素就被隐藏了。



没错，这确实是隐藏元素的一种，但是太过于片面。我们隐藏元素实际上可以分为 *3* 大类：



- 完全隐藏：元素从渲染树中消失，不占据空间。
- 视觉上的隐藏：屏幕中不可见，占据空间。
- 语义上的隐藏：读屏软件不可读，但正常占据空间。



### 完全隐藏



***display* 属性**



首先就是设置 *display* 为 *none*，这样元素就被隐藏了，并且是不占据空间的。



***hidden* 属性**



这是 *HTML5* 新增属性，相当于 *display: none*，直接写在元素上面，例如：



```html
<div hidden></div>
```



### 视觉上隐藏



视觉上的隐藏，就是说元素还占据着位置，只是视觉上不可见而已。



***opacity* 属性**



这是大家比较熟知的一种方式，将透明度设置为 *0*，视觉上就会变得不可见。

```css
opacity:0
```


***visibility:hidden***



这也是大家比较熟知的一种方式，通过 *CSS* 中的 *visibility* 属性来隐藏元素，使其不可见，但是仍然会占位

```css
visibility:hidden
```



**绝对定位**



这种方式以前用的比较多，设置 *posoition* 为 *absolute* 或 *fixed*，通过设置 *top、left* 等值，将其移出可视区域。例如：

```css
position: absolute;
left: -999px;
top: -999px;
```



**设置 *margin***

通过设置 *margin* 值，将其移出可视区域范围（可视区域占位）。例如：

```css
margin-left: -99999px;
```



**设置宽高为 *0***



这也是比较常见的一种方式，简单说就是将元素的 *margin、border、padding、height* 和 *width* 等影响元素盒模型的属性设置成 *0*，如果元素内有子元素或内容，还应该设置其 *overflow:hidden* 来隐藏其子元素

```css
width: 0px;
height: 0px;
overflow: hidden
```



**裁剪元素**



隐藏元素的另一种方法是通过剪裁它们实现，具体是通过 *clip-path* 属性，这个属性比较新，浏览器兼容性也会比较差，但是了解一下还是非常有必要的。例如：

```css
clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
```





### 语义上隐藏



***aria-hidden* 属性**



通过设置 *aria-hidden* 属性为 *true* 使读屏软件不可读，但是元素仍然占据空间并且可见。

```css
<div aria-hidden="true"></div>
```





## 真题解答



- 隐藏页面中的某个元素的方法有哪些？

> 参考答案：
>
> 隐藏元素可以分为 *3* 大类：
>
> - 完全隐藏：元素从渲染树中消失，不占据空间。
> - 视觉上的隐藏：屏幕中不可见，占据空间。
> - 语义上的隐藏：读屏软件不可读，但正常占据空。
>
> 完全隐藏的方式有：设置 *display:none*、为元素设置 *hidden* 属性。
>
> 视觉上隐藏的方式有：设置 *opacity* 属性为 *0*、绝对定位的 *left* 和 *top* 值设置为 *-999px*、设置 *margin-left* 值为 *-999px*、设置宽高为 *0*、裁剪元素。
>
> 语义上的隐藏方式为将 *aria-hidden* 属性设置为 *true* 使读屏软件不可读。


# 浮动



## 经典真题



- 清除浮动的方法
- 以下选项能够清除浮动的是（ ）

>A. 空 *div*
>
>B. *hover* 伪选择器
>
>C. *clear* 属性
>
>D. *overflow* 属性



## 关于浮动，你需要知道的东西



### 浮动出现的背景



浮动属性产生之初是为了实现“文字环绕”的效果，让文字环绕图片，从而使网页实现类似 *word* 中“图文混排”的效果。来看下面的例子：

```html
<div class="container">
  <img src="./ok.png" alt="" width="200">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos est rerum repellat alias maiores
    nobis harum recusandae corrupti assumenda qui aut ipsam deserunt dolorem modi, culpa hic ex illo repellendus
    atque. Numquam iste porro perspiciatis. Harum esse magni exercitationem, perspiciatis libero soluta quo ea
    dolorem. Delectus tempore magnam vitae voluptatibus, non quasi laudantium, aliquam consequuntur perspiciatis
    maiores esse neque animi voluptate. Animi pariatur debitis quam aliquam recusandae quis ut nisi totam sint
    consectetur distinctio, quos saepe cum quo iure natus delectus! Ad, dolore. Ut temporibus ea autem fugiat
    laboriosam quidem iste rerum laborum. Repellendus recusandae sequi id excepturi alias?</p>
</div>
```

```css
.container {
  width: 800px;
  border: 1px solid;
}
```

效果如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-031725.png" alt="image-20210918111724895" style="zoom:50%;" />

由于 *p* 段落是块级元素，所以独占一行，图片和段落是分开的。

接下来我们设置图片浮动：

```css
.container {
  width: 800px;
  border: 1px solid;
}
img{
  float: left;
}
```

效果如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-032006.png" alt="image-20210918112006064" style="zoom:50%;" />

当我们设置了图片浮动后，就出现了类似 “*word*” 的文字环绕效果。

这实际上也是浮动最初被设计出来的目的。



### 浮动实现布局



到了后面，浮动渐渐被应用到了页面布局上。因为 *HTML* 里面的元素，要么是行内元素，要么是块级元素，这种方式是没办法做页面布局的，例如我想实现两个块级元素在一行。此时开发人员就想到了浮动，因为任何东西都可以浮动，而不仅仅是图像，所以浮动的使用范围扩大了，能够用来进行布局。



#### 两列布局



下面我们来看一下使用浮动实现的两列布局：

```html
<h1>2 column layout example</h1>
<div>
  <h2>First column</h2>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem
    placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet
    nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
    tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
    et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
    commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
</div>

<div>
  <h2>Second column</h2>
  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est,
    posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam
    lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis
    finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in
    interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-050209.png" alt="image-20210918130208288" style="zoom:50%;" />

在上面的代码中，我们让两个 *div* 一个左浮动一个右浮动，从而实现了两列布局的效果。



#### 三列布局



现在我们已经有了一个两列布局工作，添加一个第三列（或更多）并不是太难。

下面是一个使用浮动实现的三列布局。

```html
<h1>3 column layout example</h1>
<div>
  <h2>First column</h2>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem
    placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet
    nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
    tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
    et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
    commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
</div>

<div>
  <h2>Second column</h2>
  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est,
    posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam
    lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis
    finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in
    interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
<div>
  <h2>Third column</h2>
  <p>Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue purus mollis sit amet. Sed euismod
    lacus sit amet ex tempus, a semper felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
    pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia sagittis lorem fermentum ut. Praesent
    dapibus eros vel mi pretium, nec convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In
    mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet imperdiet risus neque vitae lectus.
    In tempus lectus a quam posuere vestibulum. Duis quis finibus mi. Nullam commodo mi in enim maximus
    fermentum. Mauris finibus at lorem vel sollicitudin.</p>
</div>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
  width: 36%;
  float: left;
}

div:nth-of-type(2) {
  width: 30%;
  float: left;
  margin-left: 4%;
}

div:nth-of-type(3) {
  width: 26%;
  float: right;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-050610.png" alt="image-20210918130610163" style="zoom:50%;" />



### 浮动的特性



在上面，我们已经实现了两列布局和三列布局，可以看出，浮动确实能够拿来布局。

接下来我们就需要具体研究一下浮动有哪些特性了。



1. **脱离标准流**

浮动的第一个特点就是脱离标准流，例如：

```html
<div class="one"></div>
<div class="two"></div>
```

```css
.one {
  width: 80px;
  height: 80px;
  background-color: red;
  float: left;
}

.two {
  width: 150px;
  height: 150px;
  background-color: blue;
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-051127.png" alt="image-20210918131127272" style="zoom:50%;" />



由于红色的 *div* 浮动脱离了标准流，所以蓝色的 *div* 自然而然就往上走了。



2. **浮动的元素互相贴靠**

如果有多个浮动的元素，那么会相互贴靠，如果宽度不够，会重启一行。

```css
.two {
  width: 150px;
  height: 150px;
  background-color: blue;
  float: left;
}
```

还是上面的 *DOM* 结构，我们让 *two* 这个盒子也浮动，效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-051424.png" alt="image-20210918131424633" style="zoom:50%;" />

如果宽度不足以让后面的盒子贴靠，那么后面浮动的元素会被排列到下一行：

```css
.two {
  width: 850px;
  height: 150px;
  background-color: blue;
  float: left;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-051627.png" alt="image-20210918131627324" style="zoom:50%;" />

在上面的示例中，我们将蓝色盒子的宽度修改为了 *850px*，当我们缩小浏览器时，由于宽度不够蓝色盒子重新排列到了第二排。



3. **宽度收缩**

在没有设置宽度的情况下，块级元素在标准流时很多时独占一行，宽度也会占满整个容器，但是一旦被设置为浮动后，宽度就会收缩。

例如：

```html
<div>this is a test</div>
```

```css
div{
  background-color: red;
  float: left;
}
```

本来 *div* 是占满整行的，但是当我们设置了浮动后，由于 *div* 又没有设置宽度，所以宽度就收缩了。



### 清除浮动



有些时候，浮动会带来副作用，所以我们需要清除浮动带来的副作用。

例如：

```html
<ul>
  <li>导航1</li>
  <li>导航2</li>
  <li>导航3</li>
</ul>
<ul>
  <li>游戏</li>
  <li>动漫</li>
  <li>音乐</li>
</ul>
```

```css
li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-052700.png" alt="image-20210918132700157" style="zoom:50%;" />

在上面的示例中，我们本来是打算做两个导航栏的，但是由于浮动的贴靠性质，导致所有的 *li* 都在一行了。



这个时候我们就需要一些方式来清除浮动。



1. **给父元素设置高度**

在上面的示例中，由于 *li* 的父元素 *ul* 没有高度，所以导致明明不是同一个父元素下的浮动子元素，也会相互贴靠。

此时我们就给 *li* 的父元素 *ul* 设置一个高度即可。例如：

```css
ul{
  height: 50px;
}
li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-053639.png" alt="image-20210918133638708" style="zoom:50%;" />



需要注意给父元素设置高度时，这个高度值一定要大于浮动子元素的高度，这样才能关注浮动。例如：

```css
ul{
  height: 30px;
}
li {
  float: left;
  width: 100px;
  height: 70px;
  background-color: pink;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-053929.png" alt="image-20210918133928678" style="zoom:50%;" />

在上面的示例中，虽然我们给父元素 *ul* 设置了高度，但是这个高度值是小于浮动元素 *li* 的高度的，此时我们会发现仍然有贴靠的现象。



因此，**如果一个元素要浮动，那么它的祖先元素一定要有高度。有高度的盒子，才能关住浮动**。

只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。所以就是清除浮动带来的影响了。



2. ***clear* 属性**

在实际开发中，由于盒子的高度能够被内容撑开，所以很多时候我们不会设置高度。

那么这个时候又该如何清除浮动呢？

在 *CSS* 中有一个叫做 *clear* 的属性，该属性定义了元素的哪边上不允许出现浮动元素。

在 *CSS1* 和 *CSS2* 中，这是通过自动为清除元素（即设置了 *clear* 属性的元素）增加上外边距实现的。

在 *CSS2.1* 中，会在元素上外边距之上增加清除空间，而外边距本身并不改变。不论哪一种改变，最终结果都一样，如果声明为左边或右边清除，会使元素的上外边框边界刚好在该边上浮动元素的下外边距边界之下。

*clear* 属性的取值如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-061612.png" alt="image-20210918141612213" style="zoom: 50%;" />



接下来我们来用 *clear* 属性清除浮动：

```html
<ul>
  <li>导航1</li>
  <li>导航2</li>
  <li>导航3</li>
</ul>
<ul class="two">
  <li>游戏</li>
  <li>动漫</li>
  <li>音乐</li>
</ul>
```

```css
.two{
  clear: left;
}
li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-063311.png" alt="image-20210918143310665" style="zoom:50%;" />



可以看到，浮动的副作用确实是清除了，但是这种方式有一个问题，那就是 *margin* 属性失效了。

例如我们在 *two* 的样式里面添加一个 *margin-top*，会发现该 *margin* 属性的设置并不起效果。



3. **隔墙法**

隔墙法的核心思想就是在两个浮动的元素之间添加一个空的 *div* 作为一堵“墙”，从而让后面的浮动元素，不去追前面的浮动元素。

例如：

```html
<ul>
  <li>导航1</li>
  <li>导航2</li>
  <li>导航3</li>
</ul>
<div class="clearfix"></div>
<ul class="two">
  <li>游戏</li>
  <li>动漫</li>
  <li>音乐</li>
</ul>
```

```css
.two {
  margin-top: 10px;
}

.clearfix {
  clear: both;
}

li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-064154.png" alt="image-20210918144154274" style="zoom:50%;" />

通过上面的示例我们可以看到，*margin* 已经恢复正常。



4. **内墙法**

通过隔墙法，后面又衍生出了内墙法。内墙法的出现，可以让浮动的元素也能撑开父元素的高。

正常情况下，没有高的父元素，里面的子元素一旦浮动，高度也就没有了，例如：

```html
<div>
  <p></p>
</div>
```

```css
div{
  background-color: green;
}
p{
  width: 100px;
  height: 100px;
  background-color: red;
}
```

当前效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-065913.png" alt="image-20210918145912989" style="zoom:50%;" />



一旦我们设置 *p* 元素为浮动，由于脱离了标准流，所以父元素的高也就消失了。

此时就可以使用内墙法来给父元素撑起高，如下：

```html
<div>
  <p></p>
  <div class="clearfix"></div>
</div>
```

```css
div{
  background-color: green;
}
p{
  width: 100px;
  height: 100px;
  background-color: red;
  float: left;
}
.clearfix{
  clear: both;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-070839.png" alt="image-20210918150838625" style="zoom:50%;" />



下面是使用内墙法清除浮动的示例：

```html
<div>
  <ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
  </ul>
  <div class="clearfix"></div>
</div>
<ul class="two">
  <li>游戏</li>
  <li>动漫</li>
  <li>音乐</li>
</ul>
```

```css
.two {
  margin-top: 10px;
}

.clearfix {
  clear: both;
}

li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```



效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-071359.png" alt="image-20210918151358700" style="zoom:50%;" />

在上面的代码中，我们使用内墙法清除了浮动，并且父元素的高度也被撑起来了，*margin* 也是正常的。



5. ***overflow* 属性**

*overflow* 属性本来是用作处理溢出内容的显示方式的。

当给父元素添加 *overflow:hidden* 之后，父元素就会形成一个 *BFC*，一块独立的显示区域，不受外界影响，所以通过这种方式也能够去除浮动的副作用。

```html
<ul>
  <li>导航1</li>
  <li>导航2</li>
  <li>导航3</li>
</ul>
<ul class="two">
  <li>游戏</li>
  <li>动漫</li>
  <li>音乐</li>
</ul>
```

```css
.two {
  margin-top: 10px;
}

ul {
  overflow: hidden;
}

li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```

在上面的代码中，我们设置两个父元素 *ul* 都为 *overflow:hidden* 之后，两个父元素形成了 *BFC*，我们可以看到父元素的高度也被撑开了，*margin* 也是正常的。



6. **伪类清除法**

最后要介绍的，是目前最流行的浮动清除方式，伪类清除法。

该方法的核心思想就是为父元素设置一个伪元素，其实就是无形的添加了一堵墙，然后在伪元素中设置一系列的属性。例如：

```html
<ul class="one">
  <li>导航1</li>
  <li>导航2</li>
  <li>导航3</li>
</ul>
<ul class="two">
  <li>游戏</li>
  <li>动漫</li>
  <li>音乐</li>
</ul>
```

```css
.two {
  margin-top: 10px;
}

.one::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

li {
  float: left;
  width: 100px;
  height: 20px;
  background-color: pink;
}
```

在上面的代码中，我们为第一个 *ul* 设置了 *after* 伪元素，并在伪元素中设置了诸如 *clear:both、visibility: hidden* 等一系列属性，这实际上就等同于在两个 *ul* 之间添加了一堵无形的墙。



### 浮动的现状



上面介绍了很多清除浮动的方法，一会儿外墙法、一会儿内墙法、一会儿 *overflow*，这些其实都是时代的眼泪。

目前来讲，除非要考虑古老的 *IE6/IE7*，否则布局压根儿就不会考虑浮动，有更好的弹性盒模型和网格布局供我们使用。

浮动目前仅仅也就在要制作文字环绕效果时，能发挥一席之地的作用。

然而，文字环绕这种 *90* 年代看着还不错的设计，现在又有几个设计师会这样设计网页呢？



## 真题解答



- 清除浮动的方法

> 参考答案：
>
> - *clear* 清除浮动（添加空 *div* 法）在浮动元素下方添加空 *div*，并给该元素写 *css* 样式 *{clear:both;height:0;overflow:hidden;}*
>
> - 给浮动元素父级设置高度
>
> - 父级同时浮动（需要给父级同级元素添加浮动）
>
> - 父级设置成 *inline-block*，其 *margin: 0 auto* 居中方式失效
>
> - 给父级添加 *overflow:hidden* 清除浮动方法
>
> - 万能清除法 *after* 伪类清浮动（现在主流方法，推荐使用）



- 以下选项能够清除浮动的是（ B ）

>A. 空 *div*
>
>B. *hover* 伪选择器
>
>C. *clear* 属性
>
>D. *overflow* 属性


# 定位总结



## 经典真题



- 介绍下 *positon* 属性
- *position* 有哪些值，各自的用法如何？
- 相对定位、绝对定位、固定定位的区别



## *CSS* 中的定位



经常有同学混淆定位与布局，两者傻傻分不清。

布局是针对整个页面来讲的，你采用什么布局，两栏布局、三栏布局，目标是整个页面。

而定位是针对某一个元素来讲的，把这个元素定位到什么位置。



目前在 *CSS* 中，有 *5* 种定位方案，分别是：

- *static* 静态定位
- *relative* 相对定位
- *absolute* 绝对定位
- *fixed* 固定定位
- *sticky* 粘性定位



下面我们依次来介绍这几种定位。



### *static* 静态定位



所谓静态定位，就是我们的标准流。

在标准流里面，块级元素独占一行，内嵌元素共享一行。静态定位是 *HTML* 元素的默认值，静态定位的元素不会受到 *top，bottom，left，right* 的影响。



### *relative* 相对定位



所谓相对定位，就是相对自己原来的位置进行定位。相对定位的最大特点就是不脱离标准流，相对于自己原来的位置上进行一定的偏移。 而且四个方向偏移量不会影响兄弟元素的位置。

来看一个示例：



```html
<div class="one">one</div>
<div class="two">two</div>
<div class="three">three</div>
```

```css
*{
  margin: 0;padding: 0;
}
div{
  width: 100px;
  height: 100px;
  outline: 1px solid;
  line-height: 100px;
  text-align: center;
}
.two{
  position: relative;
  left: 50px;
  top: 50px;
}
```

效果如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-022649.png" alt="image-20210916102648561" style="zoom:50%;" />



可以看到，我们对 *two* 这个盒子设置了 *left* 值为 *50px*，*top* 值为 *50px*，而由于是相对这个位置进行偏移，所以 *two* 这个盒子向右下进行了移动。

使用相对定位的作用主要有两个：

- 微调元素
- 做绝对定位的参考，子绝父相



### *absolute* 绝对定位



所谓绝对定位，就是相对于离自己最近的，并且定了位的元素进行偏移。使用了绝对定位后的盒子，会脱离标准流，如果设置了 *margin* 的值为 *auto*，则会失效。



下面是一个绝对定位的示例：

```html
<div class="one">one</div>
<div class="two">two</div>
<div class="three">three</div>
```

```css
*{
  margin: 0;padding: 0;
}
div{
  width: 100px;
  height: 100px;
  outline: 1px solid;
  line-height: 100px;
  text-align: center;
}
.two{
  position: absolute;
  left: 50px;
  top: 50px;
}
```

效果如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-022924.png" alt="image-20210916102923743" style="zoom:50%;" />



在浏览器中可以看到，第 *3* 个 *div* 往上面移动了，从而证明了绝对定位是脱离标准流的。



绝对定位后的盒子，其 *display* 属性会变为 *block*，例如：

```html
<a href="#">百度一下</a>
```

```css
*{
  margin: 0;padding: 0;
}
a{
  outline: 1px solid;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
}
```



在浏览器中的浏览效果如下：原本不能设置宽高的行内元素，在进行了绝对定位以后，*display* 属性变为了 *block*，所以可以设置宽高了。



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023159.png" alt="image-20210916103159181" style="zoom:50%;" />





这里要重点强调一下绝对定位的参考点问题。默认情况下，绝对定位的参考点，如果用 *top* 来进行描述，那么定位参考点就是页面的左上角，而不是浏览器的左上角，如下图：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023254.png" alt="image-20210916103254157" style="zoom:50%;" />



如果是使用 *bottom* 来进行描述，那么就是浏览器首屏窗口尺寸，对应的页面左下角，如下图：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023329.png" alt="image-20210916103329049" style="zoom:50%;" />



下面是一道爱立信 *2014* 年的校园春招题目，该题目就是考察关于绝对定位默认参考点的相关知识，如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023403.png" alt="image-20210916103403155" style="zoom: 67%;" />



该题目的答案如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023443.png" alt="image-20210916103442461" style="zoom:67%;" />



上面介绍的是绝对定位里参考点的默认情况，但是这种情况一般使用得非常的少。更多的则是使用接下来我们将要介绍的参照标准。

前面我们在介绍相对定位的时候，有提到子绝父相这个名字。事实上，当我们对一个元素设置绝对定位的时候，往往会将它的父级元素设置为相对定位。

这样的好处在于该元素的父级元素没有脱离标准流，该元素将会以这个相对定位了的父元素作为参考点，在父元素的范围内进行移动，方便我们对元素的位置进行掌控。如下图：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023532.png" alt="image-20210916103531326" style="zoom: 67%;" />



在该图中，容器盒子设置为相对定位，红色盒子为绝对定位。红色盒子将无视父元素的 *padding* 区域，以父元素的 *border* **内侧**作为自己定位的参考点。

需要大家记住的是当父级元素出现有定位时，绝对定位的参考点永远都是**离自己最近的，并且定了位的祖先元素的左上角**，下面我们来举例子进行说明，如下：

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
  </div>
</div>
```

```css
*{
  margin: 0;padding: 0;
}
.one{
  width: 200px;
  height: 200px;
  outline: 1px solid;
  position: absolute;
  top: 100px;
  left: 100px;
}
.two{
  width: 100px;
  height: 100px;
  outline: 1px solid red;
  position: absolute;
  top: 50px;
  left: 50px;
}
.three{
  width: 50px;
  height: 50px;
  background-color: pink;
  position: absolute;
  top: 0;
  left: 0;
}
```

在浏览器中的浏览效果如下：这里 *three* 盒子就是以 *two* 盒子的左上角作为的参考点



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023731.png" alt="image-20210916103730739" style="zoom:50%;" />





如果我们对代码稍作修改，取消 *two* 盒子的定位，那么 *three* 盒子就会以 *one* 盒子的左上角来作为参考点，如下：

```css
.two{
  width: 100px;
  height: 100px;
  outline: 1px solid red;
  margin: 50px 0 0 50px; /* 使用margin来让该盒子进行一些偏离 */      
}
```



在浏览器中的浏览效果如下：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023917.png" alt="image-20210916103916507" style="zoom:50%;" />





### *fixed* 固定定位



所谓固定定位，可以看作是一种特殊的绝对定位，所以自然而然固定定位也是会脱离标准流的。

固定定位的特点是相对于浏览器窗口进行定位的。

换句话说，对一个盒子进行固定定位以后，无论页面如何滚动，这个盒子的显示位置都是不会变化的。

固定定位在 *PC* 端中经常用于显示在页面中位置固定不变的页面 *header*，以及移动端中位置固定不变的 *header* 和 *footer*。



### *sticky* 粘性定位



在 *CSS3* 中，新增了一种定位方式：*sticky*。

*sticky*，中文的字面意思是“粘，粘贴”的意思，所以这种定位方式可以称之为粘性定位。

目前大部分浏览器都已经支持了这种定位方式。

![image-20210916104626067](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-024626.png)



要设置一个元素的定位方式为粘性定位，首先需要将 *position* 属性设置为 *sticky*。

```css
position: sticky;   /* 设置定位方式为粘性定位 */
```



接下来有如下几个需要注意的点：

- 父元素的 *overflow* 必须是 *visible*，不能是 *hidden* 或者 *auto*，因为父节点定位设置为 *overflow:hidden* 则父容器无法进行滚动。
- 父元素的高度不能低于 *sticky* 元素的高度 。
- 如果父元素没有设置定位（*position:relative | absolute | fixed*），则相对于 *viewprot* 进行定位，否则以定位的父元素为参考点。
- 设置阀值：需要指定 *top*、*right*、*bottom* 或 *left* 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。并且 *top* 和 *bottom* 同时设置时，*top* 生效的优先级高；*left* 和 *right* 同时设置时，*left* 的优先级高。 





下面是一个粘性定位的示例：

```html
<h1>我是标题，题题，题，...</h1>
<nav>
  <h3>导航A</h3>
  <h3>导航B</h3>
  <h3>导航C</h3>
</nav>
<article>
  <p>今晚的爱奇艺尖叫之夜中，唐嫣上台领取年度戏剧女艺人奖，主持人朱丹希望她分享婚后甜蜜，可唐嫣已经下台，引发网友质疑场面尴尬。刚刚，朱丹发文回应，表示唐嫣没有不礼貌，自己也没有尴尬。随后，唐嫣也评论：“美丽的误会”
  </p>
  <p>韩寒：我的生活有两个节点，一个是出书，另一个就是写博客。出书让我有了收入，博客让我有了跟读者的连接。我从小就被贴过很多标签，每多一个标签就更接近真实的我。微博也一样，每一次更新都跟随着时代的风向，与时代同行。</p>
  <p>《游戏人生》作者榎宫祐 表示，近日有朋友想成为漫画家，过来找他商量。<br>
    他：“漫画家相当于无职啊，月收入又低，如果请助手花费更大。”（为了让朋友知道现实，又不否定梦想的小心翼翼的说法）<br>
    朋友：“可是我有一栋公寓用来收租唉......”<br>
    他：“那你想怎么活就怎么活吧！” ​​​​</p>
  <p>【湖北一小学三年级才教数学，校长回应争议：实验班的成绩远高于对比班】湖北赤壁一小学施行三年级才上数学课的教学设置，引起关注。该校校长表示，数学是一个抽象思维的功课，6岁的小孩是形象思维发展的最佳期，应该把数学往后移，按照知识发展规律。从三年级开始学数学，用3年时间学完原本5年的课程是可行的，并且经过3年的实验，实验班的成绩都要远高于对比班。
  </p>
  <p>刘国梁：暮然回首这一路走来⋯⋯感恩国家队30年的培养，把我从一个13岁的孩子，培养成大满贯、总教练、再到乒协主席🏓️[心]感谢这么多年跟我一起努力征战国际赛场的教练员和运动员，是你们辛勤的付出取得的荣耀造就了今天的自己[抱抱][心]感动的是亿万国人和球迷粉丝，这么多年不离不弃的支持，才有了今日国乒的新辉煌。赢不狂.输不慌.陪国乒.战东京！
  </p>
</article>
```

```css
body {
  height: 5000px;
  /* 为了让页面可以滑动 */
}

nav {
  display: flex;
  justify-content: start;
  width: 100%;
  position: sticky;
  /* 设置定位方式为粘性定位 */
  top: 20px;
  /* 设置阀值，滚动到 top 值为 20px 的时候不再能够滚动*/
}

nav h3 {
  outline: 1px solid #fff;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
```



## 真题解答



- *position* 有哪些值，各自的用法如何？

> 参考答案：
>
> 目前在 *CSS* 中，有 *5* 种定位方案，分别是：
>
> 1. *static*：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。
>
> 2. *relative*：相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。
>
> 3. *absolute*：相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其它元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 *static* 祖先元素定位。
>
> 4. *fixed*：固定定位与绝对定位相似，但元素的包含块为 *viewport* 视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素。
>
> 5. *sticky*：粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。


# *BFC*



## 经典真题



- 介绍下 *BFC* 及其应用
- 介绍下 *BFC、IFC、GFC* 和 *FFC*



## 搞懂各种 *FC*



一看到  *BFC、IFC、GFC* 和 *FFC*，大家可能会想到 *KFC*。



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-054223.png" alt="image-20210913134223247" style="zoom:50%;" />



然而这里所说的 *xFC* 和 *KFC* 没有任何关系。



那么这些 *FC* 究竟是啥呢？



不着急，我们先搞懂一个，后面的陆陆续续也就融会贯通了。



我们首先就来看这个 *BFC*，英语全称 *Block formatting contexts*，翻译成中文就是“块级格式化上下文”。



简单来说，就是页面中的一块渲染区域，并且有一套属于自己的渲染规则，它决定了元素如何对齐内容进行布局，以及与其他元素的关系和相互作用。 当涉及到可视化布局的时候，*BFC* 提供了一个环境，*HTML* 元素在这个环境中按照一定规则进行布局。



再简短一点，那就是：***BFC* 是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响**



这就好比你在你自己家里面，你想怎么摆放你的家具都可以，你家的家具布局并不会影响邻居家的家具布局。



当然，虽然说 *BFC* 是一个独立的布局环境，里外不影响，但也不是意味着布局没有章法，基本的规矩还是要有的。



例如，*BFC* 的布局规则有如下几条：



1. 内部的 *Box* 会在垂直方向一个接着一个地放置。
2. *Box* 垂直方向上的距离由 *margin* 决定。属于同一个 *BFC* 的两个相邻的 *Box* 的 *margin* 会发生重叠。
3. 每个盒子的左外边框紧挨着包含块的左边框，即使浮动元素也是如此。
4. *BFC* 的区域不会与浮动 *Box* 重叠。
5. *BFC* 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
6. 计算 *BFC* 的高度时，浮动子元素也参与计算。



诶？？



这好像在我们的 *body* 元素里面，盒子天然就是这样的布局规则呀？



没错，实际上在一个标准流中 *body* 元素就是一个天然的 *BFC*。



那么如果其他区域，我想单独设置成一个 *BFC*，该怎么办呢？这里记录了一些常见的方式：



| 元素或属性 | 属性值                     |
| ---------- | -------------------------- |
| 根元素     |                            |
| *float*    | *left、right*              |
| *postion*  | *absolute、fixed*          |
| *overflow* | *auto、scroll、hidden*     |
| *display*  | *inline-block、table-cell* |



> 上面只记录了一些常见的方式，完整的 *BFC* 触发方式可以参阅：*https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context*



那么块级格式化上下文有啥具体的用处呢？我们来看几个场景



1. 解决浮动元素令父元素高度坍塌的问题

```html
<div class="father">
   <div class="son"></div>
</div>
```

```css
.father{
  border: 5px solid;
}
.son{
  width: 100px;
  height: 100px;
  background-color: blue;
  float: left;
}
```

在上面的代码中，父元素的高度是靠子元素撑起来的，但是一旦我们给子元素设置了浮动，那么父元素的高度就塌陷了。如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-060809.png" alt="image-20210913140809007" style="zoom:50%;" />



此时我们就可以将父元素设置成一个 *BFC*，例如：

```css
.father{
  border: 5px solid;
  overflow: hidden; 
  /* 将父元素设置为一个 BFC */
}
.son{
  width: 100px;
  height: 100px;
  background-color: blue;
  float: left;
}
```

效果：可以看到由于父元素变成 *BFC*，高度并没有产生塌陷了，其原因是在计算 *BFC* 的高度时，浮动子元素也参与计算



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-060948.png" alt="image-20210913140948390" style="zoom:50%;" />



2. 非浮动元素被浮动元素覆盖

```html
<div class="box1"></div>
<div class="box2"></div>
```

```css
.box1{
  width: 100px;
  height: 50px;
  background-color: red;
  float: left;
}
.box2{
  width: 50px;
  height: 50px;
  background-color: blue;
}
```

在上面的代码中，由于 *box1* 设置了浮动效果，所以会脱离标准流，自然而然 *box2* 会往上面跑，结果就被高度和自己一样的 *box1* 给挡住了。



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-061556.png" alt="image-20210913141555490" style="zoom:50%;" />

接下来我们设置 *box2* 为 *BFC*，如下：

```css
.box1{
  width: 100px;
  height: 50px;
  background-color: red;
  float: left;
}
.box2{
  width: 50px;
  height: 50px;
  background-color: blue;
  overflow: hidden;
}
```

效果：由于 *BFC* 的区域不会与浮动 *box* 重叠，所以即使 *box1* 因为浮动脱离了标准流，*box2* 也不会被 *box1* 遮挡



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-061805.png" alt="image-20210913141805543" style="zoom:50%;" />



基于此特点，我们就可以制作两栏自适应布局，方法就是给固定栏设置固定宽度，给不固定栏开启 *BFC*。

```html
<div class="left">导航栏</div>
<div class="right">这是右侧</div>
```

```css
*{
  margin: 0;
  padding: 0;
}
.left {
  width: 200px;
  height: 100vh;
  background-color: skyblue;
  float: left;
}

.right {
  width: calc(100% - 200px); 
  height: 100vh;
  background-color: yellowgreen;
}
```

效果：在上面的代码中，我们要设置两栏布局，左边栏宽度固定，右边栏自适应。结果我们发现右侧出现了空白

究其原因就是右侧区域与浮动盒子重叠了

![image-20210913143033581](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-063034.png)



修改 *.right* 部分的代码，添加 *overflow:hidden* 使其成为一个 *BFC*：

```css
.right {
  width: calc(100% - 200px); 
  height: 100vh;
  background-color: yellowgreen;
  overflow: hidden;
}
```



效果：因为 *BFC* 的区域不会与浮动 *Box* 重叠，所以右侧空白没有了

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-063330.png" alt="image-20210913143330616" style="zoom:50%;" />



3. 外边距垂直方向重合的问题

*BFC* 还能够解决 *margin* 折叠的问题，例如：

```html
<div class="box1"></div>
<div class="box2"></div>
```

```css
* {
  margin: 0;
  padding: 0;
}

.box1{
  width: 100px;
  height: 100px;
  background-color: red;
  margin-bottom: 10px;
}
.box2{
  width: 100px;
  height: 100px;
  background-color: blue;
  margin-top: 10px;
}
```

效果：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-063850.png" alt="image-20210913143849932" style="zoom:50%;" />





此时我们可以在 box2 外部再包含一个 div，并且将这个 div 设置为 *BFC*，如下：

```html
<div class="box1"></div>
<div class="container">
  <div class="box2"></div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

.box1{
  width: 100px;
  height: 100px;
  background-color: red;
  margin-bottom: 10px;
}
.box2{
  width: 100px;
  height: 100px;
  background-color: blue;
  margin-top: 10px;
}
.container{
  overflow: hidden;
}
```



效果：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-064106.png" alt="image-20210913144106258" style="zoom:50%;" />



*OK*，到这里你应该明白什么是 *BFC* 以及 *BFC* 的触发规则和其使用场景了。

明白了 *BFC*，那么其他的 *IFC、GFC* 和 *FFC* 也就大同小异了。



- *IFC*（*Inline formatting context*）：翻译成中文就是“行内格式化上下文”，也就是一块区域以行内元素的形式来格式化
- *GFC*（*GrideLayout formatting contexts*）：翻译成中文就是“网格布局格式化上下文”，将一块区域以 *grid* 网格的形式来格式化
- *FFC*（*Flex formatting contexts*）：翻译成中文就是“弹性格式化上下文“，将一块区域以弹性盒的形式来格式化



> 更多关于格式化上下文的内容，可以参阅 *MDN*：
>
> *BFC*：*https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context*
>
> *IFC*：*https://developer.mozilla.org/zh-CN/docs/Web/CSS/Inline_formatting_context*



## 真题解答



- 介绍下 *BFC* 及其应用

> 参考答案：
>
> 所谓 *BFC*，指的是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响。
>
> 触发 *BFC* 的方式有很多，常见的有：
>
> - 设置浮动
> - *overflow* 设置为 *auto、scroll、hidden*
> - *positon* 设置为 *absolute、fixed*
>
> 常见的 *BFC* 应用有：
>
> - 解决浮动元素令父元素高度坍塌的问题
> - 解决非浮动元素被浮动元素覆盖问题
> - 解决外边距垂直方向重合的问题



- 介绍下 *BFC、IFC、GFC* 和 *FFC*

> 参考答案：
>
> - *BFC*：块级格式上下文，指的是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响。
> - *IFC*：行内格式化上下文，将一块区域以行内元素的形式来格式化。
> - *GFC*：网格布局格式化上下文，将一块区域以 *grid* 网格的形式来格式化
> - *FFC*：弹性格式化上下文，将一块区域以弹性盒的形式来格式化


# *CSS* 属性的计算过程



## 经典真题



- 请简述 *CSS* 中属性的计算过程是怎样的



## *CSS* 属性的计算过程



首先，让我们从最简单的代码开始，例如：

```html
<p>this is a test</p>
```

```css
p{
  color : red;
}
```

上面是一段很简单的代码，就一个段落，然后设置了一个颜色属性为红色。



那么，我们的这个段落真的就只有一个属性值 *color* 么？



*no、no、no*，真实的情况是这个元素所有的属性都拥有，只不过有一组默认的属性值。例如：

![image-20210916145853445](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-065854.png)



当我们打开浏览器控制台，来到 *Elements > Computed* 面板，我们就会发现就算这么一个小小的 *p*，虽然我们只设置了一个 *color* 属性，但是其实它一个属性都没落下，每个属性都是有默认值。



所以这里我们要讨论一下这个属性值的计算过程是什么样子的。



总的来讲，属性值的计算方法有下面 *4* 种，这也是属性值的计算顺序：

- 确定声明值
- 层叠冲突
- 使用继承
- 使用默认值



**确定声明值**



当我们在样式表中对某一个元素书写样式声明时，这个声明就会被当作 *CSS* 的属性值。

举个例子：

```html
<h1>test</h1>
```

在上面的代码中，我们没有书写任何的 *CSS* 样式，所以这个时候就采用浏览器的默认样式

```css
font-size: 32px;
font-weight: 700
```



假设现在我们为这个 *h1* 设置一个样式：

```css
font-size: 20px
```

这就是我们的作者样式，当作者样式和浏览器默认样式中的声明值有冲突时，会优先把作者样式中的声明值当作 *CSS* 的属性值。

而 *font-weight* 并没有和作者样式冲突，所以不受影响。



**层叠冲突**



当样式表声明值有冲突时，就会使用层叠规则来确定 *CSS* 的属性值

例如：

```html
<div class="test">
  <h1>test</h1>
</div>
```

```css
.test h1{
  font-size: 50px;
}

h1 {
  font-size: 20px;
}
```

在上面的代码中，两个选择器都选中了 *h1*，并且都设置了 *font-size* 属性值，同属于作者样式，这显然就属于层叠冲突了。

当发送层叠冲突时，这时就要根据选择器的权重值来计算究竟运用哪一条作者样式。

落败的作者样式在 *Elements>Styles* 中会被划掉

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-071546.png" alt="image-20210916151546500" style="zoom: 40%;" />



**使用继承**



如果该条属性作者并没有设置，那么还不会着急去使用默认值，而是会去看一下能否继承到该属性值。例如：

```html
<div class="test">
  <p>this is a test</p>
</div>
```

```css
.test{
  color:red
}
```

在上面的代码中，我们虽然没有在 *p* 段落上书写 *color* 属性，但是该属性能够从 *div* 上面继承而来，所以最终计算出来的值就是 *red*



**使用默认值**



最终，如果没有作者样式，该属性值也无法继承而来，则会使用浏览器的默认样式。



## 真题解答



- 请简述 *CSS* 中属性的计算过程是怎样的

> 参考答案：
>
> 1.确定声明值：参考样式表中没有冲突的声明，作为 *CSS* 属性值
>
> 2.层叠冲突：对样式表有冲突的声明使用层叠规则，确定 *CSS* 属性值
>
> 3.使用继承：对仍然没有值的属性，若可以继承则继承父元素的值
>
> 4.使用默认值：对仍然没有值得属性，全部使用默认属性值


# *CSS* 层叠继承规则总结



## 经典真题



- 请简述一下 *CSS* 中的层叠规则



## *CSS* 中的层叠继承规则



在前面《*CSS*属性的计算过程》中，我们介绍了每一个元素都有都有所有的属性，每一个属性都会通过一系列的计算过程得到最终的值。

这里来回顾一下计算过程，大致有以下几个步骤：



- 确定声明值
- 层叠冲突
- 使用继承
- 使用默认值



其中的第二步和第三步层叠和继承会有一些需要注意的知识点，这里我们一起来看一下。



## 层叠规则



*CSS* 是 *Cascading Style Sheets* 的缩写，这暗示层叠（*cascade*）的概念是很重要的。

在最基本的层面上，它表明 *CSS* 规则的顺序很重要，但它比那更复杂。

什么选择器在层叠中胜出取决于三个因素（这些都是按重量级顺序排列的，前面的的一种会否决后一种）：

- 重要性（*Importance*）
- 专用性（*Specificity*）
- 源代码次序（*Source order*）



### 重要性



在 *CSS* 中，有一个特别的语法可以让一条规则总是优先于其他规则： *!important* 。

知道 *!important* 存在是很有用的，这样当你在别人的代码中遇到它时，你就知道它是什么了。

但是！建议你千万不要使用它，除非你绝对必须使用它。您可能不得不使用它的一种情况是，当您在修改某个组件样式时，你不能编辑该组件核心的 *CSS* 模块，又或者你确实想要重写一种不能以其他方式覆盖的样式。

 但是，如果你能避免的话，不要使用它。由于 *!important* 改变了层叠正常工作的方式，因此调试 *CSS* 问题，尤其是在大型样式表中，会变得非常困难。



### 专用性



专用性基本上是衡量选择器的具体程度的一种方法，主要是指它能匹配多少元素。

元素选择器具有很低的专用性。类选择器具有更高的专用性，所以将战胜元素选择器。*ID* 选择器有甚至更高的专用性, 所以将战胜类选择器，战胜 *ID* 选择器的方法则是 *style* 中的样式或者 *!important*。

一个选择器具有的专用性的量可以用四种不同的值（或组件）来衡量的，它们可以被认为是千位，百位，十位和个位，在四个列中的四个简单数字：

- 千位：如果声明是在 *style* 属性中该列加 *1* 分（这样的声明没有选择器，所以它们的专用性总是 *1000*）否则为 *0*。
- 百位：在整个选择器中每包含一个 *ID* 选择器就在该列中加 *1* 分。
- 十位：在整个选择器中每包含一个类选择器、属性选择器、或者伪类就在该列中加 *1* 分。
- 个位：在整个选择器中每包含一个元素选择器或伪元素就在该列中加 *1* 分。



> 注：通用选择器（*）, 复合选择器（+、>、~、空格）和否定伪类（:not）在专用性中无影响。



举个例子：

| **选择器**                                  | 千位 | 百位 | 十位 | 个位 | 合计值 |
| ------------------------------------------- | ---- | ---- | ---- | ---- | ------ |
| h1                                          | 0    | 0    | 0    | 1    | 0001   |
| #indentifier                                | 0    | 1    | 0    | 0    | 0100   |
| h1 + p::first-letter                        | 0    | 0    | 0    | 3    | 0003   |
| li > a[href*=” zh-CN”] > .inline-warning    | 0    | 0    | 2    | 2    | 0022   |
| 没有选择器, 规则在一个元素的 *style* 属性里 | 1    | 0    | 0    | 0    | 1000   |



### 源代码次序



如果多个相互竞争的选择器具有相同的重要性和专用性，那么第三个因素将帮助决定哪一个规则获胜，也就是说，选择哪一个选择器取决于源码顺序。



例如：



```css
p {
    color: red;
}


p {
    color: blue;
}
```



不过有一点大家需要注意的是，当多个 *CSS* 规则匹配相同的元素时，它们都被应用到该元素中。只不过后面因为层叠规则被层叠掉了而已。打开 *Elements > Styles* 我们就能看到：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-014022.png" alt="image-20210918094021662" style="zoom:50%;" />





## 继承规则



所谓继承，就是应用于某个元素的一些属性值将由该元素的子元素继承，而有些则不会。

究竟哪些属性能够被子元素继承，可以参阅：*https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference*



*CSS* 为处理继承提供了四种特殊的通用属性值：

- *inherit*：该值将应用到选定元素的属性值设置为与其父元素一样。
- *initial*：该值将应用到选定元素的属性值设置为与浏览器默认样式表中该元素设置的值一样。如果浏览器默认样式表中没有设置值，并且该属性是自然继承的，那么该属性值就被设置为 *inherit*。
- *unset*：该值将属性重置为其自然值，即如果属性是自然继承的，那么它就表现得像 *inherit*，否则就是表现得像 *initial*。
- *revert*：如果当前的节点没有应用任何样式，则将该属性恢复到它所拥有的值。换句话说，属性值被设置成自定义样式所定义的属性（如果被设置）， 否则属性值被设置成用户代理的默认样式。



> 注： *initial* 和 *unset* 不被 *IE* 支持。



**继承的就近原则**



由于属性值是由继承而来，所以属性值会继承离自己近的那个元素的属性。例如：

```html
<div class="one">
  <div class="two">
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div>
```

```css
.two {
  color: blue;
}

.one {
  color: red;
}
```

在上面的示例中，*two* 比 *one* 更加接近 *p*，所以最终采用的是 *two* 的 *color* 值。段落呈现蓝色。



## 真题解答



- 请简述一下 *CSS* 中的层叠规则

> 参考答案：
>
> *CSS* 中当属性值发生冲突时，通过层叠规则来计算出最终的属性值，层叠规则可以分为 *3* 块：
>
> - 重要性（*Importance*）：*!important*  设置该条属性值最重要，但是一般不推荐使用。
> - 专用性（*Specificity*）：专用性主要是指它能匹配多少元素，匹配得越少专用性越高。
> - 源代码次序（*Source order*）：在重要性和专用性都一致的情况下，属性值取决于源代码的先后顺序。


# *import* 指令



## 经典真题



- *CSS* 引用的方式有哪些？*link* 和 *@import* 的区别？



## 来看看 *import* 指令是啥



*import* 指令是用来导入 *CSS* 样式的。



什么？导入样式不是已经有 *link* 标签了么？



没错，*link* 标签可以导入外部 *CSS* 样式，*import* 仍然可以导入外部 *CSS* 样式。



我们首先来看一下 *import* 的基本用法



1. 在 *HTML* 文件中导入外部样式

```html
<style>
  @import url('./index.css');
</style>
```

要在 *HTML* 源代码直接应用 *@import* 引入外部 *CSS* 文件，须要将 *@import* 放入 *style* 标签



2. 在 *CSS* 文件中引入另一个 *CSS* 文件

```css
@import url('./index.css');
/* 后面书写其他样式 */
```

除了 *HTML* 源代码中使用 *style* 标签来运用 *@import*，在 *CSS* 文件代码中依旧可以或许使用 *@import*，这个时候就不须要 *style* 标签，而是直接应用 *@import* 就可，这样便可实现一个（多个）*CSS* 文件中引入套入别的一个（多个）*CSS* 文件。



3. *@import* 规则还支持媒体查询，因此可以允许依赖媒体的导入

```css
@import "printstyle.css" print;
/* 只在媒体为 print 时导入 "printstyle.css" 样式表 */
```

```css
@import "mobstyle.css" screen and (max-width: 768px);
/* 只在媒体为 screen 且视口最大宽度 768 像素时导入 "mobstyle.css" 样式表 */
```



看完了 *@import* 的基本使用后，接下来我们来看一下它和 *link* 的区别：



1. ***link* 属于 *HTML* 标签，而 *@import* 完全是 *CSS* 提供的一种方式。**

   *link* 标签除了可以加载 *CSS* 外，还可以做很多其它的事情，比如定义 *RSS*，定义 *rel* 连接属性等，*@import* 就只能加载 *CSS* 了。

2. **加载顺序的差别。**

   比如，在 *a.css* 中使用 *import* 引用 *b.css*，只有当使用当使用 *import* 命令的宿主 *css* 文件 *a.css* 被下载、解析之后，浏览器才会知道还有另外一个 *b.css* 需要下载，这时才去下载，然后下载后开始解析、构建 *render tree* 等一系列操作.

3. **兼容性的差别。**

   由于 *@import* 是 *CSS2.1* 提出的所以老的浏览器不支持，*@import* 只有在 *IE5* 以上的才能识别，而 *link* 标签无此问题。

4. **当使用 *JS* 控制 *DOM* 去改变样式的时候，只能使用 *link* 标签，因为 *@import* 不是 *DOM* 可以控制的**。

   对于可换皮肤的网站而言，可以通过改变 *link* 标签这两个的 *href* 值来改变应用不用的外部样式表，但是对于 *import* 是无法操作的，毕竟不是标签。



另外，从性能优化的角度来讲，尽量要避免使用 *@import*。

使用 *@import* 引入 *CSS* 会影响浏览器的并行下载。使用 *@import* 引用的 *CSS* 文件只有在引用它的那个 *CSS* 文件被下载、解析之后，浏览器才会知道还有另外一个 *CSS* 需要下载，这时才去下载，然后下载后开始解析、构建 *Render Tree* 等一系列操作。

多个 *@import* 会导致下载顺序紊乱。在 *IE* 中，*@import* 会引发资源文件的下载顺序被打乱，即排列在 *@import* 后面的 *JS* 文件先于 *@import* 下载，并且打乱甚至破坏 *@import* 自身的并行下载。



## 真题解答



- *CSS* 引用的方式有哪些？*link* 和 *@import* 的区别？

> 参考答案：
>
> *CSS* 引用的方式有：
>
> - 外联，通过 *link* 标签外部链接样式表
> - 内联，在 *head* 标记中使用 *style* 标记定义样式
> - 嵌入，在元素的开始标记里通过 *style* 属性定义样式
>
> *link* 和 *@import* 的区别：
>
> 1. ***link* 属于 *HTML* 标签，而 *@import* 完全是 *CSS* 提供的一种方式。**
>
>    *link* 标签除了可以加载 *CSS* 外，还可以做很多其它的事情，比如定义 *RSS*，定义 *rel* 连接属性等，*@import* 就只能加载 *CSS* 了。
>
> 2. **加载顺序的差别。**
>
>    比如，在 *a.css* 中使用 *import* 引用 *b.css*，只有当使用当使用 *import* 命令的宿主 *css* 文件 *a.css* 被下载、解析之后，浏览器才会知道还有另外一个 *b.css* 需要下载，这时才去下载，然后下载后开始解析、构建 *render tree* 等一系列操作.
>
> 3. **兼容性的差别。**
>
>    由于 *@import* 是 *CSS2.1* 提出的所以老的浏览器不支持，*@import* 只有在 *IE5* 以上的才能识别，而 *link* 标签无此问题。
>
> 4. **当使用 *JS* 控制 *DOM* 去改变样式的时候，只能使用 *link* 标签，因为 *@import* 不是 *DOM* 可以控制的**。
>
>    对于可换皮肤的网站而言，可以通过改变 *link* 便签这两个的 *href* 值来改变应用不用的外部样式表，但是对于 *import* 是无法操作的，毕竟不是标签。


# *CSS3* 的 *calc* 函数



## 经典真题



- *CSS* 的计算属性知道吗？



## *CSS3* 中的 *calc* 函数



*calc* 是英文单词 *calculate*（计算）的缩写，是 *CSS3* 的一个新增的功能。

*MDN* 的解释为可以用在任何长度、数值、时间、角度、频率等处，语法如下：

```css
/* property: calc(expression) */
width: calc(100% - 80px);
```



可以用常见的 + - * / 符号来进行运算，但需要注意的是 + 和 - 必须用空格隔开，原因很简单，如果 - 号和计算的数字挨在一起，则浏览器在解析时会认为这可能是一个负值。



例如：

```css
width: calc(100% -8px); /* 这样会出错,结果为0 */
```

```css
width: calc(100% - 8px); /* 当 + -  符号用空格隔开时,运算成功 */
```



接下来我们来看一下 *calc* 函数的具体使用示例，如下：

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}

.container{
  width: 500px;
  height: 250px;
  background-color: skyblue;
  margin: 10px;
  position: relative;
}
.item{
  width: 100px;
  height: 100px;
  background-color: pink;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
}
```



效果：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-094033.png" alt="image-20210914174033014" style="zoom:50%;" />



更多关于 *calc* 函数信息可以参阅：*https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc()*



## 真题解答



- *CSS* 的计算属性知道吗？

> 参考答案：
>
> 即 *calc( )* 函数，主要用于指定元素的长度，支持所有 *CSS* 长度单位，运算符前后都需要保留一个空格。
>
> 比如： *width: calc(100% - 50px);*

# *CSS3* 的媒介(*media*)查询



## 经典真题



- 如何使用媒体查询实现视口宽度大于 *320px* 小于 *640px* 时 *div* 元素宽度变成 *30%*



## 媒体查询



媒体查询英文全称 *Media Query*，顾名思义就是会查询用户所使用的媒体或者媒介。



在现在，网页的浏览终端是越来越多了。用户可以通过不同的终端来浏览网页，例如：*PC*，平板电脑，手机，电视等。尽管我们无法保证一个网站在不同屏幕尺寸和不同设备上看起来一模一样，但是至少要让我们的Web页面能适配用户的终端。



在 *CSS3* 中的 *Media Query* （媒体查询）模块就是用来让一个页面适应不同的终端的。



***Media Type* 设备类型**



首先我们来认识一下 *CSS* 中所支持的媒体类型。



在 *CSS2* 中常碰到的就是 *all*（全部）、*screen*（屏幕）和 *print*（页面打印或打印预览模式）。然而媒体的类型其实远不止这 *3* 种。

在 *W3C* 中共列出了 *10* 种媒体类型，如下表所示：

| 值         | 设备类型                                         |
| ---------- | ------------------------------------------------ |
| All        | 所有设备                                         |
| Braille    | 盲人用点字法触觉回馈设备                         |
| Embossed   | 盲文打印机                                       |
| Handheld   | 便携设备                                         |
| Print      | 打印用纸或打印预览视图                           |
| Projection | 各种投影设备                                     |
| Screen     | 电脑显示器                                       |
| Speech     | 语音或音频合成器                                 |
| Tv         | 电视机类型设备                                   |
| Tty        | 使用固定密度字母栅格的媒介，比如电传打字机和终端 |

当然，虽然上面的表列出来了这么多，但是常用的也就是 *all*（全部）、*screen*（屏幕）和 *print*（页面打印或打印预览模式）这三种媒体类型。



**媒体类型引用方法**



引用媒体类型的方法有和很多，常见的媒体类型引用方法有：*link* 标签、*xml* 方式、*@import* 和 *CSS3* 新增的 *@media*。



1. *link* 方法

*link* 方法引入媒体类型其实就是在 *link* 标签引用样式的时候，通过 *link* 标签中的 *media* 属性来指定不同的媒体类型，如下：

```html
<link rel="stylesheet" href="index.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
```



2. *xml* 方式

*xml* 方式和 *link* 方式比较相似，也是通过 *media* 属性来指定，如下：

```xml
<? xml-stylesheet rel="stylesheet" media="screen" href="style.css" ?>
```



3. *@import*

*@import* 引入媒体类型主要有两种方式，一种是在 CSS 样式表中通过 *@import* 调用另一个样式文件，另外一种是在 *style* 标签中引入。

> 注意：*IE6* 和 *IE7* 中不支持该方式

在样式文件中引入媒体类型：

```css
@import url('./index.css') screen
```

在 *style* 标签中引入媒体类型：

```html
<style>
  @import url('./index.css') screen
</style>
```



4. *@meida* 的方式

*@media* 是 *CSS3* 中新引进的一个特性，称为媒体查询。*@media* 引入媒体也有两种方式，如下：

在样式文件中引入媒体类型：

```css
@media screen{
  /* 具体样式 */
}
```

在 *style* 标签中引入媒体类型：

```html
<style>
  @media screen{
    /* 具体样式 */
  }
</style>
```



虽然上面介绍了 *4* 种引入方式，但是最常见的就是第 *1* 种和第 *4* 种。



**媒体查询具体语法**



接下来我们来看一下媒体查询的具体语法。

这里我们可以将 *Media Query* 看成一个公式：

```markdown
Media Type（判断条件）+ CSS（符合条件的样式规则）
```

这里举例如下：

*link* 的方式

```html
<link rel="stylesheet" media="screen and (max-width:600px)" href="style.css" />
```

*@media* 的方式

```css
@meida screen and (max-width:600px){
  /* 具体样式 */
}
```

上面的两个例子中都是使用 *width* 来进行的样式判断，但是实际上还有很多特性都可以被用来当作样式判断的条件。

具体如下表：

![image-20210916165039143](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-085040.png)



有了 *Media Query*，我们能在不同的条件下使用不同的样式，使页面在不同的终端设备下达到不同的渲染效果。

这里有一个具体的公式如下：

```css
@media 媒体类型 and (媒体特性) {
	/* 具体样式 */
}
```

来看几个具体示例。



1. 最大宽度 *max-width*

该特性是指媒体类型小于或等于指定宽度时，样式生效，例如：

```css
@media screen and (max-width:480px) {
	/* 具体样式 */
}
```

当屏幕宽度小于或等于 *480px* 时，样式生效



2. 最小宽度 *min-width*

该特性和上面相反，及媒体类型大于或等于指定宽度时，样式生效，例如：

```css
@media screen and (min-width:480px) {
	/* 具体样式 */
}
```

当屏幕宽度大于或等于 *480px* 时，样式生效



3. 多个媒体特性混合使用

当需要多个媒体特性时，使用 *and* 关键字将媒体特性结合在一起，例如：

```css
@media screen and (min-width:480px) and (max-width:900px){
	/* 具体样式 */
}
```

当屏幕大于等于 *480px* 并且小于等于 *900px* 时，样式生效。



4. 设备屏幕的输出宽度 *Device Width*

在智能设备上，例如 *iphone、ipad* 等，可以通过 *min-device-width* 和 *max-device-width* 来设置媒体特性，例如：

```css
@media screen and (max-device-height:480px) {
	/* 具体样式 */
}
```

在智能设备上，当屏幕小于等于 *480px* 时样式生效



5. *not* 关键字

*not* 关键词可以用来排除某种制定的媒体特性，示例如下：

```css
@media not print and (max-width:900px) {
	/* 具体样式 */
}
```

样式代码将被用于除了打印设备和屏幕宽度小于或等于 *900px* 的所有设备中。



6. 未指明 *Media Type*

如果在媒体查询中没有明确的指定 *Media Type*，那么其默认值为 *all*

```css
@media (max-width: 900px){
  /* 具体样式 */
}
```

上面的样式适用于屏幕尺寸小于或等于 *900px* 的所有设备。



更多关于媒体查询的内容可以参阅 *MDN*：*https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries*



## 真题解答



- 如何使用媒体查询实现视口宽度大于 *320px* 小于 *640px* 时 *div* 元素宽度变成 *30%*

> 参考答案：
>
> ```css
> @media screen and (min-width: 320px) and (max-width: 640px){
>   	div{
>       width: 30%;
>     }
> }
> ```


# 过渡和动画事件



## 经典真题



- *CSS3* 中 *transition* 和 *animation* 的属性分别有哪些（哔哩哔哩）
- *CSS* 动画如何实现？



## *CSS3* 过渡



*CSS3* 新增了过渡属性，可以使用从一个状态变化到另一个状态时，变化更加的平滑。



*CSS3* 的过渡功能像是一种黄油，*W3C* 标准中是这样描述 *transition* 的：

*CSS3* 的 *transition* 允许 *CSS* 的属性值在一定的时间区间内平滑的过渡。这种效果可以在鼠标单击，获得焦点，对元素任何改变中触发，并平滑地以动画效果改变 *CSS* 的属性值。



先看一个快速入门示例，如下：

```html
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
div:hover{
  height: 300px;
}
```

在上面的代码中，我们让 *div* 被 *hover* 的时候，改变其高度，但是我们可以看到效果非常的生硬。



此时我们就可以添加一个 *CSS3* 新增的属性 *transition*，使其两个状态变化之间产生一个过渡效果。

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  transition: all .5s;
  /* 添加过渡效果 */
}
div:hover{
  height: 300px;
}
```



上面就是一个快速入门示例，接下来我们来看一下 *transition* 的具体语法。



*transition* 属性是 *transition-property，transition-duration，transition-timing-function* 和 *transition-delay* 的一个简写属性。



- *transition-property*：指定过渡的 *CSS* 属性
- *transition-duration*：指定过渡所需的完成时间
- *transition-timing-function*：指定过渡函数
- *transition-delay*：指定过渡的延迟时间





***transition-property***



该属性用来指定过渡动画 *CSS* 属性名称，该属性的语法如下：

```css
transition-property: none | all ｜ property
```



![image-20210915094158901](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-15-014159.png)



需要特别说明的是，并不是所有的属性都可以进行过渡，只有属性是具有一个中点值的属性才能够进行过渡效果。因为这样才能通过不停的修改中间值从而实现过渡效果。例如 *display:none|block* 就没有中间值，所以无法应用过渡。



能够过渡的属性类型有颜色属性、具有长度值或百分比的属性、阴影、变形系列属性，具体支持过渡的属性可以参阅下表：



| 支持过渡的属性    |                     |                     |                     |
| ----------------- | ------------------- | ------------------- | ------------------- |
| background-color  | background-position | border-bottom-color | border-bottom-width |
| border-left-color | border-left-width   | border-right-color  | border-right-width  |
| border-spacing    | border-top-color    | border-top-width    | bottom              |
| clip              | color               | font-size           | font-weight         |
| height            | left                | letter-spacing      | line-height         |
| margin-bottom     | margin-left         | margin-right        | margin-top          |
| max-height        | max-width           | min-height          | min-width           |
| opacity           | outline-color       | outline-width       | padding-bottom      |
| padding-left      | padding-right       | padding-top         | right               |
| text-indent       | text-shadow         | vertical-align      | visibility          |
| width             | word-spacing        | z-index             |                     |



***transition-duration***



该属性主要用于设置一个属性过渡到另一个属性所需要的时间，单位为秒(*s*)或者毫秒(*ms*)。默认值为 *0*，代表变换是即时的。



***transition-timing-function***



该属性用于设置过渡的速度，有如下的取值：



![image-20210915094104556](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-15-014104.png)



***transition-delay***



过渡延迟多久触发，单位为秒或者毫秒。但是值可以是正整数，负整数和 *0*。

正整数和 *0* 都比较好理解，这里主要说一下负整数。负整数的计算会从整体过渡时间中去做减法运算，举个例子：

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  transition: all 5s -2s;
  /* 设置为 -2s，相当于已经执行了 2s */
}
div:hover{
  height: 300px;
}
```



**多个元素过渡**



如果要对多个 *CSS3* 属性应用过渡效果，直接用逗号分离开即可，这种主要是针对每个属性过渡的时间不同的情况下。

例如下面的例子：背景颜色过渡时间为 *2s*，而宽度的过渡时间为 *5s*：

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  transition: background-color 2s, height 5s;
}
div:hover{
  height: 300px;
  background-color: pink;
}
```



当然，如果每个属性的过渡时间都一样的话，那么直接使用 *all* 会更简洁一些。



***hover* 时期不同的过渡设置**



我们可以在 *hover* 时对状态的变化设置一个过渡效果，鼠标移开元素恢复时设置另一个过渡效果。例如：

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  transition: all 5s
    /* 鼠标移走时的过渡 */
}
div:hover{
  height: 300px;
  background-color: pink;
  transition: all 2s;
  /* 鼠标 hover 时状态变化的过渡 */
}
```



**过渡事件**



有些时候，在 *JS* 中的某些操作需要过渡效果结束后再执行，此时事件类型中给我们提供了一个 *transitionend* 事件方便我们监听过渡效果是否结束，例如：

```html
<div id="oDiv"></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  transition: all 3s
}
```

```js
var div = document.getElementById("oDiv");
div.onclick = function(){
  div.style.height = "400px";
}
div.ontransitionend = function(){
  console.log("过渡结束后触发");
}
```



## *CSS3* 动画



在 *CSS3* 中新增了一个 *animation* 模块，可以制作出类似于 *flash* 一样的动画出来。

 

我们首先还是来看一个快速入门示例，如下：

```html
<div></div>
```

```css
*{
  margin: 0;
  padding: 0;
}
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  position: absolute;
  animation: test 5s;
}
@keyframes test{
  0% {
    left: 0;
    top: 0;
  }
  25% {
    left: 400px;
    top: 0;
  }
  40% {
    left: 400px;
    top: 200px;
  }
  65% {
    left: 0;
    top: 200px;
  }
  100% {
    left: 0;
    top: 0;
  }
}
```



在上面的代码示例中，我们声明了一个名为 *test* 的动画，然后在 *div* 中运用了这个动画，整个动画的播放时间为 *5s*。



接下来我们来看一下 *CSS3* 中动画的具体细节。

使用 *CSS3* 的 *animation* 制作动画包含两个部分：首先是用关键帧声明一个动画，其次是在 *animation* 调用关键帧声明的动画。



**声明动画**



在 *CSS3* 中，使用 *@keyframes* 来声明一个动画，语法为：

```css
@keyframes animationname {keyframes-selector {css-styles;}}
```

属性对应的说明如下：

![image-20210915101256811](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-15-021257.png)



在上面的示例中，我们声明动画的代码为：

```css
@keyframes test{
  0% {
    left: 0;
    top: 0;
  }
  25% {
    left: 400px;
    top: 0;
  }
  40% {
    left: 400px;
    top: 200px;
  }
  65% {
    left: 0;
    top: 200px;
  }
  100% {
    left: 0;
    top: 0;
  }
}
```

这里我们就声明了一个名为 *test* 的动画，设置了 *5* 个时间段，分别是 *0%、25%、40%、65%* 和 *100%*，每个时间段都有对应的不同 *CSS* 样式，当动画执行时，从一个时间段到另一个时间段会自动运用过渡效果，所以我们可以看到整个流程是非常平滑的。



**使用动画**



*@keyframes* 只是用来声明一个动画，如果一个声明的动画不被调用，那么这个动画是没有任何意义的。

在 *CSS3* 中通过 *animation* 属性来调用动画。



语法如下：

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```



- *animation-name*：指定要绑定到选择器的关键帧的名称
- *animation-duration*：动画指定需要多少秒或毫秒完成
- *animation-timing-function*：设置动画将如何完成一个周期
- *animation-delay*：设置动画在启动前的延迟间隔
- *animation-iteration-count*：定义动画的播放次数
- *animation-direction*：指定是否应该轮流反向播放动画
- *animation-fill-mode*：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
- *animation-play-state*：指定动画是否正在运行或已暂停



前面 *4* 个属性没什么好说，大体上和前面介绍的 transition 的属性很像，这里我们主要看一下后面几个属性。



***animation-iteration-count***



*animation-iteration-count* 属性定义动画应该播放多少次，如果想要一直播放，那么次数就是无限次，所以属性值为 *infinite*。



***animation-direction***



正常情况下，动画播放完毕以后，会立刻回到起始的状态。例如：

```css
@keyframes test{
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 400px;
    top: 0;
  }
  100% {
    left: 400px;
    top: 200px;
  }
}
```

对上面快速入门的示例稍作修改，我们就会发现，动画播放完毕后立马就回到起始状态了。

那么 *animation-direction* 就可以设置动画是否要反向播放回去。该属性对应的可设置值有：

```css
animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-15-024829.png" alt="image-20210915104829295"  />



需要注意的是，如果动画被设置为只播放一次，该属性将不起作用。

另外，无论动画正向播放还是反向播放，都会算一次次数，例如：

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  position: absolute;
  animation: test 5s 5 alternate;
}
@keyframes test{
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 400px;
    top: 0;
  }
  100% {
    left: 400px;
    top: 200px;
  }
}
```

在上面的代码中，我们设置一共播放 *5* 次，那么整个动画就会正向播放 *3* 次，反向播放 *2* 次。



***animation-fill-mode***



*animation-fill-mode* 属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。

一般主要用于设置动画播放完毕后的状态。

```css
animation-fill-mode: none|forwards|backwards|both|initial|inherit;
```

![image-20210915105722895](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-15-025723.png)



用得最多的值就是 *forwards*，定义动画播放完后保持结束时候的样子。默认值为 *none*，表示动画将按预期进行和结束，在动画完成其最后一帧时，动画会反转到初始帧处。当取值为 *backwards* 时，会在动画结束时迅速应用动画的初始帧。



***animation-play-state***



*animation-play-state* 属性规定动画正在运行还是暂停，语法为：

```css
animation-play-state: paused|running;
```

![image-20210915110118784](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-15-030119.png)



该属性一般配合着 *JS* 一起使用，从而达到对动画播放状态的一个控制。例如：

```html
<button id="playAnimate">播放动画</button>
<button id="pauseAnimate">暂停动画</button>
<div id="oDiv"></div>
```

```css
*{
  margin: 0;
  padding: 0;
}
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  position: absolute;
  animation: test 2s 5 alternate paused;
}
@keyframes test{
  0% {
    left: 0;
    top: 30px;
  }
  50% {
    left: 400px;
    top: 30px;
  }
  100% {
    left: 400px;
    top: 200px;
  }
}
```

```js
var oDiv = document.getElementById("oDiv");
var playAnimate = document.getElementById("playAnimate");
var pauseAnimate = document.getElementById("pauseAnimate");
playAnimate.onclick = function(){
  oDiv.style.animationPlayState = "running"
}
pauseAnimate.onclick = function(){
  oDiv.style.animationPlayState = "paused"
}
```

在上面的示例中，我们就通过 *JS* 来控制 *animation-play-state* 从而切换动画播放与暂停这两个状态。



**动画对应事件**



同样，动画也有对应的事件，与过渡只提供有 *transitionend* 事件不同的是，在 *CSS* 动画播放时，会发生以下三个事件：



- *animationstart*：*CSS* 动画开始后触发
- *animationiteration*：*CSS* 动画重复播放时触发
- *animationend*：*CSS* 动画完成后触发



## 真题解答



- *CSS3* 中 *transition* 和 *animation* 的属性分别有哪些（哔哩哔哩）

> 参考答案：
>
> *transition* 过渡动画：
>
> - *transition-property*：指定过渡的 *CSS* 属性
> - *transition-duration*：指定过渡所需的完成时间
> - *transition-timing-function*：指定过渡函数
> - *transition-delay*：指定过渡的延迟时间
>
> *animation* 关键帧动画：
>
> - *animation-name*：指定要绑定到选择器的关键帧的名称
> - *animation-duration*：动画指定需要多少秒或毫秒完成
> - *animation-timing-function*：设置动画将如何完成一个周期
> - *animation-delay*：设置动画在启动前的延迟间隔
> - *animation-iteration-count*：定义动画的播放次数
> - *animation-direction*：指定是否应该轮流反向播放动画
> - *animation-fill-mode*：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
> - *animation-play-state*：指定动画是否正在运行或已暂停



- *CSS* 动画如何实现？

> 参考答案：
>
> 即 *animation* 属性，对元素某个或多个属性的变化进行控制，可以设置多个关键帧。属性包含了动画的名称、完成时间（以毫秒计算）、周期、间隔、播放次数、是否反复播放、不播放时应用的样式、动画暂停或运行。
>
> 它不需要触发任何事件就可以随着时间变化来改变元素的样式。
>
> **使用 *CSS* 做动画**：
>
> - *@keyframes* 规定动画。       
> - *animation* 所有动画属性的简写属性。     
> - *animation-name* 规定 *@keyframes* 动画的名称。
> - *animation-duration* 规定动画完成一个周期所花费的秒或毫秒。默认是 0。      
> - *animation-timing-function* 规定动画的速度曲线。默认是 *ease*。           
> - *animation-fill-mode* 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。   
> - *animation-delay* 规定动画何时开始。默认是 *0*。    
> - *animation-iteration-count*  规定动画被播放的次数。默认是 *1*。    
> - *animation-direction* 规定动画是否在下一周期逆向地播放。默认是 *normal*。
> - *animation-play-state* 规定动画是否正在运行或暂停。默认是 *running*。


# 渐进增强和优雅降级



## 经典真题



- 说说渐进增强和优雅降级?
- 你能描述一下渐进增强和优雅降级之间的不同吗?



## 渐进增强和优雅降级



渐进增强，英语全称 *progressive enhancement*，指的是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。



优雅降级，英语全称 *graceful degradation*，一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。



这两个概念其实并不是一个新的概念，就是以前提到的"向上兼容"和"向下兼容"。渐进增强相当于向上兼容，优雅降级相当于向下兼容。向下兼容指的是高版本支持低版本，或者说后期开发的版本能兼容早期开发的版本。



在确定用户群体的前提下，渐进增强：针对低版本浏览器进行页面构建，保证基本功能，再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验。



优雅降级：一开始就构建完整的功能，再针对低版本浏览器进行兼容。



区别：优雅降级是从复杂的现状开始并试图减少用户体验的供给，而渐进增强则是从一个基础的、能够起到作用的版本开始再不断扩充，以适应未来环境的需要。



例如看下面这两段代码的书写顺序，看上去只是书写顺序的不同，实则表示了我们开发的着重点：

```css
.transition { /*渐进增强写法*/
  -webkit-transition: all .5s;
     -moz-transition: all .5s;
       -o-transition: all .5s;
          transition: all .5s;
}
.transition { /*优雅降级写法*/
          transition: all .5s;
       -o-transition: all .5s;
     -moz-transition: all .5s;
  -webkit-transition: all .5s;
}
```



前缀 *CSS3*（-webkit-、-moz-、-o-）和正常 *CSS3* 在浏览器中的支持情况是这样的：

1. **很久以前**：浏览器前缀 *CSS3* 和正常 *CSS3* 都不支持
2. **不久之前**：浏览器**只支持**前缀 *CSS3*，**不支持**正常 *CSS3*
3. **现在**：浏览器**既支持**前缀 *CSS3*，**又支持**正常 *CSS3*
4. **未来**：浏览器**不支持**前缀 *CSS3*，**仅支持**正常 *CSS3*



渐进增强的写法，优先考虑老版本浏览器的可用性，最后才考虑新版本的可用性。在时期 *3* 前缀 *CSS3* 和正常 *CSS3* 都可用的情况下，正常 *CSS3* 会覆盖前缀 *CSS3*。



优雅降级的写法，优先考虑新版本浏览器的可用性，最后才考虑老版本的可用性。在时期 *3* 前缀 *CSS3* 和正常 *CSS3* 都可用的情况下，前缀 *CSS3* 会覆盖正常的 *CSS3*。



绝大多少的大公司都是采用渐进增强的方式，因为业务优先，提升用户体验永远不会排在最前面。



- 例如新浪微博网站这样亿级用户的网站，前端的更新绝不可能追求某个特效而不考虑低版本用户是否可用。一定是确保低版本到高版本的可访问性再渐进增强。

  

- 如果开发的是一面面向青少面的软件或网站，你明确这个群体的人总是喜欢尝试新鲜事物，喜欢炫酷的特效，喜欢把软件更新至最新版本，这种情况再考虑优雅降级。



## 真题解答



- 说说渐进增强和优雅降级?

> 参考答案：
>
> 渐进增强，英语全称 *progressive enhancement*，指的是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
>
> 优雅降级，英语全称 *graceful degradation*，一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。


# *CSS3* 变形



## 经典真题



- 请简述一下 *CSS3* 中新增的变形如何使用？



## *CSS3* 变形相关知识



### 变形介绍



*CSS2.1* 中的页面都是静态的，多年来，*Web* 设计师依赖于图片、*Flash* 或者 *JavaScript* 才能完成修改页面的外观。*CSS3* 改变了设计师这种思维，借助 *CSS3* 可以轻松的倾斜、缩放、移动以及翻转元素。



*2012* 年 *9* 月，*W3C* 组织发布了 *CSS3* 变形工作草案。允许 *CSS* 把元素变成 *2D* 或者 *3D* 空间，这其实就是 *CSS3* 的 *2D* 变形和 *3D* 变形。



*CSS3* 变形是一些效果的集合，比如平移、旋转、缩放和倾斜效果，每个效果通过变形函数（*transform function*）来实现。在此之前，要想实现这些效果，必须依赖图片、*Flash* 或者 *JavaScript* 才能完成，而现在仅仅使用纯 *CSS* 就能够实现，大大的提高了开发效率以及页面的执行效率。



变形效果要通过变形函数来实现，语法如下：

```css
transform: none|transform-functions;
```

那么 *CSS3* 中为我们提供了哪些变形函数呢？

这里我们整体可以划分出 *3* 大类：

- 具有 *X/Y* 的函数：*translateX、translateY、sclaeX、scaleY、skewX、skewY*
- *2D* 变形函数：*translate、sclae、rotate、skew、matrix*
- *3D* 变形函数：*rotateX、rotateY、rotate3d、translateZ、translate3d、scaleZ、scale3d、matrix3d*



此时，你可能已经做好了逐一击破每个变形函数的思想准备了。

别急，在介绍每个变形函数之前，我们先来了解一下变形相关的属性。



### 变形属性



1. ***transform* 属性**



第一个首当其冲的就是 *transform* 属性，该属性所对应的属性值就是一系列的变形函数，例如：

```css
transform: scale(1.5)
```

上面的代码中，我们设置了 *transform* 属性，属性值为 *scale* 变形函数。



2. ***transform-origin* 属性**

接下来第二个是 *transform-origin* 属性，该属性用于设置元素的中心点位置。该属性语法如下：

```css
transform-origin: x-axis y-axis z-axis;
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-080037.png" alt="image-20210919160036555" style="zoom:50%;" />



为了演示此属性的作用，我们先透支一点后面的知识。

这里我们以 *rotate* 为例。*rotate* 是变形函数中的一个，作用是旋转元素，其语法如下：

```css
rotate(angle)
```

定义 *2D* 旋转，在参数中规定角度。

来看一个例子：

```html
<div></div>
```

```css
div{
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 200px;
  transition: all 1s;
}
div:hover{
  transform: rotate(45deg);
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-080641.gif" alt="2021-09-19 16.06.26" style="zoom:50%;" />

在上面的示例中，我们设置 *div* 鼠标 *hover* 的时候进行变形，旋转 *45* 度，为了更加平滑，我们加入了 *transition* 过渡效果。

我们观察整个元素的旋转中心点，是在元素的最中央。



接下来我们可以使用 *transform-origin* 来修改这个中心点的位置。例如：

```css
div{
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 200px;
  transition: all 1s;
  transform-origin: bottom left;
  /* 修改元素的中心点位置 */
}
div:hover{
  transform: rotate(45deg);
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-081002.gif" alt="2021-09-19 16.09.46" style="zoom:50%;" />

在上面的代码中，我们修改了元素的中心点位置为 *bottom、left*，也就是左下角。可以看到因为元素的中心点位置发生了变化，旋转的方式也随之发生了改变。



*transform-origin* 的属性值除了像上面一样设置关键词以外，也可以是百分比、*em、px* 等具体的值。

*transform-origin* 的第三个参数是定义 *Z* 轴的距离，这在后面介绍 *3D* 变形时再来介绍。



3. ***transform-style* 属性**



*transform-style* 属性是 *3D* 空间一个重要属性，指定了嵌套元素如何在 *3D* 空间中呈现。语法如下：

```css
transform-style: flat | preserve-3d;
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-091723.png" alt="image-20210919171722656"  />

其中 *flat* 为默认值。

需要注意的是该属性需要设置在父元素上面，使其变成一个真正的 *3D* 图形。

当然光看属性说明是非常模糊的，一点都不直观，我们直接来看一个例子。

```html
<div class="box">
  <div class="up">上</div>
  <div class="down">下</div>
  <div class="left">左</div>
  <div class="right">右</div>
  <div class="forword">前</div>
  <div class="back">后</div>
</div>
```

```css
.box {
  width: 250px;
  height: 250px;
  border: 1px dashed red;
  margin: 100px auto;
  position: relative;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: gun 8s linear infinite;
}

.box>div {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  line-height: 250px;
  font-size: 60px;
  color: #daa520;
}

.left {
  background-color: rgba(255, 0, 0, 0.3);
  transform-origin: left;
  transform: rotateY(90deg) translateX(-125px);
}

.right {
  background: rgba(0, 0, 255, 0.3);
  transform-origin: right;
  /* 变换*/
  transform: rotateY(90deg) translateX(125px);
}
.forward {
  background: rgba(255, 255, 0, 0.3);
  transform: translateZ(125px);
}
.back {
  background: rgba(0, 255, 255, 0.3);
  transform: translateZ(-125px);
}
.up {
  background: rgba(255, 0, 255, 0.3);
  transform: rotateX(90deg) translateZ(125px);
}
.down {
  background: rgba(99, 66, 33, 0.3);
  transform: rotateX(-90deg) translateZ(125px);
}
@keyframes gun {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-092030.gif" alt="2021-09-19 17.20.08" style="zoom:50%;" />

上面的 *CSS* 代码不用具体去关心，我们只看在 *box* 元素上面添加了一句 *transform-style: preserve-3d*，表示 *box* 里面的子元素都以 *3D* 的形式呈现。如果我们把这行代码去除掉或者值修改为 *flat*，效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-092331.gif" alt="2021-09-19 17.23.06" style="zoom:50%;" />

怎么样？是不是非常直观，一下子就知道 *transform-style* 属性的作用是什么了。该属性就是指定子元素是在 *3D* 空间还是 *2D* 平面中显示。



4. ***perspective* 属性**



*perspective* 属性用于设置查看者的位置，可以将可视内容映射到一个视锥上，继而投到一个 *2D* 视平面上。如果不指定该属性，则 *Z* 轴空间中所有点将平铺到同一个 *2D* 视平面中，并且在变换结果中将不存在景深概念。



简单理解，就是视距，用来设置用户和元素 *3D* 空间 *Z* 平面之间的距离。而其效应由他的值来决定，值越小，用户与 *3D* 空间 *Z* 平面距离越近，视觉效果更令人印象深刻；反之，值越大，用户与 *3D* 空间 *Z* 平面距离越远，视觉效果就很小。



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-094151.png" alt="image-20210919174151244" style="zoom:50%;" />



注意当为元素定义 *perspective* 属性时，其子元素会获得透视效果，而不是元素本身。

我们还是来看一个直观的例子来了解这个属性的作用。例如：

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 500px;
  height: 500px;
  border: 1px solid;
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item{
  width: 150px;
  height: 150px;
  background-color: red;
  animation: rotateAnimation 5s infinite;
}
@keyframes rotateAnimation {
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-095136.gif" alt="2021-09-19 17.51.16" style="zoom:50%;" />

在上面的代码中，我们虽然设置了 *div.item* 沿着 *Y* 轴进行旋转，但是由于没有设置 *perspective* 视距，所以看上去就像是 *div* 盒子在宽度伸缩一样，*3D* 效果并不明显。

此时我们可以给父元素 *div.container* 设置 *perspective* 视距，例如：

```css
.container{
  ...
  perspective: 1200px;
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-095428.gif" alt="2021-09-19 17.54.08" style="zoom:50%;" />

很明显，加入  *perspective* 视距后，*3D* 旋转效果更佳的真实。

关于 *perspective* 的取值，接受一个长度单位大于 *0*，其单位不能为百分比的值。大致能够分为如下 *3* 种情况：

- *none* 或者不设置：没有 *3D* 空间。
- 取值越小：*3D* 效果越明显，也就是眼睛越靠近真 *3D*。
- 取值无穷大或者为 *0*：与取值为 *none* 的效果一样。



5. ***perspective-origin* 属性**



如果理解了上面的 *perspective* 属性，那么这个 *perspective-origin* 就非常好理解了，该属性用来决定 *perspective* 属性的源点角度。

其语法如下：

```css
perspective-origin: x-axis y-axis;
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-124302.png" alt="image-20210919204301259"  />

举个例子：

```css
.container{
  ...
  perspective: 600px;
  perspective-origin: top;
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-124520.gif" alt="2021-09-19 20.45.00" style="zoom:50%;" />

由于我们设置的 *perspective-origin* 的值为 *top*，所以会呈现一种俯视的效果。如果将其值修改为 *bottom*，则会是仰视的即视感，如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-124646.gif" alt="2021-09-19 20.46.34" style="zoom:50%;" />



6. ***backface-visibility* 属性**



*backface-visibility* 属性决定元素旋转背面是否可见。对于未旋转的元素，该元素的正面面向观看者。当其旋转 *180* 度时会导致元素的背面面向观众。

该属性是设置在旋转的元素上面，语法如下：

```css
backface-visibility: visible|hidden;
```

![image-20210919205231265](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-125232.png)

来看一个具体的例子：

```css
.item{
  ...
  backface-visibility: hidden;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-133845.gif" alt="2021-09-19 21.38.25" style="zoom:50%;" />

在上面的代码中，我们在子元素 *div.item* 上设置了 *backface-visibility: hidden*，当此元素旋转 *180* 度到背面时，我们可以发现此时是无法看到背面的。



### *2D* 变形



介绍完 *CSS3* 中变形的相关属性后，接下来我们就该来看一下具体的变形函数了。

整个 CSS3 为我们提供了相当丰富的变形函数，有 *2D* 的，有 *3D* 的。这里我们先来看 *2D* 的变形函数。



#### *2D* 位移



*2D* 位移对应有 *3* 个变形函数，分别是 *translate、translateX、translateY*

用法也非常简单，*translate* 方法从其当前位置移动元素（根据为 *X* 轴和 *Y* 轴指定的参数）。

```css
div {
  transform: translate(50px, 100px);
}
```

上面的例子把 *div* 元素从其当前位置向右移动 *50* 个像素，并向下移动 *100* 个像素：效果如下：



![Translate](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-134634.png)



#### *2D* 缩放



*2D* 缩放对应的也有 *3* 个变形函数，分别是 *sclae、sclaeX、sclaeY*

该方法能够按照倍数放大或缩小元素的大小（根据给定的宽度和高度参数）。默认值为 *1*，小于这个值就是缩小，大于这个值就是放大。

```css
div {
  transform: scale(2, 3);
}
```

上面的例子把 *div* 元素增大为其原始宽度的两倍和其原始高度的三倍，效果如下：



![Scale](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-135001.png)





#### *2D* 旋转



*2D* 旋转对应的只有 *1* 个变形函数 *rotate*，这个我们在前面也已经用过了。

该变形函数只接受一个值代表旋转的角度值，取值可正可负，正值代表顺时针旋转，负值代表逆时针旋转。

```css
div {
  transform: rotate(20deg);
}
```

上面的例子把 *div* 元素顺时针旋转 *20* 度，效果如下：



![Rotate](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-135300.png)



#### *2D* 倾斜



*2D* 倾斜对应的变形函数也是 *3* 个，分别是 *skew、skewX、skewY*

语法如下：

```css
skew(ax, ay)
```

- *ax*：指定元素水平方向（*X* 轴方向）倾斜角度
- *ay*：指定元素垂直方向（*Y* 轴方向）倾斜角度

```html
<div></div>
```

```css
div{
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 150px;
  transition: all 1s;
}
div:hover{
  transform: skew(20deg);
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-140231.gif" alt="2021-09-19 22.02.15" style="zoom:50%;" />



### *2D* 矩阵



虽然 *CSS3* 为我们提供了上述的变形函数方便我们进行元素的变形操作，但是毕竟函数个数有限，有些效果是没有提供的，例如镜像翻转的效果。此时就轮到 *2D* 矩阵函数 *matrix* 登场了。



*matrix* 有六个参数：

```css
matrix(a,b,c,d,e,f)
```

六个参数对应的矩阵：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-141132.png" alt="image-20210919221131755" style="zoom:50%;" />

这六个参数组成的矩阵与原坐标矩阵相乘计算坐标。计算方式如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-19-141105.png" alt="image-20210919221104828" style="zoom:50%;" />

什么意思呢 ？*x* 和 *y* 是元素中每一个像素的初始原点的坐标，而 *x'* 和 *y'* 是通过矩阵变化后得到的新原点坐标。通过中间 *3 x 3* 变换矩阵，对原先的坐标施加变换，从而得到新的坐标。

*x' = ax+cy+e*，表示变换后的**水平**坐标

*y' = bx+dy+f*，表示变换后的**垂直**位置



在 *CSS3* 中，上面我们所介绍的所有 *2D* 变形函数都能够通过这个 *matrix* 矩阵函数来替代。



**矩阵实现偏移**



我们首先来看通过矩阵实现偏移效果。

偏移效果前后 *x、y* 与 *x'、y'* 所对应的坐标公式为：

```
x' = x + 偏移量
y' = y + 偏移量
```

套用上面的公式那么各个参数的取值就应该是：

```
a = 1; b = 0;
c = 0; d = 1;
e = x 偏移量; f = y 偏移量
x' = ax+cy+e = 1x + 0y + x 偏移量 = x + x 偏移量
y' = bx+dy+f = 0x + 1y + y 偏移量 = y + y 偏移量
```

所以换成 *matrix* 函数就应该是：

```
matrix(1, 0, 0, 1, x 偏移量, y 偏移量)
```

下面来做一个测试：

```html
<div></div>
```

```css
div{
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 150px;
  transition: all 1s;
}
div:hover{
  /* transform: translate(100px, 200px); */
  transform: matrix(1, 0, 0, 1, 100, 200);
}
```

在上面的示例中，使用 *translate* 和 *matrix* 两个变形函数的效果一致。



**矩阵实现缩放**



缩放之后  *x、y* 与 *x'、y'* 所对应的坐标公式为：

```
x' = x * x 缩放倍数
y’ = y * y 缩放倍数
```

套用上面的公式那就是：

```
a = x缩放倍数; b = 0;
c = 0; d = y 缩放倍数;
e = 0; f = 0;
x' = ax+cy+e = x缩放倍数 * x + 0y + 0 = x缩放倍数 * x
y' = bx+dy+f = 0x + y 缩放倍数 * y + 0 = y 缩放倍数 * y
```

所以换成 *matrix* 函数就应该是：

```css
matrix(x 缩放倍数, 0, 0, y 缩放倍数, 0, 0);
```

例如：

```html
<div></div>
```

```css
div{
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 150px;
  transition: all 1s;
}
div:hover{
  /* transform: scale(2, 2); */
  transform: matrix(2, 0, 0, 2, 0, 0);
}
```

上面的代码我们分别使用 *scale* 和矩阵实现了相同的缩放效果。



**矩阵实现旋转**



旋转需要实现

```
水平倾斜角度 =  - 垂直倾斜角度
```

旋转我们用到的变形函数是 *rotate(θ)*，其中 *θ* 为旋转的角度。套用上面的公式：

```
x' = xcosθ - ysinθ + 0 = xcosθ - ysinθ;
y' = xsinθ + ycosθ + 0 = xsinθ + ycosθ
```

转换为 *matrix* 的代码为：

```css
matrix(cos(θ), sin(θ), -sin(θ), cos(θ), 0, 0)
```

例如：

```html
<div></div>
```

```css
div{
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 150px;
  transition: all 1s;
}
div:hover{
  /* transform: rotate(45deg); */
  transform: matrix(0.7, 0.7, -0.7, 0.7, 0, 0);
}
```

上面的代码使用了 *rotate* 和 *matrix* 来实现旋转 *45* 度的效果。其中 *sin45* 和 *cos45* 的值都为 *0.7*。



**矩阵实现倾斜**



*skew(θx, θy)* 将一个元素按指定的角度在 *X* 轴和 *Y* 轴上倾斜。

倾斜对应的公式为：

```
x' = x + ytan(θx) + 0 = x + ytan(θx)
y' = xtan(θy) + y + 0 = xtan(θy) + y
```

转换为 *matrix* 的代码为：

```css
matrix(1,tan(θy),tan(θx),1,0,0)
```

例如：

```html
<div></div>
```

```css
div {
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 150px;
  transition: all 1s;
}

div:hover {
  /* transform: skew(20deg); */
  transform: matrix(1, 0, 0.4, 1, 0, 0);
}
```

上面的示例中分别使用 *skew* 和矩阵 *matrix* 实现了一致的倾斜效果。



**矩阵实现镜像变形**



前面介绍的效果，*CSS3* 中都提供了对应的变形函数，但是矩阵真正发挥威力是在没有对应的变形函数时，例如这里要讲的镜像变形。

我们先来看一下各种镜像变化 *x、y* 与 *x'、y'* 所对应的关系：

水平镜像，就是 *y* 坐标不变，*x* 坐标变负

```
x' = -x;
y' = y;
```

所以：

```
a = -1; b = 0; 
c = 0; d = 1; 
e = 0; f = 0;
```

具体示例如下：

```html
<div></div>
```

```css
div {
  width: 300px;
  height: 200px;
  margin: 150px;
  transition: all 1s;
  background: url('./ok.png') no-repeat;
  background-position: center;
  background-size: contain;
}

div:hover {
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-011654.gif" alt="2021-09-20 09.16.38" style="zoom:50%;" />



垂直镜像，就是 *x* 坐标不变，*y* 坐标变负

```
x' = x;
y' = -y;
```

所以：

```
a = 1; b = 0; 
c = 0; d = -1; 
e = 0; f = 0;
```

例如：

```css
...
div:hover {
  transform: matrix(1, 0, 0, -1, 0, 0);
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-011934.gif" alt="2021-09-20 09.19.11" style="zoom:50%;" />



水平镜像 + 倒立就是 y 坐标变负，x 坐标变负

```
x' = -x;
y' = -y;
```

所以：

```
a = -1; b = 0; 
c = 0; d = -1; 
e = 0; f = 0;
```

例如：

```css
...
div:hover {
  transform: matrix(-1, 0, 0, -1, 0, 0);
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-013005.gif" alt="2021-09-20 09.29.45" style="zoom:50%;" />

*90* 度旋转 + 镜像就是：

```
x' = y;
y' = x;
```

所以：

```
a = 0; b = 1; 
c = 1; d = 0; 
e = 0; f = 0;
```

例如：

```css
...
div:hover {
  transform: matrix(0, 1, 1, 0, 0, 0);
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-013140.gif" alt="2021-09-20 09.31.24" style="zoom:50%;" />

*-90* 度旋转 + 镜像就是：

```
x' = -y;
y' = -x;
```

所以：

```
a = 0; b = -1; 
c = -1; d = -0; 
e = 0; f = 0;
```

例如：

```css
...
div:hover {
  transform: matrix(0, -1, -1, 0, 0, 0);
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-013304.gif" alt="2021-09-20 09.32.47" style="zoom:50%;" />



通过上面一系列的示例，我们可以发现，使用矩阵 *matrix* 函数确实更佳灵活，能够写出各种变形效果。



### *3D* 变形



使用二维变形能够改变元素在水平和垂直轴线，然而还有一个轴沿着它，可以改变元素。使用三维变形，可以改变元素在 *Z* 轴位置。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-024408.png" alt="image-20210920104407743" style="zoom: 50%;" />

三维变换使用基于二维变换的相同属性，如果熟悉二维变换就会发现，*3D* 变形的功能和 *2D* 变换的功能类似。CSS3 中的 3D 变换只要包含以下几类：



- ***3D* 位移**：包括 *translateZ* 和 *translate3d* 两个变形函数。
- ***3D* 旋转**：包括 *rotateX、rotateY、rotateZ* 和 *rotate3d* 这四个变形函数。
- ***3D* 缩放**：包括 *scaleZ* 和 *sclae3d* 两个变形函数。
- ***3D* 矩阵**：和 *2D* 变形一样，也有一个 *3D* 矩阵功能函数 *matrix3d*



#### *3D* 位移

我们直接来看合成变形函数 *translate3d*，其语法如下：

```css
translate3d(tx, ty, tz)
```

- *tx*：在 *X* 轴的位移距离。
- *ty*：在 *Y* 轴的位移距离。
- *tz*：在 *Z* 轴的位移距离。值越大，元素离观察者越近，值越小，元素离观察者越远

来看一个具体的示例：

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 400px;
  height: 400px;
  border: 1px solid;
  margin: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}
.item {
  width: 300px;
  height: 200px;
  transition: all 1s;
  background: url('./ok.png') no-repeat;
  background-position: center;
  background-size: contain;
}

.item:hover {
  transform: translate3d(100px, 100px, -500px)
}
```

在上面的代码中，我们设置 *div.item* 被 *hover* 的时候进行 *3D* 位移，也就是 *X、Y、Z* 轴同时进行移动。注意这里要设置父元素的透视效果，也就是设置 *perspective* 值，否则看不出 *Z* 轴的移动效果。效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-20-024039.gif" alt="2021-09-20 10.40.24" style="zoom:50%;" />



#### *3D* 旋转



在三维变形中，可以让元素在任何轴旋转，对应的变形函数有 *rotateX、rotateY、rotateZ* 以及 *rotate3d*。



其中 *rotate3d* 就是前面 *3* 个变形函数的复合函数。不过出了 *x、y、z* 这三条轴的参数以外，还接受第四个参数 *a*，表示旋转角度。

```css
rotate3d(x, y, z, a)
```

- *x*：可以是 *0* 到 *1* 之间的数值，表示旋转轴 *X* 坐标方向的矢量。
- *y*：可以是 *0* 到 *1* 之间的数值，表示旋转轴 *Y* 坐标方向的矢量。
- *z*：可以是 *0* 到 *1* 之间的数值，表示旋转轴 *Z* 坐标方向的矢量。
- *a*：表示旋转角度。正的角度值表示顺时针旋转，负值表示逆时针旋转。

下面我们以 *rotateX* 变形函数为例：

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container{
  width: 400px;
  height: 400px;
  border: 1px solid;
  margin: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}
.item {
  width: 150px;
  height: 150px;
  background-color: red;
  transition: all 1s;
}

.item:hover {
  transform: rotateX(45deg)
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-21-132328.gif" alt="2021-09-21 21.23.14" style="zoom:50%;" />



#### *3D* 缩放



*3D* 缩放主要有 *sclaeZ* 和 *scale3d*，其中 *scale3d* 就是 *scaleX*、*scaleY* 以及 *scaleZ* 的复合变形函数。其语法如下：

```css
scale(sx, sy, sz)
```

- *sx*：*X* 轴上的缩放比例
- *sy*：*Y* 轴上的缩放比例
- *sz*：*Z* 轴上的缩放比例

但是 *scaleX* 和 *scaleY* 变形效果很明显，但是 *scaleZ*  却基本看不出有什么效果。原因很简单，*scaleZ* 是 *Z* 轴上面的缩放，也就是厚度上面的变化，所以如果不是立方体结构，基本上是看不出来 *Z* 轴上面的缩放效果的。



一般来讲，我们不会将 *scaleZ* 和 *scale3d* 单独使用，因为 *scaleZ* 和 *scale3d* 这两个变形函数在单独使用时没有任何效果，需要配合其他的变形函数一起使用时才会有效果。

这里我们以前面那个立方体为例，如下：

```html
<div class="box">
  <div class="up">上</div>
  <div class="down">下</div>
  <div class="left">左</div>
  <div class="right">右</div>
  <div class="forword">前</div>
  <div class="back">后</div>
</div>
```

```css
.box {
  width: 250px;
  height: 250px;
  border: 1px dashed red;
  margin: 100px auto;
  position: relative;
  border-radius: 50%;
  transform-style: preserve-3d;
  transition: all 1s;
  transform: rotateX(45deg) rotateY(45deg);
}

.box:hover{
  transform: rotateX(45deg) rotateY(45deg) scaleZ(.5);
}

.box>div {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  line-height: 250px;
  font-size: 60px;
  color: #daa520;
}

.left {
  background-color: rgba(255, 0, 0, 0.3);
  transform-origin: left;
  transform: rotateY(90deg) translateX(-125px);
}

.right {
  background: rgba(0, 0, 255, 0.3);
  transform-origin: right;
  /* 变换*/
  transform: rotateY(90deg) translateX(125px);
}

.forward {
  background: rgba(255, 255, 0, 0.3);
  transform: translateZ(125px);
}

.back {
  background: rgba(0, 255, 255, 0.3);
  transform: translateZ(-125px);
}

.up {
  background: rgba(255, 0, 255, 0.3);
  transform: rotateX(90deg) translateZ(125px);
}

.down {
  background: rgba(99, 66, 33, 0.3);
  transform: rotateX(-90deg) translateZ(125px);
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-21-143413.gif" alt="2021-09-21 22.33.57" style="zoom:50%;" />

### *3D* 矩阵



*CSS3* 中的 *3D* 矩阵比 *2D* 矩阵复杂，从二维到三维，在矩阵里 3\*3 变成 4\*4，即 *9* 到 *16*。

对于 *3D* 矩阵而言，本质上很多东西与 *2D* 是一致的，只是复杂程度不一样而已。

对于 *3D* 缩放效果，其矩阵如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-21-145039.png" alt="image-20210921225039133" style="zoom:50%;" />

```css
matrix3d(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1)
```

倾斜是二维变形，不能在三维空间变形。元素可能会在 *X* 轴和 *Y* 轴倾斜，然后转化为三维，但它们不能在 *Z* 轴倾斜。



这里举几个 *3D* 矩阵的例子：

*translate3d(tx,ty,tz)* 等价于 *matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1)*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-21-145544.png" alt="image-20210921225544059" style="zoom:50%;" />

*scale3d(sx,sy,sz)* 等价于 *matrix3d(sx,0,0,0,0,sy,0,0,0,0,sz,0,0,0,0,1)*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-21-145618.png" alt="image-20210921225617731" style="zoom:50%;" />

*rotate3d(x,y,z,a)* 真是得搬出高中数学书好好复习一下了，第四个参数 *alpha* 用于 *sc* 和 *sq* 中

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-21-145731.png" alt="image-20210921225731310" style="zoom:50%;" />

等价于...你自己从上到下，从左到右依次将参数搬入 *matrix3d* 中吧。

当然除非是库函数需要，否则我严重怀疑是否会有人放着 *rotate3d* 不用，偏要去挑战用 *matrix3d* 模拟 *rotate3d*。



## 真题解答



- 请简述一下 *CSS3* 中新增的变形如何使用？

> 参考答案：
>
> 在 *CSS3* 中的变形分为 *2D* 变形和 *3D* 变形。
>
> 整体可以划分出 *3* 大类：
>
> - 具有 *X/Y* 的函数：*translateX、translateY、sclaeX、scaleY、skewX、skewY*
> - *2D* 变形函数：*translate、sclae、rotate、skew、matrix*
> - *3D* 变形函数：*rotateX、rotateY、rotate3d、translateZ、translate3d、scaleZ、scale3d、matrix3d*
>
> 另外，还有一些重要的变形属性，例如：
>
> - ***transform* 属性**
> - ***transform-origin* 属性**
> - ***transform-style* 属性**
> - ***perspective* 属性**
> - ***perspective-origin* 属性**
> - ***backface-visibility* 属性**


# 渐进式渲染



## 经典真题



- 什么是渐进式渲染 ？



## 渐进式渲染



渐进式渲染，英文全称 *progressive rendering*，也被称之为惰性渲染，指的是为了提高用户感知的加载速度，以尽快的速度来呈现页面的技术。



在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。



有一点需要弄明白的是，这不是指的某一项技术，而是各种技术的一种集合。



例如：



**骨架屏**



在加载网络数据时，为了提升用户体验，通常会使用一个转圈圈的 *loading* 动画，或者使用 *Skeleton Screen* 占位。相比与 *loading* 动画，*Skeleton Screen* 的效果要更生动



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-081721.png" alt="image-20210913161720022" style="zoom:50%;" />



**图片懒加载**



所谓图片懒加载，顾名思义，就是先加载部分图片，剩余的图片等到需要的时候再加载。这在电商网站中尤其常见。

比如一个电商网站，首屏通常会有很多的数据，清晰度较高的 *banner* 或轮播。页面非首屏部分会员很多商品夹杂着大量的图片。这是时候选择懒加载以保证首屏的流畅十分重要。



**图片占位符**



在网页加载的时候，某些图片还在请求中或者还未请求，这个时候就先找一个临时代替的图像，放在最终图像的位置上，但是这只是临时替代的图形，当图片数据准备好以后，会重新渲染真正的图形数据。



**拆分网页资源**



大部分用户不会用到一个网站的所有页面，但我们通常的做法却是把所有的功能都打包进一个很大的文件里面。一个 *bundle.js* 文件的大小可能会有几  *M*，一个打包后的  *style.css*  会包含网站的一切样式，从  *CSS*  结构定义到网站在各个版本的样式：移动端、平板、桌面、打印版等等。



但用户并不是一开始就需要所有的资源，所有我们可以对资源进行拆分，首先加载那些关键的资源，其他的资源等到需要的时候再去加载它。



更多的关于渐进式渲染的内容，可以参阅 *MDN*：*https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Loading*



## 真题解答



- 什么是渐进式渲染 ？

> 参考答案：
>
> 渐进式渲染，英文全称 *progressive rendering*，也被称之为惰性渲染，指的是为了提高用户感知的加载速度，以尽快的速度来呈现页面的技术。但是这并不是某一项技术的特指，而是一系列技术的集合。
>
> 例如：
>
> - 骨架屏
> - 图片懒加载
> - 图片占位符
> - 资源拆分


# *CSS* 渲染性能优化



## 经典真题



- 总结一下如何提升或者优化 *CSS* 的渲染性能



## *CSS* 渲染性能优化



很多人往往不重视性能优化这一块，觉得功能做出来就行了。

诚然，在软件开发过程中，功能确实是优先要考虑的，但是当功能完善后，接下来就需要考虑性能问题了。

我们可以从两个方面来看性能优化的意义：

1. 用户角度
   网站优化能够让页面加载得更快，响应更加及时，极大提升用户体验。
2. 服务商角度
   优化会减少页面资源请求数，减小请求资源所占带宽大小，从而节省可观的带宽资源。



网站优化的目标就是减少网站加载时间，提高响应速度。

那么网站加载速度和用户体验又有着怎样的关系呢？我们来看下面这张图：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-041118.png" alt="image-20210916121117684" style="zoom:50%;" />



*Google* 和亚马逊的研究表明，*Google* 页面加载的时间从 *0.4* 秒提升到 *0.9* 秒导致丢失了 *20%* 流量和广告收入，对于亚马逊，页面加载时间每增加 *100ms* 就意味着 *1%* 的销售额损失。



可见，页面的加载速度对于用户有着至关重要的影响。

一个好的交互效果可能是这样的：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-041314.png" alt="image-20210916121313325" style="zoom:50%;" />



当然，性能优化是来自方方面面的。

这里我们主要来看 *CSS* 方面能够进行哪些性能优化。



1.使用 `id selector` 非常的高效。在使用 `id selector` 的时候需要注意一点：因为 `id` 是唯一的，所以不需要既指定 `id` 又指定 `tagName`：

```css
/* Bad  */
p#id1 {color:red;}  

/* Good  */
#id1 {color:red;}
```



2.避免深层次的 `node` ，譬如：

```css
/* Bad  */
div > div > div > p {color:red;} 
/* Good  */
p-class{color:red;}
```



3.不要使用 `attribute selector`，如：p[att1=”val1”]。这样的匹配非常慢。更不要这样写：`p[id="id1"]`。这样将 `id selector` 退化成 `attribute selector`。

```css
/* Bad  */
p[id="jartto"]{color:red;}  
p[class="blog"]{color:red;}  
/* Good  */
#jartto{color:red;}  
.blog{color:red;}
```



4.通常将浏览器前缀置于前面，将标准样式属性置于最后，类似：

```css
.foo {
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```



这里推荐参阅 *CSS* 规范-优化方案：*http://nec.netease.com/standard/css-optimize.html*



5.遵守 *CSSLint* 规则

```css
font-faces        　　　　  　　　不能使用超过5个web字体
import        　　　　　　　 　　  禁止使用@import
regex-selectors        　　　　  禁止使用属性选择器中的正则表达式选择器
universal-selector    　　 　　  禁止使用通用选择器*
unqualified-attributes    　　　禁止使用不规范的属性选择器
zero-units            　　 　　　0后面不要加单位
overqualified-elements    　　　使用相邻选择器时，不要使用不必要的选择器
shorthand        　　　　　　　　 简写样式属性
duplicate-background-images    相同的url在样式表中不超过一次
```



更多的 *CSSLint* 规则可以参阅：*https://github.com/CSSLint/csslint*



6.不要使用 `@import`

使用 `@import` 引入 `CSS` 会影响浏览器的并行下载。使用 `@import` 引用的 `CSS` 文件只有在引用它的那个 `CSS` 文件被下载、解析之后，浏览器才会知道还有另外一个 `CSS` 需要下载，这时才去下载，然后下载后开始解析、构建 `Render Tree` 等一系列操作。

多个 `@import` 会导致下载顺序紊乱。在 `IE` 中，`@import` 会引发资源文件的下载顺序被打乱，即排列在 `@import` 后面的 `JS` 文件先于 `@import` 下载，并且打乱甚至破坏 `@import` 自身的并行下载。



7.避免过分重排（*Reflow*）
所谓重排就是浏览器重新计算布局位置与大小。常见的重排元素：

```css
width 
height 
padding 
margin 
display 
border-width 
border 
top 
position 
font-size 
float 
text-align 
overflow-y 
font-weight 
overflow 
left 
font-family 
line-height 
vertical-align 
right 
clear 
white-space 
bottom 
min-height
```



8.依赖继承。如果某些属性可以继承，那么自然没有必要在写一遍。



## 真题解答



- 总结一下如何提升或者优化 *CSS* 的渲染性能

> 参考答案：
>
> *CSS* 渲染性能的优化来自方方面面，这里列举一些常见的方式：
>
> 1. 使用 *id* 选择器非常高效，因为 *id* 是唯一的
> 2. 避免深层次的选择器嵌套
> 3. 尽量避免使用属性选择器，因为匹配速度慢
> 4. 使用渐进增强的方案
> 5. 遵守 *CSSLint* 规则
> 6. 不要使用 `@import`
> 7. 避免过分重排（*Reflow*）
> 8. 依赖继承
> 9. 值缩写
> 10. 避免耗性能的属性
> 11. 背景图优化合并
> 12. 文件压缩


# 层叠上下文



## 经典真题



- 请简述什么是层叠上下文、什么是层叠等级、什么是层叠顺序



## 层叠上下文

在介绍层叠上下文之前，我们先来介绍一下 *HTML* 文档中的三维概念。

平时我们从设备终端看到的 *HTML* 文档都是一个平面的，事实上 *HTML* 文档中的元素却是存在于三个维度中。除了大家熟悉的平面画布中的 *x* 轴和 *y* 轴，还有控制第三维度的 *z* 轴。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-025842.png" alt="image-20211229105842101" style="zoom:50%;" />

其中 *x* 轴通常用来表示水平位置，*y* 轴来表示垂直位置，*z* 轴表示屏幕内外方向上的位置。

对于 *x* 和 *y* 轴我们很易于理解，一个向右，一个向下。但对于 *z* 轴，理解起来就较为费力。在 *CSS* 中要确定沿着 *z* 轴排列元素，表示的是用户与屏幕的这条看不见的垂直线：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-030053.png" alt="image-20211229110052865" style="zoom:50%;" />

而这里我们要讨论的层叠上下文（ *stacking context* ），就是 *HTML* 中的一个三维的概念。如果一个元素含有层叠上下文，我们可以理解为这个元素在 *z* 轴上就“高人一等”，最终表现就是它离屏幕观察者更近。



听上去好像很不错的样子，我想让一个元素更加靠前，我就给他创建一个层叠上下文。

那么具体的创建方法有哪些呢？

一般来讲有 *3* 种方法：

- *HTML* 中的根元素 *HTML* 本身就具有层叠上下文，称为“根层叠上下文”。
- 普通元素设置 *position* 属性为非 *static* 值并设置 *z-index* 属性为具体数值，会产生层叠上下文
- *CSS3* 中的新属性也可以产生层叠上下文



赶紧试验一下：

```html
<div class="one"></div>
<div class="two"></div>
```

```css
div{
  width: 200px;
  height: 200px;
}
.one{
  background-color: red;
}
.two{
  background-color: blue;
  margin-top: -100px;
}
```

在上面的代码中，我们创建了两个 *div*，然后使其产生重叠，默认情况下后来居上，蓝色的会盖住红色的。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-030918.png" alt="image-20211229110917880" style="zoom:50%;" />

下面我们给红色设置一个定位，如下：

```css
...
.one{
  background-color: red;
  position: relative;
  z-index: 1;
}
...
```

由于设置了定位和 *z-index* 属性，所以红色的 *div* 就会创建一个层叠上下文，在 *z* 轴上就“高人一等”。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-031127.png" alt="image-20211229111127835" style="zoom:50%;" />

*OK*，感觉很简单的样子，打完收工，撤退！

但是且慢少年，这才刚刚开始。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-032035.png" alt="image-20211229112034560" style="zoom:50%;" />



## 层叠等级与层叠顺序

除了层叠上下文，我们还需要了解两个概念：

- 层叠等级（ *stacking level* ）
- 层叠顺序（ *stacking order* ）

这两个东西实际上都是用来表述：

> 在同一个层叠上下文中，元素在 *z* 轴上的显示顺序。

只不过前一个是概念，后一个是具体规则。



如果两个元素在同一个层叠上下文中，那么层叠等级越大的元素，就越靠前。

那么问题来了，我怎么知道该元素的层叠等级是高还是低？

所以层叠等级的高低规则是由层叠顺序来体现的。

在 *CSS2.1* 的年代（注意这里的前提），层叠顺序规则遵循下面这张图：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-031328.png" alt="image-20210917111327410" style="zoom:50%;" />

那么如果两个元素不在同一个层叠下上文中呢？

那么此时就先比较他们所处的层叠上下文的层叠等级，也就是所谓的“从父”现象。

>假设一个官员 *A* 是个省级领导，他下属有一个秘书 *a-1*，家里有一个保姆 *a-2*。另一个官员 *B* 是一个县级领导，他下属有一个秘书 *b-1*，家里有一个保姆 *b-2*。
>
>*a-1* 和 *b-1* 虽然都是秘书，但是你想一个省级领导的秘书和一个县级领导的秘书之间有可比性么？甚至保姆 *a-2* 都要比秘书 *b-1* 的等级高得多。谁大谁小，谁高谁低一目了然，所以根本没有比较的意义。
>
>因此只有在 *A* 下属的 *a-1、a-2* 以及 *B* 下属的 *b-1、b-2* 中相互比较大小高低才有意义。



## 实战案例

在开始实战案例之前，我们先对上面的知识进行一个总结。

1. 首先先看要比较的两个元素是否处于同一个层叠上下文中：

   - 如果是，谁的层叠等级大，谁在上面（判断层叠等级大小参阅上面的“层叠顺序”图）

   - 如果两个元素不在同一层叠上下文中，请先比较他们所处的层叠上下文的层叠等级。

2. 当两个元素层叠等级相同、层叠顺序相同时，在 *DOM* 结构中后面的元素层叠等级在前面元素之上。



接下来我们来通过几个实际的例子加深对上面概念的理解。

示例 1：

```html
<div class="one">
  <div class="item" style="background-color: black; z-index: 99;"></div>
</div>
<div class="two">
  <div class="item" style="background-color: pink;top: 50px; z-index: 1;"></div>
</div>
```

```css
div{
  width: 200px;
  height: 200px;
}
.one{
  background-color: red;
  position: relative;
  z-index: 1;
}
.two{
  background-color: blue;
  position: relative;
  z-index: 2;
}
.item{
  width: 100px;
  height: 100px;
  position: absolute;
  left: 200px;
  top: 200px;
}
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-052844.png" alt="image-20211229132843959" style="zoom:50%;" />

在上面的代码中，*one* 和 *two* 分别有自己的层叠上下文，但是 *two* 的层叠等级要比 *one* 高，之后我们可以看到，无论 *one* 中的子元素的 *z-index* 设置有多高，它始终被 *two* 的子元素给覆盖，因为如果两个元素不在同一层叠上下文中，比较的是所在层叠上下文的等级。



示例 2：

```html
<div class="box1">
  <div class="child1"></div>
</div>

<div class="box2">
  <div class="child2"></div>
</div>
```

```css
.box1,
.box2 {
  position: relative;
}

.child1 {
  width: 200px;
  height: 100px;
  background: #168bf5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.child2 {
  width: 100px;
  height: 200px;
  background: #32c292;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-032008.png" alt="image-20210917112008034" style="zoom:67%;" />

在上面的示例中，*.box1/.box2* 虽然设置了 *position: relative*，但是在没有设置 *z-index*。所以 *.box1/.box2* 仍然是普通元素，所以 *child1/.child2* 属于 *html* 元素的“根层叠上下文”中，也就是处于同一个层叠上下文中，根据层叠顺序谁的 *z-index* 值大，谁在上面。



示例 3:

将上面案例中的 *CSS* 代码稍作修改，如下：

```css
.box1,
.box2 {
  position: relative;
  z-index: 0;
}
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-032806.png" alt="image-20210917112806638" style="zoom:67%;" />

此时，我们发现，仅仅修改了 *.box1/.box2* 的 *z-index* 属性值改为数值 *0*，最终结果完全相反。

这时 *.child2* 覆盖在了 *.child1* 上面。原因是什么呢？

很简单：因为设置 *z-index: 0* 后，*.box1/.box2* 产生了各自的层叠上下文，这时候要比较 *.child1/.child2* 的层叠关系属于不同的层叠上下文进行比较，此时由由各自所在的 *.box1/.box2* 的层叠等级来决定。

但是 *.box1/.box2* 的 *z-index* 值都为 *0*，都是块级元素（所以它们的层叠等级，层叠顺序是相同的），这种情况下，在 *DOM* 结构中后面的覆盖前面的，所以 *.child2* 就在上面。



示例 4:

```html
<div class="box">
  <img src="./ok.png" alt="" class="item">
</div>
```

```css
.box{
  width: 200px;
  height: 200px;
  background: blue;
  position: absolute;
}
.item{
  position: absolute;
  width: 200px;
  left: 50px;
  top: 50px;
  z-index: -1;
}
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-054235.png" alt="image-20211229134234900" style="zoom:50%;" />

在上面的代码中，*.box* 虽然设置了定位，但是并没有设置 *z-index* 属性，所以并不会产生层叠上下文，仅仅是一个普通元素，此时 *.item* 图片属于 *html* 元素的“根层叠上下文”中，根据层叠顺序谁的 *z-index* 值大，谁在上面。



示例 5：

将上面的代码稍作修改，为 *.box* 添加一个 *z-index* 属性，并且给了一个很大的值

```css
.box{
  width: 200px;
  height: 200px;
  background: blue;
  position: relative;
  z-index: 99;
}
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-29-061343.png" alt="image-20211229141342897" style="zoom:50%;" />

此时效果就完全不一样了，明明 *.box* 给了一个很大的值，但是图片却在上面，这是为什么呢？

因为 当 *.box* 设置了 *z-index* 后，就会产生一个层叠上下文，也就是说对 *.item* 图片而言，找到的层叠上下文是 *.box* 而不是 *html* 根元素。而根据层叠顺序，*background* 是处于最下层的，所以图片显示在了最上面。



示例 6：

```html
<div class="parent">
  parent
  <div class="child1">child1</div>
  <div class="child2">
    child2
    <div class="child2-1">child2-1</div>
    <div class="child2-2">child2-2</div>
  </div>
</div>
```

```css
.parent {
  width: 100px;
  height: 200px;
  background: #168bf5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.child1 {
  width: 100px;
  height: 200px;
  background: #32d19c;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.child2 {
  width: 100px;
  height: 200px;
  background: #e4c950;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: -1;
}

.child2-1 {
  width: 100px;
  height: 200px;
  background: #e45050;
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 9999;
}

.child2-2 {
  width: 100px;
  height: 200px;
  background: #db68a7;
  position: absolute;
  top: 80px;
  left: 40px;
  z-index: -9999;
}
```

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-035354.png" alt="image-20210917115354011" style="zoom:67%;" />

在上面的代码中，对于 *.child1* 和 *.child2* 来讲，他俩是处于同一个层叠上下文中，所以 *.child1* 在 *.child2* 的上面（因为 *.child1* 的 *z-index* 值更大），而对于 *.child2-1* 和 *.child2-2* 来讲，他俩也是处于同一个层叠上下文 *.child2* 里面，所以无论 *.child2* 的 *z-index* 值有多大，都一定在  *.child2-1* 和 *.child2-2* 下面，而  *.child2-1* 和 *.child2-2* 则根据 *z-index* 值的大小来决定谁覆盖谁。



## *CSS3* 中属性对层叠上下文的影响

*CSS3* 中出现了很多新属性，其中一些属性对层叠上下文也产生了很大的影响。如下：

- 父元素的 *display* 属性值为 *flex|inline-flex*，子元素 *z-index* 属性值不为 *auto* 的时候，子元素为层叠上下文元素
- 元素的 *opacity* 属性值不是 *1*
- 元素的 *transform* 属性值不是 *none*
- 元素 *mix-blend-mode* 属性值不是 *normal*
- 元素的 *filter* 属性值不是 *none*
- 元素的 *isolation* 属性值是 *isolate*
- *will-change* 指定的属性值为上面任意一个
- 元素的 *-webkit-overflow-scrolling* 属性值设置为 *touch*



*CSS3* 中，元素属性满足以上条件之一，就会产生层叠上下文。我们用第 *1* 条来做一个简单的解释说明。

```html
<div class="box">
  <div class="parent">
    parent
    <div class="child">child</div>
  </div>
</div>
```

```css
.box {
}
.parent {
  width: 200px;
  height: 100px;
  background: #168bf5;
  /* 虽然设置了z-index，但是没有设置position，z-index 无效，.parent还是普通元素，没有产生层叠上下文 */
  z-index: 1;
}

.child {
  width: 100px;
  height: 200px;
  background: #32d19c;
  position: relative;
  z-index: -1;
}
```

效果：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-034514.png" alt="image-20210917114513631" style="zoom:67%;" />



我们发现，*.child* 被 *.parent* 覆盖了。按照之前的规则来分析一下： 

虽然 *.parent* 设置了 *z-index* 属性值，但是没有设置 *position* 属性，*z-index* 无效，所以没有产生层叠上下文，仍然是一个普通的块级元素。 *.child* 的层叠上下文为 html 根元素，*z-index* 小于 *0* 的 *.child* 会被普通的 *block* 块级元素 *.parent* 覆盖。



对于上面的例子，我们只修改 *.box* 的属性，设置 *display: flex*，其余属性和 *DOM* 结构不变。

```css
.box {
  display: flex;
}
```

效果：



<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-034835.png" alt="image-20210917114834856" style="zoom:67%;" />



在上面的示例中，当给 *.box* 设置 *display: flex* 时，*.parent* 也会变成一个弹性项目，成为一个层叠上下文元素。于是对于 *.child* 来讲找到的层叠上下文就是 *.parent* 了，而非 *html* 根元素。

根据层叠顺序规则，层叠上下文元素的 *background/border* 的层叠等级小于 *z-index* 值小于 *0* 的元素的层叠等级，所以 *z-index* 值为 *-1* 的*.child* 在 *.parent* 上面。



## 真题解答



- 请简述什么是层叠上下文、什么是层叠等级、什么是层叠顺序

>**层叠上下文概念**
>
>在 *CSS2.1* 规范中，每个盒模型的位置是三维的，分别是平面画布上的 *X* 轴，*Y* 轴以及表示层叠的 *Z* 轴。
>
>一般情况下，元素在页面上沿 *X* 轴 *Y* 轴平铺，我们察觉不到它们在 *Z* 轴上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。
>
>**层叠上下文触发条件**
>
>- *HTML* 中的根元素 *HTML* 本身就具有层叠上下文，称为“根层叠上下文”。
>- 普通元素设置 *position* 属性为非 *static* 值并设置 *z-index* 属性为具体数值，产生层叠上下文
>- *CSS3* 中的新属性也可以产生层叠上下文
>
>**层叠等级**
>
>如果两个元素在同一个层叠上下文中，那么层叠等级越大的元素，就越靠前。层叠等级是一个概念，层叠等级的大小可以根据层叠顺序来进行判断。
>
>**层叠顺序**
>
>层叠顺序表示元素发生层叠时按照特定的顺序规则在 *Z* 轴上垂直显示。
>
>说简单一点就是当元素处于同一层叠上下文内时如何进行层叠判断。
>
><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-17-031328.png" alt="image-20210917111327410" style="zoom:50%;" />



------

# *CSS3* 遮罩



本文主要包含以下内容：



- *CSS3* 遮罩介绍
- 遮罩各属性介绍



## *CSS3* 遮罩介绍



*CSS mask* 遮罩属性的历史非常久远了，远到比 *CSS3 border-radius* 等属性还要久远，最早是出现在 *Safari* 浏览器上的，差不多可以追溯到 *2009* 年。

不过那个时候，遮罩只能作为实验性的属性，做一些特效使用。毕竟那个年代还是 *IE* 浏览器的时代，属性虽好，但价值有限。

但是如今情况却大有变化，除了 *IE* 浏览器不支持，*Firefox、Chrome、Edge* 以及移动端等都已经全线支持，其实际应用价值已不可同日而语。

尤其 *Firefox* 浏览器，从版本 *53* 开始，已经全面支持了 *CSS3 mask* 属性。并且 *mask* 属性规范已经进入候选推荐规范之列，会说以后进入既定规范标准已经是板上钉钉的事情，大家可以放心学习，将来必有用处。

![image-20211025225724975](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-145725.png)

（图为 *caniuse* 上各浏览器对 *CSS mask* 的支持情况）



## 快速入门示例



下面，我们来看一个 *CSS mask* 的快速入门示例。

首先需要准备两张图片，图片素材如下：



一张 *jpg* 图片：*zelda.jpg*

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151154.png" alt="image-20211025231154694" style="zoom: 50%;" />



一张 *png* 图片：*mask.png*，该 *png* 图片背景为透明（这里划重点）

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151236.png" alt="image-20211025231236440" style="zoom:50%;" />



接下来准备我们的测试目录：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151518.png" alt="image-20211025231518012" style="zoom:50%;" />





*index.html* 代码如下：

```html
<div class="mask"></div>
```

```css
* {
  margin: 0;
  padding: 0;
}

div {
  width: 1200px;
  height: 600px;
  outline: 1px solid;
  margin: 50px auto;
  background: url('./zelda.jpg') no-repeat center/cover;
}

/*  
  虽然 .mask 和 div 都是选择中的相同的元素
  这里为了单独观察 mask 相关设置，
  和 mask 不相关的属性设置放入到了 div 选择器中 
*/
.mask {
  -webkit-mask-image: url('./mask.png');
}
```

在上面的代码中，我们为 *div* 设置了一个铺满整个盒子的背景图，然后为该盒子设置了遮罩效果。由于 *mask.png* 无法占满整个盒子，所以出现了重复的效果，***mask.png* 遮罩图片透明的部分不会显示底部图片的信息，而非透明部分则会显示底层图片信息**。

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151805.png" alt="image-20211025231804573" style="zoom:50%;" />



除了设置透明的 *png* 图片，还可以设置透明的渐变。例如：

```css
.mask {
  -webkit-mask-image: linear-gradient(transparent 10%, white);
}
```

在上面的代码中，我们设置了一个从上到下的线性透明渐变，效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-013708.png" alt="image-20211026093708467" style="zoom:50%;" />



可以看到，无论是设置图片还是渐变，一定要有透明的部分，否则无法起到遮罩的效果，例如：

```css
.mask {
  -webkit-mask-image: linear-gradient(red,blue);
}
```

上面的代码中，我们设置的是一个红到蓝的渐变，没有任何的透明部分，所以遮罩层不会起作用，底图会原封不动的显示出来。



## 遮罩各属性介绍



在上面的快速入门示例中，我们用到的是 *mask-image* 属性，但是除了该属性外，*CSS mask* 还有很多其他的属性，如下：



- *mask-image*
- *mask-mode*
- *mask-repeat*
- *mask-position*
- *mask-clip*
- *mask-origin*
- *mask-size*
- *mask-type*
- *mask-composite*



下面我们来针对每个属性进行介绍。



#### *mask-image*



该属性在上面的快速入门示例中我们已经体验过了，默认值为 *none*，表示没有遮罩图片。

可以设置的值为透明图片，或透明渐变。



#### *mask-repeat*



表示遮罩层是否允许重复，默认值为 *repeat* 允许重复，可选值与 *background-repeat* 相同。

```css
.mask {
  -webkit-mask-image: url('./mask.png');
  -webkit-mask-repeat: no-repeat;
}
```

上面的代码中，我们设置遮罩层的重复行为是 *x、y* 轴都不重复，效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-015113.png" alt="image-20211026095112536" style="zoom:50%;" />

（红框是为了表示整张图片的大小，并非浏览器实际显示情况）



#### *mask-position*



该属性用于设置遮罩层的位置，默认值为*0 0* 在最左上角，可选值与 *background-position* 相同。

```css
.mask {
  -webkit-mask-image: url('./mask.png');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}
```

效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-015730.png" alt="image-20211026095730053" style="zoom:50%;" />

（红框是为了表示整张图片的大小，并非浏览器实际显示情况）



#### *mask-size*



该属性用于设置遮罩层的大小，默认值为 *auto*，可选值与 *background-size* 相同，如下表：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-021622.png" alt="image-20211026101622232" style="zoom:50%;" />

例如：

```css
.mask {
  -webkit-mask-image: url('./mask.png');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}
```

效果如下：

![image-20211026101900926](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-021901.png)

（红框是为了表示整张图片的大小，并非浏览器实际显示情况）



#### *mask-origin*



默认值为 *border-box*，可选值与 *background-origin* 相同，可以设置如下的属性值：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-020115.png" alt="image-20211026100114147" style="zoom:50%;" />

下面为了显示其效果，我们需要稍微对其他样式做一些改变，如下：

```css
div {
  width: 1200px;
  height: 600px;
  border: 100px solid;
  margin: 50px auto;
  background: url('./zelda.jpg') no-repeat center/cover;
}

/*  
虽然 .mask 和 div 都是选择中的相同的元素
这里为了单独观察 mask 相关设置，
和 mask 不相关的属性设置放入到了 div 选择器中 
*/
.mask {
  -webkit-mask-image: url('./mask.png');
  -webkit-mask-repeat: no-repeat;
}
```

在上面的代码中，我们为该 *div* 设置了一个宽度为 *100px* 的 *border*，由于 *mask-origin* 的默认值为 *border-box*，所以我们可以看到如下的效果：

![image-20211026100927087](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-020928.png)

（红框是为了表示整张图片的大小，并非浏览器实际显示情况）

此时如果设置 *mask-origin* 的值为 *centent-box*，遮罩层图像就会相对于内容框来定位。

```css
.mask {
  -webkit-mask-image: url('./mask.png');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-origin: content-box;
}
```

效果如下：

![image-20211026101238881](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-021239.png)

（外层的黑框表示该 *div* 的 *border*，红框表示该 *div* 的内容区域，并非浏览器实际显示情况）



#### *mask-clip*



默认值为 *border-box*，可选值与 *background-clip* 相同，可以设置如下属性值：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-025300.png" alt="image-20211026105259969" style="zoom:50%;" />

我们同样为 *div* 设置一个宽度为 *100px* 的 *border*，由于默认值为 *border-box*，所以我们看到的效果如下：

![image-20211026100927087](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-025412.png)

（红框是为了表示整张图片的大小，并非浏览器实际显示情况）



接下来设置 *mask-clip* 为 *content-box*

```css
.mask {
  -webkit-mask-image: url('./mask.png');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-clip: content-box;
}
```

由于 *mask-origin* 默认值为 *border-box*，所以遮罩层以边框盒来定位，之后我们设置了 *mask-clip* 为 *content-box*，表示以内容框来进行裁剪。效果如下：

![image-20211026105532851](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-025533.png)

（外层的黑框表示该 *div* 的 *border*，红框表示该 *div* 的内容区域，并非浏览器实际显示情况）



#### *mask-mode*



*mask-mode* 属性默认值为 *match-source*，作用是根据资源的类型自动采用合适的遮罩模式。

例如，如果遮罩效果使用的是 *SVG* 中的 \<*mask*> 元素，则此时的 *mask-mode* 属性的值为 *luminance*，表示基于亮度来判断是否要进行遮罩。

如果是其他场景，则计算值是 *alpha*，表示基于透明度判断是否要进行遮罩。

因此 *mask-mode* 可选值为 *alpha、luminance、match-source*。

使用搜索引擎搜索遮罩素材的时候，往往搜索的结果都是白底的 *JPG* 图片，因此使用默认的遮罩模式是没有预期的遮罩效果的。此时就非常适合设置遮罩模式为 *luminance*。



另外，目前仅 *Firefox* 浏览器支持 *mask-mode* 属性，*Chrome* 浏览器并不提供支持，但是可以使用非标准的 *mask-source-type* 属性来进行替代（没有私有前缀）。

下面来看一个简单的示例。首先我们需要扩充我们的遮罩素材，准备了一张 *mask2.jpg* 的遮罩图片，该素材首先是 *jpg* 格式的，其次并没有透明区域，仅有一些白底区域。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-032617.png" alt="image-20211026112617175" style="zoom:50%;" />

接下来设置如下的代码：

```css
.mask {
  -webkit-mask-image: url('./mask2.jpg');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-mode: luminance;
}
```

在上面的代码中，我们设置 *mask-mode* 的值为 *luminance*，表示基于亮度来判断是否进行遮罩。

在 *Firefox* 浏览器中的效果如下：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-032916.png" alt="image-20211026112915034" style="zoom:50%;" />

（红框是为了表示整张图片的大小，并非浏览器实际显示情况）



#### *mask-type*



*mask-type* 属性的功能和 *mask-mode* 属性类似，都是设置不同的遮罩模式，但还是有一个很大的区别，就是 *mask-type* 属性只能作用于 *SVG* 元素上，因为其本质上是由 *SVG* 属性演变而来的，*Chrome* 等浏览器也都支持该属性。而 *mask-mode* 是一个针对所有元素类型的 *CSS* 属性，*Chrome* 等浏览器并不支持该属性，目前仅只有 *Firefox* 浏览器对其提供支持。



由于 *mask-type* 属性只能作用于 *SVG* 元素上，因此默认值表现为 *SVG* 元素默认遮罩模式，也就是默认值是 *luminance* 亮度遮罩模式。如果需要支持透明度遮罩模式，可以这么设置：

```css
mask-type: alpha;
```



#### *mask-composite*



*mask-composite* 属性表示同时使用多张图片进行遮罩时的合成方式。默认值为 *add*，可选值为 *add、subtract、intersect、exclude*。

- *mask-composite: add*：表示遮罩累加，这是默认值
- *mask-composite: subtract*：表示遮罩相减，也就是遮罩图片重合的区域不显示，这就意味着，遮罩层图片越多，遮罩区域越小。
- *mask-composite: intersect*：表示遮罩相交，也就是遮罩图片重合的区域才显示遮罩。
- *mask-composite: exclude*：表示遮罩排除，也就是遮罩图片重合的区域会被当作透明。
