<template>
  <div id="app" v-cloak>
      <ul class="navL">
        <li>
          <a><router-link to='/' exact >博客</router-link></a>
        </li>
        <li>
          <a><router-link to='/list' exact >写博客</router-link></a>
        </li>
      </ul>
      <div class="content" v-cloak>
        <div class="showcontent">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      // show:false,
      // showList:true,
    }
  },
  // methods:{
  //   showA:function(){
  //     this.showList = true;
  //     this.show = false;
  //   },
  //   showB:function(){
  //     this.show = true;
  //     this.showList = false;
  //   }
  // },
  //实现页面每次刷新都会跳转到默认的初始页面（博客页面）
    // mounted:function(){
    //   this.$router.push('/')
    // }
}

</script>

<style type='text/css'>
  [v-cloak]{
    display: none !important;
  }
  body{
    width:1920px;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  ul.navL{
    width:1920px;
    height: 60px;
    background:rgba(209, 21, 21, 0.4);
    padding: 0px;
    margin: 0px;
    position: absolute;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    
  }
  ul.navL > li{
    float: left;
    list-style: none;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 900;
  }
  ul.navL>li a{
    text-decoration: none;
    /* color: #fff; */
    padding: 10px;
    border-radius: 8px;
  }
  .router-link-active{
    background:rgba(240, 240, 240, 0.75);
    color:#444;
  }
  
  /* li >a.active{
    border:1px solid black;
    border-radius: 4px;
    padding: 5px;
    background-color: bisque
  } */

  .content{
    display: inline-block;
    width: 100%;
    margin-top: 40px;
    /* background-color: rgb(9, 81, 214); */
    /* overflow: hidden; */
    height: 100%;
  }
  .showcontent{
    display: block;
    overflow: hidden;
  }
</style>
