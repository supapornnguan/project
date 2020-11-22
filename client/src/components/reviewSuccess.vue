<template>
<div>
    
    <img class="centersuccess" src="../assets/fake.png" width="200px" height="200px">
    <h2 class="centertextsuccess">
        Thank you for your review.
    </h2>
    <h3>
       We will try to improve it next time.
    </h3>
    <button class="ui secondary basic button"  id="backtomainpage" @click="Home">BACK TO MAIN PAGE</button>
</div>
</template>

<style>
#backtomainpage{
    width: 350px;
}
.centersuccess{
    margin-top: 70px;
}
.centertextsuccess{
    margin-top: 20px;
}
</style>

<script>
export default {
  components:{

  },
  methods: {
    Home () {
      this.$router.replace('/')
    },
    }
}
</script>