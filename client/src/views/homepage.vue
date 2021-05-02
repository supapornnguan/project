<template>
  <div>
       <navbar/>
       <!-- <searchBar/> -->
     <row :gutter="12" style="margin: auto; ">
        <column :xs="12" :md="6" :lg="4" v-for="(img,index) in category.image1" :key="index" style="margin-bottom:70px">
          <img class="ui rounded image centered" v-bind:src="`${img}`" width="250px" height="400px">
          <button class="ui secondary basic button" id="but" @click="gotoProductAll(`${category.type[index]}`)">{{category.type[index]}}</button>
        </column>
     </row>

  </div>
</template>
<script>
// import searchBar from "../components/search.vue"
import navbar from "../components/navbar"
// import {dateToString} from '../utils/utils';
import { Row, Column } from 'vue-grid-responsive';

// import store from "../store"
export default {
     data() {
          return {
               category : {
                    image1 : [require("../assets/pet.jpeg"),
                         require("../assets/mancloth.jpg"),
                         require("../assets/womencloth.jpg"),
                         require("../assets/kid.jpg"),
                         require("../assets/accessories.jpg"),
                         require("../assets/sport.jpg"),
                         require("../assets/kitchen1.jpg"),
                         require("../assets/camera1.jpg"),
                         require("../assets/computer.jpeg"),
                         require("../assets/beauty1.jpg"),
                         require("../assets/electronic.jpg"),
                         require("../assets/mobile.jpg")
                         ],
                    
                    type : [
                         'PET',
                         'MEN',
                         'WOMEN',
                         'KID',
                         'ACCESSORIES',
                         'SPORT',
                         'HOME & LIFESTYLE',
                         'CAMERA',
                         'COMPUTERS',
                         'HEALTH & BEAUTY',
                         'ELECTRONIC',
                         'MOBILE & TABLET'
                    ]
               }
               
          }
     },
     components :{
          // searchBar,
          navbar,
          Row, Column

     },
     methods: {
          gotoProductAll(data){
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
    margin: auto;
    display: block;
    margin-top:30px;
}
</style>