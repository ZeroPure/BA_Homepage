<script setup>
import { ref } from 'vue'
import PatchNote from '@/views/main/components/UpdateNote.vue'
import Mission from '@/views/main/components/Mission.vue'
import Announce from '@/views/main/components/Announce.vue'

const patchNoteRef = ref()
const missionRef = ref()
const announceRef = ref()

defineEmits(["start-guide"])

const viewedAnnounceDate = ref(localStorage.getItem("viewed-announce-date"))
const recentAnnounceDate = ref("2024-11-20")
const hasNewAnnounce = ref(viewedAnnounceDate.value === recentAnnounceDate.value ? 0 : 1)

/**
 * 打开patch note页面
 */
const openPatchNote = () => {
  patchNoteRef.value.open()
}

/**
 * 打开mission页面
 */
const openMission = () => {
  missionRef.value.open()
}

/**
 * 打开announce页面
 */
const openAnnounce = () => {
  localStorage.setItem("viewed-announce-date", recentAnnounceDate.value)
  hasNewAnnounce.value = 0
  announceRef.value.open()
}
</script>

<template>
  <div class="contact-box">
    <a-badge :count="hasNewAnnounce" :offset="[-25, -10]"
             dot :dot-style="{width: '13px', height: '13px'}">
      <a-popover position="top">
        <div class="contact css-cursor-hover-enabled"
             @click="openAnnounce">
          <img src="/img/announce.png" alt="" />
          <span style="white-space: nowrap; margin-top: 9px">通知</span>
        </div>
        <template #title>
          <h3 class="blue-text-color">通知</h3>
        </template>
        <template #content>
          <p class="blue-text-color">重要信息将会在这里发布</p>
        </template>
      </a-popover>
    </a-badge>

    <a-popover position="top">
      <div class="contact css-cursor-hover-enabled"
           @click="$emit('start-guide')">
        <img src="/img/guide.png" alt="" />
        <span style="white-space: nowrap;">指南</span>
      </div>
      <template #title>
        <h3 class="blue-text-color">指南</h3>
      </template>
      <template #content>
        <p class="blue-text-color">介绍本网页的功能</p>
      </template>
    </a-popover>

    <a-popover position="bottom">
      <div class="contact css-cursor-hover-enabled"
           @click="openPatchNote">
        <img src="/img/patchNote.png" alt="" />
        <span style="white-space: nowrap;margin-left:10px">更新日志</span>
      </div>
      <template #title>
        <h3 class="blue-text-color">更新日志</h3>
      </template>
      <template #content>
        <p class="blue-text-color">记录网页更新内容</p>
      </template>
    </a-popover>

    <a-popover position="bottom">
      <div class="contact css-cursor-hover-enabled"
           @click="openMission">
        <img src="/img/mission.png" alt="" />
        <span style="white-space: nowrap;">任务</span>
      </div>
      <template #title>
        <h3 class="blue-text-color">任务</h3>
      </template>
      <template #content>
        <div class="blue-text-color">
          <p>记录未来希望实现的内容</p>
        </div>
      </template>
    </a-popover>

    <PatchNote ref="patchNoteRef" class="contact"></PatchNote>
    <Mission ref="missionRef" class="contact"></Mission>
    <Announce ref="announceRef" class="contact"></Announce>
  </div>
</template>

<style scoped>
.contact-box {
  position: absolute;
  left: 20px;
  top: 186px;
  display: grid;
  grid-template-columns: repeat(2, 130px);
  grid-gap: 20px;
  height: auto;
  justify-items: center;
}

.contact {
  height: max-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 15px;
  margin: 0 20px;
  transition: transform 0.05s;
}

.contact span {
  margin: 7px 0 0;
  font-size: 20px;
  color: #003153;
  font-weight: 800;
}

.contact span {
  text-shadow:
      #fff 1px 0 0,
      #fff 0 1px 0,
      #fff -1px 0 0,
      #fff 0 -1px 0,
      #fff 2px 0 0,
      #fff 0 2px 0,
      #fff -2px 0 0,
      #fff 0 -2px 0;
}

.arco-icon {
  font-size: 48px;
  filter: drop-shadow(0px 0px 4px #fff6);
}

.contact img {
  height: 48px;
  filter: drop-shadow(0px 0px 4px #fff6);
}

.contact:active {
  transform: scale(0.9);
}
</style>
