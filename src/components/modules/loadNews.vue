<template>
  <div>
      <div class="item-policy" v-for="(i,j) in loadNews" :key="j">
        <router-link target="_blank" class="policy-flex-link" :to="{name:'detail',params:{id:i.id}}">
            <div v-if="i.img" class="policy-l-img">
                <img :src="i.img" class="policy-img" width="260" height="150" alt="">
            </div>
            <div class="policy-title">
             <h2 class="policy-h2"> {{i.title}} </h2>
            </div>
            <div class="policy-date">
              {{i.date}}
            </div>
        </router-link>
      </div>
    
  </div>
</template>

<script>
export default {
  name:"loadNews",
  props:{
    loadNews:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-policy a:hover{
    text-decoration: none;

  }
    .item-policy a:hover h2{
     color: #fe4b44;
    }
  .policy-flex-link{
    display: flex;
    justify-content: space-between;
  }
  .policy-h2{
    font-weight: bold;
    font-size: 20px;
    color: #444;
  }
  .policy-l-img{
    width: 260px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 20px;
    }
  .policy-img{
    border-radius: 10px;
  }
  .policy-title{
    flex-shrink: 1;
    flex-grow:1;
  }
  .item-policy{
    margin: 20px 0;
    border-bottom:1px solid #dcdcdc;
    padding-bottom: 20px;
  }
  .policy-date{
    color: #999;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    flex-grow:0;
    margin-left: 15px;
  }
</style>