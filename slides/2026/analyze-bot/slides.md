---
theme: ../../../common/theme/UniPro_2
title: DiscordAnalyzeBot - コミュニティ会話を可視化する Discord Bot
info: |
  ## DiscordAnalyzeBot
  Discord の会話ログを収集し、解析して、ワードクラウドなどで可視化する Bot の LT です。
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: light
seoMeta:
  ogImage: auto
  twitterSite: yuito_it_
  twitterCard: summary_large_image
  articleAuthor: "Yuito Akatsuki"
  articlePublishedTime: "2026-03-15"
  articleModifiedTime: "2026-03-15"
layout: intro
talksSiteMetadata:
  event: LT
  date: "2026-03-15"
  location: Online
  topic: DiscordAnalyzeBot - コミュニティ会話を可視化する Discord Bot
  info: |
    Discord の会話ログを収集し、解析して、ワードクラウドなどで可視化する Bot の LT です。
duration: 5min
timer: countdown
---

<!-- markdownlint-disable MD033 MD025 MD046 -->

<div class="absolute top-8 left-8 z-20">
  <span class="font-700 px-3 py-1 rounded-md text-sm tracking-wide">
    あかつきゆいと / N高グループ 通学コースLT 2025 2nd
  </span>
</div>

<div class="grid grid-cols-[0.9fr_1.1fr] gap-6 h-[calc(100%-5rem)] pt-24 pb-8 pl-8 pr-0">
  <div class="flex flex-col justify-end pb-10 pr-4">
    <p class="mb-5 text-[1.55rem] font-700 leading-[1.25] max-w-[14em]">
      Discord の会話を、<br/>
      あとから見える画像に変える
    </p>
    <h1 class="mb-4 text-[3.15rem] leading-none tracking-tight">DiscordAnalyzeBot</h1>
    <p class="text-[1.4rem] font-700 leading-snug max-w-[16em]">
      メッセージ収集・解析・<br/>
      ワードクラウド可視化
    </p>
  </div>

  <div class="flex h-full flex-col gap-4 pl-2 pr-0 pb-2">
    <div class="relative h-[44%] overflow-hidden rounded-l-[2rem] bg-slate-50/80 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
      <img
        src="./static/imgs/thumbnail.png"
        alt="DiscordAnalyzeBot wordcloud preview"
        class="absolute inset-0 h-full w-full object-cover"
        style="opacity: 0.72; filter: saturate(0.95) blur(0.2px);"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-white/38 via-white/14 to-transparent"></div>
    </div>
    <div class="relative h-[50%] overflow-hidden rounded-l-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <img
        src="./static/imgs/network.png"
        alt="DiscordAnalyzeBot network preview"
        class="absolute inset-[6%_4%_7%_7%] h-[87%] w-[89%] object-contain"
        style="filter: drop-shadow(0 16px 30px rgba(15, 23, 42, 0.14));"
      />
    </div>
  </div>
</div>

<!--
今日は DiscordAnalyzeBot という、コミュニティの会話を見える化する Bot を紹介します。

Discord のログを集めるだけで終わらず、解析して、ワードクラウドとして返すところまでを自動化したものです。
-->

---
transition: fade
---

# TL;DR

<div class="grid grid-cols-3 gap-5 mt-8">
  <div class="rounded-xl bg-pink-50 p-5">
    <div class="text-sm font-bold text-pink-600 mb-3">目的</div>
    <div class="text-2xl font-bold leading-tight">会話ログを<br/>見える情報に変える</div>
    <p class="text-sm mt-4">Discord の発話を集めて、話題や会話の雰囲気を見える化する。</p>
  </div>

  <div class="rounded-xl bg-blue-50 p-5">
    <div class="text-sm font-bold text-blue-600 mb-3">主な機能</div>
    <ul class="text-sm space-y-2">
      <li>メッセージ保存</li>
      <li>ワードクラウド生成</li>
      <li>会話ネットワーク生成</li>
    </ul>
  </div>

  <div class="rounded-xl bg-green-50 p-5">
    <div class="text-sm font-bold text-green-700 mb-3">今日の見どころ</div>
    <p class="text-sm leading-6">
      言葉をうまくまとめる処理（形態素解析 + 連続語学習）で、
      バラけた単語を「読める話題」に育てるところ。
    </p>
  </div>
</div>

<div class="mt-5 rounded-lg bg-gray-50 p-4 text-sm">
  専門用語は必要なところだけに絞って、意味が伝わる言い換えを優先して話します。
</div>

<!--
このスライドでは、まず結論だけ伝えます。

このBotは「会話ログをただ保存する」だけではなく、
話題の中身（ワードクラウド）と、誰が誰と話しているか（ネットワーク）を見えるようにします。

今日は特に、言葉をどう扱うと結果が読みやすくなるかに絞って話します。
-->

---
transition: fade
---

# 自己紹介

<div class="grid grid-cols-[1fr_200px] gap-6 mt-4 h-full pb-8">
  <div class="flex flex-col gap-4">
    <div class="rounded-xl bg-pink-50 p-5 flex-shrink-0">
      <p class="text-2xl font-bold text-gray-800 mb-3">あかつきゆいと</p>
      <div class="flex flex-wrap gap-1.5">
        <span class="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/500px-Kubernetes_logo_without_workmark.svg.png" width="14" height="14" alt="Kubernetes" /> Kubernetes</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-cyan-100 text-cyan-700 font-semibold flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="14" height="14" alt="React" /> React</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center gap-1"><img src="https://img.icons8.com/fluent-systems-filled/512/nextjs.png" width="14" height="14" alt="Next.js" /> Next.js</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-semibold flex items-center gap-1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0FQokOsoKiCt3kSblkBIHosYTQ5--yTBYA&s" width="14" height="14" alt="Vue.js" /> Vue.js</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-blue-200 text-blue-800 font-semibold flex items-center gap-1"><img src="https://cdn.worldvectorlogo.com/logos/docker-4.svg" width="14" height="14" alt="Docker" /> Docker</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-700 font-semibold flex items-center gap-1">🔒 Security</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 font-semibold flex items-center gap-1">etc...</span>
      </div>
    </div>
    <div class="rounded-xl bg-blue-50 p-5 flex-1">
      <div class="text-sm font-bold text-blue-600 mb-2">所属</div>
      <ul class="text-sm space-y-1.5 text-gray-700 leading-relaxed list-disc list-inside">
        <li>デジタル創作サークル UniProject</li>
        <li>S高等学校</li>
        <li>セキュリティ・キャンプ協議会 ステアリングコミッティ</li>
        <li>etc...</li>
      </ul>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center gap-5 h-full">
    <img src="./static/imgs/icon.png" alt="icon" class="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg" style="box-shadow: 0 8px 32px 0 rgba(255,0,128,0.15);" />
    <img src="./static/imgs/face.jpg" alt="face" class="w-36 h-36 object-cover rounded-full border-4 border-blue-200 shadow-xl" style="box-shadow: 0 8px 32px 0 rgba(0,128,255,0.10);" />
  </div>
</div>

<!--
あかつきゆいとと申します。
UniProの創設者とかセキュキャン協議会の人やってたりします。
コンテナ技術とかWeb系とかセキュリティとか、色々やってるS高生です。
-->

---

# 目次

1. 何を作ったか（TL;DR）
2. 日本語テキストの難しさ
3. 言葉をどう分解して、どう再結合するか
4. 連続語（N-gram）と重みづけの工夫
5. ネットワーク図が見える仕組み
6. 実際の出力とデモ

<!--
今日は、細かいファイル構成よりも
「どうやって見やすい結果を作っているか」に絞って話します。

前半で言葉の処理、後半で会話ネットワーク、最後に実際の出力を見せます。
-->

---

# 専門外の方向けに先に結論

<div class="grid grid-cols-3 gap-5 mt-8 text-sm">
  <div class="rounded-xl bg-pink-50 p-5">
    <div class="font-bold text-pink-700 mb-3">1. 何をしている？</div>
    <p class="leading-6">会話ログをそのまま保存せず、読みやすい形に整理して返す Bot。</p>
  </div>

  <div class="rounded-xl bg-blue-50 p-5">
    <div class="font-bold text-blue-700 mb-3">2. 何が見える？</div>
    <p class="leading-6">話題の中身（ワードクラウド）と、人間関係（会話ネットワーク）。</p>
  </div>

  <div class="rounded-xl bg-green-50 p-5">
    <div class="font-bold text-green-700 mb-3">3. どこが大事？</div>
    <p class="leading-6">単語を数える前の下処理で、見やすさがほぼ決まる。</p>
  </div>
</div>

<div class="mt-6 rounded-lg bg-amber-50 p-4 text-sm">
  この3点だけ持ち帰ってもらえたら、このLTは成功です。
</div>

---

# 何が難しいのか

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="rounded-xl border border-pink-200 bg-pink-50 p-5">
    <div class="text-sm font-bold text-pink-600 mb-2">日本語の壁</div>
    <div class="text-xl font-bold mb-3">単語の切れ目が見えない</div>
    <p class="text-sm leading-6">英語みたいに空白区切りではないので、まず「どこが単語か」を決める必要がある。</p>
  </div>

  <div class="rounded-xl border border-blue-200 bg-blue-50 p-5">
    <div class="text-sm font-bold text-blue-600 mb-2">Discord 特有のノイズ</div>
    <div class="text-xl font-bold mb-3">URL/メンション/絵文字</div>
    <p class="text-sm leading-6">そのまま数えると、話題よりノイズが上位に出る。</p>
  </div>

  <div class="rounded-xl border border-green-200 bg-green-50 p-5">
    <div class="text-sm font-bold text-green-700 mb-2">複合語の罠</div>
    <div class="text-xl font-bold mb-3">バラすと意味が消える</div>
    <p class="text-sm leading-6">「自然言語処理」「ミラノ風ドリア」を分割すると、見たい話題が見えにくくなる。</p>
  </div>

  <div class="rounded-xl border border-amber-200 bg-amber-50 p-5">
    <div class="text-sm font-bold text-amber-700 mb-2">今回の核心</div>
    <div class="text-xl font-bold mb-3">どう学習して再結合するか</div>
    <p class="text-sm leading-6">ただの頻度集計ではなく、複合語を育てて可視化の解像度を上げる。</p>
  </div>
</div>

<!--
ここで伝えたいのは、
ワードクラウドの見た目を良くするには「単語を数える前」が勝負という点です。

日本語は単語の境界があいまいで、
DiscordはURLやメンションなどのノイズが多いので、
そのまま集計すると人が読みたい結果になりません。
-->

---

# まずは前処理

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">
  <div class="rounded-xl bg-blue-50 p-5">
    <div class="font-bold text-base mb-3 text-blue-700">ノイズ除去</div>
    <ul class="space-y-2 leading-6">
      <li>URL・メンション・チャンネル参照を除去</li>
      <li>絵文字・コードブロック・spoiler を除去</li>
      <li>NFKC 正規化で文字種をそろえる（全角/半角ゆれの吸収）</li>
      <li>www の表記ゆれを寄せる</li>
    </ul>
  </div>

  <div class="rounded-xl bg-green-50 p-5">
    <div class="font-bold text-base mb-3 text-green-700">なぜ先にやる？</div>
    <p class="leading-6">
      前処理をせずにトークン化すると、後段の学習が URL や記号に引っ張られて壊れやすい。
    </p>
    <p class="mt-3 text-xs text-gray-600">
      まず「会話として意味がある文字列」だけを残すのが土台。
    </p>
  </div>
</div>

<!--
前処理は地味ですが、ここをサボると全部崩れます。

料理で言うと下ごしらえです。
ここが雑だと、後の工程をどれだけ頑張っても仕上がりが悪くなります。
-->

---

# 言葉をどう区切るか

<div class="grid grid-cols-3 gap-5 mt-8 text-sm">
  <div class="rounded-xl bg-pink-50 p-5">
    <div class="font-bold text-pink-700 mb-3">まず単語に区切る</div>
    <p class="leading-6">
      Sudachi（日本語を単語に分ける辞書ツール）で、文章を意味のかたまりに分ける。
    </p>
    <p class="mt-3 text-xs text-gray-600">
      例: 「セキュリティキャンプ最高」→「セキュリティ / キャンプ / 最高」
    </p>
  </div>

  <div class="rounded-xl bg-blue-50 p-5">
    <div class="font-bold text-blue-700 mb-3">対象トークンの絞り込み</div>
    <p class="leading-6">
      助数詞っぽい語尾や、ノイズ寄りの語は落とす。
    </p>
    <p class="mt-3 text-xs text-gray-600">
      「多く」みたいな分析ノイズ語もストップワードで外す。
    </p>
  </div>

  <div class="rounded-xl bg-green-50 p-5">
    <div class="font-bold text-green-700 mb-3">取りすぎない</div>
    <p class="leading-6">
      全部採用しないことで、複合語学習の精度が安定する。
    </p>
    <p class="mt-3 text-xs text-gray-600">
      精度は「たくさん拾う」より「余計なものを捨てる」で決まる。
    </p>
  </div>
</div>

<div class="mt-6 rounded-lg bg-amber-50 p-4 text-sm">
  ここで土台を整えると、このあと説明する N-gram 学習がちゃんと効く。
</div>

<!--
単語に分けるだけでは終わりません。

分けた後に、分析に向いていない語を落として、
「学習に使う語彙」を整えるところまでがセットです。
-->

---

# 連続語（N-gram）を雑に作ると事故る

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">
  <div class="rounded-xl bg-pink-50 p-5">
    <div class="font-bold text-base mb-3 text-pink-700">よくある事故</div>
    <p class="leading-6">
      助詞を落とした単語列だけで 2語セット（bigram）を作ると、
      本来つながっていない語がくっつく。
    </p>
    <p class="mt-3 text-xs text-gray-600">
      例: 「記憶 の 人間」→「記憶-人間」になってしまう
    </p>
  </div>

  <div class="rounded-xl bg-blue-50 p-5">
    <div class="font-bold text-base mb-3 text-blue-700">回避策</div>
    <p class="leading-6">
      トークンの元位置（index）を保持して、
      元テキスト上で隣接していた語だけを N-gram にする。
    </p>
    <p class="mt-3 text-xs text-gray-600">
      地味だけど、複合語学習の信頼性に直結する。
    </p>
  </div>
</div>

<div class="mt-6 rounded-lg bg-amber-50 p-4 text-sm">
  つまり「単語の並び」ではなく「元文の隣接関係」で学習するのがポイント。
</div>

<!--
ここは専門的に見えるけど、意味はシンプルです。

「本当に隣り合っていた言葉だけをセットにする」
この1点を守るだけで、誤学習が大きく減ります。
-->

---

# 複合語をどう見つけるか

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">
  <div class="rounded-xl bg-blue-50 p-5">
    <div class="font-bold text-base mb-3 text-blue-700">頻度だけでは不十分</div>
    <p class="leading-6">
      たまたま同時に出ただけの語も多いので、
      「一緒に出る必然性」が高い組み合わせだけ残す。
    </p>
  </div>

  <div class="rounded-xl bg-green-50 p-5">
    <div class="font-bold text-base mb-3 text-green-700">採用ルール</div>
    <ul class="space-y-2 leading-6">
      <li>PMI（偶然ではなく一緒に出る強さ）で判定</li>
      <li>低頻度すぎる候補は落とす</li>
      <li>同一語の繰り返し N-gram は落とす</li>
      <li>同メッセージ連打は unigram を 1 回として扱う</li>
    </ul>
  </div>
</div>

<div class="mt-5 rounded-lg bg-amber-50 p-4 text-sm">
  「よく出る」だけでなく「本当に結びつきが強い」を選ぶと、複合語の質が上がる。
</div>

<!--
ここでのポイントは、
「出現回数が多い」だけでは採用しないことです。

偶然の並びではなく、
本当に一緒に使われやすい語だけを残すので、
ワードクラウドが人間の感覚に近づきます。
-->

---

# 学習前後の比較

<div class="grid grid-cols-2 gap-6 mt-6 items-stretch">
  <div>
    <div class="rounded-xl bg-blue-50 p-5 mb-4">
      <div class="font-bold text-blue-700 mb-3">学習前（見づらい状態）</div>
      <ul class="text-sm space-y-2">
        <li>単語がバラバラで、話題が読み取りにくい</li>
        <li>複合語が壊れて見える</li>
      </ul>
    </div>
    <div class="rounded-xl bg-green-50 p-5">
      <div class="font-bold text-green-700 mb-3">学習後（読みやすい状態）</div>
      <ol class="text-sm ml-5 list-decimal space-y-2">
        <li>文章が意味のまとまりで区切られている</li>
        <li>複合語がまとまって読める</li>
      </ol>
    </div>
  </div>

  <div class="absolute top-2 max-w-[45%] max-h-[89%] right-10 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[320px] flex flex-col items-center justify-center p-6 text-center text-sm text-gray-500">
    <img src="./static/imgs/wordcloud_before.png" class="h-[40%]"/>
    <span>↑before / after↓</span>
    <img src="./static/imgs/wordcloud_after.png" class="max-h-[40%]"/>
  </div>
</div>

<!--
デモでは、同じデータで「学習前」と「学習後」を見せるのが最強です。

難しい式を説明しなくても、
「見づらい→見やすい」の変化だけで価値がしっかり伝わります。
-->

---

# ネットワーク図の重みづけ

<div class="flex items-center h-full max-h-[92vh] mt-0 w-full">

```mermaid
graph LR
  M[メッセージ] --> S1[返信先情報を読む]
  M --> S2[メンション情報を読む]
    S1 --> P[ユーザーペア化]
    S2 --> P
    P --> W[同じペアの出現回数を加算]
    W --> F[重み1は間引く]
    F --> G[ネットワーク図を描画]

    style M fill:#fde7ef
    style S1 fill:#e8f1ff
    style S2 fill:#f3e8ff
    style P fill:#e8faf0
    style W fill:#fff4d9
    style F fill:#ffe9e9
    style G fill:#f0f4ff
```

</div>

<div class="mt-4 rounded-lg bg-blue-50 p-4 text-sm">
  返信とメンションを会話シグナルとして同じ重み計算に入れ、弱いつながり（重み1）は表示ノイズとして省く。
</div>

<!--
ネットワーク図では、線が多いほど見づらくなります。

なので、1回だけの弱いつながりはあえて捨てて、
「このコミュニティで実際によく起きている会話」に焦点を当てています。
-->

---

# ネットワーク図を見やすくする工夫

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">
  <div class="rounded-xl bg-gray-50 p-5">
    <div class="font-bold text-base mb-3">レイアウト調整</div>
    <ul class="space-y-2 leading-6">
      <li><strong>ばねモデル配置（spring layout）</strong><br/>つながりが強いノード同士を近づける</li>
      <li><strong>ノード/文字サイズ自動調整</strong><br/>ノード数・ラベル長に応じて調整</li>
      <li><strong>ラベル幅の見積もり</strong><br/>全角/半角の差を見て重なりを減らす</li>
      <li><strong>余白最適化</strong><br/>図全体が窮屈になりすぎないようにする</li>
    </ul>
  </div>

  <div class="rounded-xl bg-red-50 p-5">
    <div class="font-bold text-base mb-3 text-red-700">実装でハマるところ</div>
    <ul class="space-y-2 leading-6">
      <li>メッセージ境界をまたぐ誤 N-gram</li>
      <li>Sudachi 並列化時の辞書利用エラー</li>
      <li>日本語ラベルの幅見積もりミス</li>
      <li>エッジを残しすぎたときの可読性崩壊</li>
    </ul>
    <div class="mt-4 rounded-lg bg-white p-3 text-xs text-gray-600">
      並列化に失敗したら逐次処理へフォールバックして、処理失敗を避ける。
    </div>
  </div>
</div>

<!-- TODO:画像 -->

<!--
図を作る処理そのものより、
実は「読める見た目に整える」部分のほうが体感差が出ます。

文字の重なりを避けるだけで、
同じデータでも伝わり方がかなり変わります。
-->

---

# 実際の出力例

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="rounded-xl border-2 border-dashed border-pink-300 bg-pink-50 min-h-[280px] flex flex-col items-center justify-center text-center p-6">
    <div class="font-bold text-pink-700 mb-2">ワードクラウド出力例</div>
    <div class="text-sm text-gray-600">ここに実際の生成画像を配置</div>
    <!-- TODO:画像 -->
  </div>

  <div class="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 min-h-[280px] flex flex-col items-center justify-center text-center p-6">
    <div class="font-bold text-blue-700 mb-2">会話ネットワーク出力例</div>
    <div class="text-sm text-gray-600">ここに実際の生成画像を配置</div>
    <!-- TODO:画像 -->
  </div>
</div>

<div class="mt-6 rounded-lg bg-amber-50 p-4 text-sm">
  同じ期間・同じチャンネルでも、可視化の種類で見える発見が変わる。
</div>

<!--
左は「何を話しているか」、右は「誰と誰が話しているか」です。

この2つは同じログから作っているのに、見える景色が違います。
セットで見せることで、コミュニティの雰囲気を立体的に説明できます。
-->

---

# この仕組みで何が良くなる？

<div class="grid grid-cols-3 gap-5 mt-8">
  <div class="rounded-xl bg-pink-50 p-5">
    <div class="text-base font-bold mb-3 text-pink-600">話題が読みやすくなる</div>
    <p class="text-sm leading-6">「自然 / 言語 / 処理」みたいな分断が減って、「自然言語処理」として読める。</p>
  </div>

  <div class="rounded-xl bg-blue-50 p-5">
    <div class="text-base font-bold mb-3 text-blue-600">ノイズに埋もれにくい</div>
    <p class="text-sm leading-6">URL や記号が目立つ状態から、会話の中身が主役の可視化に近づく。</p>
  </div>

  <div class="rounded-xl bg-green-50 p-5">
    <div class="text-base font-bold mb-3 text-green-700">雰囲気を立体的に見れる</div>
    <p class="text-sm leading-6">ワードクラウドは「何を話したか」、会話ネットワークは「誰と話したか」を見せる。</p>
  </div>
</div>

<div class="mt-8 p-4 rounded-lg bg-amber-50 text-sm">
  同じログでも、話題と関係性を並べるとコミュニティの見え方が一気に深くなる。
</div>

<!--
このスライドは、技術の説明より「使うと何が嬉しいか」を伝える場です。

難しい単語を増やさず、
結果の見やすさがどう変わるかだけを強調して話します。
-->

---

# 今後の改善ポイント

<div class="grid grid-cols-3 gap-5 mt-8">
  <div class="rounded-xl p-5 bg-gradient-to-br from-pink-50 to-rose-100">
    <div class="text-base font-bold mb-3 text-pink-700">リアルタイム解析</div>
    <p class="text-sm leading-6">ストリーミング処理に寄せて、盛り上がりを即時に把握する。</p>
  </div>

  <div class="rounded-xl p-5 bg-gradient-to-br from-blue-50 to-cyan-100">
    <div class="text-base font-bold mb-3 text-blue-700">言語処理の強化</div>
    <p class="text-sm leading-6">形態素辞書・複合語ルール・N-gram の最適化で、読み取りやすさを上げる。</p>
  </div>

  <div class="rounded-xl p-5 bg-gradient-to-br from-green-50 to-emerald-100">
    <div class="text-base font-bold mb-3 text-green-700">Web UI 連携</div>
    <p class="text-sm leading-6">画像だけでなく、インタラクティブな可視化へ広げる。</p>
  </div>
</div>

<!--
今後は、リアルタイム表示やWeb画面連携で、
「あとで見る分析」から「その場で使える分析」に進める予定です。

長期的には、コミュニティ運営の意思決定に直接使える形にしていきます。
-->

---

# ご清聴ありがとうございました

<div class="grid grid-cols-2 gap-8 mt-10 items-center">
  <div>
    <p class="text-xl leading-10">
      Discord の会話ログを、<br/>
      コミュニティ改善に使える形へ変える。<br/>
      そのための最小構成が DiscordAnalyzeBot です。
    </p>
  </div>

  <div class="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[220px] flex items-center justify-center text-center text-sm text-gray-500 p-6">
    QR や成果物の画像をここに配置
    <!-- TODO:画像 -->
  </div>
</div>

<!--
以上です。

このBotの価値は、
会話ログをただ保存することではなく、
人が読んで使える情報に変換するところにあります。
-->