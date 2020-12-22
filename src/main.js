// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource  from 'vue-resource'
Vue.config.productionTip = false
Vue.directive('directive',{
  bind:function(el,binding,vnode){
      const r = Math.floor(Math.random()*256);
			const g = Math.floor(Math.random()*256);
			const b = Math.floor(Math.random()*256);
			const color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
      el.style.color = color
  }
})

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
