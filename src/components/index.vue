<template>
  <div class="c_m">
    <div class="loading-div" v-if="loadStatus">
      <i class="el-icon-loading loading"></i>
    </div>
    <adbanner :banner="banner" :banbanner="banbanner" />
    <div>
      <el-row :gutter="20">
        <el-col :span="10">
          <elSwiper :foucs="foucs" />
        </el-col>
        <el-col :span="14">
          <div class="foucs-news">
            <ul class="index-title-item">
              <li v-for="(i,j) in newsIndex" :key="j">
                <router-link :to="{name:'detail',params:{id:i.id}}" target="_blank">
                  <span class="index-h2">{{i.title}}</span>
                </router-link>
                <span class="item-date">{{i.date}}</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="section-nav nav-pt40">
        <span class="global_icon highschool"></span>
        <h2 class="nav-h2 ml10">本科院校直通车</h2>
      </div>

      <div class="bk-school">
        <ul class="item-school">
          <li v-for="(i,j) in benkeztc" :key="j">
            <div class="item-school-img-box">
              <a href>
                <img :src="i.img" class="item-school-img" alt />
              </a>
            </div>
            <a href>{{i.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="section-nav nav-pt40">
        <span class="global_icon zhban"></span>
        <h2 class="nav-h2 ml10">招办主任访谈</h2>
      </div>
      <div class="zbftbox mt30">
        <swiperPerson :ftdata="ftdata" :ewmjl="ewmjl" />
      </div>
    </div>
    <adbanner :banbanner="middlebanner" />
    <div>
      <div class="section-nav nav-pt30">
        <span class="global_icon highschool"></span>
        <h2 class="nav-h2 ml10">专科院校直通车</h2>
      </div>
      <div class="bk-school">
        <ul class="item-school">
          <li v-for="(i,j) in zhuankeztc" :key="j">
            <div class="item-school-img-box">
              <a href>
                <img :src="i.img" class="item-school-img" alt />
              </a>
            </div>
            <a href>{{i.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="adpadding">
      <adbanner :banbanner="btmbanner" />
    </div>
    <el-row :gutter="20">
      <el-col :span="10">
        <yxzn :yxzninfo="yxzninfo" />
      </el-col>
      <el-col :span="14">
        <div class="section-nav">
          <span class="global_icon zcjd"></span>
          <h2 class="nav-h2 ml10">政策解读</h2>
        </div>
        <div class="item-zcbox mt15">
          <ul class="index-title-item">
            <li v-for="(i,j) in zcjd" :key="j">
              <router-link :to="{path:'/detail',query:{id:i.id}}">
                <span class="index-h2">{{i.title}}</span>
              </router-link>
              <span class="item-date">{{i.date}}</span>
            </li>
          </ul>
        </div>
        <div class="section-nav mt30">
          <span class="global_icon zhiyuan"></span>
          <h2 class="nav-h2 ml10">志愿指导</h2>
        </div>
        <div class="item-zcbox mt15">
          <ul class="index-title-item">
            <li v-for="(i,j) in zcjd" :key="j">
              <router-link :to="{path:'/detail',query:{id:i.id}}">
                <span class="index-h2">{{i.title}}</span>
              </router-link>
              <span class="item-date">{{i.date}}</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    
    <div class="mt30">
        <yearline :line='line' />
    </div>
    <div class="nav-pt40 section-question">
      <div class="question-l">
          <questions :questionData='questionData' />
      </div>
       <div  class="question-r">
          <div class="item-adsc-img" v-for="(i,j) in schoolImg" :key="j">
            <a :href="i.url">
              <img :src="i.img" alt="">
            </a>
          </div>
      </div>
    </div>

    <div>
      <xueba :xueba='xueba' />
    </div>
    <div>
      <haibaoitem :haibaoData='haibaoData' />
    </div>
  </div>
</template>
<script>
import swiper from "_c/modules/swiper.vue";
import adbanner from "_c/adbanner.vue";
import swiperPerson from "_c/modules/swiper_person.vue";

export default {
  name: "index",
  props: {},
  data() {
    return {
      banner: [],
      banbanner: [],
      loadStatus: 1,
      foucs: [],
      newsIndex: [],
      benkeztc: [],
      ftdata: [],
      ewmjl: "",
      middlebanner: [],
      zhuankeztc: [],
      btmbanner: [],
      yxzninfo:{name:null,item:null},
      zcjd: [],
      line:[],
      schoolImg:[],
      questionData:null,
      xueba:null,
      haibaoData:null
    };
  },
  components: {
    adbanner,
    swiper,
    swiperPerson,
    elSwiper: () => import("../components/modules/elSwiper.vue"),
    yxzn: () => import("../components/modules/zhinan.vue"),
    yearline: () => import("../components/modules/yearline.vue"),
    questions: () => import("../components/modules/question.vue"),
    xueba: () => import("../components/modules/xueba.vue"),
    haibaoitem: () => import("../components/modules/haibaoitem.vue"),

  },
  created() {
    this.$axios
      .get("/api/pc/index", {})
      .then(res => {
        this.loadStatus = 0;
        this.banner = [...res.data.ad.banner];
        this.banbanner = [...res.data.ad.banbanner];
        this.foucs = [...res.data.foucs];
        this.newsIndex = [...res.data.newsIndex];
        this.benkeztc = [...res.data.benkeztc];
        this.zhuankeztc = [...res.data.zhuankeztc];
        this.ftdata = [...res.data.ftdata];
        this.ewmjl = res.data.ewmjl;
        this.middlebanner = res.data.ad.middlebanner;
        this.btmbanner = res.data.ad.btmbanner;
        this.yxzninfo = res.data.yxzninfo;
        this.zcjd = res.data.zcjd;
        this.line = res.data.line;
        this.schoolImg = res.data.schoolImg;
        this.questionData = res.data.questionData;
        this.xueba = res.data.xueba;
        this.haibaoData = res.data.haibaoData
      })
      .catch(err => {
        console.log("发生错误");
      });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.foucs-news {
  background: #f9f9f9;
  padding: 4px 20px;
}
.index-title-item li {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  margin: 16px 0;
  background: url("../../public/staticimg/title_dot.png") no-repeat center left;
  padding-left: 15px;
}
.index-title-item li a:link,
.index-title-item li a:visited {
  font-size: 18px;
}
.index-title-item li a:hover {
  color: #f1372f;
}
.adpadding {
  padding: 30px 0;
}
.index-h2 {
  font-size: 18px;
}
.item-date {
  color: #999;
}
.bk-school {
  overflow: hidden;
  padding-top: 30px;
}
.item-school {
  width: 1300px;
}
.item-school li {
  float: left;
  margin-right: 21px;
  text-align: center;
}
.item-school-img-box {
  border: 1px solid #e5e5e5;
  margin-bottom: 5px;
}
.item-school-img {
  display: block;
  width: 180px;
  height: 140px;
}
.zbftbox {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 30px 20px;
  position: relative;
}
.item-adsc-img{
 margin-bottom: 20px;
}
.item-adsc-img img{
  display: block;
}
.question-l{
  flex-grow: 1;
  flex-shrink: 1;
}
.question-r{
  width: 310px;
  margin-left: 20px;
}
.section-question{
  display: flex;
}
</style> 