<template>
  <div class="c_m">
            <div class="mt30">
              <bread />
            </div>
            <div class="mt30">
               <div class="daoyanbox">
                   <img src="../../public/staticimg/daoyan.png" class="daoyan" alt="">
                   <div class="daoyan-info">
                       {{daoyan}}
                   </div>
               </div>
            </div>
            <div class="mt30">
                 <div class="section-nav nav-pt40">
                    <span class="global_icon zhban"></span>
                    <h2 class="nav-h2 ml10">招办主任访谈</h2>
                    <span class="small-title">安徽省教育招生考试院 安徽青年报权威发布</span>
                </div>
            </div>
            <div>
                <itemPicft :itemData='itemData' />
            </div>
            <div class="pages">
                <el-pagination
                    background
                    @current-change="changePage"
                    :current-page="page+1"
                    layout="prev, pager, next"
                    :page-count='22'>
                </el-pagination>
            </div>
  </div>
</template>

<script>
export default {
    name:'fangtanitem',
    props:[],
    data(){
        return{
            daoyan:'',
            page:0,
            maxPage:22,
            itemData:null
        }
    },
    components:{
        itemPicft:() => import('../components/modules/item_picft.vue')
    },
    methods:{
        getPageData(){
            this.$axios.get('/interview',{params:{}})
            .then(res => {
                this.daoyan = res.data.daoyan
            })
        },
        getItem(page){
            this.$axios.get('/interviewItem',{params:{page:page}})
            .then(res => {
                this.itemData = res.data.itemData
                this.maxPage = res.data.maxPage
            })
        },
       async changePage(s){
          await this.getItem(s)
        }
    },
    created(){
       this.getPageData()
       this.getItem(this.page)
    },
}
</script>

<style lang="scss" scoped>

    .daoyanbox{
        box-shadow: 0 0 10px #d8d8d8;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }
    .daoyan-info{
        margin-left: 20px;
        font-size: 20px;
        font-weight: bold;
        color: #444;
    }
    .daoyan{
        display: block;
    }
    .pages{
        text-align: center;
        padding: 40px 0;
    }
</style>