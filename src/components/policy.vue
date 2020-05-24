<template>
  <div class="c_m">
    
     <div class="mt30">
      <bread />
     </div>
    <el-row class="mt30" :gutter="20">
      <el-col :span="3">
       <div class="item-zbxinxi">
         <div class="zbxx-title">
              招生政策
         </div>
         <ul class="zbxx-l-nav">
           <li>
             <router-link :to="{path:'/policy/zhengce'}" exact-active-class="active">
                 政策信息
             </router-link>
           </li>
           <li>
             <router-link :to="{path:'/policy/zhaosheng'}" exact-active-class="active">
                 招生信息
             </router-link>
           </li>
           <li>
             <router-link :to="{path:'/policy/zhaoban'}" exact-active-class="active">
                 招办动态
             </router-link>
           </li>
         </ul>
       </div>
      </el-col>
      <el-col :span="15">
          <div>
            <h2 class="h2-title">{{cat_name}}</h2>
          </div>
          <div>
            <loadNews :loadNews='loadNews' />
          </div>
      </el-col>
      <el-col :span="6">
          <rightNews :rightNews='rightNews'  />
          
          <div v-if="rightad" >
            <a v-for="(i,j) in rightad" class="right-bar-ad" :key="j" href="i.url">
              <img :src="i.img" width="300" alt="">
            </a>
          </div>
      </el-col>
    </el-row>

  <div class="loading-div" v-if="loadStatus">
      <i class="el-icon-loading loading"></i>
  </div>

  <div class="more-box" v-if="loadNews.length!==0" >
          <span v-if="morestatus" class="btn-more" @click="upData()">
              查看更多...
          </span>
          <span v-else class="nomore">
              已经到底啦~
          </span>
  </div>
  </div>
</template>

<script>
export default {
    name:"policy",
    props:[],
    data(){
      return{
        loadNews:[],
        type:'',//分类目录类型，默认空,
        page:0,//当前分页
        morestatus:1,//当前是否还有更多分页
        cat_name:'',
        loadStatus:1,
        rightNews:{name:'',item:[]},
        rightad:[]
      }
    },
    components:{
      loadNews : () => import ("../components/modules/loadNews.vue"),
      rightNews : () => import ("../components/modules/rightNews.vue"),
    },
    methods:{
       upData(){
         this.type = this.$route.name
         if(this.morestatus){
            this.$axios
              //.get("/newest", {})
              .get("/api/pc/policyList",{params:{type:this.type,page:this.page++}})
              .then(res =>{
                  this.cat_name = res.data.cat_name
                  this.loadStatus = 0
                  res.data.code == '666' ? this.loadNews = this.loadNews.concat(res.data.loadNews) : this.morestatus = 0
              })
              .catch(err =>{
                  console.log("发生错误");
              })
            }
        },
      newest(){
        this.$axios
              //.get("/policy",{})
              .get("/api/pc/policyRight",{})
              .then(res =>{
                  this.rightNews= res.data.rightNews
                  this.rightad = res.data.ad.rightad
                  })
              .catch(err =>{
                  console.log("发生错误");
              })
        }
    },
    created(){
       this.upData()
       this.newest()//右侧资讯
    },
    beforeRouteUpdate (to,form,next){
      this.upData()
      this.loadNews=[]
      this.page=0
      next()
    }
}
</script>

<style scoped>
  .h2-title{
    font-size: 30px;
    color: #fe4b44;
    line-height: 1em;
  }
  .item-zbxinxi{
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }
  .zbxx-title{
    background:#fe4b44;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }
  .zbxx-l-nav li a{
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #fffbf2;
    display: block;
    border-bottom: 1px solid #fff1d1;
  }
   .zbxx-l-nav li a:hover{
     text-decoration: none;
     background: #fff1d1;
   }
   .zbxx-l-nav li a.active{
     background: #fff1d1;
    }
    
</style>