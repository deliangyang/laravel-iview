/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

window.Vue = Vue;
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(iView)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const router = new VueRouter({
    routes: [
        { path: '/hello', component: require('./components/Hello.vue') },
    ]
});


const app = new Vue({
    router,
    el: '#app'
});