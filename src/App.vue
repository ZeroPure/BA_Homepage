<script setup>
import Cursor from '@/components/Cursor.vue'
</script>

<template>
  <div id="background"></div>
  <main>
    <router-view v-slot="{ Component }">
    <transition name="view-animation" mode="out-in">
      <component :is="Component" />
    </transition>
    </router-view>
    <div id="curtain"></div>
    <Cursor></Cursor>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.loading-leave-to {
  opacity: 0;
}

.loading-leave-from {
  opacity: 1;
}

.loading-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.up-leave-to,
.up-enter-from {
  transform: translateY(-300px);
}

.up-leave-from,
.up-enter-to {
  transform: translateY(0);
}

.down-leave-to,
.down-enter-from {
  transform: translateY(300px) skew(-20deg);
}

.down-leave-from,
.down-enter-to {
  transform: translateY(0) skew(-20deg);
}

@media screen and (max-width: 495px) {
  .down-leave-to,
  .down-enter-from {
    transform: translateY(300px);
  }

  .down-leave-from,
  .down-enter-to {
    transform: translateY(0);
  }

  .up-leave-to,
  .up-enter-from {
    transform: translateY(-300px) skew(-10deg);
  }

  .up-leave-from,
  .up-enter-to {
    transform: translateY(0) skew(-10deg);
  }
}

.left-leave-to,
.left-enter-from {
  transform: translateX(-300px);
}

.left-leave-from,
.left-enter-to {
  transform: translateX(0);
}

.up-leave-active,
.down-leave-active,
.left-leave-active {
  transition: transform 0.3s ease-in;
}

.up-enter-active,
.down-enter-active,
.left-enter-active {
  transition: transform 0.3s ease-out;
}

#background {
  background-image: url('/shitim/Event_Main_Stage_Bg.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 从页面下方进入的动画 */
.view-animation-enter-from {
  opacity: 0; /* 初始状态：完全透明 */
}
.view-animation-enter-to {
  opacity: 1; /* 最终状态：完全不透明 */
}
.view-animation-enter-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* 淡入 */
}

/* 离开动画 */
.view-animation-leave-from {
  opacity: 1; /* 初始状态：完全不透明 */
}
.view-animation-leave-to {
  opacity: 0; /* 最终状态：完全透明 */
}
.view-animation-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* 淡出并同时做位置过渡 */
}
</style>
