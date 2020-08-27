<!--
 * @Descripttion: 商品列表
 * @Author: 张晓兰
 * @Date: 2019-11-07 17:47:09
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-09 09:42:06
 * @version: v1.0.0
 -->
<template>
    <div class="GoodsList">
        <Goodsheader></Goodsheader>
        <Goodsflex class="Goodsfiex"></Goodsflex>
        <Goodsnev></Goodsnev>
        <Goodscakes></Goodscakes>
    <div class="goods_fl">
         <GoodsLeft></GoodsLeft>
        <GoodsRight></GoodsRight>
    </div>
    </div>
</template>

<script>
import Goodsheader from '../components/Goodsheader';
import Goodsflex from '../components/Goodsflex';
import Goodsnev from '../components/Goodsnev';
import Goodscakes from '../components/Goodscakes';
import GoodsLeft from '../components/GoodsLeft';
import GoodsRight from '../components/GoodsRight';


export default {
    name:"Search",
    data(){
        return{
            
        }
    },
    components:{
        Goodsheader,Goodsflex,Goodsnev,Goodscakes,GoodsLeft,GoodsRight
    }
}
</script>

<style scoped>
    .Goodsfiex{
        margin-top:-15%; 
    }
    .goods_fl{
       clear: both;
       display: flex;
       justify-content: space-between;
    }
</style>