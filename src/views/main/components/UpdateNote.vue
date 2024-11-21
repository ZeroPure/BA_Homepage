<script setup>
import { ref } from 'vue'
import updateNote from '@/notes/update-note.json'

const dialogVisible = ref(false)

const open = () => {
  dialogVisible.value = true
}
defineExpose({ open })
</script>

<template>
  <a-modal v-model:visible="dialogVisible"
           width="auto"
           title="更新日志"
           ok-text="关闭"
           hide-cancel
           modal-animation-name="no-slide-zoom-modal"
  >
    <div class="update-note-container">
      <div v-for="note in updateNote.updateNoteList">
        <h1>{{note.title}}</h1>
        <div class="update-note-text-block">
          <p v-for="item in note.contents" :key="item" class="update-note-text">
            ・{{item}}
          </p>
        </div>
        <a-divider :size="4" :margin="50"/>
      </div>
    </div>

  </a-modal>
</template>

<style>
.update-note-container {
  height: 60vh;
  width: auto;
  min-width: 50vw;
  color: #003153;
}

.update-note-text-block {
  text-align: left;
  padding: 0 5vw;
}

</style>