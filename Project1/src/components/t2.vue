<template>
    <div>这是子组件T2
    <div>{{adc}}</div>
    </div>
</template>

<script>
    export default {
      props:{
        adc:String,
        required:true
      },
        name: "t2"
    }
</script>

<style scoped>

</style>
