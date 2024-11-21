<script setup>
import { ref } from 'vue'
import TopBar from './components/TopBar.vue'
import Curtain from '@/components/Curtain.vue'
import router from "@/router";

const characterImage = ref('/img/Hoshino.png')
const rankImage = ref('/img/rank.png')
const curtainRef = ref()

/**
 * 播放curtain过场动画随后切换路由
 * @param { string } routerCase 需要如何切换路由: <br>
 *  "-1":回到上一步, "lobby": 回到大厅
 */
const routerNavigate = (routerCase) => {
  switch (routerCase){
    case "-1":
      curtainRef.value.skip(()=>{
        router.go(-1)
      })
      break
    case "main":
      curtainRef.value.skip(()=>{
        router.push("/")
      })
      break
  }
}

</script>


<template>
  <div>
    <TopBar @routerNavigate="routerNavigate"></TopBar>
    <div class="profile-container">

      <div class="img-container" :style="{backgroundImage: `url(${characterImage})`}">
        <div class="greeting">
          <div class="greeting-title blue-box">
            <h2 style="color:white">问候语</h2>
          </div>

          <div class="greeting-text">
            <el-card>
              <template #default>
                <span style="font-size:15px">Good morning ! And in case I don't see you.</span>
                <el-divider style="margin:10px 0;"></el-divider>
                <span style="font-size:15px">Good afternoon ! Good evening ! And good night!</span>
                <el-divider style="margin:10px 0;"></el-divider>
              </template>
            </el-card>
          </div>
        </div>
      </div>

      <div class="id-card">
        <div class="blue-box name-card">
          <h2 style="color:white;margin:0 30px;font-size:30px;">pure</h2>
        </div>

        <div class="nickname" style="margin-bottom: 40px;">
          <el-card style="width: 80%;height:auto;max-height: 60px;align-items: center">
            <template #default>
              <span style="margin-right:18%;font-size:20px;color:#06639f">昵称</span>
              <span style="margin-right:35%;font-size:20px;color:#000033;font-weight:bold">Unknown</span>
              <span style="font-size:20px;color:#000033;font-weight:bold">老师</span>
            </template>
          </el-card>
        </div>

        <div class="uid-card" style="margin-bottom: 40px;">
          <el-card style="opacity: 0.7;align-items: center;width: 90%;">
            <template #default>
              <span style="margin-right:18%;font-size:20px;color:#06639f">等级</span>
              <span style="font-size:18px;color:#000033;font-weight:bold">83(MAX)</span>
              <br>
              <el-divider style="margin:10px 0;"></el-divider>
              <span style="margin-right:18.9%;font-size:20px;color:#06639f">UID</span>
              <span style="font-size:18px;color:#000033;font-weight:bold">5201314</span>
            </template>
          </el-card>
        </div>

        <div class="rank-card-title blue-box">
          <span style="color:white;font-size:20px;font-weight:bold">排名</span>
        </div>
        <div class="rank-card-content" :style="{backgroundImage: `url(${rankImage})`}">
          <el-card style="opacity: 0.5;align-items: center;width: 90%;z-index: -1">
            <template #default>
              <span style="margin-left:20%;margin-right:5%;font-size:20px;color:#06639f">最高排名</span>
              <span style="font-size:18px;color:#000033;font-weight:bold">7e9</span>
              <br>
              <el-divider style="margin:10px 20%;width:70%;">
              </el-divider>
              <span style="margin-left:20%;margin-right:5.8%;font-size:20px;color:#06639f">当前排名</span>
              <span style="font-size:18px;color:#000033;font-weight:bold">---</span>
            </template>
          </el-card>
        </div>
      </div>
    </div>
    <div class="curtain">
      <Curtain ref="curtainRef"></Curtain>
    </div>
  </div>
</template>

<style scoped>

.img-container{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height:auto;
  width:70%;
}

.rank-card-content{
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: left;
}


.blue-box {
  background: linear-gradient(120deg, #003153, #2265bb 15%, #003153 70%, #003153);
  border-radius: 10px;
  filter: drop-shadow(0 3px 3px black);
  display: flex;
  transform: skew(-10deg);
}

.profile-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}


.greeting{
  margin: 500px 0 0 100px;
  display: flex;
  width: 100%;
  height:auto;
  flex-direction: column;
}


.greeting-title {
  width: 100px;
  height: 60px;
  position: absolute;
  margin: 0 0;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.greeting-text{
  margin:50px 20px;
  width:auto;
  max-width: 60%;
  opacity: 0.7;
}

.id-card{
  margin: 100px 0 0 200px;
  display: flex;
  width: 50%;
  height:auto;
  flex-direction: column;
}

.name-card{
  margin-bottom: 40px;
  width: 90%;
  height: 70px;
  align-items: center;
}

.rank-card-title{
  margin-bottom: 40px;
  width: 90%;
  height: 40px;
  justify-content: center;
  align-items: center;
}

</style>