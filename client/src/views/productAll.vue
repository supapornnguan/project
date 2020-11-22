<template lang="html">
  <div>
    <navbar/>
      <search/>
      <h3 id="filterBy">FILTER BY</h3>
      <h4 id="types">Types</h4>
    <div class="con">

    <sui-card-group :items-per-row="3">
      <sui-card >
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" id="img1" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
        <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>

      <sui-card>
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" :width="250" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
          <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>

      <sui-card>
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" :width="250" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
          <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>
    </sui-card-group>

        <sui-card-group :items-per-row="3">
      <sui-card >
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" id="img1" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
        <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>

      <sui-card>
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" :width="250" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
          <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>

      <sui-card>
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" :width="250" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
          <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>
    </sui-card-group>

        <sui-card-group :items-per-row="3">
      <sui-card >
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" id="img1" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
        <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>

      <sui-card>
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" :width="250" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
          <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>

      <sui-card>
        <sui-card-content>
          <img src="../assets/nikonAAAA-2.jpg" :width="250" @click="infoProduct">
          <p id="Textposition">ultra-high-resolution Nikon</p>
          <p id="Textposition">19,999 THB</p>
          <sui-rating :rating="value" :max-rating="5" id="ratting"/>
          <br>
          <button class= "buttonCart">ADD TO CART</button>
        </sui-card-content>
      </sui-card>
    </sui-card-group>

 
    </div>
  </div>
</template>

<script>
// import firebase
// import firebase from "../firebase";

// reference to the product collection
// const ProductAll = firebase.ref("product");

//import component search
import search from "../components/search"
import navbar from "../components/navbar"
export default {
    data() {
        return {
            value: 1,
            products:{},
            product_id:""
        }
    },
    methods: {
      infoProduct(){
        this.$router.replace('/productAll/infoProduct')
      }
    },
  components:{
      search,
      navbar
  }
};
</script>

<style scoped>
div.con{
    width: 990px;
    margin-left: 370px;
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
    background-color: white;
    border-radius: 10px;
    border: solid black 1px;
    width: 170px;
    margin-top: 8px;
    margin-left: 65px;
    padding: 5px;
}
#img1{
  border: none;
  width: 250px;
}
#Textposition{
  text-align: left;
}
#ratting{
  margin-right: 200px;
}
</style>