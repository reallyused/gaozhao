<template>
  <div>
      <div class="section-nav flex-btween nav-pt40">
            <div class="flex-middle">
                <span class="global_icon xyicon"></span>
                <h2 class="nav-h2 ml10">海报进校园</h2>
            </div>
       </div>
       <div class="mt30">
            <ul class="item-xueba">
                <li v-for="(i,j) in haibaoData" :key="j">
                    <div>
                        <a href="">
                             <img :src="i.img" width="230" height="370" alt="">
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
          haibaoData:null
      },
      data(){
          return{

          }
      }
}
</script>

<style scoped>
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
        background: #00958a;
    }
    .item-xueba li a:link,.item-xueba li a:visited{
        color: #fff;
    }
    .xueba-btm-title{
        padding: 5px 10px;
        color: #fff;
    }
    .xueba-btm-info{
        padding: 0px 10px 5px;
    }
</style>