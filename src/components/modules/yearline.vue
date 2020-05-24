<template>
  <div>
       <div class="section-nav ">
            <span class="global_icon fsx"></span><h2 class="nav-h2 ml10">历年分数线</h2>
        </div>
        <div class="item-flex-line mt15">
          <div class="item-line-btn" v-for="(i,j) in line" :key="j">
              <span>
                  <a href="">
                      {{i.name}}
                  </a>
              </span>
          </div>
        </div>
  </div>
</template>
<script>
export default {
 name:'yearline',
 props:['line'],
 data(){
     return{

     }
 }
}
</script>

<style scoped>
 .item-line-btn{
     width: 280px;
     height: 95px;
     cursor: pointer;
     line-height: 95px;
 }
 .item-line-btn:nth-child(1){
     background: url(../../../public/staticimg/fsxbg01.png) no-repeat;
 }
  .item-line-btn:nth-child(2){
     background: url(../../../public/staticimg/fsxbg02.png) no-repeat;
 }

  .item-line-btn:nth-child(3){
     background: url(../../../public/staticimg/fsxbg03.png) no-repeat;
 }
   .item-line-btn:nth-child(4){
     background: url(../../../public/staticimg/fsxbg04.png) no-repeat;
 }
 .item-flex-line{
     display: flex;
     justify-content: space-between;
 }
 .item-line-btn, .item-line-btn a:link, .item-line-btn a:visited{
     font-size: 24px; 
     color: #fff;
     text-indent: 1em;
     font-weight: bold;
 }
 .item-line-btn a:hover{
    text-decoration: none;
 }
</style>