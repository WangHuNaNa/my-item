<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-07 16:55:52
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 10:22:29
 * @version: v1.0.0
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
}
#app { 
  margin-top: 5px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display: block;
}
</style>
