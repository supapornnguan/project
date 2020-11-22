<template>
  <div>
    <navbar/>
      <div id="homeSeller">
    <h1 class="welcome" >WELCOME TO THE SELLER CENTER</h1>
    <div id="groupButton">
      <button class="ui secondary basic button" @click="regisSell">OPEN YOUR SHOP</button>
      <button class="ui secondary basic button" @click="loginSel">LOGIN</button>
    </div>
  </div>
  </div>

</template>

<script>
import navbar from "../components/navbar"
export default {
  methods: {
    regisSell () {
      this.$router.replace('sellerRegis')
    },
    loginSel () {
      this.$router.replace('sellerLogin')
    }
  },
  components : {
    navbar
  }
}
</script>

<style>
#homeSeller{
  padding: 150px;
}
.welcome{
  padding-bottom: 40px;
  text-align:center;
}
.ui.secondary.basic.button{
  width: 170px;
  height: 40px;
  margin: 20px;
}
#groupButton{
  position: relative;
  left: 350px;
}
</style>