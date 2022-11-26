# Intro

虽然我每天都在使用 Git，但常用的命令算下来只有几个

遇到解决不了的问题，要么是删本地库重新拉一个，要么是删远程库重新推一个，就很奇葩

所以这个文档打算用来记录一些不常用但很有用的命令，以下是一些参考链接

- [一个极简指南](https://rogerdudler.github.io/git-guide/index.zh.html)
- [Git 原理入门](https://www.ruanyifeng.com/blog/2018/10/git-internals.html)
- [常用 Git 命令清单](https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
- [Git 飞行规则](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)
- ...


## 自用 zsh 配置

> 某些操作需要安装 [hub](https://github.com/github/hub) 后才能使用

```sh
alias ga="git add"
alias gp="git push"
alias gs="git status"
alias gl="git log"
alias glo="git log --oneline --graph"
alias gpl="git pull"
alias gm="git merge"

alias open="git open"

alias gi="git init && gam 'chore: init'"
alias gam="git add . && git commit -m"
alias gamf="gam 'feat: update'"
alias gamp="gamf && gp"
alias gpall="gp --all origin"
alias create="hub create && gp -u origin HEAD"

alias gb='git branch'
alias gbd='git branch -d'
alias gco="git checkout"
alias gcob='git checkout -b'
alias main="git checkout main"


function clone() {
  if [[ -z $2 ]] then
    hub clone "$@" && cd "$(basename "$1" .git)"
  else
    hub clone "$@" && cd "$2"
  fi
}

function cloneh() {
  h && clone "$@" && code . && cd ~2
}
```