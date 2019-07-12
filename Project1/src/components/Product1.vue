<template>
    <div id="pd1">这是Product1
      <div class="ace">123</div>
    <div v-for="adc in ajax">
      <span class="name">{{adc.name}}</span>
      <span class="age">{{adc.age}}</span>
    </div>

    </div>
</template>

<script>
    export default {
        name: "Product1",
      // props:['ajax'],
      data(){
          return{
            ajax:this.$store.state.ajax
          }
      },
      methods:{

        // minusPrice(){
        //   this.$store.commit('minusPrice',2);
        // }

      }
    }
</script>

<style scoped>

</style>
