<template>
<div>
    <search/>
    
    <img class="centererror" src="../assets/error.png" width="441px" height="217px">
    <h3 class="centerdes">
        There are currently a large number of users.
    </h3>
    <h3>
       Please try again later.
    </h3>
    <button class="ui secondary basic button" floated="center" id="centerbutton" @click="Home">BACK TO MAIN PAGE</button>
</div>
</template>

<style>
.centererror{
    margin-top: 70px;
}
.centerdes{
    margin-top: 30px;
}
#centerbutton{
    width: 300px;
    margin-top: 50px;
}
</style>


<script>
import search from "../components/search"
export default {
    components:{
      search,
    },
    methods: {
    Home () {
      this.$router.replace('/')
    }
  },
}
</script>