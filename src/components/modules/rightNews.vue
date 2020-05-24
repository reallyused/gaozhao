<template>
  <div>
      <div class="r_title">
          {{rightNews.name}}
      </div>
      <div>
          <ul class="item-dot">
              <li v-for="(i,j) in rightNews.item" :key="j">
                  <router-link target="_blank" :to="{name:'detail',params:{id:i.id}}">
                      {{i.title}}
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'rightNews',
    props:{
        rightNews:{
            type:Object,
            default:{name:'',item:[]}
        }
    },
    data(){
        return{}
    }
}
</script>

<style lang="scss" scoped>
    .r_title{
        font-size:18px;
        color :#fe4b44;
        font-weight: bold;
        font-size: 30px;
        background: url(../../../public/staticimg/nav_tbg.png) no-repeat right center;
        background-size:156px auto;
    }
    .item-dot li{
        background: url(../../../public/staticimg/title_dot.png) no-repeat left center;
        padding-left: 15px;
        margin: 15px 0;
    }
</style>