---
# You can also start simply with 'default'
theme: ../../../common/theme/UniPro_2
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: UniProインフラのセキュリティ〜KubernetesとUniQUEの未来〜
info: |
  ## UniProインフラのセキュリティ〜KubernetesとUniQUEの未来〜
  Kubernetesマルチテナントの今後とUniQUEの完成と活用に関して話します。
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
  event: UniProject Winter LT 2025
  date: "2025-12-25"
  location: Online
  topic: Next Step of UniQUE and K8s
  info: |
    Kubernetesマルチテナントの今後とUniQUEの完成と活用に関して話します。
duration: 10min
timer: countdown
---

<div class="absolute top-10">
  <span class="font-700">
    あかつきゆいと 2025/12/25
  </span>
</div>

<div class="absolute bottom-3">
  <h1>UniProインフラのセキュリティ</h1>
  <p>〜KubernetesとUniQUEの未来〜</p>
</div>

---
transition: fade
---

<div class="flex flex-row items-center justify-center w-full min-h-[350px] gap-16">
  <!-- 自己紹介テキスト -->
  <div class="flex flex-col justify-center items-start gap-4 max-w-[340px]">
    <v-animate name="fadeInDown">
      <h1 class="text-5xl font-extrabold text-pink-600 drop-shadow mb-2 tracking-tight">自己紹介</h1>
    </v-animate>
    <v-animate name="fadeInUp" :delay="300">
      <p class="text-3xl font-bold text-gray-800 animate__pulse animate__infinite">あかつきゆいと</p>
      <div class="flex flex-wrap gap-1 mt-1">
        <span class="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/500px-Kubernetes_logo_without_workmark.svg.png" width="16" height="16" alt="Kubernetes" /> Kubernetes</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-cyan-100 text-cyan-700 font-semibold flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" width="16" height="16" alt="React"> React</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center gap-1"><img src="https://img.icons8.com/fluent-systems-filled/512/nextjs.png" width="16" height="16" alt="Next.js"/> Next.js</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-semibold flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png" width="16" height="16" alt="Next.js"/> Vue.js</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-blue-200 text-blue-800 font-semibold flex items-center gap-1"><img src="https://cdn.worldvectorlogo.com/logos/docker-4.svg" width="16" height="16" alt="Next.js"/> Docker</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-700 font-semibold flex items-center gap-1">🔒 Security</span>
        <span class="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 font-semibold flex items-center gap-1">etc...</span>
      </div>
      <div class="mt-3 text-base text-gray-600">
        <span class="font-bold">所属：</span>
        <ul class="list-disc list-inside ml-4">
          <li>デジタル創作サークルUniProject</li>
          <li>S高等学校</li>
          <li>セキュリティ・キャンプ協議会 コミュニティ支援グループ</li>
        </ul>
      </div>
    </v-animate>
  </div>
  <!-- 写真2枚（アイコン・顔写真）を右側に重ねて配置 -->
  <div class="relative flex flex-col items-center justify-center min-w-[200px] h-44" style="top: -24px;">
    <v-animate name="zoomIn">
      <img src="./static/imgs/icon.png" alt="icon" class="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg absolute top-0 right-2 z-20 bg-white" style="box-shadow:0 8px 32px 0 rgba(255,0,128,0.15);" />
    </v-animate>
    <v-animate name="zoomIn" :delay="200">
      <img src="./static/imgs/face.jpg" alt="face" class="w-32 h-32 object-cover rounded-full border-4 border-blue-200 shadow-xl absolute bottom-0 left-2 z-10 bg-white" style="box-shadow:0 8px 32px 0 rgba(0,128,255,0.10);" />
    </v-animate>
  </div>
</div>

---

# Agenda

1. はじめに 〜UniProのポリシー〜
2. 現状と課題
3. UniQUEの未来
    - 何ができるか
    - UniQUEのこれから
4. Kubernetes マルチテナント計画
    - システム構成
    - RBACとOIDC
    - Istio - mTLS
    - HashiCorp Vault - KMS
    - NFS CSI Driver - PV/PVC
    - ArgoCD - CD
5. おわりに

<!--

-->

---
layout: section
---

# 1. はじめに
## 〜UniProのポリシー〜

<!--
-->

---

# UniProのポリシー

UniProではこの3つを重要視しています。

<v-clicks>

1. できる限り無料で行う
1. できる限りオープンにする
1. できる限りセキュアにする

</v-clicks>

<!--
-->

---
layout: section
---

# 2. 現状と課題

<!--
-->

---
transition: none
---

<div class="absolute top-3">
  <span class="font-600">
    2. 現状と課題
  </span>
</div>

# ID管理

現在、UniProjectのメンバーには、以下のような機能を提供しています。

- UniWiki (GROWI)
- メール
- Proxmox VE
- Kubernetes
- 蔵雲 (Next Cloud)

etc...

<!--
-->

---
layout: fact
---

<div class="absolute top-3 left-10">
  <span class="font-600">
    2. 現状と課題
  </span>
</div>

<v-clicks>

# アカウントは役員が手動で管理している

</v-clicks>

<!--
-->

---
transition: none
---

<div class="absolute top-3 left-10">
  <span class="font-600">
    2. 現状と課題
  </span>
</div>

# KubernetesとProxmoxマルチテナント

Proxmox VEとKubernetesでは、以下のような問題が発生しています。

<v-switch>

<template #1>

- Proxmox VEのAdmin権限をもってしても、VMの中身を除けない
    - VMのログを全て取り切っていないため、SSHのアタックなどを完全に検知できていない
- KubernetesのRBACが曖昧
- KubernetesのClusterAdmin権限を用いれば、全てのsecretの中身を覗くことができてしまう
    - とはいえ、Kubernetesの管理者を育成するという観点からClusterAdminはつけておきたい
- マイクロサービスアーキテクチャを目指しているにも関わらずmTLSすら組んでいない
- KubernetesやProxmox VEのユーザー作成がだるい

</template>

<template #2>

- <span class="disable">Proxmox VEのAdmin権限をもってしても、VMの中身を除けない</span>
    - <span class="disable">VMのログを全て取り切っていないため、SSHのアタックなどを完全に検知できていない</span>
- **KubernetesのRBACが曖昧**
- **KubernetesのClusterAdmin権限を用いれば、全てのsecretの中身を覗くことができてしまう**
    - **とはいえ、Kubernetesの管理者を育成するという観点からClusterAdminはつけておきたい**
- **マイクロサービスアーキテクチャを目指しているにも関わらずmTLSすら組んでいない**
- **KubernetesやProxmox VEのユーザー作成がだるい**

</template>

</v-switch>

---
layout: section
---

# 3. UniQUEの未来

---

<div class="absolute top-3 left-10">
  <span class="font-600">
    3. UniQUEの未来
  </span>
</div>


# UniQUEの現状

UniQUEとは、**UniProjectのメンバー管理ができる統合認証基盤**であり、2024年の夏頃から計画され、開発されてきた。

<v-switch>

<template #1>
  <div class="flex flex-col items-center gap-6">
    <div class="w-full max-w-4xl">
      <div class="relative flex items-center justify-between px-2">
        <div class="flex-1 h-1 bg-gray-200 absolute left-0 right-0 top-6"></div>
        <div class="flex justify-between relative z-10 w-full">
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">1</div>
            <div class="mt-2 text-sm text-center">設計開始<br/><span class="text-xs text-gray-500">2024 B</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">2</div>
            <div class="mt-2 text-sm text-center">設計完了<br/><span class="text-xs text-gray-500">2025 B</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">3</div>
            <div class="mt-2 text-sm text-center">開発開始<br/><span class="text-xs text-gray-500">2025 C</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">4</div>
            <div class="mt-2 text-sm text-center">Open Beta<br/><span class="text-xs text-gray-500">2025 D</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">5</div>
            <div class="mt-2 text-sm text-center">Open Beta<br/><span class="text-xs text-gray-500">2026 A</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-2xl font-bold text-pink-600">Stage 4 — Open Beta (2025 D)</h3>
      <ul class="list-disc ml-6 mt-3 text-lg">
        <li>基本認証フロー（ログイン・SSO）</li>
        <li>グループとロールの管理</li>
        <li>メンバー登録申請の管理</li>
      </ul>
    </div>
  </div>
</template>

<template #2>
  <div class="flex flex-col items-center gap-6">
    <div class="w-full max-w-4xl">
      <div class="relative flex items-center justify-between px-2">
        <div class="flex-1 h-1 bg-gray-200 absolute left-0 right-0 top-6"></div>
        <div class="flex justify-between relative z-10 w-full">
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">1</div>
            <div class="mt-2 text-sm text-center">設計開始<br/><span class="text-xs text-gray-500">2024 B</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">2</div>
            <div class="mt-2 text-sm text-center">設計完了<br/><span class="text-xs text-gray-500">2025 B</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">3</div>
            <div class="mt-2 text-sm text-center">開発開始<br/><span class="text-xs text-gray-500">2025 C</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-gray-200 text-gray-60 flex items-center justify-center font-bold">4</div>
            <div class="mt-2 text-sm text-center">Open Beta<br/><span class="text-xs text-gray-500">2025 D</span></div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">5</div>
            <div class="mt-2 text-sm text-center">Production<br/><span class="text-xs text-gray-500">2026 A</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-2xl font-bold text-green-500">Stage 5 — Production (2026 A)</h3>
      <ul class="list-disc ml-6 mt-3 text-lg">
        <li>監査ログ</li>
        <li>バグ修正</li>
        <li>ドキュメント整備</li>
      </ul>
    </div>
  </div>
</template>

</v-switch>

---
transition: none
---

<div class="absolute top-3 left-10">
  <span class="font-600">
    2. 現状と課題
  </span>
</div>

# KubernetesとProxmoxマルチテナント

Proxmox VEとKubernetesでは、以下のような問題が発生しています。

<v-switch>

<template #1>

- <span class="disable">Proxmox VEのAdmin権限をもってしても、VMの中身を除けない</span>
    - <span class="disable">VMのログを全て取り切っていないため、SSHのアタックなどを完全に検知できていない</span>
- **KubernetesのRBACが曖昧**
- **KubernetesのClusterAdmin権限を用いれば、全てのsecretの中身を覗くことができてしまう**
    - **とはいえ、Kubernetesの管理者を育成するという観点からClusterAdminはつけておきたい**
- **マイクロサービスアーキテクチャを目指しているにも関わらずmTLSすら組んでいない**
- **KubernetesやProxmox VEのユーザー作成がだるい**

</template>

<template #2>

- <span class="disable">Proxmox VEのAdmin権限をもってしても、VMの中身を除けない</span>
    - <span class="disable">VMのログを全て取り切っていないため、SSHのアタックなどを完全に検知できていない</span>
- **KubernetesのRBACが曖昧**
- **KubernetesのClusterAdmin権限を用いれば、全てのsecretの中身を覗くことができてしまう**
    - **とはいえ、Kubernetesの管理者を育成するという観点からClusterAdminはつけておきたい**
- **マイクロサービスアーキテクチャを目指しているにも関わらずmTLSすら組んでいない**
- <span class="disable"> ~~**KubernetesやProxmox VEのユーザー作成がだるい**~~ </span>

</template>

</v-switch>

---
layout: section
---

# 4. K8s マルチテナント計画

---

<div class="absolute top-3 left-10">
  <span class="font-600">
    4. K8s マルチテナント計画
  </span>
</div>


// TODO: wip