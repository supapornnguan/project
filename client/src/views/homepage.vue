<template>

  <div class="home">
       <search-bar/>
      <div class="ui container three column grid medium">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/pet.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">PET</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/mancloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">MEN'S CLOTHING</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/womencloth.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">WOMEN'S CLOTHING</button>
    </div>
</div>
<div class="ui container three column grid medium">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kid.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">KID</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/watches.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">WATCHES</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/sport.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">SPORT</button>
    </div>
</div>

<div class="ui container three column grid medium">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/kitchen1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">KITCHEN</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/camera1.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">CAMERA</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/bag.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">BAG</button>
    </div>
</div>
<div class="ui container three column grid medium">
    <div class="column">
         <img class="ui rounded image centered" src="../assets/beauty.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">BEAUTY</button>
     </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/electronic.jpeg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">ELECTRONIC</button>
    </div>
    <div class="column">
         <img class="ui rounded image centered" src="../assets/shoes.jpg" width="250px" height="400px">
         <button class="ui secondary basic button" id="but">SHOES</button>
    </div>
</div>
  </div>
</template>
<script>
import searchBar from "../components/search.vue"
export default {
     components :{
          'search-bar':searchBar
     }
}
</script>

<style>
.ui.secondary.basic.button{
    width: 185px;
}
</style>