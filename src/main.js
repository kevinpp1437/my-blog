// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.use(axios)
// Vue.prototype.$http = axios
Vue.prototype.$axios = axios

//自定义指令
Vue.directive('showtitle',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
})

Vue.directive('showcolor',{
  bind(el,binding,vnode){
    if(binding.value.toString()=='orange'){
      el.style.color = binding.value
    }else{
      el.style.color = 'black'
    }
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth = '1920px'
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '860px'
    }
  }
})

//设置过滤器
Vue.filter('uppercase',function(value){ 
  var list = value.split('');
  var newValue = list[0].toUpperCase() + list.slice(1).join('')
  return newValue.slice(0,250) + '...'
})

Vue.filter('alluppercase',function(value){ 
  return value.toUpperCase()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
