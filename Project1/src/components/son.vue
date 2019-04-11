<template>
    <div>son:
      <input type="text" v-model="message">
      <button @click="Click">发送</button>
<div value="123" @click="wzg">测试</div>
      <p>{{data}}</p>
    </div>
</template>

<script>
    export default {
      props:["data"],
        name: "son",
      data(){
          return{
            mes:'啦啦啦啦'
          }
      },
      methods:{
          Click(){
            this.$emit('Son',this.message)
          },
        wzg(event){
            console.log(event.currentTarget)
        }
      }
    }
</script>

<style scoped>

</style>
