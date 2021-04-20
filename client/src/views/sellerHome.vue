<template>
  <div>
    <navbar/>
    
      <div id="homeSeller">
    
    <div style="margin-top:90px; width:600px">    
    <h1 class="welcome" style="font-size:30px">WELCOME TO THE SELLERCENTER</h1>    
    <h1 class="welcome" style="font-size:20px">ENJOY SELLING ONLINE WITH SHOPAHOLIC</h1>
    
    <div id="groupButton" align=center>
      <router-link to="/sellerRegis" ><button class="ui secondary basic button" >OPEN YOUR SHOP</button></router-link>
      <router-link to="/sellerLogin" ><button class="ui secondary basic button" >LOGIN</button></router-link>
    </div>
    
  </div>
  <img src="../assets/on3.jpg" :width="600">
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
  padding: 0px;
  margin: 0 auto;
  background-color:white; 
  width:1200px; 
  height:400px;
  margin-top: 100px;
  box-shadow: 0px 0px 20px 10px #D5D8DC;
  display: flex;
}
.welcome{
  padding-bottom: 40px;
  text-align:center;
}
.ui.secondary.basic.button{
  width: 200px;
  height: 40px;
  margin: 20px;
}
#groupButton{
  position: relative;
}
</style>