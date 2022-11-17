# Markdown 语法

本文用于记录一些 VitePress 中的特殊且好用的 Markdown 语法

示例皆来源于 [VitePress 官网](https://vitepress.vuejs.org/guide/markdown)

还夹杂了一些其他的好用但不常用的常规语法（夹带私货警告 👀

## 生成目录

```
[[toc]]
```


## 自定义容器

```md
::: info/tip/warning/danger/details 标题可选
你好，世界！
:::
```




## 徽章

默认类型为 tip

```md
### Title1 <Badge type="info" text="default" />
### Title2 <Badge type="tip" text="已完成" />
### Title3 <Badge type="warning" text="beta" />
### Title4 <Badge type="danger" text="caution" />
```




## 代码高亮

````md
```js{1,5,7-8}
// Highlighted
export default { 
  ...

  ...
  
  ...
}
```
````

在每行后添加 `// [!code focus/hl/--/++/warning/error]`

```js
export default {
  msg: "全体目光向我看齐",  // [!code focus]
  msg: "我宣布个事儿",  // [!code hl]
  msg: "我是个傻逼！",  // [!code --]
  msg: "我是个大傻逼！",  // [!code ++]
  msg: "危险❗", // [!code warning]
  msg: "危险❗危险❗危险❗" // [!code error]
}
```


## 引入代码片段

`@` 表示根目录

```
<<< @/snippets/snippet.cs{1,2,4-6 c#}
```


