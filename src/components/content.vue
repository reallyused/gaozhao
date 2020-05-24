<template>
  <div>
       <div class="c_m">
            <div class="mt30">
               <bread />
            </div>

            <el-row  :gutter="20">
                <el-col :span="18">
                    <div>
                        <h1 class="detail-title">{{title}}</h1>
                        <div class="detail-info">
                           <span  class="detail-info-item"><span class="global_icon time"></span>时间：{{time}} </span>
                           <span  class="detail-info-item"><span class="global_icon eye"></span> 浏览量：{{look}}</span>
                        </div>
                    </div>
                    <div class="content" v-html="content">
                        
                    </div>
                    <div class="end-img">
                        <img src="../../public/staticimg/end.png" alt="">
                    </div>
                    <!-- <div class="cat-box">
                    
                                        <el-row :gutter="20">
                                            <el-col :span='4'>
                                                    
                                                        <span class="cat-title-bg mt20"> {{cat_name}} </span>
                                                    
                                            </el-col>
                                            <el-col :span='20'>
                                                    <loadNews :loadNews='loadNews' />
                                                        <div class="more-box" v-if="loadNews.length!==0" >
                                                                <span v-if="morestatus" class="btn-more" @click="upData()">
                                                                    查看更多...
                                                                </span>
                                                                <span v-else class="nomore">
                                                                    已经到底啦~
                                                                </span>
                                                    </div>
                                            </el-col>
                                        </el-row>
                    </div> -->

                    




                </el-col>
                <el-col :span="6">
                    <keep-alive>
                      <rightNews :rightNews='rightNews' />
                    </keep-alive>
                     <div v-if="rightad" >
                        <a v-for="(i,j) in rightad" class="right-bar-ad" :key="j" href="i.url">
                        <img :src="i.img" width="300" alt="">
                        </a>
                    </div>
                </el-col>
            </el-row>

       </div>
  </div>
</template>

<script>
export default {
    name:"detail",
    props:[],
    data(){
        return{
            title:"",
            time:'',
            look:'',
            content:'',
            rightNews:{name:'',item:[]},
            rightad:[],
            loadNews:[],
            type:'',//分类目录类型，默认空,
            page:0,//当前分页
            morestatus:1,//当前是否还有更多分页
            cat_name:'',
            loadStatus:1,
        }
    },
    components:{
         rightNews : () => import ("../components/modules/rightNews.vue"),
         loadNews : () => import ("../components/modules/loadNews.vue"),
    },
    methods:{
        rgihtNews(){
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
            },
        upData(){//底部加载
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
        loadDetail(){
              let id = this.$route.params.id ||this.$route.name
              this.$axios
              .get("/api/pc/detail",{params:{id:id}})
              .then(res =>{
                  console.log('1',res)
                  this.title= res.data.detail_title
                  this.time = res.data.date
                  this.look = res.data.look
                  this.content = res.data.content
                  })
              .catch(err =>{
                  console.log("发生错误");
              })
        }    
        },
        created(){
            this.rgihtNews()
            this.loadDetail()
            this.upData()
        },
        beforeRouteUpdate (to,form,next){
            this.upData()
            this.loadDetail()
            this.loadNews=[]
            this.page=0
            next()
        }    
}
</script>

<style lang="scss" scoped>
    .detail-title{
        font-size: 30px;
        color: #fe4b44;
        text-align: center;
    }
    .detail-info{
        border-bottom: 1px solid #dcdcdc;
        padding-bottom: 20px;
        margin-bottom: 20px;
        margin-top: 30px;
        display: flex;

    }
    .detail-info-item{
        margin-right: 20px;
        display: flex;
        align-items: center;
        color: #666;
    }
    .detail-info-item .global_icon{
        margin-right: 10px;
    }
   
     .end-img{
         text-align: center;
         padding: 60px;
     }
     .cat-box{
         border-top: 3px solid #fe4b44;
         padding-top: 30px;
     }
     .cat-title-bg{
         background: url(../../public/staticimg/titlebg.png) no-repeat;
         width: 140px;
         height: 52px;
         display: block;
         padding-left: 4px;
         line-height: 52px;
         color: #fff;
         font-weight: bold;
         font-size: 30px;
     }
</style>