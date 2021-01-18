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
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('MEN')">MEN'S CLOTHING</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/womencloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('WOMEN')">WOMEN'S CLOTHING</button>
    </div>
</div>
<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kid.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('KID')">KID</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/watches.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('WATCHES')">WATCHES</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/sport.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('SPORT')">SPORT</button>
    </div>
</div>

<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kitchen1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('KITCHEN')">KITCHEN</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/camera1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('CAMERA')">CAMERA</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/bag.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('BAG')">BAG</button>
    </div>
</div>
<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/beauty.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('BEAUTY')">BEAUTY</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/electronic.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('ELECTRONIC')">ELECTRONIC</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/shoes.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('SHOES')">SHOES</button>
    </div>
</div>
  </div>
</template>
<script>
import searchBar from "../components/search.vue"
import navbar from "../components/navbar"
import store from "../store"
export default {
     components :{
          searchBar,
          navbar
     },
     methods: {
          gotoProductAll(data){
               store.commit("SET_PRODUCT_TYPE", {
                    productType : data
               })
               this.$router.replace('productAll')
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