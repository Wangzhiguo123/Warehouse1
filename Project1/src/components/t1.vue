<template>
    <div>这是父组件T1
    <child :adc="name"></child>
    </div>
</template>

<script>
  import child from './t2'
    export default {
    components:{
      child
    },
      data (){
      return{
        name:'4452484545754578754'
      }
      },
        name: "t1"
    }
</script>

<style scoped>

</style>
