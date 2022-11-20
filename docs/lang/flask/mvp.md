# Flask Todo

参考官方文档写一个简单可用的 Todo App 并部署上线

对一个 Web 框架，最好的入门方法可能就是这样了，本文为开发的简单记录

## 安装

在虚拟环境中安装 Flask

```sh
python3 -m venv env
. env/bin/activate
pip install flask
```


## 开始

用 @ 代表根目录

```py
# @/app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1>Hello, Flask!</h1>"
```

在终端输入 `flask run` 即可在网页中查看结果


## 管理环境变量




## 模板

Flask 使用 Jinja2 作为模板引擎，来渲染含有变量的 HTML

创建一个通用的基础模板

```html
<!-- @/templates/base.html -->
```



## 主页

准备虚拟数据

```py
```

编写主页模板

```html
<!-- @/templates/index.html -->
```