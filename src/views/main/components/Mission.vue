<script setup>
import { ref } from 'vue'
import mission from '@/notes/mission.json'

const dialogVisible = ref(false)

const open = () => {
  dialogVisible.value = true
}
defineExpose({ open })
</script>

<template>
  <a-modal v-model:visible="dialogVisible"
           width="auto"
           title="任务"
           ok-text="关闭"
           hide-cancel
           modal-animation-name="no-slide-zoom-modal"
  >
    <div class="mission-container">
      <div class="mission-text-block">
        <p v-for="item in mission.missionList" :key="item"
           class="mission-text">
          ・{{item}}
        </p>
      </div>
    </div>

  </a-modal>
</template>

<style>
.mission-container {
  height: 30vh;
  width: auto;
  min-width: 40vw;
  color: #003153;
}

.mission-text-block {
  text-align: left;
  padding: 0 7vw;
}

.mission-text {
  font-size: 20px;
}
</style>