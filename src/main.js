import './assets/index.css'
import '@arco-design/web-vue/dist/arco.css'

import 'pixi-spine' // Do this once at the very start of your code. This registers the loader!

import { createApp } from 'vue'
import { Modal } from '@arco-design/web-vue'
import {createPinia} from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router'


const app = createApp(App)
const pinia = createPinia()
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Modal.open({
        title: '通知',
        content: '老师，站点已更新，刷新即可访问最新内容！',
        onOk: () => {
          updateSW(true)
        }
      })
    }
  })
}

window.l2d_complete = false

// 点击链接后打开新标签页
setInterval(() => {
  document.querySelectorAll('a[href]:not(.tag)').forEach((link) => {
    link.classList.add('tag')
    link.addEventListener('click', async (e) => {
      const url = link.getAttribute('href')
      e.preventDefault()
      //遮挡层
      document.querySelector('#curtain').style.display = 'block'
      setTimeout(() => {
        let a = document.createElement('a')
        a.href = url
        a.target = '_blank'
        a.click()
      }, 900)
      // 延迟3秒后关闭遮挡层
      setTimeout(() => (document.querySelector('#curtain').style.display = ''), 3000)
    })
  })
}, 1000)

import * as PIXI from 'pixi.js'
import { sound } from '@pixi/sound'

// 这里是学生的l2d载入位置，想要修改自己喜欢的学生可以改这里
import hina_swimsuit from '/l2d/hina_swimsuit/CH0063_home.skel?url'
import hina_bgm from '/l2d/hina_swimsuit/Theme_21.mp3'
import aris from '/l2d/aris/Aris_home.skel?url'
import aris_bgm from '/l2d/aris/Someday_-sometime.mp3'
import hoshino_swimsuit from '/l2d/hoshino_swimsuit/Hoshino_swimsuit_home.skel?url'
import hoshino_bgm from '/l2d/hoshino_swimsuit/DIVE_INTO_SUMMER.mp3'
import iroha from '/l2d/iroha/CH0156_home.skel?url'
import iroha_bgm from '/l2d/iroha/Walkthrough.mp3'
/*
 * students 是学生l2d的位置
 * l2dBGM 是学生背景音乐的位置
 * */
const students = [hina_swimsuit, aris,hoshino_swimsuit,iroha]
const l2dBGM = [hina_bgm, aris_bgm,hoshino_bgm,iroha_bgm]
/*——————————————————————————————————————————————————*/
export let studentsL2D = []
export let bgmName = [];

// 加载大厅L2D文件
(async function () {
  for (let i of students) {
    studentsL2D.push(await PIXI.Assets.load(i))
  }
  for (let i of l2dBGM) {
    sound.add(i.split('/').pop().split('.')[0], {
      url: i,
      loop: true
    })
    bgmName.push(i.split('/').pop().split('.')[0])
  }

  window.l2d_complete = true
})()
