<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()
const ap = ref('114')
const maxAp =   ref('514')
const credit = ref('500,404,200')
const pyroxene = ref('24000')
const emit =defineEmits(['routerNavigate'])

const routerNavigate = (routerCase) => {
  emit('routerNavigate', routerCase)
}


</script>

<template>
  <div class="top-bar blue-text-color">
    <div class="back-button" @click="routerNavigate('-1')">
      <img src="/img/back.png" alt="" style="height: 100%;margin: 0">
    </div>

    <div class="page-title">
      <p>{{ route.meta.topBarTitle }}</p>
    </div>

    <div class="status-block" style="margin-left: auto">
      <img src="/img/ap.png" alt="" />
      <p style="white-space: nowrap">{{ ap }} / {{ maxAp }}</p>
      <a-divider direction="vertical" :size="2" class="divider"></a-divider>
    </div>

    <div class="status-block">
      <img src="/img/gold.png" alt="" />
      <p>{{ credit }}</p>
      <a-divider direction="vertical" :size="2" class="divider"></a-divider>
    </div>

    <div class="status-block">
      <img src="/img/pyroxene.png" alt="" />
      <p>{{ pyroxene }}</p>
      <a-divider direction="vertical" :size="2" class="divider"></a-divider>
    </div>

    <div class="other-button" @click="routerNavigate('main')">
      <img src="/img/home.png" alt="" style="height: 100%; margin: 0 auto">
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  z-index: 99;
  width: 90vw;
  height: 50px;
  margin: 0 auto;
  padding: 0 30px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  display: flex;

  .back-button {
    height: 140%;
    width: 5%;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    margin-right:10px;
  }


  .back-button img {
    border-radius: 50%;
    box-shadow: 3px 3px 7px rgba(49, 123, 146, 0.2);
  }
  .back-button:active {
    transform: scale(0.9);
  }

  .page-title {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 20px;
    font-size: 28px;
    margin-left:0;
    border-bottom: 5px solid #ffed6f;
  }
  .status-block {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    font-size: 20px;

    .divider {
      height: 60%;
      transform: rotate(15deg);
      margin-left: 40px;
    }
  }
  .other-button {
    height: 38px;
    aspect-ratio: 1;
    margin-top: 7px;
  }
  .other-button:active {
    transform: scale(0.9);
  }
}
.top-bar img {
  height: 70%;
  margin: 0 8px 0 10px;
}
</style>