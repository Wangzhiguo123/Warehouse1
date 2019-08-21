<template>
  <div>
    这是b1
    <div>{{count.a}}</div>
    <div>{{count.b}}</div>
    <div>{{newa.newa}}</div>
    <div>{{newa.newb}}</div>
    <button @click="getVal">获取data</button>
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
    <!--</el-row>-->
  </div>
</template>

<script>
    export default {
      computed:{
        count(){
          return{
            'a':this.$store.state.a,
            'b':this.$store.state.b
          }
        },
        newa(){
          return{
            'newa':this.$store.getters.newa,
            'newb':this.$store.getters.newb
          }
        }
      },
    data(){
      return{
        }
      },
        name: "B1",
      methods:{
      getVal(event){
        let value = event.target.dataset.value;
        this.$store.commit("increment",value)
        console.log(this.$store.state.a)
      },
        submit(){

        }
      },
      created(){
      },
      mounted() {

      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
