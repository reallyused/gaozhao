<template>
<div class="ft-box">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(i,j) in ftdata" :key="j">
       <div class="ewmjl-pic-box" v-if="i.ewmjl">
            <img :src="i.ewmjl" class="ewmjl-pic" alt="">
          </div>
        <div class="flex-s-pad">
          <div class="flex-person">
            <div>
                <img class="person-photo" :src="i.photo" alt="">
            </div>
            <div class="person-r-box">
                <strong class="person-school">{{i.school}}</strong>
                <div class="person-ps">
                    招办主任：{{i.position}}
                </div>
                <div class="person-info">
                  <div class="person-abs">
                        {{i.info}}
                  </div>
                </div>
            </div>
          </div>
        </div>
  </swiper-slide>
  

  </swiper>
    <i class="el-icon-arrow-left s-button-prev"></i>
    <i class="el-icon-arrow-right s-button-next"></i>
    <div class="flex-p-drc">
          <i class="el-icon-arrow-left radius-border"></i>
          <ul class="item-nav-charter">
            <li v-for="(i,j) in ftdata" :key="j">
                <img :class="[ {'active': imgIndex==j },'person-small-photo']" :src="i.photo" alt="">
            </li>
          </ul>
           <i class="el-icon-arrow-right radius-border"></i>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'personitem',
    props:['ftdata','ewmjl'],
    data() {
      var that = this
      return {
        imgIndex:0,
        swiperOptions: {
          loop:true,
          autoplay: {
            delay: 3000,
            },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {                        
                nextEl: '.s-button-next,.el-icon-arrow-right',                        
                prevEl: '.s-button-prev,.el-icon-arrow-left',                    
            },
         on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function(){
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex= this.realIndex;
          },
        },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      },
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
  }
</script>

<style lang="scss">
  .ft-box{
     .flex-person{
       display: flex;
     }
     .person-r-box{

     }
     .person-school{
       font-size: 30px;
       color: #fe4b44;
     }
     .person-ps{
       font-size: 22px;
       font-weight: bold;
     }
     .person-r-box{
       margin-left: 20px;
     }
     .person-photo{
       border-radius: 100%;
       width: 230px;
       height: 230px;
       border: 8px solid #eaeaea;
     }
     .flex-s-pad{
       padding: 0 106px;
     }
     .person-info{
       width: 708px;
       height: 103px;
       background: url(../../../public/staticimg/ftperson.png);
       position: relative;
       margin-top: 20px;
     }
     .person-abs{
       position: absolute;
       width: 596px;
       height: 80px;
       left: 94px;
       top: 13px;
       font-size: 16px;
     }
     .ewmjl-pic{
       display: block;
       width: 80px;
       height: 80px;
     }
     .ewmjl-pic-box{
        padding: 4px;
        position: absolute;
        right: 100px;
        top:0;
        z-index: 11;
        border: 1px solid #ff9832;
        border-radius: 10px;
     }
     .person-small-photo{
       width: 60px;
       height: 60px;
       border-radius: 100%;
       border:5px solid #eaeaea
     }
     .flex-p-drc{
       display: flex;
       justify-content: center;
       align-items: center;
     }
     .flex-p-drc ul{
       display: flex;
       justify-content: center;
     }
     .flex-p-drc ul li{
       margin: 0 20px;
     }
     .radius-border{
       border:1px solid #434343;
       border-radius: 100%;
       width:26px;
       height: 26px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
     }
     .s-button-prev{
       position: absolute;
       left: 20px;
       top: 100px;
     }
      .s-button-next{
       position: absolute;
       right: 20px;
       top: 100px;       
     }
     .s-button-prev,.s-button-next{
        cursor: pointer;
        z-index: 30;
        font-size: 34px;
        background: #e1e1e1;
        padding: 40px 5px;
        border-radius: 20px;
        color: #fff;
     }
     .item-nav-charter .active{
      border: 5px solid #bfbfbf!important;
     }
  }
</style>