# 一些好用的 Markdown 语法

本文用于记录一些 VitePress 中的特殊且好用的 Markdown 语法

示例皆来源于 [VitePress 官网](https://vitepress.vuejs.org/guide/markdown)

还夹杂了一些其他的好用但不常用的常规语法（夹带私货警告 👀

## 目录

```
[[toc]]
```

[[toc]]


## 自定义容器

```
::: info/tip/warning/danger/details (可修改名字)

:::
```

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger 危险！
This is a dangerous warning.
:::

::: details 点击即可展开
This is a details block.
:::


## 徽章

### Title1 <Badge type="info" text="default" />

```md
### Title 1<Badge type="info" text="default" />
```

### Title2 <Badge type="tip" text="已完成" />

```md
### Title2 <Badge type="tip" text="已完成" />
```

### Title3 <Badge type="warning" text="beta" />

```md
### Title3 <Badge type="warning" text="beta" />
```

### Title4 <Badge type="danger" text="caution" />

```md
### Title4 <Badge type="danger" text="caution" />
```

## 代码高亮

````
```js{1,5,7-8}
// Highlighted
export default { 
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
      lorem: 'ipsum',
    }
  }
}
```
````


```js{1,5,7-8}
// Highlighted
export default { 
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
      lorem: 'ipsum',
    }
  }
}
```


```js
name: 'mancuoj', // [!code  focus]
text: 'hello world', // [!code  hl]
msg: 'Error', // [!code  error]
msg: 'Warning' // [!codeㅤ warning]
```

## 引入代码片段

`@` 表示根目录

```
<<< @/snippets/snippet.cs{1,2,4-6 c#}
```