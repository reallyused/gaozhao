<template>
    <div>
        <div class="section-nav">
            <span class="global_icon qico"></span>
            <h2 class="nav-h2 ml10">我要提问</h2>
        </div>
        <div class="mt30 flex-tw-form">
            <div class="flex-el-select">
                <el-select v-model="valuewl" style="width:100%" placeholder="请选择文理">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                 </el-select>
            </div>
            <div class="flex-tw-item">
                <el-input v-model="rank" placeholder="请输入您的分数排名"></el-input>
            </div>
             <div class="flex-tw-item">
                <el-input v-model="major" placeholder="请输入您的意向专业"></el-input>
            </div>
            <div class="flex-tw-item twbtn-box">
                <img src="../../../public/staticimg/twbtn.png" @click="submitQuestion" class="twbtn" alt="">
            </div>
        </div>

        <div class="item-question-box mt30">
            <div class="item-q-scroll" :class="{vheight:isheight}">
                 <div class="item-q-content" v-for="(i,j) in itemQuestion" :key="j">
                     <div class="q-title flex-q-item">
                        <strong class="flex-q-left">问：</strong>
                        <div class="flex-q-right">
                             <span class="flex-q-s">文理科：{{i.q.type}}</span><span class="flex-q-s">排名：{{i.q.rank}}</span><span class="flex-q-s">意向专业：{{i.q.major}}</span>     
                        </div>
                     </div>
                     <div class="an-content flex-q-item">
                        <strong class="flex-q-left">答：</strong>
                        <div class="flex-q-right">
                           {{i.an}}
                        </div>
                     </div>
                </div>
                <div class="more-box" v-if="morepage">
                    <span class="btn-more" @click='getQuestions'>
                        查看更多...
                    </span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
  name:'question',
  props:['questionData'],
  data(){
      return{
         options: [{
          value: '1',
          label: '文科'
        }, {
          value: '2',
          label: '理科'
        }],
        valuewl: '',
        rank:'',
        major:'',
        page:0,
        itemQuestion : this.questionData || [],
        morepage:1,
        isheight:false,
      }
  },
  created(){
      console.log(this.$route.name)
      this.$route.name == 'index' ? '': this.isheight = true
  },
  methods:{
        getQuestions(){
           this.$axios.get('/question',{params:{page:++this.page}})
          .then(res => {
            res.data.code=='666' ?  this.itemQuestion.push(...res.data.questionData) : this.morepage = 0
          })
          .catch(err=>{
              console.log(err)
          })
      },
      submitQuestion(){

          if(this.valuewl==''){
                this.$alert("请选择文理！", '提示', {
                     confirmButtonText: '确定',
                });
                return false
          }
           if(this.rank.replace(/\s/ig,'')==''){
                this.$alert("请填写分数排名！", '提示', {
                     confirmButtonText: '确定',
                });
                return false
          }

         if(this.major.replace(/\s/ig,'')==''){
                this.$alert("请填写意向专业！", '提示', {
                     confirmButtonText: '确定',
                });
                return false
          }
          this.$axios('/question',{
              valuewl:this.valuewl.replace(/\s/ig,''),
              rank:this.rank.replace(/\s/ig,''),
              major:this.major.replace(/\s/ig,'')
          },
          {headers:{'Autorization':"111"}}
          )
          .then(function(res){
              this.$alert(res.data.msg, '提示', {
                confirmButtonText: '确定',
                });
          })
          .catch(function(error){

          })
      }
  }
}
</script>

<style lang="scss" scoped>
  .vheight{
      height: 800px!important;
  }
    .item-q-content .flex-q-left,.item-q-content .flex-q-right{
        font-size: 16px;
    }
    .flex-q-item{
        display: flex;
    }
    .q-title{
        margin-bottom: 10px;
    }
    .flex-q-left{
       width: 30px;
       flex-grow: 0;
       flex-shrink: 0;
       font-weight: bold;
    }
    .flex-q-right{
        color: #666;
        padding-right: 20px;
    }
    .flex-q-s{
        font-size: 16px;
        margin-right: 30px;
    }
    .item-q-content{
        border-bottom: 1px double #e5e5e5;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .item-q-scroll{
        height: 400px;
        overflow-y: scroll;
    }
    .item-question-box{
        box-shadow: 0 0 6px #cecece;
        border-radius: 10px;
        padding: 20px;

    }
    .flex-tw-form{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .twbtn{
        height: 41px;
        cursor: pointer;
        display: block;
    }
    .flex-tw-item{
        flex-grow: 1;
        flex-shrink: 1;
        margin-right: 20px;
    }
    .twbtn-box{
        width: 139px;

        flex-grow: 0;
        flex-shrink:0;
        margin-right: 0!important;
    }
    .flex-el-select{
        width: 200px;
        margin-right: 20px;
        flex-grow: 0;
        flex-shrink:0;
    }
</style>