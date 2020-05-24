<template>
<div class="fouce-box">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(i,j) in foucs" :key="j">
        <a :href="i.url">
            <div class="position-r">
                <div class="position-txt">
                    {{i.text}}
                </div>
                 <img :src="i.img" width="530" height="310" alt="">
            </div>
        </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  </div>
</template>

<script>

  export default {

    name: 'foucesSwiper',
    props:['foucs'],
    data() {
      return {
        swiperOptions: {
          loop:true,
          autoplay: {
            delay: 3000,
            },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {                        
                nextEl: '.swiper-button-next',  
                prevEl: '.swiper-button-prev',           
            },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
    
    },
    mounted() {
     //this.swiper.slideTo(1, 1000, false)
    }
  }
</script>

<style lang="scss">
  .fouce-box{
     .position-txt{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 10px;
        background: rgba($color: #000000, $alpha: 0.8);
        color: #fff;
    }
    .position-r{
        img{
            display: block;
        }
        position: relative;
    }
    .swiper-pagination{
        text-align: right;
        padding-right: 10px;
    }
    .swiper-pagination-bullet{
        width: 12px!important;
        height: 12px!important;
        background: #c0c0c0;
    }
    .swiper-container{
      position: relative;
    }
 .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
   width: auto!important;
   display: inline;
   right: 0!important;

 }
 .swiper-pagination-bullet-active{
   background: #d72339;
   width: 22px!important;
   height: 12px!important;
   border-radius: 12px!important;
 }
  }

   



</style>