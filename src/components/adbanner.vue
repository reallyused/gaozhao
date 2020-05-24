<template>
    <div class="padding-ad">
        <div v-if="banner">
        <div class="mtad-banner" v-for="(i,j) in banner" :key="j">
            <a :href="i.url" target="_blank">
              <img :src="i.img" width="1200"  alt="">
            </a>
        </div>
        </div>
        <div v-if="banbanner">
        <div class="doub-ad">
            <div class="mtad-banner " v-for="(i,j) in banbanner" :key="j">
                <a :href="i.url" target="_blank">
                <img :src="i.img" width="590" height="80" alt="">
                </a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'adbanner',
   props:{
       banner:Array,
       banbanner:Array,
   },
   mounted(){
       
   }
}
</script>

<style lang="scss" scoped>
    .mtad-banner{
        margin: 3px 0;
    }
    .padding-ad{
        padding: 20px 0;
    }
    .doub-ad{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>