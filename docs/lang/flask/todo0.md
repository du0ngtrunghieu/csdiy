# 0. 磨刀不误砍柴工

对一个 Web 框架，最好的入门方法可能就是参考官方文档写一个简单可用的 App 并部署上线。

所以本系列是一篇不那么追究细节的 Todo App 开发实录，也算是给自己写了一个方便以后复制粘贴的 Cheat Sheet 👨‍💻

## 参考链接

- [Flask 文档](https://flask.palletsprojects.com/en/2.2.x/)
- [Flask 入门教程](https://tutorial.helloflask.com/)
- [gunicorn](https://gunicorn.org/)
- [Jinja 文档](https://jinja.palletsprojects.com/en/3.0.x/)
- [Flask SQLAlchemy 文档](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)
- [Bootstrap-Flask 文档](https://bootstrap-flask.readthedocs.io/en/stable/basic/)
- [Bootstrap 文档](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Railway 用于部署](https://railway.app/)
- [pythonanywhere 用于部署](https://pythonanywhere.com/)
- ...


## 安装

首先在虚拟环境中安装 Flask：

```sh
python3 -m venv env
. env/bin/activate
pip install flask
```

## 配置 .gitignore

> 本文档使用 @ 代表根目录，配置可参考 [gitignore.io](https://www.toptal.com/developers/gitignore)  

新建 `@/.gitignore` 文件：

```
.vscode
*.db
__pycache__
env
.env
```



## 一个最小的 App

```python
# @/app.py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "<h1>Hello, Flask!</h1>"
```


## 引入 gunicorn

> 引入依赖代表使用 `pip install` 安装对应依赖，后文皆是如此

新建 `@/Procfile` 文件，第一个 app 是 Python 模块名，第二个 app 是 Flask 启动文件名：

```
web:gunicorn app:app
```

```python
# @/app.py
import os  // [!code ++]
from flask import Flask

...

if __name__ == "__main__":   // [!code ++]
    app.run(debug=True, port=os.getenv("PORT", default=5000))  // [!code ++]
```

之后可以使用 `python app.py` 代替 `flask run` 启动项目，便于调试以及之后的部署。



## 引入 pip-tool


新建 `@/requirements.in` 文件，black 是一个格式化工具：

```
pip-tools
black
flask
gunicorn
```

之后可以使用 `pip-compile requirements.in` 命令生成依赖文件，便于查看依赖之间的关系。

如需更新依赖项，可以修改 in 文件后重新生成 txt，使用 `pip-sync` 命令进行更新。




## 模板

Flask 使用 Jinja2 作为模板引擎，可以渲染含有变量的 HTML。

创建一个通用的基础模板：

```html
<!-- @/templates/base.html -->
```


## 静态文件

静态文件和模板概念相反，指的是内容不需要动态生成的文件，比如图片、CSS 文件和 JS 文件等。

```css

```


## 主页模板


```html
<!-- @/templates/index.html -->
```


准备虚拟数据并传入主页：

```python
# @/app.py
todos = [

]
```

