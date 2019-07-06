<template>
  <div id="app">
      <ul class="navL">
        <li @click='showA'>
          <a :class="showList? 'active' : '' "><router-link to='/list'>博客</router-link></a>
        </li>
        <li @click='showB'>
          <a :class="show? 'active' : ''"><router-link to='/'>写博客</router-link></a>
        </li>
      </ul>
      <div class="content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      show:true,
      showList:false,
    }
  },
  methods:{
    showA:function(){
      this.showList = true;
      this.show = false;
    },
    showB:function(){
      this.show = true;
      this.showList = false;
    }
  }
}

</script>

<style>
  body{
    width:1920px;
    padding: 0;
    margin: 0;
  }
  ul.navL{
    width:100%;
    height: 60px;
    background: #f33ff3;
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
  }
  li >a.active{
    border:1px solid black;
    border-radius: 4px;
    padding: 5px;
    background-color: bisque
  }
  .content{
    display: inline-block;
    width: 100%;
    margin-top: 40px;
  }
</style>
