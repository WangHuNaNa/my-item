<!--
 * @Descripttion: 购物车
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-11 08:45:15
 * @version: v1.0.0
 -->
<template>
    <div>
        <ShoppingTop @lesionEvenet="thisBol" class="Shopp_top"></ShoppingTop>
        <ShoppingList></ShoppingList>
        <!-- <ShopList></ShopList> -->
        <Shoppguess ></Shoppguess>
        <Shoppbottom class="Shopp_bot"></Shoppbottom>
    </div>
</template>

<script>
import ShoppingTop from '../components/ShoppingTop';
import ShoppingList from '../components/ShoppingList';
// import ShopList from '../components/ShopList';
import Shoppguess from '../components/Shoppguess';
import Shoppbottom from '../components/Shoppbottom';
export default {
    name:"Search",
    data(){
        return{
            bol : false
        }
    },
    components:{
        ShoppingTop,Shoppbottom,ShoppingList,Shoppguess
    },
     methods:{
        thisBol(val){
            this.val = val;
        }
    }
 
}
</script>

<style scoped>
html,body{
    background: #f1f1f1;
}
    .Shopp_bot{
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .Shopp_top{
        position: fixed;
        top: 0;
        left: 0;
    }
</style>