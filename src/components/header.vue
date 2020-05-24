<template>
    <div>
        <div class="top-box-line">
            <div class="c_m">
                 <el-row>
                <el-col :span="16">
                    <div class="">
                            <span  class="tmar active" >安徽省重点新闻门户网站</span>       
                            <span  class="tmar" > 安徽青年报官方网站 </span>         
                            <span class="tmar"> 安徽省青年新闻工作者协会官方网站 </span>  
                    </div>
                    </el-col>
                <el-col :span="8">                     
                        <div class="search-box">
                           <input type="text" v-model="searchText" class="inputsearch" maxlength="100" placeholder="请输入您要搜索的关键词" />
                          <el-popover
                                placement="top"
                                width="160"
                                v-model="visible">
                                <p>{{popoverMsg}}</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                                </div>
                                <el-button slot="reference" size="medium" class="btnborder" icon="el-icon-search" @click="searchFn"></el-button>
                           </el-popover>
                        </div>
                </el-col>
            </el-row>
            </div>
        </div>
        <div class="logo-banner c_m">
            <div>
                <router-link :to="{path:'/index'}">
                    <img src="../assets/images/logo.png" alt="">
                </router-link>
            </div>
            <div v-if="headerAd.img">
               <a :href="headerAd.url" target="_blank">
                    <img :src="headerAd.img" width="700" height="75" alt="">
               </a>
            </div>
        </div>
        <div class="main-nav nav-shadow">
            <div class="c_m">
                <div class="nav-item">
                    <el-dropdown  placement='bottom'  v-for='(item,i) in navdata' :key="i"  class="nav-hover" >
                        <span class="el-dropdown-link">
                            <router-link :to="{path:item.path}" exact-active-class="nav-active">
                                         {{item.name}}
                                         <i v-if='item.children' class="el-icon-arrow-down el-icon--left"></i>
                            </router-link>
                        </span>
                        <el-dropdown-menu v-show="item.children" slot="dropdown">
                               <el-dropdown-item  v-for="(t,j) in item.children " :key="j">
                                      <router-link :to="{path:t.url}" >
                                          {{t.cat_name}}
                                      </router-link>
                                   </el-dropdown-item>
                            </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
           
        </div>
    
    </div>
</template>

<script>
export default {
     props:{
        
     }, 
     data(){
         return{
            searchText:'',
            visible: false,
            popoverMsg:"请输入查询内容！",
            newText:'',
            navdata:[],
            headerAd:{url:'',img:''}
         }
     },
     created(){
         //this.$axios.get("/api/pc/header",{})
         this.$axios.get("/header",{})
         .then(res=>{
             
             this.navdata = res.data.mainnav
             this.headerAd = res.data.headerAd
         })
         .catch(err=>{
             console.log("发生错误")
         })
     },
     methods:{
         searchFn:function(){
             console.log(this.newText)
              if(this.searchText){
                  //结果输出
                 this.popoverMsg = "请输入查询内容！"
                 this.visible = true;
                 return false
             }
         },
         hidepopver(){
              this.visible = false;
         }
     },
    watch:{
        searchText:{
               
            } 
    } 
}
</script>

<style lang="scss" scoped>
    .el-dropdown-menu{
        border:none
    }
    .el-dropdown-menu__item{
        font-size: 16px;
    }
    .el-dropdow a{
        &:link,&:visited{
            color: #fe7f0a!important;
        }
    }
    .nav-hover:hover{
        background: #fe7f0a;
        position: relative;
    }
    .nav-hover:hover div.catbox{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    .nav-hover{
        margin-right: 2px;
    }
    .nav-shadow{
        box-shadow: 0 3px 5px #d1c7be;
    }
    .btnborder{
        border: none;
        background: none;
    }
    .logo-banner{
        display: flex;
        justify-content: space-between;
    }
    .search-btn{
        cursor: pointer;
        font-size: 18px;
    }
    .logo{
        display:block;
    }
    .top-box-line{
        .el-row{
            display: flex;
            align-items: center;
        }   
        border-bottom: 1px solid #ededed;
        display: flex;
        align-items: center;
        padding: 5px 0;
    }
    .search-box{
        border:1px solid #ededed;
        border-radius: 20px;
        width: 200px;
        height: 40px;
        line-height: 40px;
        display: flex;  
        align-items:center;
        padding: 0 20px;
        background: #f9f9f9;
        .inputsearch{
            flex-grow: 1;
            background: #f9f9f9;
            height: 40px;
        }
    }
   .main-nav{
       height: 50px;
       background-image:linear-gradient(to right, #fec40b , #fe7f0a);;
   }
   .nav-active{
       background: #fe7f0a;
   }
   .nav-item a{
       display: inline-block;
       height: 50px;
       line-height: 50px;
       color: #fff;
       font-size: 18px;
       padding: 0 50px;
       cursor: pointer;
       text-decoration: none;
   }
</style>