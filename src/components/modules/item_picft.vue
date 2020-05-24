<template>
  <div class="box-over clearfix">
      <div class="item-pic-ft" v-for="(i,j) in itemData" :key="j">
          <router-link :to="{name:'personContent',params:{id:i.id}}" target="_blank">
          <div>
              <img :src="i.img" class="itemData-img" width="380" height="222" alt="">
          </div>
          <div class="itemPic-t-box">
              <div class="itemPic-s">
                  {{i.school}}
              </div>
              <div class="itemPic-n">
                  {{i.name}}
              </div>
          </div>
          <div class="itemPic-info">
                {{i.info}}
          </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
 name:'item_picft',
 props:{
     itemData:{
         type:Array,
         default:[]
     }
 }
}
</script>

<style scoped>
    .itemPic-s{
        font-size: 18px;
        margin-right: 20px;
        width: 70%;
        overflow: hidden;
    }
    .itemPic-n{
        font-size: 18px;
        font-weight: bold;
        text-align: right;
    
    }
    .itemPic-info{
        font-size: 16px;
        padding: 0 20px;
        color: #666;
    }
    .itemData-img{
        width: 380px;
        height: 222px;
        border-radius: 10px;
    }
    .itemPic-t-box{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        white-space:nowrap;
    }
    .item-pic-ft{
        float: left;
        width: 380px;
        margin-right: 28px;
        height: 354px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 5px #d8d8d8;
        margin-top:30px;
    }
    .box-over{
        width: 1250px;
    }
    .item-pic-ft a:hover{
        text-decoration: none;
    }
    .item-pic-ft a:hover .itemPic-t-box{
        color: #f53f3e;
    }
</style>