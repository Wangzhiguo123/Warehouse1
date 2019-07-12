<template>
  <div>
    父组件
  <div class="hello">
    <!--父组件:-->
<!--<keep-alive>11111111</keep-alive>-->
    <keep-alive>


    </keep-alive>
    <div class="" >s</div>
    -----------------------------子组件-------------------------------
    <!--<keep-alive>-->
    <ace @Son="parents"></ace>
    <!--son传来的值:{{message}}-->
<div v-for="a in message">
  <span>{{a.name}}</span>
  <a @click="wzg">{{a.url}}</a>
  <div class="easy">
    <!--{{easy}}-->
    <div v-bind:'{{a.name}}'></div>
  </div>
    <!--</keep-alive>-->
  </div>
    <!--{{message}}-->
    <!--<ace v-bind:message="data"></ace>-->
  </div>
</template>
<script>
  import ace from '@/components/son'
export default {
  name: 'parents',
  components:{
    ace
  },
  data () {
    return {
      message:''
    }
  },
  methods:{
    parents(data){
      this.message=data;
    },
    wzg(e){
      // this.$router.push(e.target.innerText)
      window.location.replace(e.target.innerText);//重定向

    }
  },
  mounted() {
    console.log('99a2')
    this.$axios.get('/proxy',{
    })
      .then(res=>{
        console.log(res)
        this.message = res.data
        // console.log(this.message)
      })
      .catch(err=>{
        console.log(err)
      })

    //
    this.$axios.post('/mock',{
    })
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })


    // this.$axios.get('/username?cmd=111',{
    // })
    //   .then(res=>{
    //     console.log(res)
    //     this.messages = res.data
    //     console.log(this.messages)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })





    // async  getPhotos (){
    //   try {
    //     let params = {
    //       page: 1,
    //       per_page: 1,
    //       order_by: 'latest'
    //     }
    //     this.$api.unsplash.viewPhotos(params)
    //     this.photosList = res
    //     console.log(res)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }

    // this.$api.get('../static/data.json',{
    // })
    //   .then(res=>{
    //     console.log(res)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })


  },
  // 组件实例化之后
  created(){
    console.log('99a2')
  }
}
</script>





<!--<script>-->
  <!--export default {-->
    <!--name: 'waterfall',-->
    <!--data () {-->
      <!--return {-->
        <!--photosList: []-->
      <!--}-->
    <!--},-->
    <!--created () {-->
      <!--this.getPhotos()-->
       <!--let res = this.$api.unsplash.viewPhotos-->
<!--console.log(res)-->
    <!--},-->
    <!--mounted () {-->
    <!--},-->
    <!--computed: {-->
    <!--},-->
    <!--watch: {-->
    <!--},-->
    <!--methods: {-->
      <!--// async await 是ES7新特性，本质上是generator函数的语法糖-->
      <!--async getPhotos () {-->
        <!--console.log(222)-->
        <!--// 这里用try catch包裹，请求失败的时候就执行catch里的-->
        <!--try {-->
          <!--// let params = {-->
          <!--//   page: 1,-->
          <!--//   per_page: 1,-->
          <!--//   order_by: 'latest'-->
          <!--// }-->
          <!--let res = await this.$api.unsplash.viewPhotos-->
          <!--this.photosList = res-->
          <!--console.log(res)-->
        <!--} catch (e) {-->
          <!--console.log(e)-->
        <!--}-->
      <!--}-->

    <!--}-->
  <!--}-->
<!--</script>-->






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
