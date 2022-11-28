# 入门

C 语言，我的 C 语言 😭 

从入门到现在已有几年，但指针至今一知半解，内存管理依旧一窍不通 😭

所以本文档主要记录一些学习笔记，不正经的~~教程~~（大概

- 指针
- 内存管理
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
