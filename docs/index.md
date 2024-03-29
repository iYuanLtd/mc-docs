---
layout: home

hero:
  name: Minecraft 指南
  text: 下载游戏、皮肤站登录、搭建服务器等等
  tagline: 为 Minecraft 小白提供帮助的指南
  image:
    src: /assets/img/logo.svg
    alt: Minecraft Grass Block
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/game/getting-started
    - theme: alt
      text: Github 仓库
      link: https://github.com/iYuanLtd/mc-docs

features:
  - icon: ⚡️
    title: 下载游戏
    details: 详细过程教您如何正确快速下载 Java 和游戏本体...
  - icon: 🖖
    title: 皮肤站登录
    details: 教您如何正确使用皮肤站登录并加入服务器...
  - icon: 🛠️
    title: 搭建服务器
    details: 教您如何搭建自己心仪的服务器...
---

<div class="team-title">制作团队</div>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '//github.com/iYuanLtd.png',
    name: 'iYuanLtd',
    title: 'Our Team',
    links: [
      { icon: 'github', link: 'https://github.com/iYuanLtd' }
    ]
  },
  {
    avatar: '//github.com/yuanzhidao.png',
    name: 'iYuan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yuanzhidao' }
    ]
  },
  {

    avatar: '//github.com/byronpiao.png',
    name: 'Emori',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/byronpiao' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />

<style scoped>
    .team-title{
        display:flex;
        justify-content:center;
        margin-top:3rem;
        margin-bottom:1.5rem;
        font-size:24px;
        font-weight:800;
        color: #5e5e5e;
    }
</style>

<style>
    :root {
        --vp-home-hero-name-color: transparent;
        --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #35495e -80%, #41b883);
        --vp-home-hero-image-background-image: linear-gradient(-45deg, #41b88380 30%, #35495e80);
        --vp-home-hero-image-filter: blur(72px);
    }
</style>
