<template>
<div>
    
    <img class="centersuccess" src="../assets/fake.png" width="200px" height="200px">
    <h2 class="centertextsuccess1">
        Thank you for your review.
    </h2>
    <h3 class="centertextsuccess2">
       We will try to improve it next time.
    </h3>
    <button class="ui secondary basic button"  id="backtomainpage" @click="Home">BACK TO MAIN PAGE</button>
</div>
</template>

<style>
#backtomainpage{
    margin-left: 530px;
    margin-top: 40px;
    width: 350px;
}
.centersuccess{
    margin-top: 70px;
    margin-left: 600px;
}
.centertextsuccess1{
    margin-top: 20px;
    margin-left: 540px;
}
.centertextsuccess2{
    margin-top: 10px;
    margin-left: 520px;
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