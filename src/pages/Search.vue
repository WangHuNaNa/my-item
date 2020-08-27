<!--
 * @Descripttion: 搜索
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-11 18:15:31
 * @version: v1.0.0
 -->
<template>
  <div class="wrapper">
    <!-- search-top -->
    <div class="search-top">
      <img class="s_ren" src="../assets/img/return.png" alt @click="back()" />
      <input type="text" v-model="searchInput" :placeholder="tip" />
      <img class="s_sec" src="../assets/img/search.png" alt />
      <span @click="serch()">搜索</span>
    </div>
    <!-- E search-top -->
    <!-- S search-find -->
    <div class="search-find">
      <div class="find">
        <span class="s_left">搜索发现</span>
        <img src="../assets/img/refresh.png" alt />
        <span class="s_right">换一批</span>
      </div>
      <div class="s_mibot">
        <span @click="searchFind(val,i)" v-for="(val,i) in tagList" :key="i">{{val.name}}</span>
      </div>
    </div>
    <!-- E search-find -->
    <!-- S  Sechistory  -->
    <div class="search-history">
      <div class="find">
        <span class="s_left">历史搜索</span>
        <img @click="deleteStorage()" src="../assets/img/delete.png" alt />
      </div>
      <div class="s_mibot">
        <span v-for="(val,i) in histotyList" :key="i">{{val}}</span>
      </div>
    </div>
    <!--S Secguess -->
    <div class="search-Secguess">
      <div class="find">
        <span class="s_left">猜你在线</span>
      </div>
      <div class="s_mibot">
        <ul>
          <li v-for="(item,i) in list" :key="i">
            <img class="image" :src="item.imgval" alt />
            <p>{{item.name}}</p>
            <img class="s_ahd" src="../assets/img/ahead.png" alt />
          </li>
        </ul>
      </div>
    </div>
    <!--E Secguess -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchInput: "",
      tip: "轻食说 满35减15",

      tagList: [
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" },
        { name: "魏家凉皮", id: "1" }
      ],

      histotyList: [],

      list: [
        {
          id: 1,
          name: "魏家便利（陕商大厦店）",
          imgval: require("../assets/img/life-001.jpg")
        }
      ]
    };
  },
  created() {
    //   params /api代理 /login接口名称 params后台接收参数
    var that = this;
    var params = {};
    params.user= 'name';
    params.pwd= '123456';
      this.$http.get('/api/login',params).then(function(res){
        //   res 为返回值  直接从res对象中取出 需要对象赋值给 页面需要就行了
        //  例如 that.list = res.data.list[]
          console.log(res)
      })
     var valtem = localStorage.getItem("tag");
      valtem ? (this.histotyList = JSON.parse(valtem)) : "";
    },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 点击搜索按钮
    serch() {
     
      var tag = this.searchInput;
     this.addLocalStorage(tag)
    
    },
    // 删除历史记录
    deleteStorage() {
      localStorage.removeItem("tag");
      this.histotyList = [];
      console.log("移除历史记录");
    },
    // 点击搜索发现
    searchFind(val,i){
        this.addLocalStorage(val.name);
    },
    // 添加历史记录
    addLocalStorage(tag){
      var list = this.histotyList; 
       list.push(tag); 
      localStorage.setItem("tag",JSON.stringify(list));
      var valtem = localStorage.getItem("tag");
      valtem ? (list = JSON.parse(valtem)) : "";
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
/* S search-top */
.search-top {
  width: 96%;
  height: 0.27rem;
  position: relative;
  display: flex;
  margin: 0 auto;
}
.search-top .s_ren {
  width: 0.2rem;
  height: 0.2rem;
  margin-left: 5px;
  margin-top: 0.03rem;
}
.search-top input {
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background: #e7e7e7;
  border: none;
  font-size: 0.12rem;
  text-indent: 0.25rem;
  margin: 0 014px 0 0.17rem;
  outline: none;
}
.search-top .s_sec {
  width: 0.13rem;
  height: 0.14rem;
  position: absolute;
  left: 0.45rem;
  top: 0.08rem;
}
.search-top span {
  width: 0.5rem;
  height: 100%;
  background: #ffd162;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.12rem;
  line-height: 0.27rem;
  text-align: center;
}
/* E search-top */
/* S search-find */
.find {
  width: 92%;
  height: 0.14rem;
  margin: 0.22rem auto 7px;
}
.find > span {
  font-size: 14px;
  color: #505050;
  line-height: 14px;
}
.find .s_left {
  float: left;
}
.find .s_right {
  float: right;
}
.find > img {
  width: 0.13rem;
  height: 0.13rem;
  float: right;
  margin-left: 4px;
}
.s_mibot {
  width: 94%;
  /* height: 1.3rem; */
  margin: 0 auto;
}
.s_mibot > span {
  display: block;
  float: left;
  font-size: 14px;
  background: #f4f4f4;
  border: 5px solid #f5f5f5;
  margin: 7px;
}
/* E search-find */
/* S .search-history */
.search-history .find > span {
  font-size: 14px;
  color: #505050;
  line-height: 14px;
}
.search-history .s_left {
  float: left;
}
.search-history .s_right {
  float: right;
}
.search-history .find > img {
  width: 0.13rem;
  height: 0.13rem;
  float: right;
  margin-left: 4px;
}
.search-history .s_mibot {
  width: 94%;
  /* height: 0.85rem; */
  margin: 0 auto 0.05rem;
}
.search-history .s_mibot > span {
  display: block;
  float: left;
  font-size: 14px;
  background: #f4f4f4;
  border: 5px solid #f5f5f5;
  margin: 7px;
}
/* E .search-history */
/* S search-Secguess */
.search-Secguess .search-top.find > span {
  display: block;
  font-size: 14px;
  color: #505050;
  line-height: 14px;
}
.search-Secguess .s_mibot {
  width: 94%;
  margin: 0 auto 0.05rem;
}
.search-Secguess .s_mibot > ul {
  width: 100%;
}
.search-Secguess .s_mibot > ul > li {
  width: 100%;
  height: 0.4rem;
  margin-top: 5px;
}
.search-Secguess .image {
  width: 6%;
  height: 58%;
  display: block;
  float: left;
  margin-top: 8px;
}
.search-Secguess .s_mibot > ul > li > p {
  font-size: 14px;
  float: left;
  line-height: 0.4rem;
  margin-left: 10px;
}
.search-Secguess .s_ahd {
  width: 5%;
  float: right;
  margin-top: 10px;
}
</style>