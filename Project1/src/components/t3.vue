<template>
    <div>
      子传父
      这是T3父组件
    {{sj}}
      <child v-on:pass="pass"></child>
    </div>

</template>

<script>
  import child from './t4'
    export default {
      components:{
        child
      },
      data(){
        return{
          sj: ''
        }
      },
      name: "t3",
      methods:{
        pass:function (data) {
          this.sj = data
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
