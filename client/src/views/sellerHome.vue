<template>
  <div>
    <navbar/>
      <div id="homeSeller">
    <h1 class="welcome">WELCOME TO THE SELLER CENTER</h1>
    <div id="groupButton" align=center>
      <router-link to="/sellerRegis" ><button class="ui secondary basic button" >OPEN YOUR SHOP</button></router-link>
      <router-link to="/sellerLogin" ><button class="ui secondary basic button" >LOGIN</button></router-link>
    </div>
  </div>
  </div>
  
</template>

<script>
import navbar from "../components/navbarSeller"
export default {
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
}
</style>