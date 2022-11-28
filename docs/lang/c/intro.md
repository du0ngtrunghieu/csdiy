# 入门

C 语言，我的 C 语言😭😭😭

指针至今一知半解，内存管理依旧一窍不通 ...

会的东西就不展示了，网上都有，文档主要记录一些新学习的内容

- [C 备忘清单](https://wangchujiang.com/reference/docs/c.html)
- ...


## 你好，世界！

先写一个 Hello World 压压惊吧

```c
#include <stdio.h>

int main() {
  printf("Hello World!");  // [!code hl]
  return 0;
}
```

使用 gcc 编译，运行编译后的二进制文件

```sh
gcc -o hello hello.c
./hello
```
