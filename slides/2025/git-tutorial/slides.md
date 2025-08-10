---
# You can also start simply with 'default'
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Gitを使おう！
info: |
  ## Gitを使おう！
  Gitを使うとなぜ便利か、基本的な使い方とGitHubのPush/Pullを学びます。
# apply unocss classes to the current slide
# class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
  twitterSite: yuito_it_
  twitterCard: summary_large_image
  articleAuthor: "Yuito Akatsuki"
  articlePublishedTime: '2025-08-09'
  articleModifiedTime: '2025-08-09'
layout: intro-image-right
image: "./static/imgs/git.png"
talksSiteMetadata:
  topic: Git Tutorial
  info: |
    Learn why we are using Git and how to use Git and GitHub simply.
---

# Gitを使おう！！！

UniPro Git 学習会

<div class="absolute bottom-10">
  <span class="font-700">
    Akatsuki Yuito 2025/08/07
  </span>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
layout: image-right
image: ./static/imgs/icon.png
---

# 自己紹介

- 名前: あかつきゆいと
- UniPro創設者
- フルスタックエンジニア
- なんかセキュリティキャンプ行くってよ

---

# TOC

<Toc maxDepth=1 columns=1 />

---
transition: fade-out
---

# Gitとは？

Gitは一言で話すと、**バージョン管理ツール**です。

<v-clicks every=1>

- ミスっても簡単に戻せる
- 他の人と作業するときに競合が起きにくい
- なぜこの仕様になったかというメモにも使える

</v-clicks>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
h1 {
  background-color: #B62B3C;
  background-image: linear-gradient(45deg, #FF6F91 10%, #8C142B 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
transition: slide-up
---

# Let's Try!

おそらく使いながら解説した方がわかりやすいので、とりあえず使ってみましょう。

---
transition: slide-up
level: 2
---

# 設定

まずはGitの設定です。

ターミナルを開きましょう。

## メールアドレスとユーザー名

メールアドレスとユーザー名をGitHubに登録したものにしましょう。
(後でGitHubを使うときに、これ以外だと面倒なことになります。)

```shell
git config --global user.email hogehoge@exsapmle.com
git config --global user.name hogehoge-user
```

---
transition: slide-up
level: 2
---

# リポジトリ

Gitでは、一つのプロジェクトをリポジトリというもので扱います。
リポジトリの実態はディレクトリです。

<v-clicks every=3>

## リポを初期化する(作ってみる)

リポジトリを作成するには、このコマンドを使います。

```shell
git init
```

</v-clicks>

---
layout: two-cols
transition: slide-up
level: 2
---

# コミット

**コミット**とは、変更を保存する処理やその保存された<br/>変更のことを指します。<br/>
Gitでは、このコミットをつなげていってバージョンを管理します。

::right::

<v-clicks every=3>

## コミットしてみる

コミットをするにはまず変更が必要ですね。
ファイルを作ってみましょう。

```shell
# hello.mdに"# Hello Git"を書き込む
echo "# Hello Git" > hello.md
```

次に、**ステージング**します。<br/>
これは、どのファイルを一つのコミットに含めるかを指定します。

```shell
# hello.mdをステージングする
git add hello.md
```

さて、いよいよコミットです。<br/>
コミットには、**コミットメッセージ**という、<br/>どういったコミットなのかのメモ書きができます。

```shell
# Inital Commitというコミットを作成する
git commit -m "Inital Commit"
```

</v-clicks>

---
transition: slide-up
level: 2
---

# ブランチ

**ブランチ**とは、枝だと思ってください。
これをどのように使っていくか、なぜ便利なのかは後で解説します。

デフォルトでは、mainもしくはmasterブランチというものが生えています。

<v-clicks every=3>

## ブランチを作ってみる

ブランチを作成するには、このコマンドを使います。

```shell
# testというブランチを作成している
git branch test
# testブランチへ移動する
git switch test
```

</v-clicks>

---
transition: slide-up
level: 2
---

# ブランチに変更を加えてみる

ブランチにある`hello.md`に変更を加えてみましょう。

VSCodeで開いても何を用いても構いません。

<v-click>

## 変更をコミットする

先ほど同様にステージング/コミットします。

```shell
git add *
git commit -m "test"
```

</v-click>

---
transition: slide-up
level: 2
---

# ブランチを切り替えてみる

ブランチを切り替えましょう。

切り替えてみると、それぞれのブランチごとに変更があり、分離されていることがわかります。

<v-clicks every=3>

## ブランチを切り替える

切り替えるには、`git switch`コマンドを使用します。

```shell
# mainブランチへ移動する
git switch main
```

## `hello.md`を確認してみよう

さっき編集したはずの`hello.md`を確認してみましょう。

変更されていないことがわかります。

</v-clicks>

---
transition: slide-up
level: 2
---

# ブランチを統合してみる

ブランチを統合します。
これにより、`test`ブランチの変更が`main`ブランチと統合されて`main`ブランチに反映されます。

<v-clicks every=3>

## ブランチを統合する

統合するには、`git merge`コマンドを使用します。

```shell
# mainブランチへ切り替える
git switch main
# 今いるブランチ(main)へtestを統合する
git merge test
```

## `hello.md`を確認してみよう

`hello.md`を確認してみましょう。

`test`ブランチの変更が適用されていることがわかります。

</v-clicks>

---
transition: fade-out
layout: center
hideInToc: true
---

# お疲れ様でした 🙌

これでGitの基本的な操作は終わりです！
これからは、これをどう使っていくかを書いていきます。

<!--
次は、Gitを使うとなぜ便利か、要するに応用ですね、やっていきましょう。
-->

---
level: 2
---

# 誰が編集したかがわかる

コミットにはあなたの情報が記録されているので、誰がコミットしたかがわかります。

```shell
git logs
```

<v-click>

```txt {*|1|2|3|4,5|*}
commit 71a8d3d598b32a78ece9a4291722229858591119 (HEAD -> main, origin/main, origin/HEAD)
Author: Yuito Akatsuki (Tani Yutaka) <yuito@yuito-it.jp>
Date:   Mon Aug 4 21:04:32 2025 +0900

    型定義忘れ
```

</v-click>

<!--
後でさらっと紹介するGitHubなどで共有したときに便利です。
-->

---
level: 2
---

# ミスっても簡単に戻せる

Gitはコミットを枝状に行なっていきます。

<!--この画面は[SourceTree](https://www.sourcetreeapp.com/)というアプリで開いたものです。-->

<!--TODO:画像-->

なので、特定の点(コミット)まで戻すことができます。

```shell
# コミットIDはgit logsやSourcetreeなどのGUIのツールから取得する
git revert <コミットID>
```

---
transition: slide-up
---

# GitHub

世の中にはGitリポを他人と共有するGitプロバイダーなるものがいくつかあります。

そのうちの一つがGitHubです。

---
transition: slide-up
level: 2
---

# GitHubCLIのインストール

まずは、GitHubCLIをインストールします。

インストール手順は<https://github.com/cli/cli#installation>にあります。

<v-click>

## Windows

```shell
winget install --id GitHub.cli
```

## Mac

```shell
brew install gh	
```

## Linux

自分で調べてください()

</v-click>

---
transition: slide-up
level: 2
---

# GitHubへのログイン

次に、GitHubへログインします。

```shell
gh auth login
```

---
transition: slide-up
---

# リポジトリをGitHubに作ってみる

Webから空のリポジトリを作る方法もありますが、今回は既存のローカルリポをアップロードしてみましょう。

```shell
gh repo create <リポ名> --private --source=. --remote=upstream
```

---
transition: slide-up
level: 2
---

# Webでみてみる

URLは

```text
https://github.com/ユーザー名/リポ名
```

です。

---
transition: slide-up
level: 2
---

# ローカルで変更してみる

ローカルで`hello.md`を編集してコミットしてみましょう。

適当に編集して、

```shell
git add *
git commit -m "コミットメッセージ"
```

でしたね。

---
transition: slide-up
level: 2
---

# Pushしてみる

変更をアップロードしましょう。

アップロードのことを**Push**といいます。

```shell
git push --set-upstream upstream master
```

---
transition: slide-up
level: 2
---

# Webで変更をしてみる

さっき開いたWeb版で変更してみましょう。

<!--
画面共有
-->

---
transition: fade-out
level: 2
---

# Pullしてみましょう

リモート(GitHub)の変更をローカルに落としてきましょう。

落とす作業を**Pull**といいます。

```shell
git Pull
```

---
transition: fade-out
layout: center
hideInToc: true
---

# Well done 🙌

お疲れ様でした。

---

# 今日のまとめ

<v-clicks every=1>

- Gitはバージョン管理ツール
- コミットという形式でデータを保存していく
- 特定のコミットまで巻き戻すことができる
- 枝状にブランチを作成して、統合していくことができる
- GitHubではサーバーにリポを置いて他の人と共有することができる

</v-clicks>

---
layout: end
hideInToc: true
---

# またお会いしましょう 👋
