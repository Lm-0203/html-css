# 响应式

+ 网页的宽度自动调整
+ 尽量少用绝对宽度，可以用百分比
+ 字体要使用 rem / em 作为单位
  + rem 就是根结点字体大小是一个相对单位
  + 所以要根据用户屏幕的尺寸动态的设置 html 根结点的字体大小


# [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

## 媒体类型

+ all 所有设备
+ print 打印机设备
  ```css
  @media print {
    div {
      font-size: 80px;
    }
  }
  ```
  ![result](images/media-print.png)
+ screen 彩色的电脑屏幕
  如果不指定的话，浏览器端默认是screen
  ```css
  @media screen {
    div {
      background-color: lightblue;
    }
  }
  ```
+ speech 听觉设备(针对有视力障碍人士，可以把页面的内容以语音方式呈现的设备)

> tty、tv、projection、handheld、braille、embossed、aural 等几种类型在媒体查询4中已经废弃

## 媒体特性
媒体特性要放到括号里面
+ width
  + min-width
    ```css
    /* 屏幕尺寸大于500的时候满足 */
    @media (min-width: 500px) {
      div {
        background-color: lightblue;
      }
    }
    ```
  + max-width
    ```css
    /* 屏幕尺寸小于400的时候满足 */
    @media (max-width: 500px) {
      div {
        background-color: lightblue;
      }
    }
    ```

+ height
  + min-height
  + max-height

+ orientation 方向
  + landscape 横屏，宽度大于高度
    ```css
    /* 横屏的时候满足 */
    @media (orientation: landscape) {
      div {
        background-color: lightblue;
      }
    }
    ```
    ![result](images/media+landscape.png)
  + portrai 竖屏，高度大于宽度 竖屏和上面同一个原理

+ aspect-ratio 宽度比
  ```css
  /* 宽高比为 4:3 的时候满足 */
  @media (aspect-ratio: 4/3) {
    div {
      border: 10px solid lightseagreen;
    }
  }
  ```
  ![result](images/media+aspect-ratio.png)
+ -webkit-device-pixel-ratio 像素比，webkit 内核的私有属性
  ```css
  /* 当像素比为2的时候满足 */
  @media (-webkit-device-pixel-ratio: 2) {
    div {
      border: 10px solid lightseagreen;
    }
  }
  ```

## 逻辑运算符
用来做条件判断
+ and 合并多个媒体查询, 多个条件同时满足
  ```css
  /* 屏幕的尺寸大于700px 并且是横屏 */
  @media all and (min-width: 700px) and (orientation: landscape) {
    div {
      background-color: lightcyan;
    }
  }
  ```
+ , 英文逗号，匹配某个媒体查询，或者
  ```css
  /* 屏幕小于500 或者 是横屏 */
  @media (max-width: 500px), (orientation: landscape) {
    div {
      background-color: lightcyan;
    }
  }
  ```
+ not 对媒体查询结果取反
  ```css
  /* 屏幕尺寸大于800的时候满足，不是很会用 */
  @media not all and (max-width: 800px) {
    div {
      background-color: black;
    }
  }
  ```
+ only 仅在媒体查询匹配成功后应用样式（防范老旧浏览器）
  
  旧的浏览器不支持`@media`，当检测到`@media`中对元素设置样式时，无论条件是否匹配都会直接应用。所以用only避免这种情况






