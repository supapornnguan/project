<template>
  <div id="homeSeller">
    <h1 class="welcome">WELCOME TO THE SELLER CENTER</h1>
    <button class="ui secondary basic button" @click="regisSell">OPEN YOUR SHOP</button>
    <button class="ui secondary basic button" @click="loginSel">LOGIN</button>
  </div>
</template>

<script>
export default {
  methods: {
    regisSell () {
      this.$router.replace('sellerRegis')
    },
    loginSel () {
      this.$router.replace('loginSeller')
    }
  },
}
</script>

<style>
#homeSeller{
  padding: 150px;
}
.welcome{
  padding-bottom: 40px;
}
.ui.secondary.basic.button{
  width: 170px;
  height: 40px;
  margin: 20px;
  
}

</style>