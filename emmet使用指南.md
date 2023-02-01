div#test
div.test
div>ul>li>p
div+ul+p
div>ul>li^div
div>(ul>li>a)+div>p
a[href=’###’ name=‘xiaoA’] （中括号内填写属性键值对的形式，并且空格隔开）
ul>li.test$*3 （$代表一位数，后面更上*数字就代表从1递增到填写的数字）
一个$ 代表一位数，
就是两位数了,以此类推就可以形成$(1),
(01),$$$(001)
如果想自定义从几开始递增的话就利用：$@+数字数字
例如：ul>li.test$@33


ul>li.test$*3{测试$} （{里面填写内容，可以和$一起组合使用哦}）
ul>li.test${测试$}*3效果一样

- 隐式标签
ul>.test$*3
隐私标签有如下几个：

li：用于 ul 和 ol 中
tr：用于 table、tbody、thead 和 tfoot 中
td：用于 tr 中
option：用于 select 和 optgroup 中