<template>
    <div>这是T4子组件
    <!--<div>{{data}}</div>-->
      <div @click="wzg2">1111</div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          data:'这是子组件的信息！'
        }
      },
        name: "t4",
      methods:{
        wzg2(){
          // 将this.data传递给父组件的pass函数

        }
      },
      mounted() {
        this.$emit('pass',this.data)
      }
    }
</script>

<style scoped>

</style>
