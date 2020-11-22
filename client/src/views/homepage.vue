<template>
  <div class="home">
       <navbar/>
       <searchBar/>
      <div class="ui container three column grid medium" style="margin-top:10px">
    <div class="column" >
         <img class="ui rounded image centered" src="../assets/pet.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('pet')">PET</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/mancloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('men')">MEN'S CLOTHING</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/womencloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('women')">WOMEN'S CLOTHING</button>
    </div>
</div>
<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kid.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('kid')">KID</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/watches.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('watches')">WATCHES</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/sport.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('sport')">SPORT</button>
    </div>
</div>

<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kitchen1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('kitchen')">KITCHEN</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/camera1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('camera')">CAMERA</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/bag.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('bag')">BAG</button>
    </div>
</div>
<div class="ui container three column grid medium" style="margin-top:30px">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/beauty.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('beauty')">BEAUTY</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/electronic.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('electronic')">ELECTRONIC</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/shoes.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but" @click="gotoProductAll('shoes')">SHOES</button>
    </div>
</div>
  </div>
</template>
<script>
import searchBar from "../components/search.vue"
import navbar from "../components/navbar"
export default {
     data() {
          return {
               
          }
     },
     components :{
          searchBar,
          navbar
     },
     methods: {
          gotoProductAll(data){
              if(data == 'pet' ){
                   this.$router.replace('productAll')
              }
              else if(data == 'men'){
                   return  console.log(data)
              }
              else if(data == 'women'){
                   return console.log(data)
              }
              else if(data == 'kid'){
                   return console.log(data)
              }
              else if(data == 'watches'){
                   return console.log(data)
              }
              else if(data == 'sport'){
                   return console.log(data)
              }
              else if(data == 'kitchen'){
                   return console.log(data)
              }
              else if(data == 'camera'){
                   return console.log(data)
              }
              else if(data == 'bag'){
                   return console.log(data)
              }
              else if(data == 'beauty'){
                   return console.log(data)
              }
              else if(data == 'electronic'){
                   return console.log(data)
              }
              else if(data == 'shoes'){
                   return console.log(data)
              }
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