<template>
  <div>
        <div class="section-nav flex-btween nav-pt40">
            <div class="flex-middle">
                <span class="global_icon xuebaico"></span>
                <h2 class="nav-h2 ml10">学霸养成记</h2>
                <span class="small-title">听听学霸的学习心得，一定对你教育孩子有帮助！</span>
            </div>
            <a href="" class="r-more-link">
                更多 <img src="../../../public/staticimg/more.png" class="moreImg" alt="">
            </a>
        </div>

        <div class="mt30">
            <ul class="item-xueba">
                <li v-for="(i,j) in xueba" :key="j">
                    <div>
                        <a href="">
                             <img :src="i.img" width="230" height="185" alt="">
                        </a>
                    </div>
                    <div class="xueba-btm-title">
                        <a href="" class="blue-link">{{i.title}}</a>
                    </div>
                    <div class="xueba-btm-info">
                        <span class="bk">{{i.school}}</span>
                        <span>{{i.grade}}</span>
                        <span>{{i.name}}</span>
                        <span>{{i.type}}</span>
                    </div>
                </li>
            </ul>
        </div>

  </div>
</template>

<script>
export default {
      name:"xueba",
      props:{
          xueba:null
      },
      data(){
          return{

          }
      }
}
</script>

<style lang="scss" scoped>
 
    .r-more-link{
    
        display: flex;
        align-items: center;
        color: #666;
    }
    .moreImg{
        margin-left: 5px;
    }
    .flex-btween{
        justify-content: space-between;
    }
    .flex-middle{
        display: flex;
        align-items: center;
    }
    .item-xueba {
        display: flex;
        justify-content: space-between;
    }
    .item-xueba li{
        border-radius: 10px;
        box-shadow: 0 0 5px #999;
        overflow: hidden;
        width: 230px;
    }
    .xueba-btm-title{
        padding: 5px 10px;
    }
    .xueba-btm-info{
        padding: 0px 10px 5px;
    }
</style>