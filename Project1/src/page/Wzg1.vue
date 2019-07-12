<template>
  <div>这是wzg1
  <div @click="increment">{{count}}</div>
    <div @click="panzer">123</div>
  </div>
</template>

<script>
  export default {
    name: "Wzg1",
      data(){
        return{
          count:1
        }
      },
      //view
      // template:`<div>{{ count }}</div>`,
      methods:{
        increment(){
          this.count++
        },
        panzer(){
          // var a = 123
          // var b = 456
          // console.log(a+b)
        }

      }
  }
</script>

<style scoped>

</style>
