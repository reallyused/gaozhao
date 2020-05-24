<template>
  <div class="c_m ">
        <div class="mt30">
               <bread />
            </div>
      <el-row :gutter="40">
      <el-col :span='18'>
          <div class="search-div">
              <el-input placeholder="输入关键词可查看专家回答" v-model="searchInput" class="input-with-select">
               <el-button slot="append" @click="searchQuestion" icon="el-icon-search"></el-button>
               </el-input>
          </div>
       <questions :questionData='questionData' />
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

  </div>
</template>

<script>
export default {
    name:'mainquestion',
    props:[],
    data(){
        return {
            questionData:null,
            rightNews:{name:'',item:[]},
            rightad:[],
            searchInput:''
        }
    },
    components:{
         questions: () => import("../components/modules/question.vue"),
         rightNews : () => import ("../components/modules/rightNews.vue"),
    },
    methods:{
         searchQuestion(){
            if(this.searchInput==''){
             this.$alert('请输入查询内容！', '提示', {
                          confirmButtonText: '确定'})
                          return false
            }
            //查询反馈


           
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
            },
        getQuestions(){
             this.$axios
            .get("/question", {})
            .then(res => {
                   this.questionData = res.data.questionData;
                })
            .catch(error => {

            })
    } },
    created(){
        this.getQuestions()
        this.newest()
    }

}
</script>

<style lang="scss" scoped>
    .search-div{
        padding: 30px 0;
    }
</style>