<template>
  <div>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,j) in foucs" :key="j">
            <a :href="item.url">
                <div class="position-r">
                    <div class="position-txt">
                        {{item.text}}
                    </div>
                    <img :src="item.img" width="530" height="310" alt="">
                </div>
            </a>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:'elSwiper',
    props:['foucs'],
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" >
    .position-txt{
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 12px;
        width: 100%;
        background: rgba($color: #000000, $alpha: 0.8);
        color: #fff;
    }
    .el-carousel__indicators--horizontal{
      
        left:0;
        padding-right: 10PX;
        width: 98%;
        text-align: right;
        transform: translateY(0%);

    }
    .el-carousel__button{
        width: 16px;
        height: 16px;
        border-radius: 16px;
    }
</style>