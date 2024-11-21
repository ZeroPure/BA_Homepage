<script setup>
import{ref} from 'vue'
import Footer from './components/Footer.vue'
import Level from './components/Level.vue'
import Contact from './components/Contact.vue'
import Task from './components/Task.vue'
import Indexs from  '@/notes/index.json'
import Background from "@/views/main/components/Background.vue"
import Toolbox from "@/views/main/components/Toolbox.vue";
import NProgress from 'nprogress'
import Loading from "@/views/main/components/Loading.vue";
import {useRouter} from "vue-router";
import Curtain from "@/components/Curtain.vue";
import {useUserStore} from "@/store/userStore";


const prevButtonProps = {
  children: '上一步',
}
const nextButtonProps = {
  children: '下一步',
}
const nextButtonPropsEND = {
  children: '完成',
}


const percent = ref(1)
const l2dOnly = ref(false)
const showGuide = ref(false)
const router = useRouter()
const curtainRef = ref()
const userStore = useUserStore()

// 只在第一次打开网站时显示加载动画
if(userStore.isFirstOpen){
  NProgress.start()
  const load = setInterval(() => {
    percent.value = NProgress.status
    if (document.readyState === 'complete' && window.l2d_complete === true) {
      NProgress.done()
      percent.value = 1
      setTimeout(() => {
        userStore.setFirstOpen(false)
      }, 2000)
      clearInterval(load)
    }
  }, 1)
}

//引导
const startGuide = () => {
  showGuide.value = true
}

//切换L2D
const switchL2D = () => {
  l2dOnly.value = !l2dOnly.value
}


const openProfile = () => {
  curtainRef.value.skip(() => {
    router.push({ name: "Profile" })
  })
}



</script>
<template>
  <div>
    <transition name="loading">
      <Loading v-if="userStore.isFirstOpen" :percent="percent"></Loading>
    </transition>

    <main v-if="!userStore.isFirstOpen">
      <Background :l2dOnly="l2dOnly"></Background>

      <Toolbox :l2dOnly="l2dOnly" @switch="switchL2D"></Toolbox>

      <div id="level-ref"></div>
      <transition name="up">
        <Level v-if="!l2dOnly" @openNewPage="openProfile"></Level>
      </transition>

      <div id="task-ref"></div>
      <Task :l2dOnly="!l2dOnly"></Task>

      <div id="footer-ref"></div>
      <transition name="down">
        <Footer v-if="!l2dOnly"></Footer>
      </transition>

      <div id="contact-ref"></div>
      <transition name = "left">
        <transition name="left">
          <Contact v-if="!l2dOnly" @start-guide="startGuide"></Contact>
        </transition>
      </transition>

      <el-tour v-model="showGuide" :target-area-clickable="false">
        <template #indicators="{ current, total }">
          <span class="blue-text-color">{{ current + 1 }} / {{ total }}</span>
        </template>
        <el-tour-step
            v-for="(step, index) in Indexs.index"
            :key="index"
            :target="`#${step.id}`"
            :prev-button-props="prevButtonProps"
            :next-button-props="step.finish === 'OK' ?  nextButtonPropsEND : nextButtonProps"
        >
          <template #header>
            <h3 class="blue-text-color">{{ step.title }}</h3>
          </template>
          <template #default>
            <div v-for="(content, index) in step.content" :key="index" class="blue-text-color mt-md-ml-10">
              <p>{{ content }}</p>
            </div>
          </template>
        </el-tour-step>
      </el-tour>
    </main>
    <Curtain ref="curtainRef"></Curtain>
  </div>
</template>


<style scoped>
#level-ref {
  position: fixed;
  top: 30px;
  left: 0;
  width: 330px;
  height: 120px;
}
#contact-ref {
  position: fixed;
  top: 150px;
  left: 20px;
  width: 280px;
  height: 200px;
}
#ap-ref {
  position: fixed;
  top: 20px;
  right: 605px;
  width: 230px;
  height: 90px;
}
#task-ref {
  position: fixed;
  bottom: 130px;
  right: 30px;
  width: 200px;
  height: 160px;
}
#footer-ref {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 140px;
}

.mt-md-ml-10 {
  margin: 10px 0 10px 10px;
}

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


</style>