# Flask Todo

对一个 Web 框架，最好的入门方法可能就是参考官方文档写一个简单可用的 App 并部署上线。

所以本文是一篇不那么追究细节的 Todo App 开发实录，也算是给自己写了一个方便以后复制粘贴的 Cheat Sheet 👨‍💻



## 安装

在虚拟环境中安装 Flask

```sh
python3 -m venv env
. env/bin/activate
pip install flask
```

## 配置 .gitignore

::: tip  
本文档使用 @ 代表根目录，配置可参考 [gitignore.io](https://www.toptal.com/developers/gitignore)  
:::

新建 `@/.gitignore` 文件

```
.vscode
*.db

__pycache__/
*.py[cod]
*$py.class

.env
.venv
env/
venv/
ENV/
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

在终端输入 `flask run` 即可在网页中查看结果



## 引入 gunicorn

:::tip  
引入依赖代表使用 `pip install` 安装对应依赖，后文皆是如此  
:::

新建 `@/Procfile` 文件，方便之后部署以及调试

第一个 app 是 Python 模块名，第二个 app 是 Flask 启动文件名

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

之后使用 `python app.py` 启动项目，修改项目内容后刷新即可看到变化



## 引入 pip-tool


新建 `@/requirements.in` 文件

```
pip-tools
black
flask
gunicorn
```

之后就可以用 `pip-compile requirements.in` 生成依赖文件，便于查看依赖之间的关系

如需更新依赖项，可以修改 in 文件，生成 txt 后使用 `pip-sync` 命令进行更新




## 模板

Flask 使用 Jinja2 作为模板引擎，来渲染含有变量的 HTML

创建一个通用的基础模板

```html
<!-- @/templates/base.html -->
```





## 主页模板


```html
<!-- @/templates/index.html -->
```


准备虚拟数据并传入主页

```python
# @/app.py
todos = [

]
```


## 引入 flask-bootstrap



## 引入 flask-sqlalchemy


## 有用的链接？

- [Flask 文档](https://flask.palletsprojects.com/en/2.2.x/)
- [一本开源的 Flask 入门教程](https://tutorial.helloflask.com/)
- [gunicorn](https://gunicorn.org/)
- [Flask SQLAlchemy 文档](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)
- [用于部署的免费网站 pythonanywhere](https://pythonanywhere.com/)
- [用于部署的免费网站 Railway](https://railway.app/)
- ...