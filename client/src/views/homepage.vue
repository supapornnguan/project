<template>
  <div class="home">
       <navbar/>
       <searchBar/>
      <div class="ui container three column grid medium" style="margin-top:10px">
    <div class="column" >
         <img class="ui rounded image centered" src="../assets/pet.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('PET')">PET'S ACCESSORIES</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/mancloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('MEN')">MEN'S FASHION</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/womencloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('WOMEN')">WOMEN'S FASHION</button>
    </div>
</div>
<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kid.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('KID')">KID</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/accessories.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('ACCESSORIES')">ACCESSORIES</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/sport.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('SPORT')">SPORT</button>
    </div>
</div>

<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kitchen1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('HOME & LIFESTYLE')">HOME & LIFESTYLE</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/camera1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('CAMERA')">CAMERA</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/computer.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('COMPUTERS')">COMPUTERS</button>
    </div>
</div>
<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/beauty1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('HEALTH & BEAUTY')">HEALTH & BEAUTY</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/electronic.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('ELECTRONIC')">ELECTRONIC</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/mobile.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('MOBILE & TABLET')">MOBILE & TABLET</button>
    </div>
</div>
  </div>
</template>
<script>
import searchBar from "../components/search.vue"
import navbar from "../components/navbar"
// import store from "../store"
export default {
     components :{
          searchBar,
          navbar
     },
     methods: {
          gotoProductAll(data){
               // store.commit("SET_PRODUCT_TYPE", {
               //      productType : data
               // })
               this.$router.replace('productAll')
               this.$router.push({name : "productAll" , params : {category : data}})
          }
     },
}
</script>

<style>
.ui.secondary.basic.button{
    width: 185px;
}
#but{
     position: relative;
     top: 20px;
     left: 87px;
}
</style>