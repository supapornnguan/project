<template lang="html">
  <div>
    

    <navbar/>
     <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>
      <!-- <search/> -->

<div style="width:1200px; height:390px; margin-left:100px" v-if=" getkey == 'PET' ">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2500"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; margin-top:70px"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"

    >
  
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/PET4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
      <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/PET3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
</div>

<div v-if="getkey == 'CAMERA'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px; "
      
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/1784259/pexels-photo-1784259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/1830937/pexels-photo-1830937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 200px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>
  <div style=" position: absolute;
  top: 202px;
  right: 423px;
  font-size: 18px;
  font-weight:900;">Polaroid</div>

  <b-img src="https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 200px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>

  <div style=" position: absolute;
  top: 202px;
  right: 143px;
  font-size: 18px;
  font-weight:900;">DSLR</div>

  <div style="height: 120px;
              width: 480px;
              background-color: #99004d;
              position:absolute;
              top:413px;
              left:838px;
              "></div>

<div style=" position: absolute;
  top: 430px;
  right: 140px;
  font-size: 18px;
  font-weight:900;
  font-size:25px;
  color:#FFFF"><p>Capturing today for tomorrow view</p>  <p>For tomorrow view</p></div>

</div>

<!-- MEN -->
<div v-if="getkey == 'MEN'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px;"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/6311121/pexels-photo-6311121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/5935748/pexels-photo-5935748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/5935793/pexels-photo-5935793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>

<div v-if="getkey == 'WOMEN'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/5705505/pexels-photo-5705505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/5480689/pexels-photo-5480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/4937220/pexels-photo-4937220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>


<div v-if="getkey == 'KID'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3661452/pexels-photo-3661452.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3661348/pexels-photo-3661348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3661387/pexels-photo-3661387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/7322449/pexels-photo-7322449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/4484894/pexels-photo-4484894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>


<div v-if="getkey == 'ACCESSORIES'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/2777076/pexels-photo-2777076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4595717/pexels-photo-4595717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/1472858/pexels-photo-1472858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/3385375/pexels-photo-3385375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>

<div v-if="getkey == 'SPORT'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4587703/pexels-photo-4587703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3763115/pexels-photo-3763115.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/4587426/pexels-photo-4587426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/4753927/pexels-photo-4753927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>

<div v-if="getkey == 'HOME & LIFESTYLE'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3505699/pexels-photo-3505699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3847438/pexels-photo-3847438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/5491147/pexels-photo-5491147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/4993062/pexels-photo-4993062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>


<div v-if="getkey == 'COMPUTERS'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4195406/pexels-photo-4195406.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/5632367/pexels-photo-5632367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>

<div v-if="getkey == 'HEALTH & BEAUTY'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/6634180/pexels-photo-6634180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/6634179/pexels-photo-6634179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/5938635/pexels-photo-5938635.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>


<div v-if="getkey == 'ELECTRONIC'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/6976102/pexels-photo-6976102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3945658/pexels-photo-3945658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/3962990/pexels-photo-3962990.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/2527839/pexels-photo-2527839.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>

<div v-if="getkey == 'MOBILE & TABLET'" style="width:700px; margin-left:100px; margin-top:100px">
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators

  >
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/4957/person-woman-hand-smartphone.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style="width:700px; height:350px"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://images.pexels.com/photos/6377/man-hand-smartphone-lake.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style="width:700px; height:350px"
    ></b-carousel-slide>
  </b-carousel>

  <b-img src="https://images.pexels.com/photos/4123561/pexels-photo-4123561.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:837px"
  ></b-img>


  <b-img src="https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
         style="width: 200px; 
                height: 350px; 
                object-fit: cover;
                position:absolute;
                top:190px;
                left:1081px"
  ></b-img>
</div>

    <!-- <input type="text" v-model="search"> -->
    <div style="position:absolute; top:100px; width:200px; margin-left:1200px;">
      <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
    </div>
    
    
   



    <h1 style="position:absolute; left:100px; font-weight:600; margin-top:50px">{{this.$route.params.category}}</h1>
      <!-- <h4 style="position:absolute; left:100px; top:300px">FILTER BY</h4> -->
    <div class="con">
    
    <sui-card-group :items-per-row="3" style="margin-top:120px; margin-bottom:100px" >
      <sui-card 
        v-for="(key,index) in resultQuery" 
        :key="index" 
        style="height:490px;  box-shadow: 0px 0px 20px 10px #D5D8DC;">
        
          <img :src="resultQuery[index].product_image" id="img1" style="cursor:pointer;" @click="gotoInfoproduct(keysProduct[index])" :width="280" :height="230">
          <p style="position:absolute; top:270px; font-weight:800; left:10px">{{resultQuery[index].product_name}}</p>
          <p style="position:absolute; top:315px; left:10px">{{resultQuery[index].product_detail | shortDescription}}</p>
          <p style="position:absolute; top:380px; left:10px">{{resultQuery[index].product_unit_price}}  THB</p>
          <StarRating v-bind:star-size="20"
                                v-bind:max-rating="5"
                                inactive-color="#BEBEBE"
                                active-color="#FFCC33"
                                v-bind:read-only="true"
                                v-bind:show-rating="false"
                                v-bind:rating="1"
                                style="margin-top:10px; margin-left:10px ">
          </StarRating>
        <button class= "buttonCart" @click="addItem(index)" style="position:absolute; top:440px; ">ADD TO CART</button>
      </sui-card>
    </sui-card-group>
    </div>

    <b-modal ref="my-modal" hide-footer hide-header  no-close-on-esc no-close-on-backdrop hide-header-close>
      <div class="d-block text-center">
        <p style="margin-top:20px; margin-bottom:40px">Please Login to continue.</p>
          <router-link to="/userlogin" class="ui item"  style="color:#FFFFFF; margin-right:20px" > <b-button>Login</b-button></router-link>
          <b-button @click="hideModal()">Cancle</b-button>
            
      </div>
    </b-modal>



  </div>
</template>

<script>

// class Post {
//   constructor(title, link, author, product_image) {
//     this.title = title;
//     this.link = link;
//     this.author = author;
//     this.product_image = product_image;
//   }
// }

import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// import search from "../components/search"
import navbar from "../components/navbar"
import firebase from "../firebase"
import StarRating from 'vue-star-rating'

// import store from "../store"
// import {auth} from "../firebase"
 import { mapActions , mapGetters} from "vuex"
export default {
    data() {
        return {
            value: 1,
            products:{},
            product_id:"",
            keysProduct : [],
            product_name : [],
            product_image : [],
            product_quantity : [],
            product_unit_price: [],
            product_detail : [],
            useruid : "",
            sellerUid : [],
            status : "ordered",
            seller_name_shop : [],
            getkey : "",
            isLoading : true,
            search : "",
            product_list : [],
            searchQuery: null,
            detail : [],
            disply_image: "block",

            slide: 0,
        sliding: null
           

        }
    },

    methods: {
      //go to infomation of product when click on image
      gotoInfoproduct(key){
        // store.commit('SET_PRODUCT_ID',key)
        // this.$router.replace('/infoProduct')
        this.$router.push({name : "infoProduct" , params : {productId : key}})
      },

      nameFilter () {
        let text = this.search.trim()
        return this.product_name.filter(item => {
          return item.product_name.indexOf(text) > -1
      })


      },
      hideModal(){
        this.$refs['my-modal'].hide()

      },
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },


  

      ...mapActions(['updateCart']),
      //add product to the cart when click ADD TO CART button
      addItem(index) {
      const order = {
        keysProduct : this.keysProduct[index],
        product_name : this.product_name[index],
        product_image : this.product_image[index],
        product_unit_price : this.product_unit_price[index],
        product_detail : this.product_detail[index],
        sellerUid : this.sellerUid[index],
        status : this.status,
        seller_name_shop : this.seller_name_shop[index],
        quantity: 1,
        isAdd: true
      };
      console.log(order.quantity)
      if(this.user1 == false){
        this.$refs['my-modal'].show()
      }else{
        this.updateCart(order);
      }
      
    }
    },
  components:{
      // search,
      navbar,
      Loading,
       StarRating
  },
  //getting type of product
  computed: {
      resultQuery() {
      if(this.searchQuery){
        return this.detail.filter((item)=>{
        return item.product_name.toLowerCase().includes(this.searchQuery.toLowerCase());
      })
      }else{
        return this.detail;
      }
    },
    ...mapGetters({
      user1 : "getUserloggedIn"
    }),

    

  },
  //Filtering description of product
  filters : {
    shortDescription(value) {
      if(value && value.length > 100){
        return value.substring(0, 100) + '...';
      }
      else{
        return value;
      }
    }
  },
  created() {
    console.log(this.$route.params.category)
    this.getkey = this.$route.params.category
    console.log(this.getkey)
    
  },
  mounted() {
    // this.getProducts();
   
    //geting all product from database
    this.isLoading = true
    firebase.ref('product/').orderByChild('product_category').equalTo(this.$route.params.category).on('value', (snapshot) => {
      this.products = snapshot.val()
      this.keysProduct = Object.keys(snapshot.val())
      // console.log("this is keyProduct "+this.keysProduct)
      
      for(var i=0 ; i< this.keysProduct.length ; i++){
        var k = this.keysProduct[i];
        var product_name = this.products[k].product_name
        var product_quantity = this.products[k].product_quantity
        var product_image = this.products[k].product_image
        var product_unit_price = this.products[k].product_unit_price
        var product_detail = this.products[k].product_detail
        var sellerUid = this.products[k].sellerUid
        var seller_name_shop = this.products[k].seller_name_shop

       

        this.product_name[i] = product_name
        this.product_quantity[i] = product_quantity
        this.product_image[i] = product_image
        this.product_unit_price[i] = product_unit_price
        this.product_detail[i] = product_detail
        this.sellerUid[i] = sellerUid
        this.seller_name_shop[i] = seller_name_shop

        var detailProduct = {
          product_name : this.product_name[i],
          product_image : this.product_image[i],
          product_unit_price : this.product_unit_price[i],
          product_detail : this.product_detail[i],
        }

        this.detail.push(detailProduct)
      }
      console.log(this.detail)
       this.isLoading = false

    })
   
     
  },
};
</script>

<style scoped>
div.con{
    width: 990px;
    margin-left: 280px;
}
#filterBy{
    text-align: left;
    margin-left: 60px;
}
#types{
    text-align: left;
    margin-top: 20px;
    margin-left: 60px;
}
div.ui.card{
    height: 400px;
}
.buttonCart{
    background-color: #fb3640;
    color: white;
    border-radius: 10px;
    border: solid #fb3640 1px;
    width: 170px;
    padding: 5px;
    position: absolute;
    top: 350px;
    left: 70px;
   
}
#img1{
  border: none;
  width: 250px;
}
li.on {
  display: block;
}
li {
  display: none;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.responsive {
  width: 100%;
  height: auto;
}
</style>