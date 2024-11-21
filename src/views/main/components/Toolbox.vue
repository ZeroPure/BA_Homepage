<script setup>
import { Modal } from '@arco-design/web-vue'
import { h, ref } from 'vue'
import config from '/_config.json'
const emit = defineEmits(['switch'])
const props = defineProps(['l2dOnly'])

const img = ref('/img/max.png')
const showMin = ref(false)
// 是否为移动设备
const hover = ref(window.matchMedia('(hover: none)').matches)

const about = () => {
  Modal.open({
    title: 'About',
    content: () => [
      h(
          'p',
          {},
          '基于蔚蓝档案主题的个人主页'
      ),

      h(
        'p',
        {},
          `© ${new Date().getFullYear()} ${config.author}`
      ),

      h('hr',{}),

      h(
          'p',
          {},
          ['项目原作者:  ',h(
              'a',
              {href: 'https://github.com/sf-yuzifu/homepage', target: '_blank', style:"color: #5196ff; font-weight: bold;"},
              '小鱼yuzifu'
          )]
      ),

      h(
          'p',
          {},
          ['页面设计借鉴:  ',h(
              'a',
              {href: 'https://github.com/ApricotLemonTea/BA-style-homepage', target: '_blank', style:"color: #5196ff; font-weight: bold;"},
              '杏仁レモンティー'
          )]
      ),
      config.ICP
        ? [
            h('br', {}, ''),
            h('a', { href: 'https://beian.miit.gov.cn/', target: '_blank' }, config.ICP)
          ]
        : null
    ],
    footer: false
  })
}

// 切换观赏模式还是操作模式的图标变化
const change = () => {
  img.value = img.value === '/img/min.png' ? '/img/max.png' : '/img/min.png'
  emit('switch')
}

// 当为观赏模式时，鼠标悬停在图标上时显示，鼠标离开时隐藏
document.body.addEventListener('click', () => {
  if (props.l2dOnly && hover.value) {
    showMin.value = !showMin.value
  } else {
    showMin.value = true
  }
})

// 检测设备是否支持悬停操作，当匹配状态发生变化时，回调函数将被调用
window.matchMedia('(hover: none)').addListener((e) => {
  hover.value = e.matches
})

</script>

<template>
  <div class="toolbox-box">
    <div
      class="toolbox"
      :style="{
        transform: (!props.l2dOnly ? 'translateY(0)' : 'translateY(-300px)') + ' skew(-10deg)',
        transition: 'transform 0.3s ' + (!props.l2dOnly ? 'ease-out' : 'ease-in')
      }"
    >
      <img src="/img/ap.png" alt="" />
      <span>{{ '114' + '/' + '514' }}</span>
    </div>
    <div
      class="toolbox"
      :style="{
        transform: (!props.l2dOnly ? 'translateY(0)' : 'translateY(-300px)') + ' skew(-10deg)',
        transition: 'transform 0.3s ' + (!props.l2dOnly ? 'ease-out' : 'ease-in')
      }"
    >
      <img src="/img/gold.png" alt="" />
      <span>500,404,200</span>
    </div>
    <div
      class="toolbox"
      :style="{
        transform: (!props.l2dOnly ? 'translateY(0)' : 'translateY(-300px)') + ' skew(-10deg)',
        transition: 'transform 0.3s ' + (!props.l2dOnly ? 'ease-out' : 'ease-in')
      }"
    >
      <img src="/img/pyroxene.png" alt="" />
      <span>24,000</span>
    </div>
    <a
      class="about toolbox"
      @click="about"
      :style="{
        transform: (!props.l2dOnly ? 'translateY(0)' : 'translateY(-300px)') + ' skew(-10deg)',
        transition: 'transform 0.3s ' + (!props.l2dOnly ? 'ease-out' : 'ease-in')
      }"
    >
      <icon-info-circle class="css-cursor-hover-enabled" />
    </a>
    <a
      class="l2d toolbox"
      :class="{ canHover: !hover }"
      @click="change"
      :style="{
        transform: (!props.l2dOnly ? 'translateY(0)' : 'translateY(-76px)') + ' skew(-10deg)',
        transition: 'transform 0.3s ' + (!props.l2dOnly ? 'ease-out' : 'ease-in') + ',opacity 0.6s',
        opacity: !props.l2dOnly || (showMin && hover) ? 1 : 0
      }"
    >
      <img alt="" :src="img" />
    </a>
  </div>
</template>

<style scoped>
.toolbox-box {
  position: absolute;
  right: 20px;
  top: 40px;
  display: inline-flex;
}

.toolbox-box .toolbox {
  width: 220px;
  height: 56px;
  background: #fffd;
  color: #003153;
  margin: 0 10px;
  transform: skew(-10deg);
  border-radius: 6px;
  filter: drop-shadow(0px 0px 3px #0003);
  transition:
    background-color 0.3s,
    transform 0.1s;
  display: flex;
  align-items: center;
}

.toolbox img {
  height: 70%;
  transform: skew(10deg);
  margin: 0 8px 0 10px;
}
.toolbox span {
  font-size: 26px;
  transform: skew(10deg);
}

.toolbox-box .toolbox.about,
.toolbox-box .toolbox.l2d {
  width: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.toolbox-box .toolbox.l2d {
  position: absolute;
  right: 0;
  top: 76px;
  overflow: hidden;
}

.toolbox.l2d img {
  filter: drop-shadow(-100vw 0px 0px #003153);
  transform: translateX(100vw);
  height: 32px;
}

.toolbox-box .toolbox:hover {
  background: #fffe;
}

.toolbox-box .toolbox.about:active,
.toolbox-box .toolbox.l2d:active {
  transform: skew(-10deg) scale(0.9);
}

.arco-icon {
  font-size: 32px;
  transform: skew(10deg);
}

@media screen and (max-width: 1199px) {
  .toolbox:not(.about) {
    display: none;
  }
}

.toolbox-box .toolbox.l2d.canHover:hover {
  opacity: 1 !important;
}
</style>
