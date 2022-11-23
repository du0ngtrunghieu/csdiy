# 基础操作




## 一些好用的 zsh 配置

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
```

需要安装 `sudo apt install hub`

```sh
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