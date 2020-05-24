<template>
  <div class="c_m ">
     <div class="mt30">
              <bread />
      </div>
      <div class="title-h1">
          <h1>{{title}}</h1>
      </div>
      <div class="item-type">
          <span v-for="(i,j) in type" :class="[activeNum == j ? 'activeBtn' :'' ,'item-typespan']" @click="changeData(j)" :key="j">
              {{i.name}}
          </span>
      </div>
      <div class="tc">
          <table class="table-normal">
              <tr>
                  <td>院校代号</td>
                  <td>院校名称</td>
                  <td>投档人数</td>
                  <td>投档最低分</td>
                  <td>投档最低分排名</td>
              </tr>
              <tr v-for="(i,j) in typeData" :key="j">
                  <td>{{i.daihao}}</td>
                  <td>{{i.yuanxiaomingcheng}}</td>
                  <td>{{i.toudangrenshu}}</td>
                  <td>{{i.zuidifen}}</td>
                  <td>{{i.zuidifenpaiming}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    name:"score",
    data(){
        return{
            title:"",
            type:[],
            typeData:null,
            activeNum:0
        }
    },
    methods:{
        loadScore(){
            this.$axios.get('/score',{})
            .then( res => {
                this.title = res.data.title
                this.type = res.data.type
                this.typeData = res.data.typeData
            })
        },
        changeData(i){
            console.log(i)
            this.activeNum = i
            this.$axios.get('/scoreType',{params:{type:i}})
            .then( res => {
                console.log(res)
                this.typeData = res.data.typeData
               })
        } 
    },
    created(){
        this.loadScore()
    }
}
</script>

<style scoped>
.title-h1{
    text-align: center;
    padding: 30px;
}
.title-h1 h1{
    font-size: 35px;
    font-weight: bold;
}
    .item-typespan{
        padding: 14px 30px;
        border-radius: 30px;
        cursor: pointer;
        display: inline-block;
        border:1px solid #cacaca;
        font-size: 20px;
        margin: 0 10px;
    }
    .activeBtn{
          border:1px solid #ff900a;
          background: #ff900a;
          color: #fff;
    }
    .item-type{
        text-align: center;
    }
</style>