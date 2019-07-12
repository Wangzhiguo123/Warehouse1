<template>
  <div id="app">
    <router-view/>
    <!--<child message="hello"></child>-->
    <!--<pd1 v-bind:ajax="ajax"></pd1>-->
    <!--<pd2 v-bind:ajax="ajax"></pd2>-->
  </div>
</template>

<script>
  import child from './components/son';
  import Product1 from './components/Product1.vue';
  import Product2 from './components/Product2.vue';
export default {
  name: 'App',
  components:{
    child,
    'pd1':Product1,
    'pd2':Product2
  },
  data(){
    return{
      // ajax:[
      //   {name:'小明',age:'17'},
      //   {name:'小红',age:'20'},
      //   {name:'豹子东',age:'25'},
      //   {name:'小刚',age:'55'}
      // ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
