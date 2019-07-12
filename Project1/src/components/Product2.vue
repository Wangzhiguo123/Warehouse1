<template>
    <div @click="wzg">这是Product2</div>
</template>

<script>
    export default {
        name: "Product2",
      data(){
          return{
            ajax:this.$store.state.ajax
          }
      },
      methods:{
          wzg(){
            console.log('99a2')
          }
      }
    }
</script>

<style scoped>

</style>
