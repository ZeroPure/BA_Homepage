<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const open = () => {
  dialogVisible.value = true
}
defineExpose({ open })
</script>

<template>
  <a-modal v-model:visible="dialogVisible"
           width="100%"
           title="通知"
           ok-text="关闭"
           hide-cancel
           modal-animation-name="no-slide-zoom-modal"
  >
    <div class="announce-container">
      <div class="announce-text-block">
        <p class="announce-text">
          □■□■□■□■□■□■□■□■□■□■□■□■□■□■
        </p>
        <br/>
        <p class="announce-text">
          Welcome to my personal homepage!
        </p>
        <br/>
        <p class="announce-text">
          □■□■□■□■□■□■□■□■□■□■□■□■□■□■
        </p>
      </div>
    </div>
  </a-modal>
</template>

<style>
.announce-container {
  width: 100%;
  color: #003153;
  display: flex;
  justify-content: center;
  align-items: center;
  height:auto;
  box-sizing: border-box;/* 确保宽度包含 padding 和 border */
}

.announce-text-block {
  text-align: center;
  margin: 0;
  padding:0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.announce-text {
  font-size: 20px;
  margin:auto;
}
</style>