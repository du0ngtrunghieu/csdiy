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


```md
### Title 1<Badge type="info" text="default" />
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

````md
```js
name: 'mancuoj', // [!code  focus]
msg: 'hello world', // [!code  hl]
msg: 'Error', // [!code  error]
msg: 'Warning' // [!codeㅤ warning]
msg: 'Removed' // [!codeㅤ --]
msg: 'Added' // [!codeㅤ ++]
```
````

## 引入代码片段

`@` 表示根目录

```
<<< @/snippets/snippet.cs{1,2,4-6 c#}
```