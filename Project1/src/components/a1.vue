<template>
    <div>test：a1
      <div>这是从vuex缓存的state值：{{adc}}</div>
    <div>这是A的数据：{{data}}</div>
<div @click="wzg_1">传值</div>
<div v-bind="se"></div>
    </div>
</template>
<script>
  import Com from './com'
    export default {
      data(){
        return{
          data:'178'
        }
      },
      computed:{
        adc(){
          return this.$store.state.a;
        }
      },
      methods:{
        wzg_1:function () {
          Com.$emit('val',this.data)
          // this.$router.push({path:'/b1'})
        },
        wzg_2:function () {
          console.log('这是wzg2')
        }
      },
        name: "A1",
      method(){

      },
      mounted(){
        Com.$on('val',(data)=>{
          console.log(data)
        })
      },
      created() {
// console.log(this.$store.state.a)
      }
    }
</script>

<style scoped>

</style>
