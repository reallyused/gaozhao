<template>
 <div>
     <div class="section-nav">
        <span class="global_icon yxzn"></span><h2 class="nav-h2 ml10">院校指南</h2>
     </div>
      <div class="nav-pt20">
          <div class="nav-yxzhn">
             <div class="nav-yxzhn-item"  v-for="(a,b) in yxznName" :class="{'activenav': b==activeIndex}" @click="changeRank(b)" :key="b">
                 {{a}}
             </div>
          </div>
          <div class="item-rank-box">
              <ul class="item-rank">
                  <li v-for="(i,j) in yxzninfoItem[activeIndex]" :key="j">
                     <span>{{j+1}}</span> <a href="">{{i.title}}</a>
                  </li>
              </ul>
          </div>
 
     </div>
 </div>
</template>
<script>
export default {
    name: 'zhinan',
    props:['yxzninfo'],
    data(){
        return {
            activeIndex:0,
        }
    },
    computed:{
        yxznName(){
            return this.yxzninfo.name ? this.yxzninfo.name :[]
        },
        yxzninfoItem(){
           return  this.yxzninfo.item ? this.yxzninfo.item :[]
        }
    },
    methods:{
        changeRank(i){
            this.activeIndex = i
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-yxzhn{
    display: flex;
    justify-content: space-between;
}
.nav-yxzhn-item{
    background: #f9f9f9;
    border: 1px solid #e5e5e5;
    text-align: center;
    width: 50%;
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
}
.activenav{
    background: #fe7f0a;
    color: #fff;
    border: 1px solid #fe7f0a;
}
.item-rank li,.item-rank li a:link,.item-rank li a:visited{
    font-size: 18px;
    font-weight: normal;
}
.item-rank li a:hover{
    color: #f1372f;
}

.item-rank li{
    padding: 6px 0;
    overflow: hidden;
    white-space:nowrap;
}
.item-rank-box{
    background: #f9f9f9;
    padding: 10px 20px; 
}

.item-rank-box li span{
    background: #e8e8e8;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    display:inline-block;
    text-align: center;
    line-height: 30px;
    margin-right: 4px;
}
.item-rank-box li:nth-child(1) span,.item-rank-box li:nth-child(2)  span,.item-rank-box li:nth-child(3)  span{
    background: #fe7f0a;
    color: #fff;
}

</style>
