<template>
  <div class="hello">
    父组件:
    <ace @Son="parents"></ace>
    <!--son传来的值:{{message}}-->
<div v-for="a in message">
  <span>{{a.name}}</span>
  <a @click="wzg">{{a.url}}</a>
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
    this.$axios.get('../static/data.json',{
    })
      .then(res=>{
        this.message = res.data.links
        // console.log(this.message)
      })
      .catch(err=>{
        console.log(err)
      })


    // this.$api.get('../static/data.json',{
    // })
    //   .then(res=>{
    //     console.log(res)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })


  }
}
</script>

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
