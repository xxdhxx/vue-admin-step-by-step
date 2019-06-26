<template>
  <div id="login" class="colorRed">
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
  import { test } from "@/assets/js/test.js"
  var data=new Object();
  data.name='potato';
  // this.test();
  // this.testB();
    export default {
      name: "test",
      methods:{
          login:function () {
            this.post('',data);
            alert(777);
          }

      }
    }
</script>

<style scoped>
  @import '../../assets/GooFlow/css/public.css';
  @import '../../assets/GooFlow/css/iconfont.css';
  /*@import '../../assets/GooFlow/css/style1.css';*/
</style>
