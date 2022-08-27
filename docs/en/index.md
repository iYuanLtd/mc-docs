---
layout: home

hero:
  name: Minecraft Guide
  text: How to Play, Authlib, Create a Server...
  tagline: A Guide to Help Minecraft Beginners!
  image:
    src: /assets/img/logo.svg
    alt: Minecraft Grass Block
  actions:
    - theme: brand
      text: Getting Started
      link: /en/guide/game/getting-started
    - theme: alt
      text: Github Repo
      link: https://github.com/iYuanLtd/mc-docs

features:
  - icon: ⚡️
    title: Downloading Games.
    details: The detailed process teaches you how to download Java and the game itself correctly and quickly...
  - icon: 🖖
    title: Authlib.
    details: Teach you how to properly use Authlib to log in and join the server...
  - icon: 🛠️
    title: Create a Server.
    details: Teach you how to build your ideal server...
---

<div class="alert">
    📢 The English document has not been translated yet, please understand.
</div>

<div class="team-title">Team</div>

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
    .alert{
        margin-left:auto;
        margin-right:auto;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:1.5rem;
        padding:2rem;
        background-color: #106e37;
        color:#fff;
        font-size:24px;
        font-weight:800;
        width:80%;
        border-radius:1.5rem;
        line-height:2rem;
    }

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
