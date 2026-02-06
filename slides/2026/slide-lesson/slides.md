---
# You can also start simply with 'default'
theme: ../../../common/theme/UniPro_2
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 統一と構造化で考える〜スライドの極意〜(非技術者版)
info: |
  ## 統一化と構造化で考える〜スライドの極意〜非技術者版
  スライド制作における統一と構造化を大切さ、綺麗なスライドの作り方を伝えます。
# apply unocss classes to the current slide
# class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
colorSchema: light
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
  twitterSite: yuito_it_
  twitterCard: summary_large_image
  articleAuthor: "Yuito Akatsuki"
  articlePublishedTime: "2025-08-30"
  articleModifiedTime: "2025-08-30"
layout: intro-image
image: "./static/imgs/thumbnail.png"
talksSiteMetadata:
  event: N/S/R Yokkaichi Campus Pavilion 2026
  date: "2026-02-29"
  location: Yokkaichi
  topic: 統一化と構造化で考える〜スライドの極意〜
  info: |
    スライド制作における統一と構造化を大切さ、綺麗なスライドの作り方を伝えます。
duration: 20min
timer: countdown
---

<div class="absolute top-10">
  <span class="font-700">
    あかつきゆいと 2026/01/01
  </span>
</div>

<div class="absolute bottom-3">
  <p class="subtitle">統一化と構造化で考える</p>
  <h1>
    スライドの極意
  </h1>
</div>

---

# Agenda

1. Introduction
2. 統一感 — カラーパレット、フォント、配置の一貫性
3. 構造化（Information Architecture） — ストーリー構成と情報の階層化、`1スライド1メッセージ`
4. レイアウトパターン — タイトル＋要点、ビジュアル優先、データ表現の基本
5. 読みやすさとアクセシビリティ — コントラスト、文字サイズ、行間、代替テキスト
6. 発表と時間管理 — 発表者ノート、リハーサル、タイムキーピング
7. よくあるミスと改善ワークフロー — チェックリストとレビュー方法
8. まとめと次のアクション — ルール化と運用のコツ
9. Q&A / 演習

---
layout: section
---

# 1. Introduction

---
layout: fact
---

<v-clicks>

<h1
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 0 }"
  :click-2="{ y: -20 }"
>
TL;DR
</h1>

<span>Too lazy; didn't read</span>

<span>めんどくさいから読まなかった</span>

</v-clicks>

---
