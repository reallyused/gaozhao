<template>
  <div class="footer-box ">
      <div class="c_m flex-footer">
      <div class="footer-left" v-html="leftHtml">
        
      </div>
      <div class="flex-footer">
        <div>
            <img :src="footerewm" width="145" height="145" alt="">
        </div>
        <div class="footer-ewm-txt">
           了解更多高考高招信息<br/>
            请关注安青网<br/>
            安徽青年报官方公众号 
        </div>
      </div>
       </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           leftHtml:'',
           footerewm:''
        }
    },
    created(){
        this.$axios.get("/api/pc/footer",{})
         .then(res=>{
      
             this.leftHtml = res.data.footer.leftHtml
              this.footerewm = res.data.footer.footerewm
         })
         .catch(err=>{
             console.log("发生错误")
         })
    }
}
</script>

<style lang="scss" scoped>
    .footer-box{
        .flex-footer{
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
        border-top: 12px solid #fe7f0a;
        padding: 50px 0 100px;
        margin-top: 70px;
    }
    .footer-ewm-txt{
        font-size: 16px;
        margin-left: 20px;
        text-align: center;
    }
    .footer-left{
        line-height: 1.8em;
    }
</style>